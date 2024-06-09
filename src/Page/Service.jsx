import React from "react";
import Herosection from "../Component/UI/Herosection";
import Services from "../Component/UI/Services";
// import Accordion from '../Component/UI/Accordion'
import Accordions from "../Component/UI/Accordion";

const Service = () => {
  return (
    <>
      <Herosection title={Service} links={Service} />
    
      <Services />
      <div className="mx-auto w-10/12 justify-center flex my-5">
        <button className="w-fit h-fit border-2 b0rder-gray-200 px-8 bg-[#9580F1] rounded-md py-3 text-white">
          View More
        </button>
      </div>
      <Accordions />
    </>
  );
};

export default Service;
