export interface HighlightedEventsFields {
  title: string;
  description: string;
  date: string; // date fields stored as strings (ISO format)
  image: string; // image URL
  link?: string; // Optional
  time: string;
}
