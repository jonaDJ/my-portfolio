import WrapperComponent from "../../wrapperComponent/WrapperComponent";
import "./ContactMe.scss";
import downloadIcon from "../../../assets/icon/download-solid.svg";
import { ContactPageProps } from "../../../data/contactPageData";

const ContactMe: React.FC<ContactPageProps> = ({
  title,
  desc,
  contactDetails,
}) => {
  const AboutMe: React.FC = () => (
    <div className="contact-about-me">
      <div className="contact-info">
        <p>{desc}</p>
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
            <h2>{title}</h2>
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
