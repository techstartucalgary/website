import { FaLinkedin } from "react-icons/fa";

interface SocialMediaIconProps {
  link: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ link }) => {
  const safeLink = link?.trim() || ""; // Ensure valid link
  const sharedClasses =
    "z-10 mx-4 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105 md:mx-2 text-white";

  return safeLink ? (
    <a
      className={sharedClasses}
      href={safeLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaLinkedin className="text-white" size={32} />
    </a>
  ) : (
    <span className={sharedClasses}>
      <FaLinkedin className="text-white" size={32} />
    </span>
  );
};

export default SocialMediaIcon;
