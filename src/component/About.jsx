import React from 'react'

const About = () => {
  return (
    <>
       <section className="relative h-[80vh] bg-cover bg-center bg-[url('./assets/Aboutus.jpeg')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute flex items-center justify-center inset-0  lg:text-6xl text-3xl font-bold  text-white">ABOUT US </span>
        </h1>
    </section>

    <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white">
      <p>
       Stichting international capital management alliance was formed in The Netherlands in 2010 and partly subject to the Spanish tax regime (EU-KOR) as an independent private foundation (icma fundación) focusing on international sustainable business development. We are on a mission to empower businesses that have expansion plans with relevant counterparties in Europe to facilitate market access, strategically grow, and introductions. With credible, and meaningful sustainable funding suggestions that are designed to drive environmental and commercial value at scale.
  
      </p>
      <p>
        We are an experienced team built on years of reliability and comprised of highly skilledprofessionals with significant experience across a wide range of sectors. Icma is proud to inform its clients to the most responsible and cost-effective flexible solutions available, designed as an alternative to traditional bank loans. The information we provided is for general informational purposes only and not a substitute for professional advice. This means you should consult a qualified financial advisor or lawyer for guidance specific to your situation.
      </p>

      <p>
      Our commitment to clear communication throughout the entire process sets us apart, that's why it is requisite to start every new funding procedure by drawing up a professional Pitchbook. It serves as a comprehensive guide, outlining the investment opportunity, its associated risks, and critical details that our European partners need to make informed decisions. We operate exclusively on a "no introduction, no fees" basis! This means that our office in Groningen will only charge costs for creating the Pitchbook after a successful introduction.
      </p>


      <p>
        Years of experience allow us to understand the needs of inventors, investors, entrepreneurs, and companies. Partners are indispensable, they play a critical role providing funds, strategies, insights, and practical wisdom for wherever you are on your funding roadmap. Our onboarding acceptance is based on an evaluation of several factors to ensure a successful partnership. Key considerations include past and present financial performance, the potential and strength of current and future social business prospects, specific area of work, stability of leadership, and the extent to which it aligns with our expertise and experience. This assessment helps us determine if we are the best fit to support your company's needs and goals.
      </p> 
    </section>
    </>
   
    
  )
}

export default About;