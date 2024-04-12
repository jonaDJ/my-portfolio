import React, { useContext } from "react";
import WrapperComponent from "../wrapperComponent/WrapperComponent";
import ContactMe from "../pages/contactMe/ContactMe";
import "./Footer.scss";
import { IconDataContext } from "../../context/IconDataContext";
import { useLocation } from "react-router";

const Footer: React.FC = () => {
  const { iconsData } = useContext(IconDataContext);
  const location = useLocation();

  return (
    <footer>
      {location.pathname !== "/Contact" && <ContactMe />}
      <div className="footer-section">
        <WrapperComponent>
          <div className="footer-container">
            {iconsData &&
              iconsData.map((icon) => (
                <a href={icon.link} key={icon._id} className="footer-icon">
                  <img
                    src={require(`../../assets/icon/${icon.iconSrc}.svg`)}
                    alt={icon.type}
                  />
                </a>
              ))}
          </div>
        </WrapperComponent>
      </div>
    </footer>
  );
};

export default Footer;
