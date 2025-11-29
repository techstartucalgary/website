/**
 * This file contains the information for projects. This information will be automatically added to the projects page.
 * If you want to edit the info for any project, do it here!
 * All image sizes should be a 16:9 Aspect ratio
 */

import techStartWebsite from "../../../public/projects/techStartWebsite.png";
import supplyMe from "../../../public/projects/supplyMe.png";
import resumeTracker from "../../../public/projects/resumetracker.png";
import oneHub from "../../../public/projects/oneHub.png";
import aquavolution from "../../../public/projects/aquavolution.jpg";
import snowbot from "../../../public/projects/snowbot.jpg";
import noteAid from "../../../public/projects/noteAid.jpg";
import whereTo from "../../../public/projects/whereTo.jpg";
import lifeLine from "../../../public/projects/lifeline.png";
import easyMeal from "../../../public/projects/easymeal.jpg";
import airm from "../../../public/projects/AiRM.png";
import techstarcade from "../../../public/projects/Techstarcade.jpg";
import bandist from "../../../public/projects/Bandist.jpg";
import cyberHire from "../../../public/projects/CyberHire.jpg";
import achevio from "../../../public/projects/Achevio.png";
import campusBuddy from "../../../public/projects/CampusBuddy.jpg";
import locaLoyalty from "../../../public/projects/LocaLoyalty.png";
import craftXR from "../../../public/projects/Craftxr.jpg";
import reThread from "../../../public/projects/Rethread.png";
import fyr from "../../../public/projects/ForYourResearch.jpg";
import agrivanna from "../../../public/projects/Agrivanna.png";
import eventEase from "../../../public/projects/EventEase.png";
import earthEcho from "../../../public/projects/EarthsEcho.png";
import callia from "../../../public/projects/Callia.png";
import connx from "../../../public/projects/CONNX.png";
import easyMealTeam from "../../../public/showcaseWinners/2023_best_overall.jpg";
import localoyaltyTeam from "../../../public/showcaseWinners/2024_best_overall.jpg";
import agrivannaTeam from "../../../public/showcaseWinners/2025_best_overall.jpg";

// Project type definition
export type Project = {
  name: string;
  image: string;
  github: string;
  website: URL;
  pmName: string;
  description: string;
  year: string;
  featured: boolean;
  showcaseWinner: boolean;
  teamPic?: string;
  winnerPost?: string;
  videoEmbedID: string;
};

const website = new URL("https://tech-start-website.web.app/");

// An array of our projects, which is used in the Projects page
export const PastProjects: Project[] = [
  {
    description:
      "An event management platform that leverages AI to enhance event planning and check-in processes.",
    featured: false,
    github: "https://github.com/techstartucalgary/Event-Ease",
    image: eventEase.src,
    name: "Event Ease",
    pmName: "James Robert",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2024-2025",
  },
  {
    description:
      "A game designed to inspire environmental consciousness through engaging storytelling and gameplay.",
    featured: false,
    github: "https://github.com/techstartucalgary/earths-echo",
    image: earthEcho.src,
    name: "Earth's Echo",
    pmName: "Debo Dam",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2024-2025",
  },
  {
    description:
      "An AI-powered virtual assistant designed to streamline veterinary clinic operations and customer support.",
    featured: false,
    github: "https://github.com/techstartucalgary/Callia",
    image: callia.src,
    name: "Callia",
    pmName: "Phuong Thao Nguyen",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2024-2025",
  },
  {
    description:
      "A business connection and booking platform designed to streamline interactions between small businesses and customers.",
    featured: false,
    github: "https://github.com/techstartucalgary/conn-x",
    image: connx.src,
    name: "CONN-X",
    pmName: "Alvi Zaman",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2024-2025",
  },
  {
    description:
      "Agrivanna is an AI-powered livestock platform combining virtual fencing, weight tracking paired with tailored feed plans, and early health monitoring. Built for real farms, it works offline and helps producers stay compliant.",
    featured: false,
    github: "https://github.com/techstartucalgary/",
    image: agrivanna.src,
    name: "Agrivanna",
    pmName: "Amirhossein Foroughi",
    showcaseWinner: true,
    teamPic: agrivannaTeam.src,
    videoEmbedID: "",
    website: website,
    winnerPost:
      "https://www.linkedin.com/posts/tech-start-ucalgary_our-2025-final-showcase-was-an-astounding-activity-7325009531720138755-jLSB/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtQ6U8BlOCpiQtkOYzoe0ZZQB5Cdvt9hGU",
    year: "2024-2025",
  },
  {
    description:
      "A new take on social media where you join goal-focused communities.",
    featured: false,
    github: "https://github.com/techstartucalgary/achevio/",
    image: achevio.src,
    name: "Achevio",
    pmName: "Wilbur Elbouni",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2023-2024",
  },
  {
    description: "A tool for building immersive experiences.",
    featured: false,
    github: "https://github.com/techstartucalgary/",
    image: craftXR.src,
    name: "CraftXR",
    pmName: "Hamza Afzaal",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2023-2024",
  },
  {
    description:
      "A mobile app that bridges the gaps that students face on a day to day basis.",
    featured: false,
    github: "https://github.com/techstartucalgary/CampusBuddy",
    image: campusBuddy.src,
    name: "CampusBuddy",
    pmName: "Aarsh Shah",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2023-2024",
  },
  {
    description:
      "A platform for small businesses to create and launch their own loyalty program through the form of virtual stamp cards.",
    featured: false,
    github: "https://github.com/techstartucalgary/LocaLoyalty",
    image: locaLoyalty.src,
    name: "LocaLoyalty",
    pmName: "Hilton Luu",
    showcaseWinner: true,
    teamPic: localoyaltyTeam.src,
    videoEmbedID: "",
    website: website,
    winnerPost:
      "https://www.linkedin.com/posts/tech-start-ucalgary_our-2024-final-showcase-was-an-astounding-activity-7190521165465948160-JCqf?utm_source=share",
    year: "2023-2024",
  },
  {
    description:
      "An app that educates and rewards consumers based on how sustainable their fashion consumption choices are.",
    featured: false,
    github: "https://github.com/techstartucalgary/Rethread",
    image: reThread.src,
    name: "reThread",
    pmName: "Aarsh Shah",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2023-2024",
  },
  {
    description:
      "Helping you iterate faster in your research processes from collection to analysis of scientific literature.",
    featured: false,
    github: "https://github.com/techstartucalgary/For-Your-Research",
    image: fyr.src,
    name: "For Your Research",
    pmName: "Naman Bhoj",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2023-2024",
  },
  {
    description:
      "A cross-platform application for music enthusiasts to get notified of the latest concerts of their favorite artists.",
    featured: false,
    github: "https://github.com/techstartucalgary/Bandist",
    image: bandist.src,
    name: "Bandist",
    pmName: "Nurgul Akhshatayeva",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2022-2023",
  },
  {
    description: "A platform for employers and applicants to connect.",
    featured: false,
    github: "https://github.com/techstartucalgary/CyberHire",
    image: cyberHire.src,
    name: "CyberHire",
    pmName: "Ben Schmidt",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2022-2023",
  },
  {
    description:
      "Lifeline uses AI to extract and organize deadlines from course documents for you to download.",
    featured: false,
    github: "https://github.com/techstartucalgary/lifeline",
    image: lifeLine.src,
    name: "Lifeline",
    pmName: "Timothy Macphail",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2022-2023",
  },
  {
    description:
      "EasyMeal generates recipes for you based on your budget and tastes.",
    featured: true,
    github: "https://github.com/techstartucalgary/EasyMeal",
    image: easyMeal.src,
    name: "EasyMeal",
    pmName: "Nemanja Grujic",
    showcaseWinner: true,
    teamPic: easyMealTeam.src,
    videoEmbedID: "jk-dVia1yqo",
    website: website,
    winnerPost:
      "https://www.linkedin.com/feed/update/urn:li:activity:7058573838405550080/?utm_source=share",
    year: "2022-2023",
  },
  {
    description:
      "Robotic arm using reinforcement learning to help robots learn and adapt to new environments.",
    featured: false,
    github: "https://github.com/techstartucalgary/RoboticArm",
    image: airm.src,
    name: "AiRM",
    pmName: "Leo Wei",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2022-2023",
  },
  {
    description: "Retro style mini games in a arcade style chrome extension.",
    featured: false,
    github: "https://github.com/techstartucalgary/techstarcade",
    image: techstarcade.src,
    name: "TechstArcade",
    pmName: "Madeline Mazurek",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2022-2023",
  },
  {
    description:
      "A mobile app that helps students with studying for exams by summarizing their handwritten notes",
    featured: false,
    github: "https://github.com/Tech-Start-UCalgary/NoteAId",
    image: noteAid.src,
    name: "NoteAId",
    pmName: "Mahdi Varposhti",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2021-2022",
  },
  {
    description:
      "Born a tiny fish, try to survive among other predators, be careful of the human waste in the ocean though!",
    featured: true,
    github: "https://github.com/Tech-Start-UCalgary/Aquavolution",
    image: aquavolution.src,
    name: "Aquavolution",
    pmName: "Elgiz Abbasov",
    showcaseWinner: false,
    videoEmbedID: "9SqZWb1-tw0",
    website: website,
    year: "2021-2022",
  },
  {
    description:
      "An app that helps groups make decisions when planning a social gathering by voting",
    featured: false,
    github: "https://github.com/Tech-Start-UCalgary/decision-frontend",
    image: whereTo.src,
    name: "Where To?",
    pmName: "Vivian Huynh",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2021-2022",
  },
  {
    description: "A robot that autonomously clears snow on sidewalks",
    featured: false,
    github: "",
    image: snowbot.src,
    name: "Snowbot",
    pmName: "Ali Siddiqi",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2021-2022",
  },
  {
    description:
      "A hub for your social media that shows you info and stats from your favorite sites. Switching apps is so 2020!",
    featured: false,
    github: "https://github.com/glassthunder/TECHSTART",
    image: oneHub.src,
    name: "OneApp",
    pmName: "Felix Vaughan",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2020-2021",
  },
  {
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
    featured: false,
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    image: supplyMe.src,
    name: "SupplyMe",
    pmName: "Darryl Huët",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2020-2021",
  },
  {
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
    featured: false,
    github: "2020-2021",
    image: resumeTracker.src,
    name: "Resume Tracker",
    pmName: "Daniel Rashidian",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "",
  },
  {
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
    featured: false,
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    image: techStartWebsite.src,
    name: "TSU Website",
    pmName: "Joel Happ, Niyousha Raeesinejad",
    showcaseWinner: false,
    videoEmbedID: "",
    website: website,
    year: "2020-2021",
  },
];

export const CurrentProjects: Project[] = [];
