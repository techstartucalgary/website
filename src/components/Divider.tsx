import dividerIMG from "../images/divider.svg";
import * as S from "./Divider.styles";
import Image from "next/image";

function Divider() {
  return (
    <S.DividerDiv>
      <S.DividerGradient>
        <Image
          alt="gradient divider"
          height={10}
          src={dividerIMG}
          width={250}
        />
      </S.DividerGradient>
    </S.DividerDiv>
  );
}

export default Divider;
