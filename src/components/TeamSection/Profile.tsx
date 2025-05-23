import React from "react";
import Image from "next/image";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMediaIcon from "../SocialMedia/SocialMediaIcon";

// Props for team profile
type ProfileProps = {
  key: number;
  mobileView: boolean;
  profilePic: string;
  alt: string;
  member: TeamMember;
  activeCategory: string;
};

const getBackgroundColor = (category: string) => {
  switch (category) {
    case "executives":
      return "bg-[var(--primary-green)]";
    case "projectManagers":
      return "bg-[var(--lightwash-green)]";
    case "alumni":
      return "bg-[var(--secondary-lime)]";
    default:
      return "bg-blue-500";
  }
};

const Profile: React.FC<ProfileProps> = ({
  activeCategory,
  alt,
  member,
  mobileView,
  profilePic,
}) => {
  return (
    <div
      className={`relative ${
        mobileView
          ? "mx-auto mb-0 w-full max-w-[400px]"
          : "mx-[1%] mb-10 w-[clamp(150px,20%,300px)]"
      }`}
      data-aos={!mobileView ? "zoom-in" : ""}
      data-aos-duration={!mobileView ? "1000" : ""}
    >
      {profilePic && (
        <div className="relative flex w-full justify-center">
          <Image
            alt={alt}
            className="mt-4 aspect-square w-full max-w-[300px] rounded-full bg-white object-cover"
            draggable={false}
            height={150}
            loading="eager"
            priority
            src={profilePic}
            width={150}
          />

          {member.linkedin && (
            <div
              className={`absolute right-0 top-3/4 flex items-center justify-center ${getBackgroundColor(activeCategory)} size-[60px] rounded-full lg:size-[70x]`}
            >
              <SocialMediaIcon link={member.linkedin} />
            </div>
          )}
        </div>
      )}

      {/* Space between image and name to prevent overlap */}
      <div className="mt-4 w-full text-center">
        <ProfileDescription
          affiliation={member.affiliation}
          name={member.name}
        />
      </div>
    </div>
  );
};

export default React.memo(Profile);
