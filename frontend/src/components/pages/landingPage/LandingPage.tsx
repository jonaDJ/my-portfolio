import AboutSec from "../landingPage/aboutSection/AboutSec";
import ExperienceEducation from "../landingPage/experienceAndEducation/ExperienceAndEducation";
import Certificates from "./certificates/Certificates";
import Skills from "./skills/Skills";
import { LandingPageProps } from "./landingPageData";
import { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
  const initialData: LandingPageProps = {
    exAndEd: [],
    skills: [],
    certificates: [],
  };

  const [data, setData] = useState<LandingPageProps>(initialData);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/about");
      if (!response) {
        throw new Error();
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { skills, certificates, exAndEd } = data;

  return (
    <div>
      <AboutSec />
      <ExperienceEducation eeData={exAndEd} />
      <Skills skills={skills} />
      <Certificates certificates={certificates} />
    </div>
  );
};

export default LandingPage;
