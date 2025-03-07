import React from "react";
import Link from "next/link";

export enum ButtonMode {
  TRANSPARENT,
  DARK,
  GRADIENT,
}

type HoverButtonProps = {
  mode: ButtonMode;
  glowOnHover?: boolean;
  link: string;
  text: string;
  linkIsInternal: boolean;
};

const HoverButtonComponent = ({
  glowOnHover = false,
  mode,
  text,
}: HoverButtonProps) => {
  const baseStyles =
    "float-right rounded-[30px] p-[1rem] text-[clamp(0.8rem,calc(2vw+0.2rem),1rem)] transition ease-in-out duration-300 no-underline text-center cursor-pointer hover:translate-y-[0.25rem]";

  const modeStyles = {
    [ButtonMode.TRANSPARENT]:
      "border border-[0.1rem] border-solid text-[var(--primary-black)]",
    [ButtonMode.DARK]: "text-white bg-[var(--primary-black)]",
    [ButtonMode.GRADIENT]:
      "bg-gradient-to-t from-turquoise-blue to-turquoise-green text-[var(--primary-black)]",
  };

  const hoverStyles = glowOnHover
    ? "hover:shadow-[0_5px_15px_rgba(145,92,182,0.4)]"
    : "";

  const responsiveStyles =
    "md:hover:transform-none md:px-[1rem] md:py-[0.5rem]";

  return (
    <div
      className={`${baseStyles} ${modeStyles[mode]} ${hoverStyles} ${responsiveStyles}`}
    >
      {text}
    </div>
  );
};

const HoverButton = (props: HoverButtonProps) => {
  if (props.linkIsInternal) {
    return (
      <div className="transition-transform duration-300 ease-in-out hover:-translate-y-1 sm:mt-[5px] sm:flex sm:items-center sm:justify-center sm:hover:transform-none">
        <Link href={props.link}>{HoverButtonComponent(props)}</Link>
      </div>
    );
  }
  return (
    <div className="transition duration-300 ease-in-out hover:-translate-y-1 md:m-[5px] md:flex md:items-center md:justify-center md:hover:transform-none">
      {HoverButtonComponent(props)}
    </div>
  );
};

export default React.memo(HoverButton);
