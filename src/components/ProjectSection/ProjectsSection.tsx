import HoverButton from "../HoverButton/HoverButton";
import { ButtonMode } from "../HoverButton/HoverButton.styles";
import Divider from "../Divider";
import * as S from "./ProjectsSection.styles";
import useViewport from "../UseViewport";
import { projectTeamLottieOptions } from "../../utility/LottieOptions";
import styles from "../../pageLayouts/HomePage.module.css";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
/* Projects section on the homepage */
export const ProjectsSection = () => {
  const { width } = useViewport(); // get screen width

  return (
    <div className="max-[500px]:pb-20 bg-dark-background pb-32 pt-12 text-white">
      {width && width > 1200 ? (
        <div className={styles.homePage__container}>
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <div className="max-width-thousandFourHundred:grid-cols-[2fr_1.1fr] min-width-thousandFourHundred:grid-cols-[2fr_1.2fr] max-width-thousandTwoHundred:grid-cols-[2fr_1fr] mt-[3vw] grid">
            {" "}
            {/*ProjectDescriptionDiv*/}
            <div className="w-fit">
              {" "}
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
              <div className="max-width-thousandTwoHundred:mt-[12vw] min-width-thousandTwoHundred:mt-[3vw] min-width-thousandTwoHundred:w-fit">
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
            <div className="w-fit">
              <div className="max-width-thousandTwoHundred:mx-0 max-width-thousandTwoHundred:mb-[5vw] max-width-thousandTwoHundred:ml-[12vw] max-width-thousandTwoHundred:h-[60vw] max-width-thousandTwoHundred:w-[60vw] max-width-thousandTwoHundred:items-center min-width-thousandTwoHundred:absolute min-width-thousandTwoHundred:bottom-0 min-width-thousandTwoHundred:mb-[8vw] h-[30vw] w-[30vw]">
                <Lottie
                  {...projectTeamLottieOptions}
                  style={{ marginLeft: "5vw" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.homePage__container}>
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
          <S.projectButtonDiv>
            <HoverButton
              link={"/projects"}
              linkIsInternal={true}
              mode={ButtonMode.GRADIENT}
              text={"Check out our projects!"}
            />
          </S.projectButtonDiv>
        </div>
      )}
    </div>
  );
};
