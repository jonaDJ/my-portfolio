import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import "./Skills.scss";
import skillsData from "./SkillsData.json";

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <WrapperComponent>
        <div className="skills-container">
          <h2 className="skills-header">SKILLS</h2>
          <div className="skills-content">
            {skillsData.items.map((categoryData) => (
              <div className="skill-category">
                <h3 className="skill-category-header">
                  {categoryData.category}
                </h3>
                <div className="skill-category-items">
                  {categoryData.skills.map((skill) => (
                    <div className="skill-item">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperComponent>
    </section>
  );
};
export default Skills;
