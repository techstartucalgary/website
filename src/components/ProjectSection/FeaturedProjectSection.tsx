import { Project } from "./ProjectData";
import FeaturedProject from "../FeaturedProject";

import "react-multi-carousel/lib/styles.css";

type FeaturedProjectSectionProps = {
  featuredProjects: Project[];
};

/* Project section on the Projects page */
const FeaturedProjectSection = (props: FeaturedProjectSectionProps) => {
  return (
    <div className="max-:ml-[11%] max-[1055px]:ml-[8%] min-[1055px]:grid min-[1055px]:grid-cols-1 mx-[5%] mb-[10%] mt-[5%] flex flex-col justify-center gap-5">
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
    </div>
  );
};

export default FeaturedProjectSection;
