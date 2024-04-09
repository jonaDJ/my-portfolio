import React, { useContext } from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";

import avatar from "../../../assets/images/my_avatar.png";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { IconDataContext } from "../../../context/IconDataContext";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const learnMoreHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate("/about");
  };

  const iconDataContext = useContext(IconDataContext);

  const { greeting, title, welcome } = iconDataContext.mainData.homeHeader;

  return (
    <section className="calltoaction-section">
      <WrapperComponent>
        <div className="calltoaction-container">
          <div className="calltoaction-header">
            <img
              src={avatar}
              alt="Jon's avatar"
              className="calltoaction-avatar"
              aria-label="Jon's avatar"
            />
            <h1 className="calltoaction-title">
              {greeting}
              <br />
              {title}
            </h1>
          </div>
          <h2 className="calltoaction-desc">
            <span>{welcome}</span>
            <button
              className="calltoaction-button"
              onClick={(e) => learnMoreHandler(e)}
            >
              Learn More!
            </button>
          </h2>
        </div>
      </WrapperComponent>
    </section>
  );
};

export default Home;
