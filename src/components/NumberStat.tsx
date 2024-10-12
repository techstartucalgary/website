import { useState } from "react";
import styles from "./NumberStat.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import classNames from "classnames";

type NumberStatProps = {
  number: number;
  suffix?: string;
  stat: string;
};

const cx = classNames.bind(styles);

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
    <div className={styles.numberStat}>
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
            <div className={cx(styles.numberStat__number, "gradient-text")}>
              <span ref={countUpRef} />
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <p className={styles.numberStat__stat}>{props.stat}</p>
    </div>
  );
};

export default NumberStat;
