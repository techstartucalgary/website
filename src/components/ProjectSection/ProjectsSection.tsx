import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import Divider from "../Divider";
import useViewport from "../UseViewport";
import { projectTeamLottieOptions } from "../../utility/LottieOptions";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
/* Projects section on the homepage */
export const ProjectsSection = () => {
  const { width } = useViewport(); // get screen width

  return (
    <section
      className="relative px-0 pb-[8em] pt-[5em] sm:pb-[5em]"
      style={{ background: "var(--dark-background)" }}
    >
      {width && width > 1200 ? (
        <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col space-y-8">
              {/*ProjectSectionItem*/}
              <p className="regularText regularText--white m-0 text-left">
                Every year, Tech Start runs a handful of year-long software
                development projects, each led by an experienced project
                manager. Each project aims to solve a compelling problem by
                harnessing technology and entrepreneurial principles. Our
                members participate in every stage of the software development
                lifecycle, and each team involves a diversity of roles like
                software developers, business strategists, and designers.
                <br />
                <br />
                At the end of the year, teams present their finished projects to
                our sponsors at our annual showcase, and members can add their
                project to their portfolio to supercharge their career
                prospects. Joining a Tech Start project is the best way to gain
                skills, meet friends, and network with the tech community on
                campus.
              </p>
              <div className="mt-[3vw] w-fit">
                {/* ProjectButtonDiv */}
                <HoverButton
                  glowOnHover={true}
                  link={"/projects"}
                  linkIsInternal={true}
                  mode={ButtonMode.GRADIENT}
                  text={"Check out our projects!"}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-auto w-full max-w-3xl">
                <Lottie
                  {...projectTeamLottieOptions}
                  style={{ marginLeft: "5vw" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <div className="mb-[5vw] ml-[12vw] h-[60vw] w-[60vw] items-center">
            <Lottie {...projectTeamLottieOptions} />
          </div>
          <p className="regularText regularText--white">
            Every year, Tech Start runs a handful of year-long software
            development projects, each led by an experienced project manager.
            Each project aims to solve a compelling problem by harnessing
            technology and entrepreneurial principles. Our members participate
            in every stage of the software development lifecycle, and each team
            involves a diversity of roles like software developers, business
            strategists, and designers.
            <br />
            <br />
            At the end of the year, teams present their finished projects to our
            sponsors at our annual showcase, and members can add their project
            to their portfolio to supercharge their career prospects. Joining a
            Tech Start project is the best way to gain skills, meet friends, and
            network with the tech community on campus.
          </p>
          <div className="mt-[12vw]">
            <HoverButton
              link={"/projects"}
              linkIsInternal={true}
              mode={ButtonMode.GRADIENT}
              text={"Check out our projects!"}
            />
          </div>
        </div>
      )}
    </section>
  );
};
