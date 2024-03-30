import { createContext, useEffect, useState } from "react";

interface IconData {
  _id: string;
  type: string;
  iconSrc: string;
  link: string;
  contact: boolean;
}

interface HomeData {
  greeting: string;
  title: string;
  welcome: string;
}

interface IconDataContextType {
  iconsData: IconData[];
  homeData: HomeData;
}

export const IconDataContext = createContext<IconDataContextType>({
  iconsData: [],
  homeData: { greeting: "", title: "", welcome: "" },
});

const IconDataContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [apiData, setApiData] = useState<IconDataContextType>({
    iconsData: [],
    homeData: { greeting: "", title: "", welcome: "" },
  });

  const fetchData = async () => {
    try {
      const iconsResponse = await fetch("/api/icons");
      const homeResponse = await fetch("/api/home");

      if (!iconsResponse.ok || !homeResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const iconsData = await iconsResponse.json();
      const homeData = await homeResponse.json();

      setApiData({ iconsData: iconsData, homeData: homeData });
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
