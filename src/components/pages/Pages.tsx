import React from "react";
import AboutSec from "./landingPage/aboutSection/AboutSec";
import ExperienceEducation from "./landingPage/experienceAndEducation/ExperienceAndEducation";

const Pages: React.FC = () => {
  return (
    <main>
      <AboutSec />
      <ExperienceEducation />
    </main>
  );
};

export default Pages;
