import { NextRequest, NextResponse } from "next/server";
import { square } from "@/lib/square";

export const dynamic = "force-dynamic";

// Find customer invoices / manage billing
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find customer by email
    const searchResult = await square.customers.search({
      query: {
        filter: {
          emailAddress: { exact: email },
        },
      },
    });

    if (!searchResult.customers || searchResult.customers.length === 0) {
      return NextResponse.json(
        { error: "No account found with this email. Please sign up first." },
        { status: 404 }
      );
    }

    const customer = searchResult.customers[0];

    // Get customer's invoices
    const invoiceResult = await square.invoices.list(
      process.env.SQUARE_LOCATION_ID || ""
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allInvoices = invoiceResult?.data || invoiceResult?.invoices || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customerInvoices = allInvoices.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (inv: any) => inv.primaryRecipient?.customerId === customer.id
    );

    return NextResponse.json({
      customer: {
        email: customer.emailAddress,
        name: customer.givenName
          ? `${customer.givenName} ${customer.familyName || ""}`
          : customer.companyName || "Customer",
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      invoices: customerInvoices.map((inv: any) => ({
        id: inv.id,
        status: inv.status,
        amount: inv.paymentRequests?.[0]?.computedAmountMoney?.amount
          ? `$${(Number(inv.paymentRequests[0].computedAmountMoney.amount) / 100).toFixed(2)}`
          : "N/A",
        dueDate: inv.paymentRequests?.[0]?.dueDate,
        title: inv.title,
      })),
      message: "Check your email for Square invoices to manage payment methods and view billing history.",
    });
  } catch (err: unknown) {
    console.error("Portal error:", err);
    const message = err instanceof Error ? err.message : "Portal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
