import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

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
        className="relative flex h-fit justify-center px-0 pb-[4vw] pt-[2vw]"
        initial={{ x: "-100vw" }}
      >
        <Link className="no-underline" href="/apply">
          <div className="relative mb-[-15%] mt-[10%] flex h-[50px] w-[290px] cursor-pointer justify-center rounded-[30px] bg-[var(--primary-black)] pl-[2px] pr-[6px] pt-[15px] text-[20px] text-white transition-transform duration-[250ms] ease-in-out hover:scale-105">
            <div className="ml-2 w-5 animate-arrowSlide">
              {" "}
              <span>&#62;</span>
              <span>&#62;</span>{" "}
            </div>
            <div className="ml-[30px] font-console"> theTeam.join()</div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ApplyButton;
