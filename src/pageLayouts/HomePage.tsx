import tsu_logo from "../images/tech-start-logo-white.png";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";
import classNames from "classnames";

import NumberStat from "../components/NumberStat";
import Divider from "../components/Divider";
import Particle from "../components/Particles";
import SponsorSection from "../components/SponsorSection/SponsorSection";
import dynamic from "next/dynamic";
import EventsSection from "../components/EventsSection/EventsSection";
import { ProjectsSection } from "../components/ProjectSection/ProjectsSection";
import ApplyButton from "../components/ApplyButton";

const cx = classNames.bind(styles);

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.homePage__hero} id="homePageTop">
        <Particle />
        <div className={styles.homePage__logoContainer}>
          <motion.img
            animate={{ opacity: 1 }}
            className={styles.homePage__logo}
            initial={{ opacity: 0 }}
            src={tsu_logo.src}
            transition={{ duration: 0.5 }}
          ></motion.img>
        </div>
        <motion.p
          animate={{ opacity: 1 }}
          className={styles.homePage__headerSubtitle}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          a tech club for dreamers and doers
        </motion.p>
      </header>

      <section
        className={cx(
          styles.homePage__section,
          styles["homePage__section--aboutUs"],
        )}
      >
        <Blobbie
          edge={true}
          id={8}
          transform="translate(-40%, 50%)"
          width={300}
        />{" "}
        {/* translate is relative to previous div*/}
        <Blobbie
          edge={false}
          id={2}
          transform="translate(clamp(10vw, calc(5vw + 1rem), -20vw), -20%)"
          width={100}
        />
        <Blobbie
          edge={false}
          id={3}
          transform="translate(clamp(80vw, calc(5vw + 1rem), -30vw), -30%)"
          width={250}
        />
        <div className={styles.homePage__container}>
          <h1 className="chonkyHeading chonkyHeading--lessMargin">
            {`We're the innovators on campus!`}
          </h1>
          <Divider />
          <p className="regularText" id="draft">
            {`We're a software club at the University of Calgary. Through
            multidisciplinary teams, we take on interesting problems and use
            technology to solve them. Every semester, our teams combine
            software, design, and strategy to complete awesome projects.`}
          </p>

          <p className="regularText">
            {`At Tech Start, our members learn to use new technologies, gain
            experience with professional development tools and methodologies,
            and master the art of collaboration. We give our members the support
            and mentorship to succeed here and in industry regardless of their
            previous experiences. We're also the top spot on campus to meet
            fellow tech enthusiasts, aspiring entrepreneurs, and innovators.`}
          </p>

          <Blobbie
            edge={true}
            id={2}
            transform="translate(75vw, -20%)"
            width={300}
          />
          <div className={styles.homePage__numberContainer}>
            <NumberStat number={20} stat="projects so far" />
            <NumberStat number={230} stat="members so far" />
            <NumberStat
              number={99}
              stat="enjoyed their involvement"
              suffix={"%"}
            />
          </div>
          <div className={styles.homePage__applyButtonBox}>
            <ApplyButton />
          </div>
        </div>
      </section>

      <ProjectsSection />

      <section
        className={cx(
          styles.homePage__section,
          styles["homePage__section--events"],
        )}
      >
        <Blobbie
          edge={true}
          id={3}
          transform="translate(-60%, 10%)"
          width={400}
        />
        <Blobbie
          edge={false}
          id={8}
          transform="translate(75vw, 0vw)"
          width={350}
        />

        <div className={styles.homePage__container}>
          <h1 className="chonkyHeading chonkyHeading--lessMargin">Events</h1>
          <Divider />
          <EventsSection />
        </div>
      </section>

      <section
        className={cx(
          styles.homePage__section,
          styles["homePage__section--sponsors"],
        )}
      >
        <Blobbie
          edge={true}
          id={9}
          transform="translate(-80%, -10%)"
          width={800}
        />{" "}
        {/* translate is relative to previous div*/}
        <Blobbie
          edge={false}
          id={2}
          transform="translate(80vw, 0)"
          width={150}
        />
        <Blobbie
          edge={false}
          id={7}
          transform="translate(90vw, 30vw)"
          width={350}
        />
        <SponsorSection />
      </section>
    </div>
  );
};
export default HomePage;
