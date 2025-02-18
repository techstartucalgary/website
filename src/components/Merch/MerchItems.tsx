import Image from "next/image";
import PaymentButton from "./PaymentButton";

export const MerchItems = ({
  clothingImg,
  price,
  title,
}: {
  clothingImg: string;
  price: string;
  title: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="group w-full max-w-xs cursor-pointer">
        <div className="relative mx-auto mt-5 h-auto max-w-sm rounded-lg border-4 border-black p-5 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90">
          <div className="relative w-full overflow-hidden rounded-t-lg border-b-4 border-black">
            <Image
              alt="Merch Image"
              className="object-contain transition-all duration-300 group-hover:scale-110"
              height={533} // Matches aspect ratio (3:4)
              src={clothingImg}
              width={400} // Adjust based on aspect ratio
            />
          </div>

          {/* Title and Price Section */}
          <div className="rounded-b-lg bg-white py-3">
            <h1 className="line-clamp-2 h-16 overflow-hidden text-center text-xl font-bold text-gray-800">
              {title}
            </h1>
            <p className="mt-2 text-center text-lg text-gray-700">
              ${price} CAD
            </p>
          </div>

          {/* Button Section */}
          <div className="mb-3 flex justify-center">
            <PaymentButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchItems;
