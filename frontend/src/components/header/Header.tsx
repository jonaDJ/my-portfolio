import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import WrapperComponent from "../wrapperComponent/WrapperComponent";
import gitIcon from "../../assets/icon/git-icon.svg";
import linkedInIcon from "../../assets/icon/linkedIn-icon.svg";
import wpIcon from "../../assets/icon/wordpress.svg";
import "./Header.scss";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const sideNavBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavBarRef.current &&
        !sideNavBarRef.current.contains(event.target as Node)
      ) {
        setIsOpenNav(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpenNav(!isOpenNav);
  };

  const onNavClickHandler = () => {
    setIsOpenNav(false);
  };

  const sideNavItems = [
    { to: "/", text: "HOME" },
    { to: "/Project", text: "PROJECT" },
    { to: "/Contact", text: "CONTACT" },
    { to: "/about", text: "ABOUT" },
  ];

  return (
    <header className={`app-header ${isOpenNav ? "nav-open" : ""}`}>
      <WrapperComponent>
        <div className="header-frame">
          <div className={`outerNav ${isOpenNav ? "outer-nav-open" : ""}`}>
            <div className="navbar">
              <div className="icon-links">
                <button onClick={menuClickHandler} className="burger-button">
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                  <div className={`burger ${isOpenNav ? "active" : ""}`}></div>
                </button>

                <a href="https://github.com">
                  <img src={gitIcon} alt="git" />
                </a>
                <a href="https://linkedin.com">
                  <img src={linkedInIcon} alt="linkedIn" />
                </a>
                <a href="https://linkedin.com">
                  <img src={wpIcon} alt="email" />
                </a>
              </div>
            </div>

            <div
              ref={sideNavBarRef}
              className={`sideNavBar ${isOpenNav ? "smaller" : "bigger"}`}
            >
              {sideNavItems.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  onClick={onNavClickHandler}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="name">
            <Link to="/">{name}</Link>
          </div>
        </div>
      </WrapperComponent>
    </header>
  );
};

export default Header;
