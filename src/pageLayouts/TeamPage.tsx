/* eslint-disable prettier/prettier */
import TeamSection from "../components/TeamSection/TeamSection";
import HoverButton from "../components/HoverButton/HoverButton";
import { ButtonMode } from "../components/HoverButton/HoverButton.styles";
import { motion } from "framer-motion";
import FounderSection from "../components/TeamFounder/FounderSection";
import Team from "../components/TeamSection/Team";
import { boardMembers } from "../components/TeamSection/TeamInformation";
import useViewport from "../components/UseViewport";
import Divider from "../components/Divider";
import dynamic from "next/dynamic";

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const TeamPage = () => {
  const { width } = useViewport();
  const defaultView = width && width > 600 ? true : false;

  return (
    <div
      className="relative box-border h-full overflow-hidden scroll-smooth whitespace-normal border-none bg-black p-0 font-sans leading-6"
      id="teamPageTop"
    >
      <Blobbie
        edge={true}
        id={2}
        transform="translate(80vw, 0vw)"
        width={300}
      />
      <Blobbie
        edge={false}
        id={8}
        transform="translate(-10vw, 10vw)"
        width={250}
      />

      <header className="flex min-h-[50vh] flex-col bg-white py-[3em] text-center text-[var(--secondary-grey)]">
        <motion.h1
          className="isolate my-[0.67em] mb-6 font-bold text-[var(--title-size)]"
          initial={{ opacity: 1 }}
          style={{ fontSize: "var(--title-size)" }} // Fallback for variable issue
        >
          Our Team
        </motion.h1>
        <motion.p
          className="isolate my-8 px-6 text-[var(--babyHeading-size)] md:text-[var(--regular-font)]"
          initial={{ opacity: 1 }}
          style={{ fontSize: "var(--babyHeading-size)" }} // Ensure correct application
        >
          Tech Start is only possible thanks to our team of talented, passionate
          leaders. Interested in joining us?
        </motion.p>
        <motion.div
          animate={{ opacity: 1 }}
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          <HoverButton
            glowOnHover={false}
            link="/apply"
            linkIsInternal={true}
            mode={ButtonMode.GRADIENT}
            text={"Apply Now"}
          />
        </motion.div>
      </header>

      <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        The Board
      </h1>
      <Divider />
      <FounderSection />
      <section className="p-4">
        <Team
          activeCategory="executives"
          desktopView={defaultView}
          teamMembers={boardMembers}
        />
      </section>
      <TeamSection desktopView={defaultView} />
    </div>
  );
};

export default TeamPage;
