import React from "react";
import { founder } from "../TeamSection/TeamInformation";
import useViewport from "../UseViewport";
import Image from "next/image";

const FounderSection = () => {
  const { width } = useViewport();
  const defaultView = width && width > 600;

  return (
    <div className="mx-auto mt-12 flex max-w-[900px] flex-col items-center justify-center md:flex-row">
      {/* Founder Image Container */}
      <div className="relative mb-6 size-64 shrink-0 md:mb-0 md:mr-16 md:size-80">
        <Image
          alt={founder.name}
          className="size-full rounded-[80%] object-cover"
          fill
          priority
          src={founder.image}
        />
      </div>

      {/* Founder Details */}
      <div className="px-4 text-white md:px-0">
        <span
          className={`block font-bold ${
            defaultView ? "text-4xl" : "text-[30px]"
          }`}
        >
          {founder.name}
        </span>
        <span
          className={`block italic ${defaultView ? "text-2xl" : "text-xl"}`}
        >
          {founder.affiliation}
        </span>
        <p
          className={`mt-4 leading-relaxed ${
            defaultView ? "text-2xl" : "text-lg"
          }`}
        >
          {founder.description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(FounderSection);
