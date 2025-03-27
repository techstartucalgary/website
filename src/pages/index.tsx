import HomePage from "../pageLayouts/HomePage";
import contentfulClient from "@/lib/contentful/contentful";
import { HighlightedEventsFields } from "@/lib/contentful/contentfulModels";
import { Asset } from "contentful";

export default function Home({
  highlightedEvents,
}: {
  highlightedEvents: HighlightedEventsFields[];
}) {
  return <HomePage highlightedEvents={highlightedEvents} />;
}
export async function getStaticProps() {
  const highlightedEvents: HighlightedEventsFields[] = await contentfulClient
    .getEntries({
      content_type: "highlighted_events",
      order: ["fields.date"],
    })
    .then((entry) => {
      entry.items.forEach((item) => {
        console.log(item);
      });
      return entry.items.map((item) => ({
        date: item.fields.date as string,
        description: item.fields.description as string,
        image: (item.fields.image as Asset)?.fields.file?.url as string,
        link: (item.fields.link as string) || "",
        time: item.fields.time as string,
        title: item.fields.title as string,
      }));
    })
    .catch((error) => {
      console.error(error);
      return [];
    });

  return {
    props: { highlightedEvents },
  };
}
