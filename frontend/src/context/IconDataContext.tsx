import { createContext, useEffect, useState } from "react";

interface IconData {
  _id: string;
  type: string;
  iconSrc: string;
  link: string;
  contact: boolean;
  details: string;
}

interface HomeData {
  _id: string;
  greeting: string;
  title: string;
  welcome: string;
}

interface ProjectData {
  title: string;
  desc: string;
}

interface AboutData {
  role: string;
  description: string[];
}

interface ContactProps {
  pdf: string;
  desc: string;
  thankyouHeader: string;
  thankyouDesc: string;
}

interface MainData {
  _id: string;
  homeHeader: HomeData;
  projectHeader: ProjectData;
  aboutHeader: AboutData;
  contactDetails: ContactProps;
}

interface IconDataContextType {
  iconsData: IconData[];
  mainData: MainData;
}

const initialData: IconDataContextType = {
  iconsData: [],
  mainData: {
    _id: "",
    homeHeader: { _id: "", greeting: "", title: "", welcome: "" },
    projectHeader: { title: "", desc: "" },
    aboutHeader: { role: "", description: [] },
    contactDetails: { pdf: "", desc: "", thankyouHeader: "", thankyouDesc: "" },
  },
};

export const IconDataContext = createContext<IconDataContextType>(initialData);

const IconDataContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [apiData, setApiData] = useState<IconDataContextType>(initialData);

  const fetchData = async () => {
    try {
      const iconsResponse = await fetch("/api/icons");
      const mainResponse = await fetch("/api/home");

      if (!iconsResponse.ok || !mainResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const iconsData: IconData[] = await iconsResponse.json();
      const mainData: MainData = await mainResponse.json();

      setApiData({
        iconsData: iconsData,
        mainData: mainData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run only once

  return (
    <IconDataContext.Provider value={apiData}>
      {props.children}
    </IconDataContext.Provider>
  );
};

export default IconDataContextProvider;
