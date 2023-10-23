import git from "../../assets/icon/git-icon.svg";
import linkedIn from "../../assets/icon/linkedIn-icon.svg";
import email from "../../assets/icon/email-icon.svg";
import phone from "../../assets/icon/phone-icon.svg";
import address from "../../assets/icon/location-icon.svg";
import wordpress from "../../assets/icon/wordpress.svg";
import WrapperComponent from "../wrapperComponent/WrapperComponent";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <WrapperComponent>
        <div className="footer-container">
          <a href="https://github.com">
            <img src={git} alt="git" />
          </a>
          <a href="https://linkedin.com">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={wordpress} alt="email" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={email} alt="email" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={phone} alt="email" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={address} alt="email" />
          </a>
        </div>
      </WrapperComponent>
    </footer>
  );
};

export default Footer;
