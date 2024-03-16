import React from "react";
import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import downloadIcon from "../../../assets/icon/download-solid.svg";
import { ContactPageProps, ContactList } from "../../../data/contactPageData";
import "./ContactMe.scss";

const AboutMe: React.FC<{ desc: string; contactDetails: ContactList[] }> = ({
  desc,
  contactDetails,
}) => (
  <div className="contact-about-me">
    <div className="contact-info">
      <p>{desc}</p>
      <ul className="contact-details">
        {contactDetails.map(({ id, icon, info }) => (
          <li key={id} id={`contact-details-${id}`}>
            <img src={icon} alt={`${info} icon`} />
            <h4>{info}</h4>
          </li>
        ))}
      </ul>
    </div>
    <button className="contact-resume">
      <h4>RESUME DOWNLOAD</h4>
      <img src={downloadIcon} alt="Download resume" />
    </button>
  </div>
);

const ContactForm: React.FC = () => (
  <div className="contact-form">
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
      <button className="contact-submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  </div>
);

const ContactMe: React.FC<ContactPageProps> = ({
  title,
  desc,
  contactDetails,
}) => (
  <div className="contact-page">
    <WrapperComponent>
      <div className="contact-page-section">
        <div className="contact-page-title">
          <h2>{title}</h2>
        </div>

        <div className="contact-container">
          <AboutMe desc={desc} contactDetails={contactDetails} />
          <ContactForm />
        </div>
      </div>
    </WrapperComponent>
  </div>
);

export default ContactMe;
