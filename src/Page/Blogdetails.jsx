import React from 'react'
// import Layout from '../HOC/Layout';
import imgs from '../assets/image 86.png'
import Herosection from '../Component/UI/Herosection';
import { SlCalender } from "react-icons/sl";

const Blogdetails = () => {
  return (
     <>
     <Herosection title={"blog"} links={"blog"} />
     <div className='mx-auto w-10/12 '>
     
     <div className='grid grid-cols-2'>
      <div className='py-5 grid gap-3  px-2'>
        <img  className="w-full rounded-lg h-88" src={imgs} alt=''/>
        <div className='flex gap-3'>
        <SlCalender className='text-blue-300 h-6' />
        <p className='text-gray-500'>Friday jan1,2023</p>
        </div>
        <div>
        <h3 className='text-black text-xl font-bold'>Must Have Cleaning Product For kitchen</h3>
        <div>
        <p className='py-3 text-gray-400 text-sm'>     The rush to give employees access to all the tools they’d need to work from home was a bit, well, sudden for many employers. But after everyone settled in, what quickly became apparent to many office-based teams is that employees could be productive and focused when not in the office—in many cases, even more so. Employers everywhere began to understand that remote work really works.</p>
        <p className='text-gray-400'>           Whether you’re on the hunt for a remote job or are already working virtually, check out this list of the advantages of working from home, along with some of the top companies that hire for remote jobs.</p>
        </div>
        </div>
      </div>
      <div>

      </div>
     </div>
     </div>


    </>
  )
}

export default Blogdetails;