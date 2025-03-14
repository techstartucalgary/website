import tsu_logo from "../images/tech-start-logo-white.png";
import { motion } from "framer-motion";

import NumberStat from "../components/NumberStat";
import Divider from "../components/Divider";
import Particle from "../components/Particles";
import SponsorSection from "../components/SponsorSection/SponsorSection";
import dynamic from "next/dynamic";
import EventsSection from "../components/EventsSection/EventsSection";
import { ProjectsSection } from "../components/ProjectSection/ProjectsSection";
import ApplyButton from "../components/ApplyButton";

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const HomePage = () => {
  return (
    <div className="m-0 box-border overflow-hidden border-none leading-normal">
      <header
        className="relative flex h-[60vw] flex-col text-center md:h-[70vw] max-xs:pb-8"
        id="homePageTop"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0, 0, 0), var(--primary-black))",
        }}
      >
        <Particle />
        <div className="pointer-events-none relative z-[3]">
          <motion.img
            animate={{ opacity: 1 }}
            className="mx-auto mt-[50px] w-[85%] max-w-[800px]"
            initial={{ opacity: 0 }}
            src={tsu_logo.src}
            transition={{ duration: 0.5 }}
          ></motion.img>
        </div>
        <motion.p
          animate={{ opacity: 1 }}
          className="pointer-events-none z-[3] mb-[100%] mt-0 text-[5vw] font-bold leading-[1.1] text-white"
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          a tech club for dreamers and doers
        </motion.p>
      </header>

      <section className="relative bg-white pb-[5em] pt-[8em] text-center">
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
        <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
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
          <div className="mt-[30px] grid grid-cols-1 gap-x-[30px] md:mt-[75px] md:grid-cols-3">
            <NumberStat number={20} stat="projects so far" />
            <NumberStat number={230} stat="members so far" />
            <NumberStat
              number={99}
              stat="enjoyed their involvement"
              suffix={"%"}
            />
          </div>
          <div className="relative flex h-fit justify-center px-0 pb-[4vw] pt-[2vw]">
            <ApplyButton />
          </div>
        </div>
      </section>

      <ProjectsSection />

      <section className="relative bg-white py-[8em]">
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

        <div className="mx-auto my-0 w-[85%] max-w-[65em] text-center text-white">
          <h1 className="chonkyHeading chonkyHeading--lessMargin">Events</h1>
          <Divider />
          <EventsSection />
        </div>
      </section>

      <section className="relative bg-white pb-[70px] pt-[20px] md:pb-[150px]">
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
