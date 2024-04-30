import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image from '../assets/clean.png'

const data=[{
    
}]

const About = () => {
  return (
    <>
    <section>
        <div>
            <div className=' bg-gradient-to-r from-sky-500 to-indigo-500 grid justify-center py-5 gap-3'>
                <h3 className='text-3xl text-white font-serif' >About </h3>
                <div className='flex text-white  gap-2'>
                <FaHome className='text-xl'/><p>Home</p>
                <FaArrowRight className='text-xl'/>
                <p>About</p>

                </div>
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-2 py-6 gap-6'>
                <div className='flex flex-col py-9 gap-10'>
                    <p className='text-5xl font-bold'>We Provide Top Quality Cleaning</p>
                    <p>Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site. on the top advertising a Courses available available business having.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora torquent</p>
                    <button className='w-fit h-fit border-2 b0rder-gray-200 px-5 bg-[#9580F1] rounded-md py-3 text-white'>Book a cleaner</button>
                </div>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
            
                </div>
                
            </div>
            </div>
            <div className='secondpart w-10/12 mx-auto'>
<div className=' grid mx-auto w-[420px] gap-3'>
    <p className='text-3xl  font-bold '>
    Keep your vision to our latest Services
    </p>
    <p className='text-lg font-serif '>
    Keep your vision to our latest Services
    </p>
</div>
            </div>
            
            </section>
    
    </>
  )
}

export default About;