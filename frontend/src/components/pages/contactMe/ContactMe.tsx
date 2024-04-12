import React, { useContext, useState } from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import downloadIcon from "../../../assets/icon/download-solid.svg";
import "./ContactMe.scss";
import { IconDataContext } from "../../../context/IconDataContext";
import ContactForm from "./ContactForm";

const AboutMe: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const { iconsData, mainData } = useContext(IconDataContext);
  const filteredIconData = iconsData.filter((item) => item.contact);

  const { pdf, desc } = mainData.contactDetails;

  const resumeDownloadHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setClicked(true);

    try {
      const base64Data = pdf;

      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${base64Data}`;
      link.download = "jon.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setTimeout(() => setClicked(false), 5000);
    }
  };

  return (
    <div className="contact-about-me">
      <div className="contact-info">
        <p>{desc}</p>
        <ul className="contact-details">
          {filteredIconData &&
            filteredIconData.map((icon) => (
              <li key={icon._id} id={icon._id}>
                <a href={icon.link} className="contact-icon">
                  <img
                    src={require(`../../../assets/icon/${icon.iconSrc}-black.svg`)}
                    alt={`${icon.type} icon`}
                  />
                </a>
                <h4>{icon.details}</h4>
              </li>
            ))}
        </ul>
      </div>
      <button
        className="contact-resume"
        onClick={(e) => resumeDownloadHandler(e)}
      >
        {clicked ? (
          <h4>DOWNLOADED</h4>
        ) : (
          <>
            <h4>RESUME DOWNLOAD</h4>
            <img src={downloadIcon} alt="Download resume" />
          </>
        )}
      </button>
    </div>
  );
};

const ContactMe: React.FC = () => (
  <div className="contact-page">
    <WrapperComponent>
      <div className="contact-page-section">
        <div className="contact-page-title">
          <h2>CONTACT</h2>
        </div>

        <div className="contact-container">
          <AboutMe />
          <ContactForm />
        </div>
      </div>
    </WrapperComponent>
  </div>
);

export default ContactMe;
