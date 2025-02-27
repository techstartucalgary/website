import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type NumberStatProps = {
  number: number;
  suffix?: string;
  stat: string;
};

const NumberStat = (props: NumberStatProps) => {
  const [countupActive, setCountupActive] = useState(true);
  const [startNum, setStartNum] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detectVisible = (isVisible: boolean, start: any) => {
    if (isVisible) {
      setCountupActive(false); // Disable countup, so it cannot change again
      start();
    }
  };

  return (
    <div>
      <CountUp
        delay={0.2}
        duration={2.0}
        end={props.number}
        onEnd={() => {
          setStartNum(props.number);
        }}
        start={startNum}
        suffix={props.suffix}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor
            active={countupActive}
            onChange={(visible: boolean) => {
              detectVisible(visible, start);
            }}
          >
            <div className="gradient-text text-[4rem] font-extrabold transition duration-500 ease-in-out hover:scale-110 hover:bg-[#313131] hover:bg-gradient-to-b hover:from-[#313131] hover:to-[#363636] hover:text-[#313131]">
              <span ref={countUpRef} />
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <p className="mt-[10px] text-xl font-semibold text-[var(--secondary-grey)] transition duration-500 ease-in-out">
        {props.stat}
      </p>
    </div>
  );
};

export default NumberStat;
