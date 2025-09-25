import React from 'react'

const PolicyProps = ({ title, des}) => {
  return (
    <>
    <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white" >
    <h1 className='text-2xl font-semibold  text-white'>{title}</h1>
    <p className='text-white text-center whitespace-pre-line'>{des}</p>
    </section>
    </>
  )
}

export default PolicyProps