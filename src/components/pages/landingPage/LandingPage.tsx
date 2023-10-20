import AboutSec from "../landingPage/aboutSection/AboutSec";
import ExperienceEducation from "../landingPage/experienceAndEducation/ExperienceAndEducation";
import Certificates from "./certificates/Certificates";
import Skills from "./skills/Skills";
const LandingPage: React.FC = () => {
  return (
    <div>
      <AboutSec />
      <ExperienceEducation />
      <Skills />
      <Certificates />
    </div>
  );
};

export default LandingPage;
