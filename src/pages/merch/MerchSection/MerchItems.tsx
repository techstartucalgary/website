"use client";

export const MerchItems = ({
  cloathinImg,
  link,
  price,
  title,
}: {
  cloathinImg: string;
  link: string;
  price: string;
  title: string;
}) => {
  return (
    <a
      className="group w-full max-w-xs cursor-pointer"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative mx-auto mt-5 h-auto max-w-sm rounded-lg border-4 border-black p-5 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90">
        {/* Image with black border and dark hover effect */}
        <div className="w-50 h-72relative overflow-hidden rounded-t-lg border-b-4 border-black">
          <img
            alt="Merch Image"
            className="w-full object-contain transition-all duration-300 group-hover:scale-110"
            src={cloathinImg} // Dynamically set image source
          />
          {/* Dark overlay on hover */}
          <div className="absolute left-0 top-0 size-full transition-all duration-300"></div>
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
          <button className="rounded-md bg-black px-10 py-3 text-white transition duration-200 ease-in-out hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </a>
  );
};
export default MerchItems; // Default export
