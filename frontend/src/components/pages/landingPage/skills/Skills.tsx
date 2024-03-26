import React from "react";
import { SkillsDataProps } from "../../../../data/landingPageData";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Skills.scss";

const Skills: React.FC<{ skillsData: SkillsDataProps[] }> = ({
  skillsData,
}) => {
  return (
    <section className="skills-section" aria-labelledby="skills-section-title">
      <WrapperComponent>
        <div className="skills-container">
          <h2 id="skills-section-title" className="skills-header">
            SKILLS
          </h2>
          <div className="skills-content">
            {skillsData.map((skill) => (
              <a href="/">
                <img src={skill.logo} alt={skill.name} />
              </a>
            ))}
          </div>
        </div>
      </WrapperComponent>
    </section>
  );
};

export default Skills;
