import SocialMedia from "../SocialMedia/SocialMedia";
import Instagram from "../icons/Instagram";
import Discord from "../icons/Discord";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Youtube from "../icons/Youtube";
import Tiktok from "../icons/Tiktok";

const Footer = () => (
  <div className="relative box-border block min-h-20 w-full max-w-full items-center justify-center overflow-hidden bg-[var(--primary-black)] bg-cover px-4 py-12 text-sm text-black md:text-base lg:flex lg:flex-wrap">
    <div className="flex items-center justify-center px-4 py-14 lg:px-1 lg:py-0">
      <SocialMedia href="https://www.instagram.com/techstartucalgary/">
        <Instagram gradient />
      </SocialMedia>
      <SocialMedia href="https://discord.gg/Sxj5QrxRPk">
        <Discord gradient />
      </SocialMedia>
      <SocialMedia href="https://github.com/techstartucalgary">
        <Github gradient />
      </SocialMedia>
      <SocialMedia href="https://www.linkedin.com/company/tech-start-ucalgary">
        <Linkedin gradient />
      </SocialMedia>
      <SocialMedia href="https://www.youtube.com/channel/UCIg1JPlWSXSwIdvqHKGiX9g">
        <Youtube gradient />
      </SocialMedia>
      <SocialMedia href="https://www.tiktok.com/@techstartuofc">
        <Tiktok gradient />
      </SocialMedia>
    </div>
    <p className="my-3 flex justify-center text-center text-white md:px-4">
      <iframe
        height="32"
        src="https://github.com/sponsors/techstartucalgary/button"
        style={{ border: 0, borderRadius: "6px", margin: "2%" }}
        title="Sponsor techstartucalgary"
        width="114"
      ></iframe>
    </p>
    <p className="px-4 text-center text-white">
      © {new Date().getFullYear()} Tech Start UCalgary
    </p>
  </div>
);

export default Footer;
