import FinalShowcase24_img from "../../images/events/Final_Showcase_24.jpg";
import PasonTechTalk_img from "../../images/events/PasonTechTalk.jpg";
import IEEExTechStart_img from "../../images/events/IEEExTechStart.jpg";

export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
}

export const highlightedEvents: Event[] = [
  {
    date: "Saturday, May 3rd, 2025",
    description:
      "Join us for our 2025 Final Showcase, where we celebrate the incredible achievements of our project teams. This event promises to set new standards for innovation and excellence.",
    image: FinalShowcase24_img.src,
    link: "https://www.eventbrite.ca/e/tech-start-ucalgary-final-showcase-tickets-1286230141979?aff=erelexpmlt",
    time: "12:00 - 4:00PM",
    title: "Final Showcase 2025",
  },
  {
    date: "Thursday, March 20, 2025",
    description:
      "We hosted a Tech Talk featuring one of our sponsors, Pason! Our project managers and teams learned about the key aspects of using infrastructure as code and explored possible implementations using Terraform. Our project teams had the opportunity to gain a practical understanding of IaC concepts and tools.",
    image: PasonTechTalk_img.src,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_at-our-last-dev-night-we-hosted-a-tech-talk-activity-7130289774577254400-ESeU?utm_source=share&utm_medium=member_desktop",
    time: "5:30 - 7:00PM",
    title: "Pason Tech Talk",
  },
];

export const previousEvents: Event[] = [
  {
    date: "Saturday, April 27, 2024",
    description:
      "Our 2024 Final Showcase was an astounding success, pushing our club to new heights and setting even higher standards for what project teams are able to achieve. Congratulations to all the project teams for their achievements this year! ",
    image: FinalShowcase24_img.src,
    link: "https://www.eventbrite.ca/e/techstarts-final-showcase-tickets-823300141887",
    time: "12:00 - 4:00PM",
    title: "Final Showcase 2024",
  },
  {
    date: "Wednesday, November 29, 2023",
    description:
      "We hosted our industry panel event in collaboration with IEEE on the topic of leveraging AI in product enhancement and user experiences! We covered real-world strategies and applications of AI in successful projects and had the opportunity to network with our industry guests from Galatea, GroupLabs, etc. ",
    image: IEEExTechStart_img.src,
    link: "https://www.instagram.com/p/C0SClrKPvWq/",
    time: "5:00 - 7:00PM",
    title: "IEEE x TechStart",
  },
  {
    date: "Thursday, November 9, 2023",
    description:
      "We hosted a Tech Talk featuring one of our sponsors, Pason! Our project managers and teams learned the key aspects of using infrastructure as code and possible implementations of this using terraform! Our project teams were given the opportunity to gain a practical understanding of IaC concepts and tools.",
    image: PasonTechTalk_img.src,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_at-our-last-dev-night-we-hosted-a-tech-talk-activity-7130289774577254400-ESeU?utm_source=share&utm_medium=member_desktop",
    time: "5:30 - 7:00PM",
    title: "Pason Tech Talk",
  },
];
