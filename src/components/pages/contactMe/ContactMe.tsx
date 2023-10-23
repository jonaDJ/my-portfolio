import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ContactMe.scss";
import downloadIcon from "../../../assets/icon/download-solid.svg";

const ContactMe: React.FC = () => {
  const contactDetails = [
    {
      id: 1,
      icon: require("../../../assets/icon/location-icon.svg").default,
      info: "City, State",
    },
    {
      id: 2,
      icon: require("../../../assets/icon/email-icon.svg").default,
      info: "Jon@gmail.com",
    },
    {
      id: 3,
      icon: require("../../../assets/icon/phone-icon.svg").default,
      info: "123-456-7890",
    },
  ];

  const AboutMe: React.FC = () => (
    <div className="contact-about-me">
      <div className="contact-info">
        <p>
          You can find my contact details below, or use the form to send me a
          message. I'm always here to answer your questions and assist you in
          any way I can.
        </p>
        <ul className="contact-details">
          {contactDetails.map((data) => (
            <li key={data.id} id={`contact-details-${data.id}`}>
              <img src={data.icon} alt="icon" />
              <h4>{data.info}</h4>
            </li>
          ))}
        </ul>
      </div>
      <button className="contact-resume">
        <h4>RESUME DOWNLOAD</h4>
        <img src={downloadIcon} alt="download" />
      </button>
    </div>
  );

  const ContactForm: React.FC = () => (
    <div className="contact-form">
      <form>
        <div className="contact-input-wrapper">
          <div className="contact-input-name">
            <div className="contact-input con-fname">
              <label>First name</label>
              <input type="text" />
            </div>
            <div className="contact-input con-lname">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>

          <div className="contact-input-email">
            <div className="contact-input con-email">
              <label>Email*</label>
              <input type="text" />
            </div>
            <div className="contact-input con-subject">
              <label>Subject</label>
              <input type="text" />
            </div>
          </div>

          <div className="contact-input-msg">
            <div className="contact-input con-msg">
              <label>Leave me a message*</label>
              <textarea />
            </div>
          </div>
        </div>
        <button className="contact-submit-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );

  return (
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
};

export default ContactMe;
