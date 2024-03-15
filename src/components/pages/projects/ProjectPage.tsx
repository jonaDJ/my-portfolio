import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ProjectPage.scss";
import img from "../../../assets/images/myAvatar.png";
import { ProjectDataProps } from "../../../data/projectPageData";

const ProjectPage: React.FC<ProjectDataProps> = ({
  title,
  desc,
  projectList,
}) => {
  return (
    <div className="project-section">
      <WrapperComponent>
        <div className="project-container">
          <div className="project-title-header">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="project-all-cards">
            {projectList.map((data) => (
              <div key={data.id} className="project-card">
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
