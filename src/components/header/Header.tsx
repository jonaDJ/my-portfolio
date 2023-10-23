import React, { useState, useEffect } from "react";
import "./Header.scss";
import git from "../../assets/icon/git-icon.svg";
import linkedIn from "../../assets/icon/linkedIn-icon.svg";
import wp from "../../assets/icon/wordpress.svg";
import WrapperComponent from "../wrapperComponent/WrapperComponent";
import { Link } from "react-router-dom";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // mobile width

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

  const onNavClickHandler = () => {
    setIsOpenNav(false);
  };

  return (
    <header className={`app-header ${isOpenNav ? "nav-open" : ""}`}>
      <WrapperComponent>
        <div className="header-frame">
          <div className="name">
            <Link to="/">{name}</Link>
          </div>
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
                <a href="https://linkedin.com">
                  <img src={wp} alt="email" />
                </a>
              </div>
            </div>
            {(isOpenNav || !isMobile) && (
              <div className={`sideNavBar ${!isMobile ? "bigger" : ""}`}>
                <Link to="/" onClick={onNavClickHandler}>
                  ABOUT
                </Link>
                <Link to="/Project" onClick={onNavClickHandler}>
                  PROJECT
                </Link>
                <Link to="/Contact" onClick={onNavClickHandler}>
                  CONTACT
                </Link>
              </div>
            )}
          </div>
        </div>
      </WrapperComponent>
    </header>
  );
};

export default Header;
