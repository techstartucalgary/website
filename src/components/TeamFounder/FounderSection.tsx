import React from "react";
import { founder } from "../TeamSection/TeamInformation";
import useViewport from "../UseViewport";
import * as F from "./FounderSection.styles";

const FounderSection = () => {
  const { width } = useViewport(); // get screen width
  const defaultView = width && width > 600 ? true : false;
  return (
    <F.FounderContainer mobileView={!defaultView}>
      <F.FounderImageContainer>
        <F.FounderImg src={founder.imagePath} />
      </F.FounderImageContainer>
      <div className="regularText--white">
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
          {founder.name}
        </span>
        <br />
        <span style={{ fontStyle: "italic" }}>{founder.affiliation}</span>
        <br />
        <br />
        {founder.description}
        <br />
      </div>
    </F.FounderContainer>
  );
};

export default React.memo(FounderSection);
