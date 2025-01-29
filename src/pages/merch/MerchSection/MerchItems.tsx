"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const MerchItems = ({
  title,
  cloathinImg,
  price,
  link,
}: {
  link: string;
  cloathinImg: string;
  title: string;
  price: string;
}) => {
  return (
    <a
      href={link}
      className="max-w-xs w-full group cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative card p-5 mt-5  h-auto rounded-lg border-4 border-black shadow-lg max-w-sm mx-auto group-hover:opacity-90 transition-all duration-300 ease-in-out transform group-hover:scale-105">
        {/* Image with black border and dark hover effect */}
        <div className="relative  w-50 h-72 border-b-4 border-black rounded-t-lg overflow-hidden">
          <img
            src={cloathinImg} // Dynamically set image source
            alt="Merch Image"
            className="object-contain w-full h-full transition-all duration-300 group-hover:scale-110"
          />
          {/* Dark overlay on hover */}
          <div className="absolute w-full h-full top-0 left-0 transition-all duration-300"></div>
        </div>

        {/* Title and Price Section */}
        <div className="py-3 bg-white rounded-b-lg">
          <h1 className="font-bold text-xl text-center text-gray-800 line-clamp-2 h-16 overflow-hidden">
            {title}
          </h1>
          <p className="text-lg text-center text-gray-700 mt-2">${price} CAD</p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mb-3">
          <button className="bg-black text-white py-3 px-10 rounded-md hover:bg-gray-800 transition duration-200 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </a>
  );
};