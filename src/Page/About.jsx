import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image from "../assets/clean.png";
import Herosection from "../Component/UI/Herosection";
import Services from "../Component/UI/Services";
import Carousel from "../Component/UI/Carousel";

const About = () => {
  return (
    <>
      <section>
        <div>
          <Herosection title={"about"} links={"about"} />
          <div className="w-10/12 mx-auto grid grid-cols-2 py-6 gap-6">
            <div className="flex flex-col py-9 gap-10">
              <p className="text-4xl font-bold">
                We Provide Top Quality Cleaning
              </p>
              <p className="text-xl">
                Training programs can bring you a super exciting experience of
                learning through online! You never face any negative experience
                while enjoying your classes Awesome site. on the top advertising
                a Courses available available business having.
              </p>
              <button className="w-fit h-fit border-2 b0rder-gray-200 px-5 bg-[#9580F1] rounded-md py-3 text-white">
                Book a cleaner
              </button>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <Services />
        <div className="w-10/12 mx-auto flex justify-between py-8">
          <div className="grid">
            <p className="text-4xl font-semibold">Testonomial</p>
            <p className="font-[Lato] text-2xl text-gray-400">
              What Our Clients says about us{" "}
            </p>
          </div>
          <div className="flex">
            <button className="w-fit h-fit border-2 b0rder-gray-200 px-8 bg-[#9580F1] rounded-md py-3 text-white">
              Regular
            </button>
            <button className="w-fit h-fit border-2 b0rder-gray-200 px-8 bg-white hover:bg-[#9580F1] rounded-md py-3 text-black hover:text-white">
              Google
            </button>
          </div>
        </div>
        <Carousel />
      </section>
    </>
  );
};

export default About;
