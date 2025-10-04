import React from 'react'
import Herosection from '../component/Herosection';

import About from '../component/About';
import Bottom from '../component/Bottom';
import { Helmet } from 'react-helmet-async';

const Aboutus = () => {
  return (
    <>
    <Helmet>
    <title>About Us - ICMA</title>
    <meta name="description" content="Learn more about ICMA, our mission, vision, and the team dedicated to providing top-notch financial services and solutions." />
    </Helmet>
    <Herosection/>
    <About/>
   
    <Bottom/>
    </>
  )
}

export default Aboutus;