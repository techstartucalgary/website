import React from "react";
import HoverButton from "./HoverButton/HoverButton";
import * as S from "./FeaturedProject.styles";
import { ButtonMode } from "./HoverButton/HoverButton.styles";

interface featuredProjectProps {
  image: string;
  github: string;
  description: string;
  name: string;
  year: string;
  videoEmbedID: string;
}
function FeaturedProject(props: featuredProjectProps) {
  return (
    <S.FeaturedProjectContainer>
      <S.FeaturedProjectTitle>{props.name}</S.FeaturedProjectTitle>
      <S.FeaturedProjectYear>{props.year}</S.FeaturedProjectYear>
      <S.FeaturedProjectContent>
        {props.description}
        {
          <div style={{ marginTop: "20px" }}>
            <HoverButton
              link={props.github}
              linkIsInternal={false}
              mode={ButtonMode.DARK}
              text={"Visit " + props.name + "'s Github \u2192"}
            />
          </div>
        }
      </S.FeaturedProjectContent>
      {props.videoEmbedID ? (
        <S.FeaturedProjectMediaContainer>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            height="100%"
            src={`https://www.youtube.com/embed/${props.videoEmbedID}?autoplay=1&mute=1&playlist=${props.videoEmbedID}&loop=1&controls=0`}
            style={{ pointerEvents: "none" }}
            title="YouTube video player"
            width="100%"
          ></iframe>
        </S.FeaturedProjectMediaContainer>
      ) : (
        <S.FeaturedProjectMediaContainer>
          <S.FeaturedProjectImage src={props.image} />
        </S.FeaturedProjectMediaContainer>
      )}
    </S.FeaturedProjectContainer>
  );
}

export default React.memo(FeaturedProject);
