import Link from "next/link";
import { memo, PropsWithChildren } from "react";

interface SocialMediaProps {
  href: string;
}

const SocialMedia = (props: PropsWithChildren<SocialMediaProps>) => {
  return props.href === "" ? (
    <div className="z-10 mx-4 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105 md:mx-2">
      {props.children}
    </div>
  ) : (
    <Link
      className="z-10 mx-4 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105 md:mx-2"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default memo(SocialMedia);
