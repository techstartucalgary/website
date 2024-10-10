import { PropsWithChildren, useCallback } from "react";
import Link from "next/link";
import { scroller } from "react-scroll";

interface ScrollableLinkProps {
  duration?: number;
  to?: string;
  offset?: number;
  href: string;
  onClick?: () => void;
}

const ScrollableLink = (props: PropsWithChildren<ScrollableLinkProps>) => {
  const handleClick = useCallback(() => {
    if (props.to)
      scroller.scrollTo(props.to, {
        duration: props.duration ?? 500,
        offset: props.offset,
        smooth: true,
      });
  }, [props.duration, props.offset, props.to]);

  return (
    <Link href={props.href} onClick={handleClick}>
      {props.children}
    </Link>
  );
};

export default ScrollableLink;
