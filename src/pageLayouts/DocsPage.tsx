import { useState, useEffect, useCallback, memo } from "react";
import Emoji from "../components/Emoji";
import docsPage__logoblack from "/public/tech-start-logo-black.png";
import docsPage__logowhite from "/public/tech-start-logo-white.png";
import GuidesSection from "../components/DocsPageSections/GuidesSection";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function DocsPage() {
  const logo = { docsPage__logoblack, docsPage__logowhite };

  const [theme, setTheme] = useState("dark");
  const [docsPage__logo, setLogo] = useState(logo.docsPage__logowhite);

  useEffect(() => {
    setTheme("dark");
    setLogo(logo.docsPage__logowhite);
  }, []);

  const themeToggler = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setLogo(
      newTheme === "light"
        ? logo.docsPage__logoblack
        : logo.docsPage__logowhite,
    );
  }, [logo.docsPage__logoblack, logo.docsPage__logowhite, theme]);

  function Branding() {
    return (
      <section>
        <ul className="mx-10 my-1 list-none pl-0 text-lg">
          <li className="ml-0 py-4 text-lg">
            <Emoji symbol="👩🏽‍💻 " />
            {`Club Name: Refer to the club as "Tech Start UCalgary", "Tech Start",
            or "TSU".`}
          </li>
          <li className="ml-0 py-4 text-lg">
            <Emoji symbol="🖥️ " />
            Logos: Want to use the Tech Start logo? You can download official
            versions from our Google Drive{" "}
            <Link
              className="text-primary-green"
              href="https://drive.google.com/drive/u/2/folders/1xYYzdgP9Asac6FP_omsDuCq0mEoaE8UY"
              rel="noreferrer"
              target="_blank"
            >
              here
            </Link>
            ! Please note that you can download the logos, but not delete or
            alter them.
          </li>
          {/*<li><Emoji symbol="🔖 " />Styling Guide: You can find a more in-depth styling guide <a href="#" target="_blank">here</a>.</li> */}
        </ul>
      </section>
    );
  }

  function ReachOut() {
    return (
      <section>
        <ul className="mx-10 my-1 list-none pl-0 text-lg">
          <li className="ml-0 py-4 text-lg">
            <Emoji symbol="💡 " />
            Website Suggestions: If you have a suggestion for our website,
            submit it to us as an Issue on our{" "}
            <Link
              className="text-primary-green"
              href="https://github.com/Tech-Start-UCalgary/tsu-website/issues"
              rel="noreferrer"
              target="_blank"
            >
              GitHub repository
            </Link>
            .
          </li>
          <li className="ml-0 py-4 text-lg">
            <Emoji symbol="📗 " />
            Guide Contributions: If you would like to contribute to our guides,
            you can reach out to us over{" "}
            <Link
              className="text-primary-green"
              href="https://discord.gg/Sxj5QrxRPk"
              rel="noreferrer"
              target="_blank"
            >
              Discord
            </Link>
            , or leave a comment on the guide about minor changes.
          </li>
          <li className="ml-0 py-4 text-lg">
            <Emoji symbol="📩 " />
            Other Suggestions: Please feel free to reach out to us over other
            concerns over one of the public channels in our{" "}
            <Link
              className="text-primary-green"
              href="https://discord.gg/Sxj5QrxRPk"
              rel="noreferrer"
              target="_blank"
            >
              Discord
            </Link>
            .
          </li>
        </ul>
      </section>
    );
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div
        className={`bg-white text-center font-inter text-docs-page-black transition-colors duration-[0.3s] dark:bg-[#0e1111] dark:text-white`}
      >
        <header className="flex min-h-screen flex-col">
          <div className="relative" id="docsPageTop">
            <span className="absolute right-[5%] inline-block size-[200px] items-center justify-center overflow-y-hidden whitespace-nowrap pl-0">
              <label className="absolute top-4 z-[11] inline-block h-6 w-[52px] cursor-pointer">
                {theme === "light" ? (
                  <FontAwesomeIcon
                    className="absolute right-[14%] top-[18%] z-[1] h-[1em] text-base text-white"
                    icon={faMoon}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="absolute left-[9%] top-[15%] z-[1] h-[1em] text-lg text-[rgb(255,213,75)]"
                    icon={faSun}
                  />
                )}

                <input
                  className="size-0 opacity-0"
                  onClick={themeToggler}
                  type="checkbox"
                ></input>
                <span
                  className={`absolute ${theme === "light" ? "bg-primary-green" : "bg-blue-400"} inset-0 cursor-pointer rounded-[35%] transition duration-[0.4s] before:absolute before:bottom-5 before:top-[3px] before:h-[18.5px] before:w-[19px] before:rounded-full before:bg-white before:text-xl before:transition-transform before:duration-[0.4s] before:content-[''] ${theme === "light" ? "before:translate-x-[-21px] before:bg-[rgb(255,213,75)]" : ""}`}
                ></span>
              </label>
            </span>

            <h2 className="mx-auto flex w-[98%] py-8 text-left">
              <ul className="-ml-5 -mt-5 gap-5 p-[revert] text-left">
                <LinkScroll
                  className="cursor-pointer"
                  duration={500}
                  offset={-95}
                  spy={true}
                  to="docsPage__techGuidesSection"
                >
                  <li className="relative mx-5 list-none pb-[5px] after:absolute after:left-0 after:h-[3px] after:w-0 after:bg-primary-green after:transition-all after:duration-500 after:content-[''] hover:after:w-full">
                    <div className="py-1 font-inter text-base font-thin uppercase text-docs-page-black no-underline dark:text-white">
                      <Emoji symbol="📚 " />
                      Tech Guides
                    </div>
                  </li>
                </LinkScroll>
                <LinkScroll
                  className="cursor-pointer"
                  duration={500}
                  offset={-95}
                  spy={true}
                  to="docsPage__brandingSection"
                >
                  <li className="relative mx-5 list-none pb-[5px] after:absolute after:left-0 after:h-[3px] after:w-0 after:bg-primary-green after:transition-all after:duration-500 after:content-[''] hover:after:w-full">
                    <div className="py-1 font-inter text-base font-thin uppercase text-docs-page-black no-underline dark:text-white">
                      <Emoji symbol="📓 " />
                      Branding
                    </div>
                  </li>
                </LinkScroll>
                <LinkScroll
                  className="cursor-pointer"
                  duration={500}
                  offset={-95}
                  spy={true}
                  to="docsPage__reachOutSection"
                >
                  <li className="relative mx-5 list-none pb-[5px] after:absolute after:left-0 after:h-[3px] after:w-0 after:bg-primary-green after:transition-all after:duration-500 after:content-[''] hover:after:w-full">
                    <div className="py-1 font-inter text-base font-thin uppercase text-docs-page-black no-underline dark:text-white">
                      <Emoji symbol="📤 " />
                      Reach Out
                    </div>
                  </li>
                </LinkScroll>
              </ul>
            </h2>

            <motion.img
              animate={{ opacity: 1 }}
              className="mx-auto mb-[59px] w-[85%] max-w-[800px]"
              initial={{ opacity: 0 }}
              src={docsPage__logo.src}
              transition={{ duration: 0.5 }}
            ></motion.img>
          </div>

          <p className="mx-auto mb-[60px] mt-[30px] w-3/4 font-inter text-xl font-bold text-docs-page-black dark:text-white">
            Information, guides, and resources for Tech Start UCalgary members
          </p>

          <div className="justify-center text-left text-docs-page-black dark:text-white md:mx-auto md:w-3/4">
            <ul className="mx-10 list-none pl-0 text-2xl">
              <li id="docsPage__techGuidesSection">
                <Emoji symbol="📚 " />
                Tech Guides
              </li>
              <p className="my-4 text-lg">
                {`We've created several guides to help you learn new tools,
              programming languages, and frameworks.`}
              </p>
              <GuidesSection />
              <p className="my-4 text-lg">
                {`If you have minor fixes or suggestions for any of our guides,
              leave a comment on the corresponding Google Doc. If you're
              interested in contributing to our guides, reach out to our VP
              Development over Discord!`}
              </p>
              <li id="docsPage__brandingSection">
                <Emoji symbol="📓 " />
                Branding
              </li>
              <p className="my-4 text-lg">
                Here are our branding guidelines for you to follow whenever you
                represent Tech Start UCalgary in writing or graphics:
              </p>
              <Branding />
              <li id="docsPage__reachOutSection">
                <Emoji symbol="📤 " />
                Reach Out
              </li>
              <p className="my-4 text-lg">How to reach out to us:</p>
              <ReachOut />
              <div className="h-[60px]"></div>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default memo(DocsPage);
