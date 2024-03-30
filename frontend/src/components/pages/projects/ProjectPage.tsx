import React, { useEffect, useState } from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ProjectPage.scss";
import img from "../../../assets/images/myAvatar.png";

export interface Projects {
  _id: string | number;
  title: string;
  used: string[];
  desc: string;
}

export interface ProjectDataProps {
  title: string;
  desc: string;
  projectList: Projects[];
}

const ProjectCard: React.FC<{ data: Projects }> = ({ data }) => (
  <div className="project-card">
    <img src={img} alt={`Project: ${data.title}`} aria-hidden="true" />

    <div className="project-card-header">
      <div className="project-card-title-container">
        <div className="project-card-title-header">
          <h2>{data.title}</h2>
          <p>
            Tools used:
            {data.used.map((item, index) => (
              <span key={`${index}-${data._id}`}>
                {item}
                {index !== data.used.length - 1 && "-"}
              </span>
            ))}
          </p>
        </div>
        <hr className="project-card-line" />
      </div>
      <div className="project-card-desc">
        <p>{data.desc}</p>
        <button aria-label={`Learn more about ${data.title}`}>Git Repo</button>
      </div>
    </div>
  </div>
);

const ProjectPage: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectDataProps>({
    title: "",
    desc: "",
    projectList: [],
  });

  const fetchProjectsData = async () => {
    try {
      const response = await fetch("/api/projects");
      if (!response) {
        throw new Error();
      }

      const data = await response.json();
      setProjectData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  return (
    <div className="project-section">
      <WrapperComponent>
        <div className="project-container">
          <div className="project-title-header">
            <h2>{projectData.title}</h2>
            <p>{projectData.desc}</p>
          </div>
          <div className="project-all-cards">
            {projectData.projectList.map((data) => (
              <ProjectCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default ProjectPage;
