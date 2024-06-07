import React from "react";
import Banner from "../components/Home/Banner";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
