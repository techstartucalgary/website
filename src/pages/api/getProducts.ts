import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia", // Ensure consistent API versioning
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res
      .setHeader("Cache-Control", "no-store")
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  try {
    res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate"); // Ensures fresh response

    // Fetch prices from Stripe
    const prices = await stripe.prices.list({ limit: 5 });

    // Fetch product details for each price entry
    const productDetails = await Promise.all(
      prices.data.map(async (price) => {
        try {
          const product = await stripe.products.retrieve(
            price.product as string,
          );

          return {
            amount: Number(price.unit_amount || 0) / 100, // Convert cents to dollars
            clothingImg: product.images?.[0] || "/default-image.png", // Default fallback
            currency: price.currency,
            id: price.id,
            priceId: price.id,
            productId: product.id,
            title: product.name || "Unknown Product",
          };
        } catch (err) {
          console.error(`Error fetching product ${price.product}:`, err);
          return {
            amount: "unit_amount_decimal",
            clothingImg: "/default-image.png",
            currency: price.currency,
            id: price.id,
            priceId: price.id,
            productId: price.product,
            title: "Error Fetching Product",
          };
        }
      }),
    );

    return res.status(200).json({ prices: productDetails });
  } catch (error) {
    console.error("Stripe API error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
