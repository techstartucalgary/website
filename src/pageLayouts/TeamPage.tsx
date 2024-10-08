import TeamSection from "../components/TeamSection/TeamSection";
import HoverButton from "../components/HoverButton/HoverButton";
import { ButtonMode } from "../components/HoverButton/HoverButton.styles";
import { motion } from "framer-motion";
import * as S from "./TeamPage.styles";
import * as T from "../components/TeamSection/TeamSection.styles";
import FounderSection from "../components/TeamFounder/FounderSection";
import Team from "../components/TeamSection/Team";
import { boardMembers } from "../components/TeamSection/TeamInformation";
import useViewport from "../components/UseViewport";
import Divider from "../components/Divider";
import dynamic from "next/dynamic";

const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const TeamPage = () => {
  // set defaultView flag according to screen width cutoff value
  const { width } = useViewport(); // get screen width
  const defaultView = width && width > 600 ? true : false;
  return (
    <S.TeamPage id="teamPageTop">
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
      <S.TeamPageHeader>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h1>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          Tech Start is only possible thanks to our team of talented, passionate
          leaders. Interested in joining us?
        </motion.p>
        <motion.div
          animate={{ opacity: 1 }}
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
      </S.TeamPageHeader>

      <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        The Board
      </h1>
      <Divider />
      <FounderSection />
      <T.TeamSection>
        <Team
          activeCategory="executives"
          desktopView={defaultView}
          teamMembers={boardMembers}
        />
      </T.TeamSection>
      <TeamSection desktopView={defaultView} />
    </S.TeamPage>
  );
};

export default TeamPage;
