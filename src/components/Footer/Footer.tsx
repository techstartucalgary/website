import SocialMedia from "../SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import {
  faInstagram,
  faDiscord,
  faLinkedin,
  faYoutube,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="absolute flex min-h-20 w-full items-center justify-center bg-[var(--primary-black)] bg-cover px-4 py-12 text-xs text-black md:text-[clamp(0.8rem,calc(2vw+0.2rem),1rem)]">
    <div className="flex w-auto items-center justify-center px-4 py-0 md:px-4 md:py-14">
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faInstagram}
        link="https://www.instagram.com/techstartucalgary/"
      />

      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faDiscord}
        link="https://discord.gg/Sxj5QrxRPk"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faGithub}
        link="https://github.com/techstartucalgary"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faLinkedin}
        link="https://www.linkedin.com/company/tech-start-ucalgary"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faYoutube}
        link="https://www.youtube.com/channel/UCIg1JPlWSXSwIdvqHKGiX9g"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faTiktok}
        link="https://www.tiktok.com/@techstartuofc"
      />
    </div>
    <div className="max-[900px]:mb-8 max-[900px]:flex max-[900px]:justify-center">
      <iframe
        height="32"
        src="https://github.com/sponsors/techstartucalgary/button"
        style={{ border: 0, borderRadius: "6px", margin: "2%" }}
        title="Sponsor techstartucalgary"
        width="114"
      ></iframe>
    </div>
    <div className="px-4 py-0 text-center text-white">
      © {new Date().getFullYear()} Tech Start UCalgary
    </div>
  </div>
);

export default Footer;
