import imgDjango from "/public/guides/django.png";
import imgGit from "/public/guides/git.png";
import imgWebDev from "/public/guides/webdev.png";
import imgReact from "/public/guides/react.png";
import imgApi from "/public/guides/api.png";
import Guide from "./Guide";
import { memo } from "react";

const GuidesSection = () => (
  <section className="flex flex-wrap justify-center gap-x-[100px] gap-y-20 text-center">
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

export default memo(GuidesSection);
