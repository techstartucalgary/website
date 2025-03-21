import React from "react";
import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "../SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import Linkedin from "../icons/Linkedin";

// props for team profile
type ProfileProps = {
  key: number;
  mobileView: boolean;
  profilePic: string;
  alt: string;
  member: TeamMember;
  activeCategory: string;
};

const getBackgroundColor = (category: string): SocialMediaColor => {
  switch (category) {
    case "executives":
      return SocialMediaColor.ToggleGreen;
    case "projectManagers":
      return SocialMediaColor.ToggleBlue;
    case "alumni":
      return SocialMediaColor.ToggleYellow;
    default:
      return SocialMediaColor.ToggleBlue;
  }
};

const Profile = (props: ProfileProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  return (
    <S.ProfileDiv
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1000"}
      mobileView={props.mobileView}
    >
      {props.profilePic && (
        <S.ProfileIconDiv>
          <img
            alt={props.alt}
            key={props.key}
            onDragStart={preventDragHandler}
            src={props.profilePic}
          />
        </S.ProfileIconDiv>
      )}

      {props.member.linkedin && (
        <S.LinksSection
          backgroundColor={getBackgroundColor(props.activeCategory)}
        >
          <SocialMedia href={props.member.linkedin}>
            <Linkedin />
          </SocialMedia>
        </S.LinksSection>
      )}

      <ProfileDescription
        affiliation={props.member.affiliation}
        name={props.member.name}
      />
    </S.ProfileDiv>
  );
};

export default React.memo(Profile);
