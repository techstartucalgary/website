import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "❌ Method Not Allowed" });
  }

  try {
    // Extract the priceId from the request body
    const { priceId } = req.body;
    if (!priceId) {
      return res.status(400).json({ error: "Price ID is required" });
    }

    // Create a Stripe Checkout Session using the provided price ID
    const session = await stripe.checkout.sessions.create({
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/merch`,
      custom_fields: [
        {
          key: "name",
          label: {
            custom: "Full Name",
            type: "custom",
          },
          optional: false,
          type: "text",
        },
      ],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
