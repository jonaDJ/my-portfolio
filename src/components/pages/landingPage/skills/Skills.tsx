import { SkillsDataProps } from "../../../../data/landingPageData";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Skills.scss";
// import skillsData from "./SkillsData.json";

interface SkillsProps {
  skillsData: SkillsDataProps;
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  return (
    <section className="skills-section">
      <WrapperComponent>
        <div className="skills-container">
          <h2 className="skills-header">SKILLS</h2>
          <div className="skills-content">
            {skillsData.categories.map((categoryData, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="skill-category-header">
                  {categoryData.category}
                </h3>
                <ul className="skill-category-items">
                  {categoryData.skills.map((skill, skillIndex) => (
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
};
export default Skills;
