import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { applyPageTeamLottieOptions } from "../utility/LottieOptions";
import execs_24 from "../images/execs_24.jpg";
import ApplySection from "../components/ApplySection";
import Accordion from "../components/Apply/Accordion";
import Divider from "../components/Divider";
import HoverButton from "../components/HoverButton/HoverButton";
import { ButtonMode } from "../components/HoverButton/HoverButton.styles";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqAccordionData = [
  {
    description: `<strong>Project Software Developer</strong></br>
      As a developer, you will learn to architect and build awesome
      projects and participate in team events. You want
      to collaborate with your team to build awesome software and learn
      professional development practices.
      </br></br>
      <strong>Business Strategist</strong></br>
      As a strategist, you will focus on the business side of the
      project, working alongside the Executive VP Strategy to learn
      and develop a business deliverable i.e. business plan, business 
      canvas, report, and/or pitch at the end of the term. This can be saved
      for your portfolio to share with future employers.
      </br></br>
      <strong>Project Designer</strong></br>
      As a designer, you will be in charge of making the
      attractive, creative interfaces that provide great user experiences for the front-end
      of your project. This role requires creativity, a practical and user-friendly 
      perspective, and an eye for art!
      </br></br>
      <strong>Project Manager</strong> (separate application)</br>
      As a project manager, you will be in charge of organizing, coordinating, and 
      leading the team to create complex projects! This involves leading
      weekly team meetings, leading the team vision, and guiding the project process.`,
    title: "What roles are there in a project?",
  },
  {
    description: `
      You will get to
      <li>learn and exercise professional development and design practices </li>
      <li>experience the full cycle of developing a project from nothing </li>
      <li>experience and practice development, business, or design skills </li>
      <li>work collaboratively on a project and learn from those around you</li>
      <li>expand your portfolio by working on a team project</li>
      <li>make friendships and connections with UCalgary's best  </li>`,
    title: "Why join a project?",
  },
  {
    description: `
      A passion for learning and experimenting, and a willingness to get involved! We welcome everyone of all skill levels, whether you are a complete
      beginner just starting out or if you’ve done several internships and have
      a portfolio of awesome projects.`,
    title: "What is required to take part in a project?",
  },
  {
    description: `
      Team members must be able to attend the majority of our weekly dev nights, which are held on Thursdays from 5:30-7:30PM.
      </br></br>
      Beyond the dev nights, you should expect to contribute a minimum of 1-2 hours of additional work per week.
      </br></br>
      Additional team meetings may be arranged by your Project Manager when necessary.`,
    title: "What commitments are expected of project members?",
  },
  {
    description: `
      Your Project Manager will pick one of the following ways to decide the team's project focus:
      </br></br>
      <strong>Focused</strong></br>
      The project starts off with a specific idea or concept from the get-go. These ideas are pitched at the 
      first Tech Start meeting to give you an idea of the types of projects your team will make! Then your team works together to brainstorm adaptations 
      and improvements to the idea, alongside the technologies and platforms to work with!
      </br></br>
      <strong>Open-Ended</strong></br>
      Rather than starting with ideas, projects start in mind with what technologies and platforms they will use, keeping in mind 
      the project manager's previous experiences. Then, based off that, you as a team get to pick 
      a concept, purpose, and scope for the project according to your interests and ideas!`,
    title: "How do teams pick an idea for their project?",
  },
  {
    description: `
      Tech Start projects are themed around startups and entrepreneurship. 
      Our teams use entrepreneurial thinking to guide their decision making and design their 
      project around fulfilling a specific market niche and meeting the needs of a target audience. 
      Despite this theme, Tech Start projects are not about building real startups - instead, 
      we're focused on teaching skills, providing mentorship, and building projects that can boost 
      your portfolio and your career. That said, if you want to pursue your project as a real entrepreneurial 
      venture and monetize it outside of Tech Start, we're able to provide support and direct you to resources 
      that you can use.`,
    title: "Do we try to monetize projects?",
  },
  {
    description: `The Executive Team runs behind the scenes to organize and maintain
      project teams, run workshops and events, and much more. There are
      many portfolios on the team, each essential to the carrying out
      the entrepreneurial and inventive vision for the community. More
      information on unique roles is in our application!`,
    title: "What does the Executive Team do?",
  },
];

const applications = [
  {
    applicationLink: "https://forms.gle/aH3r7eKwk3sSHhwp8",
    closedStatus: "APPLICATIONS CLOSED",
    deadline: "",
    description:
      "Work and grow as a developer, business strategist, or designer. Collaborate with team members on various platforms to build an exciting project for 1 academic year.",
    role: "Project Member",
    statusIsOpen: true,
  },
  {
    applicationLink: "https://forms.gle/sXrtiz5PQCLdwK6N7",
    closedStatus: "APPLICATIONS CLOSED",
    deadline: "",
    description:
      "Manage a project for 1 year and lead a team of 6-9 project members to create complex projects.",
    role: "Project Manager",
    statusIsOpen: false,
  },
  {
    applicationLink: "https://forms.gle/GtioLzJqeNcPYHjB6",
    closedStatus: "APPLICATIONS CLOSED",
    deadline: "",
    description:
      "Work behind the scenes for 1 academic year to organize project teams, run workshops and events, and grow our club culture. Be a visionary that helps this club fulfill its goals!",
    role: "Executive Team",
    statusIsOpen: true,
  },
];

const AnimationStyles = () => (
  <style>{`
    @keyframes animate1 {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 1000px;
      }
    }
    @keyframes animate2 {
      0% {
        background-position-x: 500px;
      }
      100% {
        background-position-x: -250px;
      }
    }
  `}</style>
);
const Blobbie = dynamic(() => import("../components/Blobbie"), { ssr: false });

const ApplyPage = () => {
  const [active, setActive] = useState("");
  return (
    <div className="overflow-hidden">
      <div className="absolute left-0 top-[80vh] h-[100px] w-full animate-[animate1_15s_linear_infinite] bg-[url('../images/wave.png')]"></div>
      <div className="bg-[position-x:200px] absolute left-0 top-[80vh] h-[120px] w-full animate-[animate2_9s_linear_infinite] bg-[url('../images/wave.png')] opacity-50"></div>
      <AnimationStyles />
      <header
        className="h-[80vh] w-screen overflow-hidden text-white"
        id="applyPageTop"
        style={{
          backgroundImage:
            "linear-gradient( var(--primary-green),var(--lightwash-green), var(--baby-blue))",
        }}
      >
        <div data-aos="zoom-out-down"></div>
        <div className="relative top-[20%] flex flex-col items-start">
          <motion.h1
            animate={{ opacity: 1 }}
            className="primaryTitle relative top-[20%] ml-[10%] sm:top-[3vh] md:top-[5vh]"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            APPLY
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="relative top-[20%] ml-[10%] text-[clamp(18px,1vw+12px,24px)] sm:top-[3vh] md:top-[5vh]"
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            Apply below to be a Project Manager or Executive! For more
            information, join our{" "}
            {
              <a className="text-white" href="https://discord.gg/Sxj5QrxRPk">
                <b>
                  <u>Discord</u>
                </b>
              </a>
            }
            .
          </motion.p>
        </div>
      </header>
      <div className="relative mx-auto my-10 justify-center">
        <Blobbie
          edge={true}
          id={8}
          transform="translate(-40%, 20%)"
          width={400}
        />
        <Blobbie
          edge={false}
          id={7}
          transform="translate(83vw, 80%)"
          width={350}
        />
        <div className="my-[5%]">
          <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--lessMargin">
            What We Do
          </h1>
          <Divider />

          <div
            className="flex justify-center overflow-hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="regularText regularText--largest w-4/5 text-center">
              Tech Start is a collaborative software development club at the
              University of Calgary with a passion for startups. Every semester,
              we create tech projects in teams with a focus on teaching our
              members professional engineering skills and practices. Our
              projects also explore aspects beyond programming, like design and
              strategy, and there are opportunities to get involved regardless
              of your skill level. Join our community to fuel your learning and
              creativity, make awesome connections, and grow as a professional!
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HoverButton
              glowOnHover={false}
              link={"https://linktr.ee/techstartuofc"}
              linkIsInternal={false}
              mode={ButtonMode.DARK}
              text={"Check out our Link Tree!"}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[3%] w-[80vw] text-center">
        <h1 className="mb-5 text-[clamp(24px,0.4vw+24px,30px)] font-semibold">
          Join a project to make new friends, gain new skills, and supercharge
          your portfolio!
        </h1>

        <img
          alt="Project Example"
          className="mx-auto w-[85vw] max-w-[900px]"
          src={execs_24.src}
        />
      </div>
      <div className="flex flex-col items-center bg-[#202020] text-white md:flex-row">
        <div className="mt-[40px] w-[60vw] min-w-[10vw] scale-[1.5] md:ml-[7%] md:mt-0 md:w-[24vw] md:scale-125">
          <Lottie {...applyPageTeamLottieOptions} />
        </div>
        <div className="w-[50vw] bg-[#202020] p-[5%_3%]">
          <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--white">
            FAQ
          </h1>
          {faqAccordionData.map((data, index) => (
            <Accordion
              active={active}
              description={data.description}
              key={index}
              setActive={setActive}
              title={data.title}
            />
          ))}
        </div>
        <Blobbie
          edge={false}
          id={2}
          transform="translate(-30%, 70%)"
          width={130}
        />
      </div>
      <div className="relative mx-auto my-10 justify-center">
        <Blobbie
          edge={false}
          id={2}
          transform="translate(clamp(90vw, calc(5vw + 1rem), 40vw), 20%)"
          width={290}
        />
        <Blobbie
          edge={false}
          id={3}
          transform="translate(clamp(-70vw, calc(5vw + 1rem), 40vw), -15%)"
          width={200}
        />

        <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--lessMargin">
          Applications
        </h1>
        <Divider />
        <ul className="md:inline-flex">
          {applications.map((section, index) => (
            <ApplySection
              applicationLink={section.applicationLink}
              closedStatus={section.closedStatus}
              deadline={section.deadline}
              description={section.description}
              key={index}
              role={section.role}
              statusIsOpen={section.statusIsOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplyPage;
