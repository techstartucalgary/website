import React from "react";
import * as S from "./MerchSection.styles";
import MerchCollection from "./MerchCollection";
import { merchList } from "./MerchData";
import useViewport from "../UseViewport";

const MerchSection = () => {
  const { width } = useViewport();
  const defaultView = width && width > 600 ? true : false;

  return (
    <S.MerchSection data-aos="fade-up">
      <MerchCollection desktopView={defaultView} merchItems={merchList} />
    </S.MerchSection>
  );
};

export default React.memo(MerchSection);
