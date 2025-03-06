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
    // <div className="max-[1055px]:ml-[8%] min-[1055px]:grid min-[1055px]:ml-[7%] min-[1055px]:grid-cols-2 min-width-thousand:grid-cols-3 mx-[5%] mb-[10%] ml-[11%] mt-[5%]">
    <div className="mx-[5%] mb-[10%] mt-[5%] grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {width && width < 1024 ? (
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
    </div>
  );
};

export default ProjectSection;
