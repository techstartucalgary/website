import * as S from "./ProjectSection.styles";
import { Project } from "./ProjectData";
import Projects from "../Projects";
import useViewport from "../UseViewport";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ProjectSectionProps = {
  projects: Project[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 900 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

/* Project section on the Projects page */
const ProjectSection = (props: ProjectSectionProps) => {
  const { width } = useViewport(); // get screen width

  return (
    <S.ProjectSectionDiv>
      {width && width < 1055 ? (
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2000}
          containerClass="carousel-container"
          customTransition="all .5"
          dotListClass="custom-dot-list-style"
          draggable={true}
          infinite={true}
          itemClass="carousel-item-padding-50-px"
          keyBoardControl={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          responsive={responsive}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          swipeable={true}
          transitionDuration={500}
        >
          {props.projects.map((project, index) => {
            return (
              <Projects
                description={project.description}
                github={project.github}
                image={project.image}
                key={index}
                name={project.name}
              />
            );
          })}
        </Carousel>
      ) : (
        props.projects.map((project, index) => {
          return (
            <Projects
              description={project.description}
              github={project.github}
              image={project.image}
              key={index}
              name={project.name}
            />
          );
        })
      )}
    </S.ProjectSectionDiv>
  );
};

export default ProjectSection;
