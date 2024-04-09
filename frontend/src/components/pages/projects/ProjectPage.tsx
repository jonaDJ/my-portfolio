import React, { useContext, useEffect, useState } from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ProjectPage.scss";
import { IconDataContext } from "../../../context/IconDataContext";
import useBase64ToImageUrl from "../../../hook/useBase64ToImageUrl";
import LoadingState from "../../states/loadingState/LoadingState";
import { Link } from "react-router-dom";

interface projectProps {
  _id: string;
  projectName: string;
  description: string;
  technologies: string[];
  gitURL: string;
  imageBit: string;
}

const ProjectCard: React.FC<projectProps> = ({
  _id: projectID,
  projectName,
  description,
  technologies,
  gitURL,
  imageBit,
}) => {
  const img = useBase64ToImageUrl(imageBit);

  const handleButtonClick = () => {
    window.open(gitURL, "_blank");
  };

  return (
    <div className="project-card" id={projectID}>
      <img src={img} alt={`Project: ${projectName}`} aria-hidden="true" />

      <div className="project-card-header">
        <div className="project-card-title-container">
          <div className="project-card-title-header">
            <h2>
              <Link to={gitURL}>{projectName}</Link>
            </h2>
            <p>
              {/* Tools used: */}
              {technologies.map((item, index) => (
                <span key={`${index}-${projectID}`}>
                  {item}
                  {index !== technologies.length - 1 && "-"}
                </span>
              ))}
            </p>
          </div>
        </div>
        <hr className="project-card-line" />

        <div className="project-card-desc">
          <p>{description}</p>
          <button
            aria-label={`GitHub ${projectName} button`}
            onClick={handleButtonClick}
          >
            Git Repo
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectPage: React.FC = () => {
  const [projectData, setProjectData] = useState<projectProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProjectsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      if (!response) {
        throw new Error();
      }

      const data = await response.json();

      setProjectData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);
  const iconDataContext = useContext(IconDataContext);

  const { title, desc } = iconDataContext.mainData.projectHeader;

  return (
    <div className="project-section">
      <WrapperComponent>
        <div className="project-container">
          <div className="project-title-header">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          {isLoading ? (
            <LoadingState />
          ) : (
            projectData && (
              <div className="project-all-cards">
                {projectData.map((projectData) => (
                  <ProjectCard key={String(projectData._id)} {...projectData} />
                ))}
              </div>
            )
          )}
        </div>
      </WrapperComponent>
    </div>
  );
};

export default ProjectPage;
