import React from 'react';
import Herosection from '../component/Herosection';
import Merger from '../component/Merger';
import { Link } from 'react-router-dom';

import Bottom from '../component/bottom';

const MA = () => {
  return (
    <>
    <Herosection/>
    <section className="relative h-[60vh] bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/03/venture_07.jpg')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className="absolute inset-0 flex justify-center items-center lg:text-6xl text-3xl font-bold text-center lg:pt-10 text-white">MERGER <br/> & <br/> ACQUISITIONS </span>
        </h1>
    </section>
    <div className='bg-[#22272a] '>
      {/* <div className='flex  items-center justify-center bg-[#22272a] h-[30%] px-4  z-10 space-y-4 pt-3 pb-1 '>
        <p className='text-white text-center space-y-4 mb-3 mt-3'>
          VC investments often require follow-up financing or an exit. For example, selling to a strategic partner can stimulate growth or create synergies, icma help identify investors and facilitate transactions, with services such as developing a communications strategy, approaching, and managing the process. Our managing partner requests a plan selection and a refundable deposit, which serves as retainer for registration and introductions during the agreement.
        </p>
      </div> */}

      <div className=' flex lg:w-[50%] w-full lg:mx-[24%] bg-white h-[50%] py-[5%] my-0 items-center justify-center align-center '>
        <p className='text-black text-center  p-5'>
          Often investments from VCs will require follow up financing or an exit of the company. For some businesses it may be a great opportunity to sell to a strategic partner allowing the company to grow further or to benefit from synergies of the investing group. We help identify potential investors and facilitate transactions.
        </p>
      </div>
    </div>
    <Merger/>
    <section className="lg:flex  w-fit lg:h-[70vh] h-fit bg-[url('https://i.pinimg.com/1200x/93/02/63/9302633c00bb6ab7c73efcd48290c363.jpg')] bg-cover bg-center relative ">

      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4   
        bg-opacity-90 z-10 space-y-3 pt-3 pb-3'>
        <h1 className='text-2xl font-semibold  text-white'>Mergers</h1>
        <p className='text-white text-center'>Mergers unite two separate entities into a single, stronger organization, creating synergies, enhancing market presence, and driving growth. We collaborate with you to identify suitable partners, determine strategic fit, and facilitate negotiations. Our expertise ensures a seamless merger process, allowing you to focus on integrating operations and realizing the benefits of your newly combined business</p>
        <Link to="/contact" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Get Started
        </button>
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4  bg-opacity-90 z-10 space-y-3 pb-4 pt-3'>
        <h1 className='text-2xl font-semibold font-serif text-white'>Acquisitions</h1>
        <p className='text-white text-center'>Acquisitions enable companies to expand their market reach, acquire valuable assets, and capitalize on growth opportunities. We work closely with you to pinpoint target companies, assess strategic fit, and negotiate transaction terms. Our comprehensive approach ensures a smooth acquisition process, providing guidance and support while you focus on incorporating the acquired business and maximizing its potential.</p>
        <Link to="/contact" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
               Get Started
        </button>
        </Link>
        
      </div>

    </section>
    
    <Bottom/>
    </>
  )
}

export default MA