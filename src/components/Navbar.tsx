import styles from "./Navbar.module.css";
import { useState } from "react";
import logo from "../images/tech-start-logo-white.png";
import { motion } from "framer-motion";
import ScrollableLink from "../utility/ScrollableLink";

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbarExpanded = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const hideNavbar = () => {
    setNavbarExpanded(false);
  };

  type NavbarLinkProps = {
    top: string;
    link: string;
    name: string;
  };

  const NavbarLink = (props: NavbarLinkProps) => (
    <li>
      <ScrollableLink
        duration={500}
        href={props.link}
        offset={-80}
        onClick={hideNavbar}
        to={props.top}
      >
        {" "}
        {props.name}{" "}
      </ScrollableLink>
    </li>
  );

  return (
    <header className={styles.navbar__container}>
      <div className={styles.navbar}>
        <input
          checked={navbarExpanded}
          className={styles["navbar__nav-toggle"]}
          id="navbar__nav-toggle"
          onClick={toggleNavbarExpanded}
          readOnly
          type="checkbox"
        />
        <ScrollableLink duration={500} href="/" offset={-70} to="homePageTop">
          <motion.img
            animate={{ y: 0 }}
            className={styles.navbar__logo}
            initial={{ y: -250 }}
            src={logo.src}
          />
        </ScrollableLink>
        <nav className={styles.navbar__content}>
          <motion.ul animate={{ y: 0 }} initial={{ y: -250 }}>
            <NavbarLink link="/" name="About" top="homePageTop" />
            <NavbarLink link="/team" name="Team" top="teamPageTop" />
            <NavbarLink
              link="/projects"
              name="Projects"
              top="projectsPageTop"
            />
            <NavbarLink link="/apply" name="Apply" top="applyPageTop" />
            <NavbarLink link="/merch" name="Merch" top="merchPageTop" />
            <NavbarLink link="/gallery" name="Gallery" top="galleryPageTop" />
            <NavbarLink link="/resources" name="Resources" top="docsPageTop" />
          </motion.ul>
        </nav>
        <label
          className={styles["navbar__nav-toggle-label"]}
          htmlFor="navbar__nav-toggle"
        >
          <span></span>
        </label>
      </div>
      <div className={styles.navbar__placeholder}></div>
    </header>
  );
};
export default Header;
