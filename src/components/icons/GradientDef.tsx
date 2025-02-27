import { memo } from "react";

export interface SVGIconProps {
  gradient?: boolean;
}

const GradientDefs = () => (
  <svg height="0" style={{ position: "absolute" }} width="0">
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="customSVGFromIndexDotHTML"
        x1="400"
        x2="0"
        y1="0"
        y2="400"
      >
        <stop offset="0" stopColor="#00b7ff" />
        <stop offset="0.125" stopColor="#00c3fc" />
        <stop offset="0.25" stopColor="#00ccf1" />
        <stop offset="0.375" stopColor="#00d5de" />
        <stop offset="0.5" stopColor="#00dbc7" />
        <stop offset="0.625" stopColor="#26e0ac" />
        <stop offset="0.75" stopColor="#6ee391" />
        <stop offset="0.875" stopColor="#9ee478" />
        <stop offset="1" stopColor="#c9e265" />
      </linearGradient>
    </defs>
  </svg>
);

export default memo(GradientDefs);
