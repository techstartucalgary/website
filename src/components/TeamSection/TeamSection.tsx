import React, { useMemo, useState, useEffect } from "react";
import Team from "./Team";
import { executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";
import { TeamCategory } from "./Team";

type TeamSectionProps = {
  desktopView: boolean;
};

const TeamSection = ({ desktopView }: TeamSectionProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TeamCategory>("executives");

  useEffect(() => {
    setTimeout(() => {
      setSelectedCategory((prev) => prev); // Forces a re-render without changing the state
    }, 100);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [selectedCategory]);

  const TeamMembers = useMemo(() => {
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
    <div className="mx-auto p-[5vw] text-center">
      <h2 className="mb-0 font-[--chonky-header-weight] text-[--chonky-header-size] text-[--primary-black] md:text-[--thicc-subheading-size]">
        Our Team
      </h2>

      {/* Toggle Buttons */}
      <div className="relative mt-[2%] flex items-center justify-center">
        <div className="relative flex h-[60px] w-[700px] rounded-full bg-[--primary-green] p-[5px]">
          <div
            className={`absolute top-[5px] h-[calc(100%-10px)] w-[calc(33.3%-10px)] rounded-full shadow-md transition-[left,background-color] duration-[800ms,200ms] ease-[ease,ease-in-out] ${
              selectedCategory === "executives"
                ? "left-[5px] bg-[--primary-green]"
                : selectedCategory === "projectManagers"
                  ? "left-[calc(33.3%+5px)] bg-[--lightwash-green]"
                  : "left-[calc(66.6%+5px)] bg-[--secondary-lime]"
            }`}
          />
          <button
            className="z-10 flex-1 cursor-pointer p-[10px_5px] text-center text-lg font-medium text-white md:text-base"
            onClick={() => setSelectedCategory("executives")}
          >
            Executives
          </button>
          <button
            className="z-10 flex-1 cursor-pointer p-[10px_5px] text-center text-lg font-medium text-white md:text-base"
            onClick={() => setSelectedCategory("projectManagers")}
          >
            Project Managers
          </button>
          <button
            className="z-10 flex-1 cursor-pointer p-[10px_5px] text-center text-lg font-medium text-white md:text-base"
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
        teamMembers={TeamMembers}
      />
    </div>
  );
};

export default React.memo(TeamSection);
