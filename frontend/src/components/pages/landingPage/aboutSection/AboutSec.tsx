import React, { useContext } from "react";
import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import avatar from "../../../../assets/images/my_avatar.png";
import "../aboutSection/AboutSec.scss";
import { IconDataContext } from "../../../../context/IconDataContext";

const AboutSec: React.FC = () => {
  const { mainData } = useContext(IconDataContext);
  const { role, description } = mainData.aboutHeader;
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
