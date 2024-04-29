import React from 'react'
import img from "../assets/img1.png"
const Home = () => {
  return (
 <>
 <section className='grid grid-cols-2 w-10/12 mx-auto'>
    <div>
<div className='mx-6 py-20  '>
    <h2 className='text-xl font-semibold text-blue-400 '>Learn From Today</h2>
    <h1 className=' text-4xl font-bold w-96 py-5'>Happiness Is Freely  <span className='text-blue-400'>Cleaning</span> House</h1>
    <p>Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site. on the top advertising a Courses available available business having.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora torquent</p>
</div>
<div className='flex gap-6'>
    <buttton className="border-2 h-fit py-3 px-6 w-fit  bg-blue-600 rounded-xl text-white">About us</buttton>
    <buttton className="border-2 py-3 px-4 w-fit h-fit shadow-lg shadow-gray-500 bg-transparent  text-blue-500 rounded-xl border-blue-600 hover:bg-gray-200">Book my order</buttton>
</div>
</div>
<div>
   <img  className="" src={img} alt=""/>
</div>
 </section>
 
 </>
  )
}

export default Home