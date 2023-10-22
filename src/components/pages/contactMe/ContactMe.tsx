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
      id: 1,
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
            <li key={data.id}>
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
  return (
    <div className="contact-page">
      <WrapperComponent>
        <div className="contact-page-title">
          <h2>CONTACT</h2>
        </div>

        <div className="contact-container">
          <AboutMe />
          <div className="contact-form">
            <form>
              <div className="contact-input">
                <label>First name</label>
                <input type="text" />
              </div>
              <div className="contact-input">
                <label>Last name</label>
                <input type="text" />
              </div>

              <div className="contact-input">
                <label>Email*</label>
                <input type="text" />
              </div>
              <div className="contact-input">
                <label>Subject</label>
                <input type="text" />
              </div>

              <div className="contact-input">
                <label>Leave me a message*</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </WrapperComponent>
    </div>
  );
};

export default ContactMe;
