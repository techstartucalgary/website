import { memo } from "react";
const Chevron = ({ color = "black", size = "1.2rem" }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size}
      role="img"
      style={{ color: `${color}` }}
      viewBox="0 0 320 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default memo(Chevron);
