"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NewlineText } from "../../utility/Helpers";
import { merchPageLottieOptions } from "../../utility/LottieOptions";
import { MerchItems } from "./MerchItems";
import dynamic from "next/dynamic";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const MerchPageContent = () => {
  const [merchItems, setMerchItems] = useState<
    {
      id: string;
      price: string;
      priceId: string;
      title: string;
      clothingImg: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch merch data when the component loads
  useEffect(() => {
    async function fetchMerchData() {
      try {
        const response = await fetch("/api/getProducts");

        const data = await response.json();
        if (!response.ok)
          throw new Error(data.error || "Failed to load merch data");

        setMerchItems(data.prices);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchMerchData();
  }, []); // Runs only once when component mounts

  if (loading) return <p>Loading merch...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="flex flex-col items-center justify-center"
      id="merchPageTop"
    >
      {/* Header Section */}
      <div className="mb-8 flex w-full flex-col items-center bg-black pb-32">
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-xl">
            <Lottie {...merchPageLottieOptions} />
          </div>
        </div>

        <motion.h1
          className="mt-4 text-center text-5xl font-bold text-white sm:text-7xl lg:text-8xl"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75 }}
        >
          {NewlineText("Our Merch")}
        </motion.h1>
      </div>

      {/* Merch Items Grid */}
      <div className="my-6 flex w-full flex-wrap justify-center gap-6 px-4">
        {merchItems.map((merchItem, index) => (
          <div key={merchItem.id} className="rounded-lg border p-4 shadow-md">
            {/* Product Image */}
            <Image
              alt={merchItem.title || "Merch Image"}
              className="mb-2 h-48 w-full object-contain"
              height={500}
              layout="responsive"
              src={merchItem.clothingImg}
              width={500}
            />

            {/* Product Details */}
            <p>
              <strong>ID:</strong> {merchItem.id}
            </p>
            <p>
              <strong>Price:</strong> ${merchItem.price || "N/A"}
            </p>
            <p>
              <strong>Price ID:</strong> {merchItem.priceId || "N/A"}
            </p>
            <p>
              <strong>Title:</strong> {merchItem.title || "Untitled Product"}
            </p>
            <p>
              <strong>Index:</strong> {index}
            </p>
          </div>
        ))}

        {merchItems.map((merchItem) => (
          <div className="w-full p-2 sm:w-1/2 lg:w-1/3" key={merchItem.id}>
            <MerchItems
              clothingImg={merchItem.clothingImg}
              price={merchItem.price}
              priceId={merchItem.id}
              title={merchItem.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPageContent;
