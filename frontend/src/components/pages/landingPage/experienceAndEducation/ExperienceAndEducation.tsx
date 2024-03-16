import React from "react";
import "../experienceAndEducation/ExperienceAndEducation.scss";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import { ExperienceAndEducationProps } from "../../../../data/landingPageData";

const ExperienceEducation: React.FC<ExperienceAndEducationProps> = (eeData) => (
  <section className="ee-container">
    <WrapperComponent>
      <div className="ee-section">
        <div className="ee-titles">
          <h3 className="ee-title">Experience</h3>
          <h3 className="ee-title ee-title-mobile">Education</h3>
        </div>
        <div className="ee-details">
          {eeData.items.map((item) => (
            <div key={item.id} className={`ee-entry-outer ${item.type}`}>
              <div className="ee-entry-inner">
                <div className="ee-job-header">
                  <div className="ee-job-title">
                    {item.degree || item.title}
                  </div>
                  <div
                    className="ee-job-details"
                    aria-label="Job details"
                  >{`${item.dates}, ${item.location}`}</div>
                </div>
                <div className="ee-description">{item.description}</div>
              </div>
            </div>
          ))}

          <div className="ee-titles">
            <h3 className="ee-title ee-title-separate">Education</h3>
          </div>
        </div>
      </div>
    </WrapperComponent>
  </section>
);

export default ExperienceEducation;
