import React, { memo } from "react";
import Chevron from "@/components/icons/Chevron";

interface ChevronButtonProps {
  direction?: "left" | "right";
  isDisabled?: boolean;
  handleClick: () => void;
}
export const ChevronButton = ({
  direction = "left",
  handleClick,
  isDisabled = false,
}: ChevronButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-full bg-white px-3 py-1 text-xl text-gray-800 transition duration-300 hover:bg-[#e0e0e0] disabled:cursor-not-allowed"
      disabled={isDisabled}
      onClick={handleClick}
    >
      <div className={direction === "right" ? "rotate-180" : ""}>
        <Chevron color={isDisabled ? "lightgrey" : "black"} />
      </div>
    </button>
  );
};

export default memo(ChevronButton);
