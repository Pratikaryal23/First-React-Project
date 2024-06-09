import React from 'react'
import image from "../../assets/Layer_1.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Footer = () => {
  return (
   <footer className='bg-[#9580F1] text-white w-full'>
<div className=' flex justify-around py-10'>
<div className='flex flex-col gap-7'>
    <img src={image} className='w-20 mix-blend-color-burn ' alt=""/>
    <div className='w-96 '>
    To be a part of an enthusiastic work environment, where I can enhance my knowledge and apply my skills to accomplish organization requirements
    </div>
    <div className='flex gap-10'>
    <FaFacebook className='h-8 w-6'/>
<FaInstagram className='h-8 w-6'/>
<FaGithub className='h-8 w-6'/>
    </div>

    </div>
<div className='grid gap-4'>
    <h3 className='text-xl'>Company</h3>
    <p>About Us</p>
    <p>Services</p>
     <p>Community</p>
     <p>Testimonial</p>

    </div>
    <div className='grid gap-4'>
    <h3 className=' text-xl'>Support</h3>
    <p>Help Center</p>
    <p>Tweet @  us </p>
     <p>Webians</p>
     <p>Feedback</p>
    </div>
    <div className='gap-4 grid'>
    <h3 className=' text-xl'>Links</h3>
    <p>Courses</p>
    <p>Become Teacher</p>
     <p>Service </p>
     <p>All in One</p>
    </div>
    <div>
    <h3 className=' text-xl'></h3>
    </div>
 
</div>
   <div className='border-t-2 border-gray-500 w-11/12 mx-auto flex gap-10 justify-between py-4'>
        <p>All Copyright @ Belongs To Rebel Cleaning .</p>
        <p>Term and Conditions
Privacy Policies</p>

    </div>

   </footer>
  )
}

export default Footer;

