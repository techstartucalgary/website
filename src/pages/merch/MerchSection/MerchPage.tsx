import MerchSection from "./MerchSection";
import { motion } from "framer-motion";
import * as S from "../../../pageLayouts/MerchPage.styles";
import Lottie from "react-lottie";
import { merchPageLottieOptions } from "../../../utility/LottieOptions";
import { NewlineText } from "../../../utility/Helpers";
import MerchCollection from "./MerchCollection"


const MerchPage = () => {
  return (
    <div id="merchPageTop" className="flex flex-col items-center justify-center">
    {/* Header Section */}
    <div className="flex flex-col items-center mb-8 pb-10 w-full bg-black ">
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

    {/* Merch Section */}
    {/* <MerchSection /> */}

    <h1 className="text-center text-4xl font-bold mt-8">Merch</h1>
  </div>
  );
};

export default MerchPage;


{/* <S.MerchPage id="merchPageTop">
<S.MerchPageHeader>
  <S.MerchPageHeaderItem>
    <S.LottieDiv>
      <Lottie options={merchPageLottieOptions} />
    </S.LottieDiv>
  </S.MerchPageHeaderItem>
  <S.MerchPageHeaderItem>
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.75 }}
    >
      {NewlineText("Our Merch")}
    </motion.div>
  </S.MerchPageHeaderItem>
</S.MerchPageHeader>

<MerchSection />
</S.MerchPage> */}
