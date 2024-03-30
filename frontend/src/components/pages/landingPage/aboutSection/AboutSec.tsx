import React from "react";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import avatar from "../../../../assets/images/my_avatar.png";
import "../aboutSection/AboutSec.scss";
import { AboutSectionProps } from "../landingPageData";

const AboutSec: React.FC<AboutSectionProps> = ({ role, description }) => {
  return (
    <div className="about-me-main">
      <WrapperComponent>
        <div className="about-me-section">
          <div className="about-me-header">
            <img
              src={avatar}
              alt="Jon's avatar"
              className="about-me-avatar"
              aria-label="Jon's avatar"
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
