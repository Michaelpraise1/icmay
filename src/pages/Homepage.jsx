
import React from "react";
import Herosection from "../component/Herosection";
import Services from "../component/Services";
import Stat from "../component/Stat";
import { FloatButton } from "antd";
import Weem from "../component/Weem";
import Hero from "../component/Hero";
import { Helmet } from "react-helmet-async";
import Bottom from "../component/Bottom";


const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage - ICMA</title>
        <meta name="description" content="Welcome to ICMA, your partner in innovative financial solutions. Explore our services and join our network today!" />
      </Helmet>
      <div className=" bg-white">
      <Herosection />
      <Hero/>
      <Services />
      <Weem/>
      <Stat />
      <Bottom/>
      <FloatButton.BackTop />
    </div>
    
    
    </>
    
  );
};

export default Homepage;
