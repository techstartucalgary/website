import React from "react";
import Profile from "./Profile";
// import * as S from "./Team.styles";
// import "./Team.styles";
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

const Team: React.FC<TeamProps> = ({
  activeCategory,
  desktopView,
  teamMembers,
}) => {
  return (
    <div
      className={`${
        desktopView ? "flex flex-wrap" : "grid grid-cols-2 gap-2"
      } relative mx-auto mt-12 max-w-screen-xl justify-center`}
    >
      {teamMembers.map((member) => (
        <Profile
          activeCategory={activeCategory}
          alt={member.imagePath}
          key={member.id + getBaseLength(activeCategory)}
          member={member}
          mobileView={!desktopView}
          profilePic={member.imagePath}
        />
      ))}
    </div>
  );
};

export default React.memo(Team);
