import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import WrapperComponent from "../wrapperComponent/WrapperComponent";
import "./Header.scss";
import { IconDataContext } from "../../context/IconDataContext";

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

  const { iconsData } = useContext(IconDataContext);
  const filteredIconData = iconsData.filter((item) => !item.contact);

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

                {filteredIconData &&
                  filteredIconData.map((icon) => (
                    <a href={icon.link} key={icon._id}>
                      <img
                        src={require(`../../assets/icon/${icon.iconSrc}.svg`)}
                        alt={icon.type}
                      />
                    </a>
                  ))}
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
