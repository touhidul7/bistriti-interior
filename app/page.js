import React from "react";
import Homecatagory from './Components/Homecomponents/Homecatagory';
import Landmark from './Components/Homecomponents/Landmark';
import HeroSection from './Components/Homecomponents/HeroSection';
import RecentWorks from './Components/Homecomponents/RecentWorks';
const page = () => {

  return (
    <>
      <HeroSection />
      <Landmark />
      <Homecatagory />
      <RecentWorks />
    </>
  );
};

export default page;
