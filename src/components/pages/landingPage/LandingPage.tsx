import AboutSec from "../landingPage/aboutSection/AboutSec";
import ExperienceEducation from "../landingPage/experienceAndEducation/ExperienceAndEducation";
import Skills from "./skills/Skills";
const LandingPage: React.FC = () => {
  return (
    <div>
      <AboutSec />
      <ExperienceEducation />
      <Skills />
    </div>
  );
};

export default LandingPage;
