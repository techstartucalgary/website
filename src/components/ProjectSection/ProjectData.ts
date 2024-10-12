/**
 * This file contains the information for projects. This information will be automatically added to the projects page.
 * If you want to edit the info for any project, do it here!
 * All image sizes should be a 16:9 Aspect ratio
 */

import techStartWebsite from "images/projects/techStartWebsite.png";
import supplyMe from "images/projects/supplyMe.png";
import resumeTracker from "images/projects/resumetracker.png";
import oneHub from "images/projects/oneHub.png";
import aquavolution from "images/projects/aquavolution.jpg";
import snowbot from "images/projects/snowbot.jpg";
import noteAid from "images/projects/noteAid.jpg";
import whereTo from "images/projects/whereTo.jpg";
import lifeLine from "images/projects/lifeline.png";
import easyMeal from "images/projects/easymeal.jpg";
import airm from "images/projects/AiRM.png";
import techstarcade from "images/projects/Techstarcade.jpg";
import bandist from "images/projects/Bandist.jpg";
import cyberHire from "images/projects/CyberHire.jpg";
import achevio from "images/projects/Achevio.png";
import campusBuddy from "images/projects/CampusBuddy.jpg";
import locaLoyalty from "images/projects/LocaLoyalty.png";
import craftXR from "images/projects/Craftxr.jpg";
import reThread from "images/projects/Rethread.png";
import fyr from "images/projects/ForYourResearch.jpg";
import easyMealTeam from "images/showcaseWinners/2023_best_overall.jpg";
import localoyaltyTeam from "images/showcaseWinners/2024_best_overall.jpg";

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
