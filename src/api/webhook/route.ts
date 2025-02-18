import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: Request, res: Response) {
  const payload = await req.text();
  const response = await JSON.parse(payload);

  const sig = req.headers.get("stripe-signature");

  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    console.log("event", event.type);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ success: true });
}
