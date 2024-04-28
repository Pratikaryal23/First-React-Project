import React from 'react'
import img from "./Photos/img1.png"
const Home = () => {
  return (
 <>
 <section className='grid grid-cols-2'>
    <div>
<div className='mx-6 py-20'>
    <h2 className='text-xl font-semibold text-blue-600 '>BODY</h2>
    <h1 className=' text-4xl font-bold'>HEADING</h1>\
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas placeat enim perspiciatis nulla similique.</p>
</div>
<div className='flex'>
    <buttton className="border-2 py-2 mx-6 px-4 bg-blue-600 rounded-xl text-white">About us</buttton>
    <buttton className="border-2 py-2 mx-6 px-4 bg-blue-600 rounded-xl text-white">About us</buttton>
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