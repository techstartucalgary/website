import Link from "next/link";
import { memo, PropsWithChildren } from "react";

interface SocialMediaProps {
  href: string;
}

const SocialMedia = (props: PropsWithChildren<SocialMediaProps>) => {
  return props.href === "" ? (
    <div className="xs:mx-2 z-10 mx-2 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105">
      {props.children}
    </div>
  ) : (
    <Link
      className="xs:mx-2 z-10 mx-2 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105"
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default memo(SocialMedia);
