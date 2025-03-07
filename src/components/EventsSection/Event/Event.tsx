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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = "fade-right";

  return (
    <div
      className="mb-5 rounded-[30px] bg-gradient-to-t from-turquoise-blue to-turquoise-green p-[1.5%] md:p-[3%]"
      data-aos={fadeDirection}
      data-aos-duration="2000"
    >
      <img
        alt={props.title}
        className="float-left clear-right mb-[3%] block w-full max-w-full rounded-[20px] md:m-[2%] md:mb-[3%] md:w-3/5"
        onDragStart={preventDragHandler}
        src={props.image}
      />

      <div className="px-0 sm:px-0 md:px-0 lg:px-0">
        <p className="babyHeading babyHeading--bolder">{props.title}</p>
        <p className="regularText">{props.description}</p>
        <div style={{ height: "clamp(6vh, 6vh + 7%, 12vh)" }}>
          <p className="regularText mb-[3vh]">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
