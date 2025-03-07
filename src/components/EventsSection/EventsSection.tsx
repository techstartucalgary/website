import { highlightedEvents } from "./EventInformation";
import Event from "./Event/Event";

const EventsSection = () => {
  return (
    <div className="z-[100] block items-center justify-center">
      <p className="regularText" style={{ marginBottom: "10%" }}>
        {`Every semester, Tech Start UCalgary organizes and hosts a range of
        events, both online and on campus. We cover a wide array of topics, from
        technical workshops to panel discussions with successful entrepreneurs
        to interviews with industry leaders. If you're interested in the
        intersection of technology and startups, make sure to follow our social
        media and sign up for our upcoming events! Almost all events are open to
        the public - no club membership is required!`}
      </p>

      <div className="grid" style={{ textAlign: "left" }}>
        {highlightedEvents.map((event, i) => {
          return (
            <Event
              date={event.date}
              description={event.description}
              image={event.image}
              key={i}
              link={event.link}
              time={event.time}
              title={event.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventsSection;
