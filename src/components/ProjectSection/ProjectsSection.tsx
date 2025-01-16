import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import Divider from "../Divider";
import * as S from "./ProjectsSection.styles";
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
          <div className="mt-[3vw] grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_1.1fr] lg:grid-cols-[2fr_1.2fr]">
            <div className="w-fit">
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

              <div className="mt-[12vw] xl:mx-0 xl:mb-[3vw] xl:mt-0 xl:w-fit">
                <HoverButton
                  glowOnHover={true}
                  link={"/projects"}
                  linkIsInternal={true}
                  mode={ButtonMode.GRADIENT}
                  text={"Check out our projects!"}
                />
              </div>
            </div>
            <div className="w-fit">
              <S.LottieDiv>
                <Lottie
                  {...projectTeamLottieOptions}
                  style={{ marginLeft: "5vw" }}
                />
              </S.LottieDiv>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <S.LottieDiv>
            <Lottie {...projectTeamLottieOptions} />
          </S.LottieDiv>
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
          <div className="mt-[12vw] xl:mx-0 xl:mb-[3vw] xl:mt-0 xl:w-fit">
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
