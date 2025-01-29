import MerchSection from "./MerchSection";
import { motion } from "framer-motion";
import * as S from "../../../pageLayouts/MerchPage.styles";

import { merchPageLottieOptions } from "../../../utility/LottieOptions";
import { NewlineText } from "../../../utility/Helpers";
import MerchCollection from "./MerchCollection"
import { MerchItems } from "./MerchItems";
import dynamic from "next/dynamic";
import { MerchItemsData } from "./MerchData";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });


const MerchPage = () => {
  return (
    <div id="merchPageTop" className="flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 pb-32 w-full bg-black ">
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-xl">
            <Lottie options={merchPageLottieOptions} />
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75 }}
          className="text-center text-white mt-4 text-8xl font-bold"
        >
          {NewlineText("Our Merch")}
        </motion.div>
      </div>
      

      {/* Render MerchItems in a flex container, centered with up to 3 items per row */}
      <div className="flex flex-wrap justify-center gap-6">
        {MerchItemsData.map((merchItem) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={merchItem.id}>
            <MerchItems
              title={merchItem.title}
              cloathinImg={merchItem.cloathinImg}
              price={merchItem.price}
              link={merchItem.link}
            />
          </div>
        ))}
      </div>
      <div className="m-6"></div>

      {/* Merch Section */}
      {/* <MerchSection /> */}
    </div>
  );
};

export default MerchPage;