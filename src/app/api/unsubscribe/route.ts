import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const tokenQ = url.searchParams.get("token");
  const emailQ = url.searchParams.get("email");

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // No JSON body is fine — query params may carry it.
  }

  const token =
    tokenQ ||
    (typeof body?.token === "string" ? (body.token as string) : undefined);
  const emailRaw =
    emailQ ||
    (typeof body?.email === "string" ? (body.email as string) : undefined);
  const email = emailRaw?.toLowerCase().trim();

  if (!token && !email) {
    return NextResponse.json(
      { error: "token or email required" },
      { status: 400 },
    );
  }

  const supa = getSupabaseAdmin();
  const update = {
    status: "unsubscribed",
    unsubscribed_at: new Date().toISOString(),
  };

  const { data, error } = token
    ? await supa
        .from("bd_subscribers")
        .update(update)
        .eq("unsubscribe_token", token)
        .select()
        .maybeSingle()
    : await supa
        .from("bd_subscribers")
        .update(update)
        .eq("email", email!)
        .select()
        .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    message: "Unsubscribed. We're sorry to see you go.",
  });
}
