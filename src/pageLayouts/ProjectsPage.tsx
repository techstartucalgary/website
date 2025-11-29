import { useState } from "react";
import { teamProjectLottieOptions } from "../utility/LottieOptions";
import { motion } from "framer-motion";
import { PastProjects } from "../components/ProjectSection/ProjectData";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import FeaturedProjectSection from "../components/ProjectSection/FeaturedProjectSection";
import Divider from "../components/Divider";
import ProjectKeywordsSection from "../components/ProjectSection/ProjectKeywordsSection";
import HoverButton from "../components/HoverButton/HoverButton";
import { ButtonMode } from "../components/HoverButton/HoverButton.styles";
import dynamic from "next/dynamic";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ProjectsPage = () => {
  const [featuredProjects] = useState(
    PastProjects.filter((project) => project.featured === true),
  );
  const [bestOverallProjects] = useState(
    PastProjects.filter((project) => project.showcaseWinner === true),
  );

  return (
    <div
      className="[&>h2]: relative box-border size-full overflow-hidden scroll-smooth whitespace-normal bg-dark-background px-[3wv] py-0 font-sans"
      id="projectsPageTop"
    >
      {/* // eslint-disable-next-line prettier/prettier */}
      <div className="mb-[25%] bg-white py-[5em] text-center text-secondary-grey md:mb-[15%] md:flex md:items-end">
        <div className="md:shrink-0 md:grow-0 md:basis-1/2 md:self-end">
          <div className="mt-[5%] flex justify-center md:ml-[25%] md:mt-0 md:block">
            <div className="aspect-[1630/1510] w-screen max-w-[430px] md:aspect-square md:size-[35vw] md:max-w-none">
              <Lottie
                {...teamProjectLottieOptions}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:shrink-0 md:grow-0 md:basis-1/2 md:items-end md:justify-start md:self-end">
          <motion.div
            animate={{ opacity: 1 }}
            className="m-0 flex w-full flex-nowrap items-baseline justify-center gap-[0.35em] text-center text-[15vw] font-bold leading-normal md:block md:w-full md:flex-1 md:text-left md:text-[8vw] md:leading-normal"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block md:block">Our</span>
            <span className="inline-block md:mt-2 md:block">Projects</span>
          </motion.div>
        </div>
      </div>

      <h2
        className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
        style={{ marginTop: "0px" }}
      >
        Final Showcase Winners
      </h2>
      <p
        className="regularText regularText--white"
        style={{ padding: "0 10%", textAlign: "center" }}
      >
        Each year, one project is awarded the title of Best Overall Project at
        the Tech Start Final Showcase. The project group achieving the award for
        Best Overall Project is recognized for receiving the highest overall
        points in the 4 judging categories: Technical Functionality, User
        Friendliness, Presentation Quality, and Business Strategy.
      </p>
      <div className="flex flex-col justify-center">
        {bestOverallProjects.map((project) => (
          <div data-aos="fade-up" data-aos-duration="800" key={project.name}>
            <h2
              className="thiccSubheading thiccSubheading--gradient"
              style={{ textAlign: "center" }}
            >
              <Divider />
              {project.year}
            </h2>
            <div data-aos="flip-left"></div>
            <div className="mx-auto my-[5%] grid w-full max-w-[1100px] place-items-center gap-8 px-4 md:grid-cols-2">
              <span className="w-full text-left">
                <h1
                  className="babyHeading babyHeading--white"
                  style={{ fontSize: "2rem" }}
                >
                  Congratulations {project.name}!
                </h1>
                <p className="regularText regularText--white">
                  {project.description}
                </p>
                <div className="mb-[1%] flex justify-start">
                  <HoverButton
                    link={project.winnerPost as string}
                    linkIsInternal={false}
                    mode={ButtonMode.GRADIENT}
                    text={"Learn More"}
                  />
                </div>
              </span>
              <div className="mx-auto mb-[5%] flex w-full max-w-[600px] justify-center px-2.5">
                <div data-aos="flip-left">
                  <Image
                    alt={project.name}
                    className="mx-auto mt-6 block w-full max-w-[800px] object-cover"
                    height={600}
                    src={project.teamPic as string}
                    width={600}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <h2
          className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
          style={{ textAlign: "center" }}
        >
          From Ideation to Implementation
        </h2>
        <Divider />
        <h3
          className="regularText--white"
          style={{ marginBottom: "3%", textAlign: "center" }}
        >
          Explore the diverse talents of our community, and witness innovation
          in action. <br /> Have an idea for a cool project you&apos;d like to
          bring to life with Tech Start?
        </h3>
        <div className="mb-[1%] flex justify-center">
          <HoverButton
            glowOnHover={true}
            link="/apply"
            linkIsInternal={true}
            mode={ButtonMode.GRADIENT}
            text={"Apply Now"}
          />
        </div>
      </div>
      <ProjectKeywordsSection />
      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        Featured Projects
      </h2>
      <Divider />
      <FeaturedProjectSection featuredProjects={featuredProjects} />

      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        Past Projects
      </h2>
      <Divider />
      <ProjectSection projects={PastProjects} />
    </div>
  );
};

export default ProjectsPage;
