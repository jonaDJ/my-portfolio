import React from "react";
import "./Header.scss";
import git from "../../assets/icon/git-icon.svg";
import linkedIn from "../../assets/icon/linkedIn-icon.svg";
import location from "../../assets/icon/location-icon.svg";
import phone from "../../assets/icon/phone-icon.svg";
import email from "../../assets/icon/email-icon.svg";
import WrapperComponent from "../wrapperComponent/WrapperComponent";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="app-header">
      <WrapperComponent>
        <div className="header-frame">
          <div className="name">{name}</div>
          <div className="navbar">
            <div className="icon-links">
              <a href="https://github.com">
                <img src={git} alt="git" />
              </a>
              <a href="https://linkedin.com">
                <img src={linkedIn} alt="linkedIn" />
              </a>
              <a href="your-address">
                <img src={location} alt="Location" />
              </a>
              <a href="tel:+1234567890">
                <img src={phone} alt="phone" />
              </a>
              <a href="mailto:your-email@example.com">
                <img src={email} alt="email" />
              </a>
            </div>
            <a href="/">about</a>
            <a href="/Project">Project</a>
            <a href="/contact">Contact me</a>
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default Header;
