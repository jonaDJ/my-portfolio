import React from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ProjectPage.scss";
import img from "../../../assets/images/myAvatar.png";
import { ProjectDataProps, Projects } from "../../../data/projectPageData";

const ProjectCard: React.FC<{ data: Projects }> = ({ data }) => (
  <div className="project-card">
    <img src={img} alt={`Project: ${data.title}`} aria-hidden="true" />
    <div className="project-card-header">
      <div className="project-card-title-container">
        <div className="project-card-title-header">
          <h3>{data.title}</h3>
          <p>Tools used: {data.used}</p>
        </div>
        <hr className="project-card-line" />
      </div>
      <div className="project-card-desc">
        <p>{data.desc}</p>
        <button aria-label={`Learn more about ${data.title}`}>
          Learn more
        </button>
      </div>
    </div>
  </div>
);

const ProjectPage: React.FC<ProjectDataProps> = ({
  title,
  desc,
  projectList,
}) => (
  <div className="project-section">
    <WrapperComponent>
      <div className="project-container">
        <div className="project-title-header">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="project-all-cards">
          {projectList.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </WrapperComponent>
  </div>
);

export default ProjectPage;
