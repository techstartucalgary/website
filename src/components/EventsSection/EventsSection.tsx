// import { highlightedEvents } from "./EventInformation";
import Event from "./Event/Event";
import { HighlightedEventsFields } from "@/lib/contentful/contentfulModels";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const newDate = date
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    })
    .replace(/(\d)(?=(st|nd|rd|th))/, "$1");
  console.log(newDate);
  return newDate;
};

const EventsSection = ({
  highlightedEvents,
}: {
  highlightedEvents: HighlightedEventsFields[];
}) => {
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
              date={formatDate(event.date)}
              description={event.description}
              image={event.image}
              key={i}
              link={event.link || ""}
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
