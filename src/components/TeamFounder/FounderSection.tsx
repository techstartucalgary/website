import React from "react";
import { founder } from "../TeamSection/TeamInformation";
import Image from "next/image";

const FounderSection = () => {
  return (
    <div className="mx-auto mt-12 flex max-w-[900px] flex-col items-center justify-center md:flex-row">
      {/* Founder Image Container */}
      <div className="relative mb-6 size-64 shrink-0 md:mb-0 md:mr-16 md:size-80">
        <Image
          alt={founder.name}
          className="size-full rounded-[80%] object-cover"
          fill
          loading="eager"
          priority
          src={founder.image}
        />
      </div>

      {/* Founder Details */}
      <div className="px-4 text-white md:px-0">
        <span className={"block text-[30px] font-bold"}>{founder.name}</span>
        <br />
        <span className={"text-regular-font italic"}>
          {founder.affiliation}
        </span>
        <br />
        <br />
        <span className={"mt-4 text-regular-font leading-relaxed"}>
          {founder.description}
        </span>
      </div>
    </div>
  );
};

export default React.memo(FounderSection);
