import "./GuidesSection.css";
import imgDjango from "images/guides/django.png";
import imgGit from "images/guides/git.png";
import imgWebDev from "images/guides/webdev.png";
import imgReact from "images/guides/react.png";
import imgApi from "images/guides/api.png";
import { GlobalStyles } from "../../types/Themes.js";
import Guide from "./Guide";

const GuidesSection = () => (
  <section className="techGuidesSection">
    <GlobalStyles />

    <Guide
      description="Learn Django, a python-based web framework for building backends, APIs, multi-page applications, and more!"
      guideName="Django Guide"
      image={imgDjango.src}
      link="https://docs.techstartucalgary.com/guides/Django_Guide/index.html"
    />

    <Guide
      description="Git is a fundamental tool for source control and collaborative development. This guide will help you learn and master git and GitHub workflows!"
      guideName="Git Guide"
      image={imgGit.src}
      link="https://docs.techstartucalgary.com/guides/Git_Guide/index.html"
    />

    <Guide
      description="Learn the fundamentals of web development, with free resources and advice for mastering HTML, CSS, JS, and more!"
      guideName="Web Dev Guide"
      image={imgWebDev.src}
      link="https://docs.techstartucalgary.com/guides/Web_Dev_Guide/index.html"
    />

    <Guide
      description="Learn the essentials of React, hooks, APIs, Redux, and React Native!"
      guideName="React Guide"
      image={imgReact.src}
      link="https://docs.techstartucalgary.com/guides/React_Guide/index.html"
    />

    <Guide
      description="Learn about types of APIs, Rest APIs, Postman, and GraphQL!"
      guideName="API Guide"
      image={imgApi.src}
      link="https://docs.techstartucalgary.com/guides/GraphQL_API_Guide/index.html"
    />
  </section>
);

export default GuidesSection;
