/* eslint-disable @next/next/no-img-element */
import React from "react";
import { founder } from "../TeamSection/TeamInformation";
import useViewport from "../UseViewport";

const FounderSection = () => {
  const { width } = useViewport();
  const defaultView = width && width > 600 ? true : false;

  return (
    <div
      className={`flex w-full flex-col items-center gap-6 md:flex-row md:gap-12 ${
        defaultView ? "text-left" : "text-center"
      }`}
    >
      {/* Founder Image */}
      <div className="size-40 shrink-0 md:size-52">
        <img
          alt={founder.name}
          className="size-full rounded-full object-cover"
          src={founder.imagePath}
        />
      </div>

      {/* Founder Details */}
      <div className="text-white">
        <span className="block text-2xl font-bold">{founder.name}</span>
        <span className="block text-lg italic">{founder.affiliation}</span>
        <p className="mt-4">{founder.description}</p>
      </div>
    </div>
  );
};

export default React.memo(FounderSection);
