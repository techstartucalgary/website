import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    stripeKey: process.env.STRIPE_SECRET_KEY || "Not found",
    webhookKey: process.env.STRIPE_WEBHOOK_SECRET || "Not found",
  });
}
