import { NextRequest, NextResponse } from "next/server";
import { square } from "@/lib/square";

export const dynamic = "force-dynamic";

// GET all subscriptions (for Jason's admin dashboard)
export async function GET(req: NextRequest) {
  try {
    const adminKey = req.headers.get("x-admin-key");
    if (adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await square.subscriptions.search({
      query: {
        filter: {
          locationIds: [process.env.SQUARE_LOCATION_ID || ""],
        },
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subscriptions = (result.subscriptions || []).map((sub: any) => ({
      id: sub.id,
      status: sub.status,
      customerId: sub.customerId,
      planId: sub.planVariationId,
      startDate: sub.startDate,
      chargedThroughDate: sub.chargedThroughDate,
      canceledDate: sub.canceledDate,
    }));

    const stats = {
      total: subscriptions.length,
      active: subscriptions.filter((s: { status: string }) => s.status === "ACTIVE").length,
      canceled: subscriptions.filter((s: { status: string }) => s.status === "CANCELED").length,
      paused: subscriptions.filter((s: { status: string }) => s.status === "PAUSED").length,
    };

    return NextResponse.json({ stats, subscriptions });
  } catch (err: unknown) {
    console.error("Subscriptions error:", err);
    const message = err instanceof Error ? err.message : "Failed to fetch subscriptions";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
