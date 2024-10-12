import * as S from "./FeaturedProjectSection.styles";
import { Project } from "./ProjectData";
import FeaturedProject from "../FeaturedProject";

import "react-multi-carousel/lib/styles.css";

type FeaturedProjectSectionProps = {
  featuredProjects: Project[];
};

/* Project section on the Projects page */
const FeaturedProjectSection = (props: FeaturedProjectSectionProps) => {
  return (
    <S.FeaturedProjectSectionDiv>
      {props.featuredProjects.map((project, index) => (
        <FeaturedProject
          description={project.description}
          github={project.github}
          image={project.image}
          key={index}
          name={project.name}
          videoEmbedID={project.videoEmbedID}
          year={project.year}
        />
      ))}
    </S.FeaturedProjectSectionDiv>
  );
};

export default FeaturedProjectSection;
