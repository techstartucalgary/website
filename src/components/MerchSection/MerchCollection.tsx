import React from "react";
import MerchItem from "./MerchItem";
import * as S from "./Merch.styles";
import { type MerchProperties } from "./MerchData";

type MerchCollectionProps = {
  merchItems: MerchProperties[];
  desktopView: boolean;
};

const MerchCollection = (props: MerchCollectionProps) => {
  return (
    <S.MerchContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.merchItems.map((metchItem: MerchProperties) => {
        return (
          <MerchItem
            image={metchItem.image}
            key={metchItem.id}
            merch={metchItem}
            mobileView={!props.desktopView}
          />
        );
      })}
    </S.MerchContainer>
  );
};

export default React.memo(MerchCollection);
