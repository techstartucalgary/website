import React from "react";
import { founder } from "../TeamSection/TeamInformation";
import useViewport from "../UseViewport";
import Image from "next/image";

const FounderSection = () => {
  const { width } = useViewport();
  const defaultView = width && width > 600 ? true : false;

  return (
    <div
      className={`mx-auto mt-12 flex max-w-[900px] flex-col items-center justify-center md:flex-row ${
        defaultView ? "text-left" : "text-center"
      }`}
    >
      {/* Founder Image Container */}
      <div className="relative mb-6 size-64 shrink-0 md:mb-0 md:mr-16 md:size-80">
        <Image
          alt={founder.name}
          className="size-full rounded-[80%] object-cover"
          fill
          priority
          src={founder.imagePath}
        />
      </div>

      {/* Founder Details */}
      <div className="text-white">
        <span className="block text-4xl font-bold">{founder.name}</span>
        <span className="block text-2xl italic">{founder.affiliation}</span>
        <p className="mt-4 text-2xl leading-relaxed">{founder.description}</p>
      </div>
    </div>
  );
};

export default React.memo(FounderSection);
