import React from "react";
import Link from "next/link";
import * as S from "./HoverButton.styles";

type HoverButtonProps = {
  mode: S.ButtonMode;
  glowOnHover?: boolean;
  link: string;
  text: string;
  linkIsInternal: boolean;
};

const HoverButtonComponent = (props: HoverButtonProps) => (
  <S.HoverButton glowOnHover={props.glowOnHover} mode={props.mode}>
    {props.text}
  </S.HoverButton>
);

const HoverButton = (props: HoverButtonProps) => {
  if (props.linkIsInternal) {
    return (
      <S.HoverButtonDiv>
        <Link href={props.link}>{HoverButtonComponent(props)}</Link>
      </S.HoverButtonDiv>
    );
  }
  return <S.HoverButtonDiv>{HoverButtonComponent(props)}</S.HoverButtonDiv>;
};

export default React.memo(HoverButton);
