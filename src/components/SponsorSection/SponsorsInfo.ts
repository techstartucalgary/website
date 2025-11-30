import sponsorLogoArcurve from "../../images/sponsors/sponsor-logo-arcurve.png";
import sponsorPason from "../../images/sponsors/sponsor-logo-pason.svg";
import sponsorIEEE from "../../images/sponsors/sponsor-logo-ieee.png";
import sponsorSeisware from "../../images/sponsors/sponsor-logo-seisware.png";
import type { StaticImageData } from "next/image";

export type Organization = {
  sponsorLink: string;
  sponsorImage: StaticImageData | string;
  alt: string;
};

export const SponsorList: Organization[] = [
  {
    alt: "Pason logo",
    sponsorImage: sponsorPason,
    sponsorLink: "https://www.pason.com/",
  },
  {
    alt: "Arcurve logo",
    sponsorImage: sponsorLogoArcurve,
    sponsorLink: "https://www.arcurve.com/",
  },
  {
    alt: "IEEE logo",
    sponsorImage: sponsorIEEE,
    sponsorLink: "https://www.ieee.org/",
  },
  {
    alt: "Seisware logo",
    sponsorImage: sponsorSeisware,
    sponsorLink: "https://www.seisware.com/",
  },
];
