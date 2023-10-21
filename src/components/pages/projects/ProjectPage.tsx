import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ProjectPage.scss";
import img from "../../../assets/images/myAvatar.png";

const ProjectPage: React.FC = () => {
  const projectData = [
    {
      id: 1,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 1,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 1,
      title: "React Project",
      used: "HTML, CSS, and Javascript",
      desc: "Over A Four-Year Program, I Earned Certification As A Top-Ranking Student, Successfully Completing A Rigorous Curriculum Of 32 Subjects,",
    },
    {
      id: 2,
      title: "Vanilla Project",
      used: "HTML, CSS, and JS",
      desc: "Over Aleting A Rigorous Curriculum Of 32 Subjects,",
    },
  ];
  return (
    <div className="project-section">
      <WrapperComponent>
        <div className="project-container">
          <div className="project-title-header">
            <h2>Welecome to project Page</h2>
            <p>
              Here you will all different types of project I have done in my
              free time. You explore more on frontend skills
            </p>
          </div>
          <div className="project-all-cards">
            {projectData.map((data) => (
              <div className="project-card">
                <img src={img} alt="card" />
                <div className="project-card-header">
                  <div className="project-card-title-container">
                    <div className="project-card-title-header">
                      <h3>{data.title}</h3>
                      <p>{data.used}</p>
                    </div>
                    <hr className="project-card-line" />
                  </div>
                  <div className="project-card-desc">
                    <p>{data.desc}</p>

                    <button>Learn more</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default ProjectPage;
