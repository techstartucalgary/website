"use client";

import { useState } from "react";

export default function PaymentButton({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        body: JSON.stringify({ priceId }), // Send the priceId to the API
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect user to Stripe Checkout
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="rounded bg-green-600 px-10 py-3 font-bold text-white hover:bg-green-500"
      disabled={loading}
      onClick={handleCheckout}
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}
