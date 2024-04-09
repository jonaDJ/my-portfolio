import React from "react";
import { SkillsDataProps } from "../landingPageData";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Skills.scss";

const Skills: React.FC<{ skills: SkillsDataProps[] }> = ({ skills }) => {
  return (
    <section className="skills-section" aria-labelledby="skills-section-title">
      <WrapperComponent>
        <div className="skills-container">
          <h2 id="skills-section-title" className="skills-header">
            SKILLS
          </h2>
          <div className="skills-content">
            {skills.map((skill, index) => (
              <a href="/" key={index}>
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
