import AboutSec from "../landingPage/aboutSection/AboutSec";
import ExperienceEducation from "../landingPage/experienceAndEducation/ExperienceAndEducation";
import Certificates from "./certificates/Certificates";
import Skills from "./skills/Skills";
import { LandingPageProps } from "../../../data/landingPageData";

const LandingPage: React.FC<LandingPageProps> = ({
  aboutSectionData,
  experienceAndEducationData,
  certificatesData,
  skillsData,
}) => {
  return (
    <div>
      <AboutSec aboutSectionData={aboutSectionData} />
      <ExperienceEducation eeData={experienceAndEducationData} />
      <Skills skillsData={skillsData} />
      <Certificates certifcatesData={certificatesData} />
    </div>
  );
};

export default LandingPage;
