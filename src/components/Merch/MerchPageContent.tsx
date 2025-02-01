import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { NewlineText } from "../../utility/Helpers";
import { merchPageLottieOptions } from "../../utility/LottieOptions";
import { MerchItems } from "./MerchItems";
import { MerchItemsData } from "../../lib/data/MerchData";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const MerchPageContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="merchPageTop"
    >
      {/* Header Section */}
      <div className="mb-8 flex w-full flex-col items-center bg-black pb-32">
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-xl">
            <Lottie options={merchPageLottieOptions} />
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-8xl font-bold text-white"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75 }}
        >
          {NewlineText("Our Merch")}
        </motion.div>
      </div>

      {/* Merch Items Grid - Max 3 per row */}
      <div className="my-6 flex w-full flex-wrap justify-center gap-6 px-4">
        {MerchItemsData.map((merchItem) => (
          <div className="w-full p-2 sm:w-1/2 lg:w-1/3" key={merchItem.id}>
            <MerchItems
              clothingImg={merchItem.clothingImg}
              link={merchItem.link}
              price={merchItem.price}
              title={merchItem.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPageContent;
