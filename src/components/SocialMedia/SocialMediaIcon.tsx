import Linkedin from "../icons/Linkedin";

interface SocialMediaIconProps {
  link: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ link }) => {
  const safeLink = link?.trim() || ""; // Ensure valid link
  const sharedClasses =
    "z-10 mx-4 my-0 inline-block transition-all duration-300 ease-in-out hover:scale-105 md:mx-2 text-white";

  const Icon = <Linkedin />;

  return safeLink ? (
    <a
      className={sharedClasses}
      href={safeLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      {Icon}
    </a>
  ) : (
    <span className={sharedClasses}>{Icon}</span>
  );
};

export default SocialMediaIcon;
