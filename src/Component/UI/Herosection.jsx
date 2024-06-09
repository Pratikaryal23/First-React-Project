import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";

function Herosection({ links, title }) {
    return (
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500  flex  flex-col items-center justify-center py-10 my-2 gap-3 peer-[]:">
            <h3 className="text-3xl text-white capitalize font-serif">{title} </h3>
            <div className="flex text-white  gap-2">
                <FaHome className="text-xl" />
                <p>Home</p>
                <FaArrowRight className="text-xl" />
                <p>{links}</p>
            </div>
        </div>
    );
}

export default Herosection;
