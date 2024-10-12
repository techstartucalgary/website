import * as S from "./ApplyButton.styles";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ApplyButton = () => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    animationControl.start({
      transition: {
        delay: 0.1,
        duration: 0.4,
        stiffness: 70,
        type: "spring",
      },
      x: 0,
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        animate={animationControl}
        className="homePage__applyButtonBox"
        initial={{ x: "-100vw" }}
      >
        <S.ApplyButtonLink href="/apply">
          <S.ApplyButton>
            <S.ApplyButtonArrow>
              {" "}
              <span>&#62;</span>
              <span>&#62;</span>{" "}
            </S.ApplyButtonArrow>
            <S.ApplyButtonText> theTeam.join()</S.ApplyButtonText>
          </S.ApplyButton>
        </S.ApplyButtonLink>
      </motion.div>
    </div>
  );
};

export default ApplyButton;
