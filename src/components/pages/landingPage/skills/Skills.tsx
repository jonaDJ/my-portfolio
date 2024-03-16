import React from "react";
import { SkillsDataProps } from "../../../../data/landingPageData";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Skills.scss";

const Skills: React.FC<SkillsDataProps> = (skillsData) => (
  <section className="skills-section" aria-labelledby="skills-section-title">
    <WrapperComponent>
      <div className="skills-container">
        <h2 id="skills-section-title" className="skills-header">
          SKILLS
        </h2>
        <div className="skills-content">
          {skillsData.categories.map(({ category, skills }, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="skill-category-header">{category}</h3>
              <ul
                className="skill-category-items"
                aria-label={`${category} skills`}
              >
                {skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </WrapperComponent>
  </section>
);

export default Skills;
