import React from "react";
import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles";
import {
  type TeamMember,
  executiveTeam,
  projectManagers,
  alumniTeam,
} from "./TeamInformation";

export type TeamCategory = "executives" | "projectManagers" | "alumni";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
  activeCategory: TeamCategory;
};

const getBaseLength = (category: TeamCategory) => {
  switch (category) {
    case "executives":
      return executiveTeam.length;
    case "projectManagers":
      return projectManagers.length;
    case "alumni":
      return alumniTeam.length;
    default:
      return 0;
  }
};

const Team = (props: TeamProps) => {
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.teamMembers.map((member: TeamMember) => {
        return (
          <Profile
            activeCategory={props.activeCategory}
            alt={member.imagePath}
            key={member.id + getBaseLength(props.activeCategory)}
            member={member}
            mobileView={!props.desktopView}
            profilePic={member.imagePath}
          />
        );
      })}
    </S.TeamContainer>
  );
};

export default React.memo(Team);
