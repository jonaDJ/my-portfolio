import React, { useContext, useState } from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import downloadIcon from "../../../assets/icon/download-solid.svg";
import "./ContactMe.scss";
import { IconDataContext } from "../../../context/IconDataContext";

const AboutMe: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const { iconsData } = useContext(IconDataContext);
  const filteredIconData = iconsData.filter((item) => item.contact);

  const resumeDownloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 5000);
  };

  return (
    <div className="contact-about-me">
      <div className="contact-info">
        <p>
          You can find my contact details below, or use the form to send me a
          message. I'm always here to answer your questions and assist you in
          any way I can.
        </p>
        <ul className="contact-details">
          {filteredIconData &&
            filteredIconData.map((icon) => (
              <li key={icon._id} id={icon._id}>
                <img
                  src={require(`../../../assets/icon/${icon.iconSrc}.svg`)}
                  alt={`${icon.type} icon`}
                />
                <h4>
                  {icon.link.split(":")[1]}
                  {icon.link.split("=")[1]} {/* Only for map data */}
                </h4>
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

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="contact-form">
      {submitted ? (
        <div className="submitted">
          <h1>THANK YOU</h1>
          <p>
            I appreciate your message and will get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form>
          <div className="contact-input-wrapper">
            <div className="contact-input-name">
              <div className="contact-input con-fname">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" required autoComplete="on" />
              </div>
              <div className="contact-input con-lname">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" autoComplete="on" />
              </div>
            </div>

            <div className="contact-input-email">
              <div className="contact-input con-email">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" required autoComplete="on" />
              </div>
              <div className="contact-input con-subject">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" autoComplete="on" />
              </div>
            </div>

            <div className="contact-input-msg">
              <div className="contact-input con-msg">
                <label htmlFor="message">Leave me a message*</label>
                <textarea id="message" required />
              </div>
            </div>
          </div>
          <button
            className={`contact-submit-btn ${submitted ? "active" : ""}`}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {submitted ? "Thanks" : "SUBMITTED"}
          </button>
        </form>
      )}
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
