import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Disable automatic body parsing
export const config = {
  api: {
    bodyParser: false, // ❌ Prevent Next.js from parsing request body
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("🔍 Incoming Webhook Request:", { method: req.method });

  if (req.method !== "POST") {
    return res.status(405).json({ error: "❌ Method Not Allowed" });
  }

  const sig = req.headers["stripe-signature"];
  if (!sig) {
    console.error("❌ Missing Stripe-Signature Header");
    return res.status(400).json({ error: "Missing Stripe-Signature Header" });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("❌ STRIPE_WEBHOOK_SECRET is missing in .env.local!");
    return res.status(500).json({ error: "Server Configuration Error" });
  }

  // Read raw body (Stripe requires raw body for verification)
  const rawBody = await new Promise<Buffer>((resolve, reject) => {
    const data: Buffer[] = [];
    req.on("data", (chunk) => data.push(chunk));
    req.on("end", () => resolve(Buffer.concat(data)));
    req.on("error", (err) => reject(err));
  });

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody, // Pass raw body as Buffer
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ Webhook Signature Verification Failed:", err.message);
      return res.status(400).json({ error: err.message });
    } else {
      console.error("❌ Webhook Signature Verification Failed: Unknown error");
      return res.status(400).json({ error: "Unknown error occurred" });
    }
  }

  console.log("✅ Webhook Event Verified:", { type: event.type });

  // ✅ Handle different Stripe event types explicitly
  switch (event.type) {
    case "payment_intent.succeeded":
      console.log("✅ Payment Successful:", event.data.object);
      break;
    case "payment_intent.payment_failed":
      console.log("❌ Payment Failed:", event.data.object);
      break;
    case "charge.refunded":
      console.log("🔄 Charge Refunded:", event.data.object);
      break;
    default:
      console.log("ℹ️ Unhandled Event Type:", event.type);
  }

  return res.status(200).json({ received: true, status: "✅ Success" });
}
