import React, { useState, useEffect } from "react";
import "./Header.scss";
import git from "../../assets/icon/git-icon.svg";
import linkedIn from "../../assets/icon/linkedIn-icon.svg";
import email from "../../assets/icon/email-icon.svg";
import WrapperComponent from "../wrapperComponent/WrapperComponent";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set mobile width as per your design

  const menuClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpenNav(!isOpenNav);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); //mixin for breakpoint-tablet
      if (!isMobile) {
        setIsOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className={`app-header ${isOpenNav ? "nav-open" : ""}`}>
      <WrapperComponent>
        <div className="header-frame">
          <div className="name">{name}</div>
          <div className={`outerNav ${isOpenNav ? "outer-nav-open" : ""}`}>
            <div className="navbar">
              <div className="icon-links">
                {isMobile && (
                  <button onClick={menuClickHandler} className="burger-button">
                    <div
                      className={`burger ${isOpenNav ? "active" : ""}`}
                    ></div>
                    <div
                      className={`burger ${isOpenNav ? "active" : ""}`}
                    ></div>
                    <div
                      className={`burger ${isOpenNav ? "active" : ""}`}
                    ></div>
                  </button>
                )}
                <a href="https://github.com">
                  <img src={git} alt="git" />
                </a>
                <a href="https://linkedin.com">
                  <img src={linkedIn} alt="linkedIn" />
                </a>
                <a href="mailto:your-email@example.com">
                  <img src={email} alt="email" />
                </a>
              </div>
            </div>
            {(isOpenNav || !isMobile) && (
              <div className={`sideNavBar ${!isMobile ? "bigger" : ""}`}>
                <a href="/">about</a>
                <a href="/Project">Project</a>
                <a href="/contact">Contact me</a>
              </div>
            )}
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default Header;
