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
    <S.ProjectsSection>
      {width && width > 1200 ? (
        <div className={styles.homePage__container}>
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <S.ProjectDescriptionDiv>
            <S.ProjectsSectionItem>
              <p className="regularText regularText--white">
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

              <S.projectButtonDiv>
                <HoverButton
                  glowOnHover={true}
                  link={"/projects"}
                  linkIsInternal={true}
                  mode={ButtonMode.GRADIENT}
                  text={"Check out our projects!"}
                />
              </S.projectButtonDiv>
            </S.ProjectsSectionItem>
            <S.ProjectsSectionItem>
              <S.LottieDiv>
                <Lottie
                  {...projectTeamLottieOptions}
                  style={{ marginLeft: "5vw" }}
                />
              </S.LottieDiv>
            </S.ProjectsSectionItem>
          </S.ProjectDescriptionDiv>
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
    </S.ProjectsSection>
  );
};
