import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IconDataContext } from "../../../context/IconDataContext";
interface EmailData {
  name: string;
  subject: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { mainData } = useContext(IconDataContext);

  const { thankyouDesc, thankyouHeader } = mainData.contactDetails;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
    phoneNumber: Yup.string().matches(
      /^\+\d{1,3}\s?(\(\d{1,4}\)|\d{1,4})\s?\d{1,4}-?\d{1,4}$/,
      "Invalid phone number"
    ),
  });

  const handleSubmit = async (values: EmailData) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      if (formRef.current) {
        const serviceId = process.env.REACT_APP_SERVICE_ID || "";
        const templateId = process.env.REACT_APP_TEMPLATE_ID || "";
        const publicKey = process.env.REACT_APP_PUBLIC_KEY || "";

        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-form">
      {submitted ? (
        <div className="submitted">
          <h1>{thankyouHeader}</h1>
          <p>{thankyouDesc}</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form ref={formRef}>
              <div className="contact-input-wrapper">
                <div className="contact-input-name">
                  <div className="contact-input con-fname">
                    <label htmlFor="name">Name*</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="contact-input con-subject">
                    <label htmlFor="subject">Subject</label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      autoComplete="on"
                    />
                  </div>
                </div>

                <div className="contact-input-email">
                  <div className="contact-input con-email">
                    <label htmlFor="email">Email*</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="contact-input con-phoneNumber">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>

                <div className="contact-input-msg">
                  <div className="contact-input con-msg">
                    <label htmlFor="message">Leave me a message*</label>
                    <Field as="textarea" id="message" name="message" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <button
                className={`contact-submit-btn ${isSubmitting ? "active" : ""}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
