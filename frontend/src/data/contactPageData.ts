export interface ContactList {
  id: string | number;
  icon: string;
  info: string;
}

export interface ContactPageProps {
  title: string;
  desc: string;
  contactDetails: ContactList[];
}

const contactPageData = {
  title: "CONTACT",
  desc: `You can find my contact details below, or use the form to send me a
  message. I'm always here to answer your questions and assist you in
  any way I can.`,
  contactDetails: [
    {
      id: 1,
      icon: require("../assets/icon/location-icon.svg").default,
      info: "City, State",
    },
    {
      id: 2,
      icon: require("../assets/icon/email-icon.svg").default,
      info: "Jon@gmail.com",
    },
    {
      id: 3,
      icon: require("../assets/icon/phone-icon.svg").default,
      info: "123-456-7890",
    },
  ],
};

export default contactPageData;
