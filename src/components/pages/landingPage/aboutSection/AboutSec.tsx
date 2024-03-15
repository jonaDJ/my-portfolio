import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import avatar from "../../../../assets/images/myAvatar.png";
import "../aboutSection/AboutSec.scss";
import { AboutSectionProps } from "../../../../data/landingPageData";
import React from "react";

interface AboutSecProps {
  aboutSectionData: AboutSectionProps;
}

const AboutSec: React.FC<AboutSecProps> = ({ aboutSectionData }) => {
  return (
    <div className="about-me-main">
      <WrapperComponent>
        <div className="about-me-section">
          <div className="about-me-header">
            <img src={avatar} alt="my-avatar" className="about-me-avatar" />
            <h2 className="my-role">{aboutSectionData.role}</h2>
          </div>
          <div className="about-me-desc">
            {aboutSectionData.description.map((paragraph, index) => (
              <React.Fragment key={`paragraph_${index}`}>
                <p key={index}>{paragraph}</p>
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default React.memo(AboutSec);
