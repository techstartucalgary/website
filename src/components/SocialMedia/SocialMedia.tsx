import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
// import { SocialMediaIcon } from "./SocialMedia.styles";
// import { SocialMediaColor } from "../../utility/SharedStyles";

interface SocialMediaProps {
  color: string;
  link: string;
  icon: IconDefinition;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ color, icon, link }) => {
  return link.trim() === "" ? (
    <span
      className={`mx-4 transition-transform duration-300 ease-in-out ${color} hover:scale-105`}
    >
      <FontAwesomeIcon icon={icon} size="3x" />
    </span>
  ) : (
    <a
      className={`mx-4 transition-transform duration-300 ease-in-out ${color} hover:scale-105`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} size="3x" />
    </a>
  );
};

export default SocialMedia;
