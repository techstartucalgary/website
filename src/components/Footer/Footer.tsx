import * as S from "./Footer.styles";
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
  <S.Footer>
    <S.SocialMediaSection>
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
    </S.SocialMediaSection>
    <S.SponsorIFrameDiv>
      <iframe
        height="32"
        src="https://github.com/sponsors/techstartucalgary/button"
        style={{ border: 0, borderRadius: "6px", margin: "2%" }}
        title="Sponsor techstartucalgary"
        width="114"
      ></iframe>
    </S.SponsorIFrameDiv>
    <S.Copyright>© {new Date().getFullYear()} Tech Start UCalgary</S.Copyright>
  </S.Footer>
);

export default Footer;
