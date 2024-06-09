import React from 'react';
// import { NavLink}from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import {useNavigate}from "react-router-dom";
import image from "../../assets/Layer_1.png";

const Header = () => {
   const Navigation=useNavigate()
  return (
    <>
<nav className=' h-16 py-4 px-6 shadow-2xl'>
  {/* <div className='w-10/12 mx-auto'> */}
    <div className='w-10/12 mx-auto flex justify-between shadow-2xl'>
     <div>
      <img  className='w-28 h-6' src={image} alt=""/>
     </div>
    
    <div className='flex  gap-10 text-md  font-semibold'>
        <ul className='hover:text-blue-300'>
            <li >
              <a href="/">Home</a>
            </li>
        </ul>
 
        <ul className='hover:text-blue-300'>
            <li>
              <a href="about">About US</a>
            </li>
        </ul>
        <ul className='hover:text-blue-300'>
            <li>
              <a href="service">Our Services</a>
            </li>
        </ul>
        <ul className='hover:text-blue-300'>
            <li>
              <a href="#">Blog</a>
            </li>
        </ul>
        
        <ul className='hover:text-blue-300'>
            <li>
              <a href="#">Gallery</a>
            </li>
        </ul>
        <ul className='hover:text-blue-300'>
            <li>
              <a href="contact">Contact us</a>
            </li>
        </ul>
    </div>
    <div className='flex gap-10'>
    <CiSearch className='text-3xl'/>
   <MdOutlineManageAccounts className='text-3xl' onClick={()=>{
    Navigation("/Sigin")
   }}/>
   </div>
   </div>
    {/* </div> */}
</nav>
    </>
  )
}

export default Header