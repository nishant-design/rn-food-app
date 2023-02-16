
import React, { useEffect, createContext, useContext, useState } from "react";
// import sanityClient from "../../sanity";

const HomepageContext = createContext();

const HomepageProvider = (children) => {
  
  const [featuredData, setFeaturedData] = useState();

  

  // const fetchData = async () => {
  //   try {
  //     const resp = sanityClient.fetch(`
  //     *[_type == "restaurant" ] {
  //       name, description, dishes
  //     }`);
  //     setFeaturedData(resp)
  //   } catch (e) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {fetchData()}, []);

  const value = {
  }

  return <HomepageContext.Provider value={value}>{children}</HomepageContext.Provider>;
};

export const useHomepageContext = () => useContext(HomepageContext);

export default HomepageProvider;
