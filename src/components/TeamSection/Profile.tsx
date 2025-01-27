/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-no-undef */
import React from "react";
// import * as S from "./Profile.styles";
import Image from "next/image";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "../SocialMedia/SocialMedia";
// import { SocialMediaColor } from "../../utility/SharedStyles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// props for team profile
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
      return "bg-green-500";
    case "projectManagers":
      return "bg-blue-500";
    case "alumni":
      return "bg-yellow-500";
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
      className={`mx-2 mb-10 flex w-full max-w-xs flex-col items-center sm:w-60 md:w-72 lg:w-80`}
      data-aos={!mobileView ? "zoom-in" : ""}
      data-aos-duration={!mobileView ? "1000" : ""}
    >
      {profilePic && (
        <div className="flex w-full justify-center">
          <Image
            alt={alt}
            className="mt-4 aspect-square w-full rounded-full object-cover"
            draggable={false}
            height={150}
            src={profilePic}
            width={150}
          />
        </div>
      )}

      {member.linkedin && (
        <div
          className={`absolute bottom-0 right-0 flex items-center justify-center ${getBackgroundColor(activeCategory)}}}} size-16 rounded-full sm:size-14 md:size-16 lg:size-20`}
        >
          <SocialMedia
            color="White"
            icon={faLinkedinIn}
            link={member.linkedin}
          />
        </div>
      )}

      <ProfileDescription affiliation={member.affiliation} name={member.name} />
    </div>
  );
};

export default React.memo(Profile);
