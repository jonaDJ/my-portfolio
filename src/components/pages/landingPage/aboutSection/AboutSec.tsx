import WrapperComponent from "../../../wrapperComponent/WrapperComponent";
import avatar from "../../../../assets/images/myAvatar.png";
import "../aboutSection/AboutSec.scss";

const AboutSec: React.FC = () => {
  return (
    <div className="about-me-main">
      <WrapperComponent>
        <div className="about-me-section">
          <div className="about-me-header">
            <img src={avatar} alt="my-avatar" className="about-me-avatar" />
            <h2 className="my-role">SOFTWARE DEVELOPER</h2>
          </div>
          <div className="about-me-desc">
            <p>
              Hi there! Welcome to my portfolio. I'm a software developer with a
              passion for creating user-friendly, accessible, and responsive web
              applications. I have experience in all aspects of the software
              development life cycle, from requirements gathering to deployment.
            </p>
            <br />
            <p>
              I specialize in front-end web development, but I also have
              experience in backend development. To learn more about my work,
              please visit my portfolio or contact me directly.
            </p>
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default AboutSec;
