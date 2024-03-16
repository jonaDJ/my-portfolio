import AboutSec from "../landingPage/aboutSection/AboutSec";
import ExperienceEducation from "../landingPage/experienceAndEducation/ExperienceAndEducation";
import Certificates from "./certificates/Certificates";
import Skills from "./skills/Skills";
import { LandingPageProps } from "../../../data/landingPageData";

const LandingPage: React.FC<LandingPageProps> = (landingPageData) => {
  const {
    aboutSectionData,
    experienceAndEducationData,
    certificatesData,
    skillsData,
  } = landingPageData;

  return (
    <div>
      <AboutSec {...aboutSectionData} />
      <ExperienceEducation {...experienceAndEducationData} />
      <Skills {...skillsData} />
      <Certificates certifcatesData={certificatesData} />
    </div>
  );
};

export default LandingPage;
