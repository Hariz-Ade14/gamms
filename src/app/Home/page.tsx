import React from "react";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Banner from "./components/Banner";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Banner />
    </div>
  );
};

export default Home;
