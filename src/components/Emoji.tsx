import { memo } from "react";

type EmojiProps = {
  label?: string;
  symbol: string;
};

const Emoji = (props: EmojiProps) => (
  <span
    aria-hidden={props.label ? "false" : "true"}
    aria-label={props.label ? props.label : ""}
    className="emoji"
    role="img"
  >
    {props.symbol}
  </span>
);

export default memo(Emoji);
