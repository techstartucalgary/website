import * as S from "./Event.styles";
import HoverButton from "../../HoverButton/HoverButton";
import { ButtonMode } from "../../HoverButton/HoverButton.styles";

type EventProps = {
  key: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
};

const Event = (props: EventProps) => {
  const textClasses = ["babyHeading", "regularText"];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = "fade-right";

  return (
    <S.Event data-aos={fadeDirection} data-aos-duration="2000">
      <S.EventImage
        alt={props.title}
        onDragStart={preventDragHandler}
        src={props.image}
      />

      <S.EventText>
        <p className="babyHeading babyHeading--bolder">{props.title}</p>
        <p className={textClasses[1]}>{props.description}</p>
        <S.DatetimeButtonDiv>
          <p className={textClasses[1]}>
            {props.date} | {props.time}
          </p>
          <div>
            <HoverButton
              link={props.link}
              linkIsInternal={false}
              mode={ButtonMode.DARK}
              text={"Check it Out!"}
            />
          </div>
        </S.DatetimeButtonDiv>
      </S.EventText>
    </S.Event>
  );
};

export default Event;
