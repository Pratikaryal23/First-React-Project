import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";



const Subheader = () => {
  return (
    <div className='bg-[#9580F1] w-full  h-12'>
<div  className='flex justify-between'>
<div className=' flex gap-8 text-white p-2'>
<FaFacebook className='h-8 w-6'/>
<FaInstagram className='h-8 w-6'/>
<FaGithub className='h-8 w-6'/>
</div>
<div className='p-2 text-white  flex gap-5'>
  <div className='border-r-2 px-2 border-white text-xl'>12343546</div>
  <div className='border-r-2 px-2 border-white text-xl'>00909009</div>
  <div className='flex gap-2 text-md border-r-2 px-2 border-white'>
<CiMail className='h-8 w-6'/>
<p>aryalpratik057@gmail.com</p>
  </div>
  <div className='flex gap-2 text-md  px-2 '>
    <IoMdTime className='h-8 w-6'/>
    <p>Sunday-Friday,9Am-5Pm</p>
  </div>
</div>
</div>

    </div>
  )
}

export default Subheader;