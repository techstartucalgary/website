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

      <header className="text-secondary-grey bg-white py-12 text-center">
        <motion.h1
          animate={{ opacity: 1 }}
          className="text-titleSize"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h1>
        <motion.p
          animate={{ opacity: 1 }}
          className="text-babyHeading-size md:text-regular-font"
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
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
