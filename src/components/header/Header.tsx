import React, { useState } from "react";
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

  const menuClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpenNav(!isOpenNav);
  };

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
                <button onClick={menuClickHandler} className="burger-button">
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                </button>

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

            <div className={`sideNavBar ${isOpenNav ? "smaller" : "bigger"}`}>
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
          </div>
        </div>
      </WrapperComponent>
    </header>
  );
};

export default Header;
