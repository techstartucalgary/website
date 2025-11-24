import Image from "next/image";
import Link from "next/link";

export const MerchItems = ({
  clothingImg,
  link,
  price,
  title,
}: {
  clothingImg: string;
  link: string;
  price: string;
  title: string;
}) => {
  return (
    <Link className="group w-full max-w-xs cursor-pointer" href={link}>
      <div className="relative mx-auto mt-5 box-border h-auto max-w-sm rounded-lg border-4 border-black p-5 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90">
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
          <p className="mt-2 text-center text-lg text-gray-700">${price} CAD</p>
        </div>

        {/* Button Section */}
        <div className="mb-3 flex justify-center">
          <button className="rounded-md bg-black px-10 py-3 text-white transition-all duration-200 ease-in-out hover:bg-gradient-to-l hover:from-[#00B7FF] hover:via-[#64CDB2] hover:to-[#C9E265]">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};
export default MerchItems;
