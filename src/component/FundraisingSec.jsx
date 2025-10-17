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
            desc="VC investments often require follow-up financing or an exit. Selling to a strategic partner can, for example, stimulate growth or create synergies. Therefore, we help identify potential investors and facilitate introductions, with services such as developing a communications strategy, approaching, and monitoring the process. We champion the vital pairing of capital and innovation."
            
          />

          <hr className="mb-10" />

          <FundraisingProps
            id="04"
            title="Unique and Specific"
            desc="At icma we understand that every business is unique and has specific funding needs. That is why we offer a range of sustainable financial solutions that meet your growth objectives. Together we discuss which option best suits your business. For example, your company can issue securities via a Mini-IPO. In most cases, these are bonds or shares (certificates), but convertible bonds are also a possibility. After the securities have been issued, your company will be listed on a European Small and Medium Enterprise stock exchange.
            
            Assumptions Mini-IPO
            Minimum three years in business, with at least one profitable year. A stable, future-proof organization with growth plans, strong governance, and liquid assets of at least €100k. In short, do you want to grow your business with funding from €1mln up to €5mln (and upwards) without prospectus approval? Then you have come to the right place, we offer companies access to our partners wealthy European investors. 
            
            Once the preparations and the communication strategy are complete, we'll assist to schedule the first video call with the most suitable European partner, so you can share your story. As a NFPO (Stichting) under the Dutch Civil Code, our role is to facilitate the introduction, prepare the CIM, assist with the application, and observe in the background. "

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