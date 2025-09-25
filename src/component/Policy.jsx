import React from 'react'
import PolicyProps from './PolicyProps';

const Policy = () => {
  return (
    <>
    <section className="relative h-[80vh] bg-cover bg-center bg-[url('./assets/policy.jpg')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute flex items-center justify-center inset-0  lg:text-6xl text-3xl font-bold  text-white"> Privacy Policy </span>
        </h1>
    </section>
      <section id="policy" className=" lg:px-10 py-20 bg-[#22272a] ">

        <div>
          <PolicyProps
          id="01"
          title="Introduction"
          des="We are committed to protecting the privacy and confidentiality of information you provide us under any applicable law relating to the processing of personal Data, including but not limited to the GDPR (EU) 2016/679, and any national implementing laws, regulations and secondary legislation. Please read this Policy carefully to understand how we use and process your personal data. For the purposes of data protection laws, we are the data controller of your personal data. Any changes to this policy will be posted to this website. Please check regularly for updates."
          />

          <hr className="mb-5" />

          <PolicyProps
          id="02"
          title="Cookies"
          des="Cookies are small sometimes encrypted text files that are stored on your computer by websites that you visit. 
        • We don’t use cookies to track people’s Internet usage after leaving our sites and we don’t store personal information others could read and understand. 
        • If you make use of our contact form, we will only use the provided data to contact you to answer your questions. "
          />

          <hr className="mb-5" />

          <PolicyProps
          id="03"
          title="Collection of Personal Data"
          des="When you visit this website or receive services from us, we may collect and process the following data about you: 
         • Information that you give to us – you may give us personal information including your name, company name, contact details including address(es), telephone number(s), email address, fax number(s) and VAT number. "
          />

          <hr className="mb-5" />

          <PolicyProps
          id="04"
          title="Use of your Personal Data"
          des="  The personal data you give us may be necessary where we have a legitimate interest to carry out the following purposes:
        • to contact you and to respond to your requests and enquiries; 
        • to deliver services to you; 
        • for fraud prevention and detection and to comply with applicable laws, regulations or codes of practice.

        You have a right to object to processing of your personal data where that processing is carried out for our legitimate interest. "
          />

          <hr className="mb-5" />

          <PolicyProps
          id="05"
          title="Sharing your Personal Data"
          des="We may use selected third parties to provide us with services. All service providers are permitted to use data only for the purpose of performing services on our behalf. Similarly, we may share your personal data as required by law to protect our rights and property, or the rights, property or safety of others, including to advisers, law enforcement agencies, judicial and regulatory authorities. "
          />
            <hr className="mb-5" />

          <PolicyProps
          id="06"
          title="Security of your Personal Data"
          des="   The security of your personal data is important to us. We take reasonable steps, consistent with generally accepted industry standards, to protect the personal data from loss, misuse and unauthorised access, disclosure, alteration and destruction. We retain your personal information for 7 years from the last point of contact to support our legal and regulatory requirements. If you object to this retention, please contact us using the details provided on our website."
          />

            <hr className="mb-5" />

          <PolicyProps
          id="07"
          title="Your Rights"
          des=" If you are located in Europe, you have certain rights under data protection laws including, the right to: 
          • request access to and rectification or erasure of your personal data; 
          • obtain restriction of processing or to object to the processing of your personal data; 

          You also have the right to lodge a complaint about the processing of your personal data with your local data protection authority. "
          />


        </div>

      </section>
    {/* <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white">
      <h1 className='text-2xl font-semibold  text-white'></h1>
        <p className='text-white text-center'>We are committed to protecting the privacy and confidentiality of information you provide us under any applicable law relating to the processing of personal Data, including but not limited to the GDPR (EU) 2016/679, and any national implementing laws, regulations and secondary legislation. Please read this Policy carefully to understand how we use and process your personal data. For the purposes of data protection laws, we are the data controller of your personal data. Any changes to this policy will be posted to this website. Please check regularly for updates. </p>
      <h1 className='text-2xl font-semibold  text-white'>Cookies</h1>
      <p className='text-white text-center whitespace-pre-line'>
        Cookies are small sometimes encrypted text files that are stored on your computer by websites that you visit. 

        • We don’t use cookies to track people’s Internet usage after leaving our sites and we don’t store personal information others could read and understand. 

        • If you make use of our contact form, we will only use the provided data to contact you to answer your questions. 
      </p>
      <h1 className='text-2xl font-semibold  text-white'> Collection of Personal Data </h1>
      <p className='text-white text-center whitespace-pre-line'>
         When you visit this website or receive services from us, we may collect and process the following data about you: 


         • Information that you give to us – you may give us personal information including your name, company name, contact details including address(es), telephone number(s), email address, fax number(s) and VAT number. 
</p>

      <h1 className='text-2xl font-semibold  text-white'> Use of your Personal Data </h1>
      <p className='text-yellow  whitespace-pre-line text-center '>
        The personal data you give us may be necessary where we have a legitimate interest to carry out the following purposes:


        • to contact you and to respond to your requests and enquiries; 


        • to deliver services to you; 


        • for fraud prevention and detection and to comply with applicable laws, regulations or codes of practice.

        
        You have a right to object to processing of your personal data where that processing is carried out for our legitimate interest. 
      </p>

      <h1 className='text-2xl font-semibold  text-white'> Sharing your Personal Data </h1>
      <p className='text-white text-center'>
        We may use selected third parties to provide us with services. All service providers are permitted to use data only for the purpose of performing services on our behalf. Similarly, we may share your personal data as required by law to protect our rights and property, or the rights, property or safety of others, including to advisers, law enforcement agencies, judicial and regulatory authorities. 
      </p>

      <h1 className='text-2xl font-semibold  text-white'> Security of your Personal Data</h1>
      <p className='text-white text-center'>
        The security of your personal data is important to us. We take reasonable steps, consistent with generally accepted industry standards, to protect the personal data from loss, misuse and unauthorised access, disclosure, alteration and destruction. We retain your personal information for 7 years from the last point of contact to support our legal and regulatory requirements. If you object to this retention, please contact us using the details provided on our website. 
      </p>

      <h1 className='text-2xl font-semibold  text-white'> Your Rights </h1>
      <p className='text-white text-center whitespace-pre-line'>
        If you are located in Europe, you have certain rights under data protection laws including, the right to: 
        • request access to and rectification or erasure of your personal data; 
        • obtain restriction of processing or to object to the processing of your personal data; 

        You also have the right to lodge a complaint about the processing of your personal data with your local data protection authority. 
      </p> */}

    {/* </section> */}
    </>
     
  )
}

export default Policy;