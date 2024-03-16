import React from "react";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import avatar from "../../../../assets/images/myAvatar.png";
import "../aboutSection/AboutSec.scss";
import { AboutSectionProps } from "../../../../data/landingPageData";

const AboutSec: React.FC<AboutSectionProps> = ({ role, description }) => {
  return (
    <div className="about-me-main">
      <WrapperComponent>
        <div className="about-me-section">
          <div className="about-me-header">
            <img
              src={avatar}
              alt="Portrait of the author"
              className="about-me-avatar"
              aria-label="Portrait of the author"
            />
            <h2 className="my-role">{role}</h2>
          </div>
          <div className="about-me-desc">
            {description.map((paragraph, index) => (
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
