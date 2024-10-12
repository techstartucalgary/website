/* eslint-disable sort-keys */
/* eslint-disable sort-keys/sort-keys-fix */
import blobLottie1 from "../images/lottie/bloblottie1.json";
import blobLottie2 from "../images/lottie/bloblottie2.json";
import blobLottie3 from "../images/lottie/bloblottie3.json";
import blobLottie4 from "../images/lottie/bloblottie4.json";
import blobLottie5 from "../images/lottie/bloblottie5.json";
import blobLottie6 from "../images/lottie/bloblottie6.json";
import blobLottie7 from "../images/lottie/bloblottie7.json";
import blobLottie8 from "../images/lottie/bloblottie8.json";
import blobLottie9 from "../images/lottie/bloblottie9.json";
import blobLottie10 from "../images/lottie/bloblottie10.json";
import blobLottie11 from "../images/lottie/bloblottie11.json";
import blobLottie12 from "../images/lottie/bloblottie12.json";
import blobLottie13 from "../images/lottie/bloblottie13.json";
import blobLottie14 from "../images/lottie/bloblottie14.json";
import blobLottie15 from "../images/lottie/bloblottie15.json";
import Lottie from "lottie-react";
import styles from "./Blobbie.module.css";
import { memo } from "react";

type BlobbieProps = {
  edge: boolean;
  id: number;
  width: number;
  transform: string;
};

const Blobbie = (props: BlobbieProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const blobbies = {
    blobLottie1: blobLottie1,
    blobLottie2: blobLottie2,
    blobLottie3: blobLottie3,
    blobLottie4: blobLottie4,
    blobLottie5: blobLottie5,
    blobLottie6: blobLottie6,
    blobLottie7: blobLottie7,
    blobLottie8: blobLottie8,
    blobLottie9: blobLottie9,
    blobLottie10: blobLottie10,
    blobLottie11: blobLottie11,
    blobLottie12: blobLottie12,
    blobLottie13: blobLottie13,
    blobLottie14: blobLottie14,
    blobLottie15: blobLottie15,
  };

  const blobbieClass =
    props.edge === true ? styles["Blobbie--edge"] : styles["Blobbie--middle"];

  return (
    <Lottie
      // eslint-disable-next-line no-eval
      animationData={eval(`blobbies.blobLottie${props.id}`)}
      className={"Blobbie " + blobbieClass}
      style={{ width: props.width, transform: props.transform }}
    />
  );
};

export default memo(Blobbie);
