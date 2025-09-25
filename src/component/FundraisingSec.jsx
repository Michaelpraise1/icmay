import React from 'react';
import FundraisingProps from './FundraisingProps';


const FundraisingSec = () => {
  return (
    <>
    
      <section id="fundraising" className="px-10 py-20 bg-[#22272a] ">
       
        {/* <h1 className="text-5xl mb-8 font-bold">Services</h1> */}

        <div>
        <FundraisingProps
          id= "01"
          title="Impact"
          desc="Green, social, and sustainable financing involves raising funds for projects or companies that generate a positive effect on the environment and society, in addition to great economic benefits! More and more European investors and financial institutions are prioritizing these practices. They do so due to the growing demand for transparency and accountability. Companies that adopt this approach not only gain easy access to capital, but also contribute to global goals such as reducing emissions or improving working conditions. This shift reflects a new way of understanding risk and return. Investing in sustainability helps mitigate climate and regulatory risks, while opening up new opportunities in emerging markets and high potential sectors. "
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
          />

          <hr className="mb-10" />
          <FundraisingProps
            id="02"
            title="Strategy"
            desc="In collaboration with you, we create a communication sequence to engage investors, develop key messages to pique interest and emphasize the investment story. We also assist in crafting an effective Pitchbook. Our belief is that the founder/CEO should develop the story while we provide valuable feedback on investor perception."
            
          />
            <hr className="mb-10" />

          <FundraisingProps
            id="03"
            title="Pitchbook"
            desc="There are two main types of Pitchbooks. There's the main Pitchbook, which contains all the key characteristics of the company, and one that details a specific deal, such as an initial public offering (IPO) or a company's investment product. For an accredited investor, it includes information such as the company's financial strength and biographical information about the management team."
            
          />

          <hr className="mb-10" />

          <FundraisingProps
            id="04"
            title="Investor Outreach"
            desc="After finalizing preparations and communication strategy, we arrange the first video call with our European partner, giving you the opportunity to share your story. Our role is to facilitate introductions and observe in the background. "

          />

          <hr className="mb-10" />

          <FundraisingProps
            id="05"
            title="Management and Coordination"
            desc="When investors express interest, our partner coordinates further video calls with you. Investors typically conduct due diligence and negotiate transaction terms, including valuation, structure, investment amounts, warrants, options, and board participation. Our partner gives you valuable advice on these matters. In cases involving multiple investors, they help form a consortium to finalize the transaction."

          />

          
        </div>
      </section>
    </>
    
  )
}

export default FundraisingSec;