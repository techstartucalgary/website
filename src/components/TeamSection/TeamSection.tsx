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
    const timeoutId = setTimeout(() => {
      setSelectedCategory((prev) => prev); // Forces a re-render without changing the state
    }, 100);

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("resize")); // The team images show up when scrolling
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

  const bgColor = useMemo(() => {
    const colors = {
      alumni: "bg-[--secondary-lime]",
      executives: "bg-[--primary-green]",
      projectManagers: "bg-[--lightwash-green]",
    };
    return colors[selectedCategory];
  }, [selectedCategory]);

  return (
    <div className="mx-auto p-[5vw] text-center">
      {/* Toggle Buttons */}
      <div className="relative mt-[2%] flex items-center justify-center">
        <div
          className={`relative flex h-[60px] w-[700px] rounded-full p-[5px] transition-colors duration-200 ${bgColor}`}
        >
          <div
            className={`absolute top-[5px] h-[calc(100%-10px)] w-[calc(33.3%-10px)] rounded-full shadow-md transition-[left,background-color] duration-[800ms,200ms] ease-[ease,ease-in-out] ${bgColor} ${
              selectedCategory === "executives"
                ? "left-[5px]"
                : selectedCategory === "projectManagers"
                  ? "left-[calc(33.3%+5px)]"
                  : "left-[calc(66.6%+5px)]"
            }`}
          />
          {["executives", "projectManagers", "alumni"].map((category) => (
            <button
              className="z-10 flex-1 cursor-pointer p-[10px_5px] text-center text-lg font-semibold text-white sm:text-xl md:text-2xl"
              key={category}
              onClick={() => setSelectedCategory(category as TeamCategory)}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          ))}
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
