import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";



const Subheader = () => {
  return (
    <div className='bg-[#9580F1] w-full  h-12 py-1'>
<div  className='flex justify-between w-10/12 mx-auto'>
<div className=' flex gap-8 text-white text-sm h-5 p-2'>
<FaFacebook className=''/>
<FaInstagram className=''/>
<FaGithub className=''/>
</div>
<div className='p-2 text-white  flex gap-5'>
  <div className='border-r-2 px-2 border-white text-sm'>12343546</div>
  <div className='border-r-2 px-2 border-white text-sm'>00909009</div>
  <div className='flex gap-2 text-sm border-r-2 px-2 border-white'>
<CiMail className='h-6 w-6'/>
<p>aryalpratik057@gmail.com</p>
  </div>
  <div className='flex gap-2 text-sm  px-2 '>
    <IoMdTime className='h-6 w-6'/>
    <p>Sunday-Friday,9Am-5Pm</p>
  </div>
</div>
</div>

    </div>
  )
}

export default Subheader;