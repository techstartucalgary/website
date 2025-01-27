/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import Team from "./Team";
import { executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";
import { TeamCategory } from "./Team";

type TeamSectionProps = {
  desktopView: boolean;
};

const TeamSection = ({ desktopView }: TeamSectionProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TeamCategory>("executives");

  const getTeamMembers = useMemo(() => {
    switch (selectedCategory) {
      case "projectManagers":
        return projectManagers;
      case "alumni":
        return alumniTeam;
      default:
        return executiveTeam;
    }
  }, [selectedCategory]);

  return (
    <div className="mx-auto p-10 text-center">
      <h2 className="text-primary-black mb-4 text-4xl font-bold">Our Team</h2>

      {/* Toggle Buttons */}
      <div className="relative mt-4 flex items-center justify-center">
        <div className="bg-primary-green relative flex h-14 w-[700px] rounded-full p-1 transition-all">
          <div
            className={`absolute left-1 top-1 h-[calc(100%-8px)] w-1/3 rounded-full bg-opacity-90 shadow-md transition-all ${selectedCategory === "executives" ? "bg-primary-green" : selectedCategory === "projectManagers" ? "bg-lightwash-green left-[33.3%]" : "bg-secondary-lime left-[66.6%]"} `}
          />
          <button
            className="flex-1 text-lg font-semibold text-white"
            onClick={() => setSelectedCategory("executives")}
          >
            Executives
          </button>
          <button
            className="text-turquoise-green flex-1 text-lg font-bold"
            onClick={() => setSelectedCategory("projectManagers")}
          >
            Project Managers
          </button>
          <button
            className="text-turquoise-blue flex-1 text-lg font-semibold"
            onClick={() => setSelectedCategory("alumni")}
          >
            Alumni
          </button>
        </div>
      </div>

      {/* Team Members */}
      <Team
        activeCategory={selectedCategory}
        desktopView={desktopView}
        teamMembers={getTeamMembers}
      />
    </div>
  );
};

export default React.memo(TeamSection);
