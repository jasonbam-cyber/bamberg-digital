import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import path from "path";

const SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env",
  );
  process.exit(1);
}

const supa = createClient(SUPA_URL, SUPA_KEY, {
  auth: { persistSession: false },
});

function parseCSVRow(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      // Handle "" as escaped quote inside quoted field
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
        continue;
      }
      inQ = !inQ;
      continue;
    }
    if (ch === "," && !inQ) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function parseCSV(filePath: string): Record<string, string>[] {
  const text = readFileSync(filePath, "utf8");
  // Split lines respecting quoted newlines (CSV may have multi-line quoted fields).
  const rows: string[][] = [];
  let current = "";
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQ && text[i + 1] === '"') {
        current += '""';
        i++;
        continue;
      }
      inQ = !inQ;
      current += ch;
      continue;
    }
    if (ch === "\n" && !inQ) {
      if (current.length) rows.push(parseCSVRow(current.replace(/\r$/, "")));
      current = "";
      continue;
    }
    current += ch;
  }
  if (current.length) rows.push(parseCSVRow(current.replace(/\r$/, "")));
  if (!rows.length) return [];
  const headers = rows.shift()!.map((h) => h.trim());
  return rows
    .filter((r) => r.length && r.some((c) => c.trim().length))
    .map((cols) => {
      const row: Record<string, string> = {};
      headers.forEach((h, i) => {
        row[h] = (cols[i] ?? "").trim();
      });
      return row;
    });
}

type Payload = {
  email: string;
  first_name: string | null;
  company: string | null;
  website: string | null;
  city: string | null;
  state: string | null;
  industry: string | null;
  source: string;
  consent: boolean;
  status: "subscribed";
  metadata: Record<string, unknown>;
};

function rowToPayload(
  r: Record<string, string>,
  source: string,
  filePath: string,
): Payload | null {
  const email = (r.email || "").trim().toLowerCase();
  if (!email || !email.includes("@") || !email.includes(".")) return null;

  // Schema differs between CSVs — handle both first_name and firstName.
  let firstName = r.first_name || r.firstName || null;
  if (firstName) {
    const lower = firstName.trim().toLowerCase();
    if (lower === "info" || lower === "there" || lower === "") firstName = null;
    else firstName = firstName.trim();
  }

  const meta: Record<string, unknown> = { imported_from: filePath };
  if (r.score) meta.score = r.score;
  if (r.seo_issues) meta.seo_issues = r.seo_issues;
  if (r.title) meta.title = r.title;
  if (r.lastName) meta.last_name = r.lastName;
  if (r.template_variant) meta.template_variant = r.template_variant;
  if (r.added_at) meta.original_added_at = r.added_at;

  return {
    email,
    first_name: firstName,
    company: r.company || null,
    website: r.website || null,
    city: r.city || null,
    state: r.state || null,
    industry: r.industry || null,
    source,
    consent: true,
    status: "subscribed",
    metadata: meta,
  };
}

async function importFile(filePath: string, source: string) {
  if (!existsSync(filePath)) {
    console.log(`SKIP (missing): ${filePath}`);
    return { inserted: 0, skipped: 0, errors: 0 };
  }
  const rows = parseCSV(filePath);
  console.log(`\n${path.basename(filePath)}: ${rows.length} rows`);

  let inserted = 0;
  let skipped = 0;
  let errors = 0;

  for (const r of rows) {
    const payload = rowToPayload(r, source, filePath);
    if (!payload) {
      skipped++;
      continue;
    }

    const { error } = await supa
      .from("bd_subscribers")
      .upsert(payload, { onConflict: "email", ignoreDuplicates: true });

    if (error) {
      console.error(`  fail ${payload.email}: ${error.message}`);
      errors++;
    } else {
      inserted++;
    }
  }

  console.log(
    `  ${path.basename(filePath)} -> inserted/upserted: ${inserted}, skipped: ${skipped}, errors: ${errors}`,
  );
  return { inserted, skipped, errors };
}

(async () => {
  const seoCsv = "/Users/winstonai/WinstonWorkspace/outputs/seo_leads.csv";
  const smbCsv =
    "/Users/winstonai/WinstonWorkspace/outputs/smb_leads_clean.csv";

  const seo = await importFile(seoCsv, "seo-outreach");
  const smb = await importFile(smbCsv, "smb-prospect");

  const { count, error: countErr } = await supa
    .from("bd_subscribers")
    .select("*", { count: "exact", head: true });

  if (countErr) {
    console.error("count failed:", countErr.message);
  } else {
    console.log(`\nTotal subscribers in DB: ${count}`);
  }

  console.log(
    `\nSummary: SEO ${seo.inserted}/${seo.skipped}/${seo.errors} | SMB ${smb.inserted}/${smb.skipped}/${smb.errors}`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
