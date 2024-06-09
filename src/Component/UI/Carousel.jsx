import React from 'react'
import imgs from "../../assets/amit.jpeg"
import imgss from "..//../assets/Sandesh.png"
// import img from "..//../assets/pratik.jpeg"
import Image from ".//../../assets/pratik.jpeg/"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const data=[
    {
    name:"Pratik Aryal",
    img:Image,
    star:"",
    review:"phello mdnba ndgyshd nchu bcvy bscvssg bsddgqsgqyd  shagsy sbvsc bvsqy vshysgy"
},
{
    name:"Sandesh Acharya",
    img: imgss,
    star:"",
    review:" shello mdnba ndgyshd nchu bcvy bscvssg bsddgqsgqyd  shagsy sbvsc bvsqy vshysgdy "
},
{
    name:"Amit Poudel",
    img:imgs,
    star:"",
    review:"  ahello mdnba ndgyshd nchu bcvy bscvssg bsddgqsgqyd  shagsy sbvsc bvsqy vshysgdy "
}
]

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
    <div className='w-10/12 mx-auto mb-8'>
        <div className='mt-10'>
        <Slider {...settings}>
            {
                data.map((val,i)=>{
                    return(
                          
                        
                        <div  className='grid gap-5 border mx-10'>                                                
                            <div className='mx-[480px] h-32 w-32 bg-red-300 rounded-full '>
                                <img className='rounded-full w-36 h-32' src={val.img} alt="" />

                                
                                </div>
                           

                            <div className='flex flex-col justify-center items-center text-lg font-semibold  px-4 py-3 gap-4'>
                                <p>{val.name}</p>
                                <p>{val.review}</p>
                                <button className="w-fit h-fit border-2 b0rder-gray-200 px-8 bg-[#9580F1] rounded-md py-3 text-white ">
              View More
            </button>
                            </div>
                            </div>

                    

                    )
                })
            }
            </Slider>
        </div>

    </div>
    
    </>
  )
}

export default Carousel;

// export default SimpleSlider;