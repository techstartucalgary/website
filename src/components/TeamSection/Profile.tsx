import React from "react";
import Image from "next/image";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "../SocialMedia/SocialMedia";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
      return "bg-[var(--primary-blue)]";
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
      className="relative mx-[1%] mb-10 flex w-[clamp(150px,20%,300px)] flex-col items-center sm:w-60 md:w-72 lg:w-80"
      data-aos={!mobileView ? "zoom-in" : ""}
      data-aos-duration={!mobileView ? "1000" : ""}
    >
      {profilePic && (
        <div className="relative flex w-full justify-center">
          <Image
            alt={alt}
            className="mt-[15px] aspect-square w-full rounded-full bg-white object-cover"
            draggable={false}
            height={150}
            loading="eager"
            priority
            src={profilePic}
            width={150}
          />

          {member.linkedin && (
            <div
              className={`absolute right-[15%] top-[60%] flex translate-x-1/2 translate-y-1/2 items-center justify-center ${getBackgroundColor(activeCategory)} size-[75px] rounded-full sm:size-[80px] md:size-[90px] lg:size-[100px]`}
            >
              <SocialMedia
                color="White"
                icon={faLinkedinIn}
                link={member.linkedin}
              />
            </div>
          )}
        </div>
      )}

      <ProfileDescription affiliation={member.affiliation} name={member.name} />
    </div>
  );
};

export default React.memo(Profile);
