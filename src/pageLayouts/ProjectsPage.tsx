import { useState } from "react";
import { teamProjectLottieOptions } from "../utility/LottieOptions";
import { motion } from "framer-motion";
import { PastProjects } from "../components/ProjectSection/ProjectData";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import FeaturedProjectSection from "../components/ProjectSection/FeaturedProjectSection";
import Divider from "../components/Divider";
import ProjectKeywordsSection from "../components/ProjectSection/ProjectKeywordsSection";
import { NewlineText } from "../utility/Helpers";
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
      <div className="mb-[25%] bg-white py-[5em] text-center text-secondary-grey md:mb-[15%] md:flex">
        <div className="md:shrink-0 md:grow-0 md:basis-1/2 md:self-end">
          <div className="mt-[5%] flex justify-center md:mt-0 md:block">
            <div
              className="aspect-square md:ml-[25%]"
              style={{ width: "clamp(409.14px, 35vw, 520px)" }}
            >
              <Lottie
                {...teamProjectLottieOptions}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="md:shrink-0 md:grow-0 md:basis-1/2 md:self-end">
          <motion.div
            animate={{ opacity: 1 }}
            className="m-0 whitespace-pre text-center text-[15vw] font-bold md:text-left md:text-[8vw]"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {NewlineText("Our \nProjects")}
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
            <div className="m-[5%] grid max-w-[1400px] md:grid-cols-2">
              <span className="text-center md:text-left">
                <h1
                  className="babyHeading babyHeading--white"
                  style={{ fontSize: "2rem" }}
                >
                  Congratulations {project.name}!
                </h1>
                <p className="regularText regularText--white">
                  {project.description}
                </p>
                <div className="mb-[1%] flex justify-center md:justify-start">
                  <HoverButton
                    link={project.winnerPost as string}
                    linkIsInternal={false}
                    mode={ButtonMode.GRADIENT}
                    text={"Learn More"}
                  />
                </div>
              </span>
              <div className="mx-auto mb-[5%] pl-2.5">
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
