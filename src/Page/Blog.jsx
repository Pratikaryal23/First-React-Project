import React from "react";
import imgs from "../assets/image 73.png";
import img from "../assets/image 72.jpeg";
import Herosection from "../Component/UI/Herosection";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const data = [
  {
    image: "img",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
  {
    image: "imgs",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
  {
    image: "img",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
  {
    image: "imgs",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
  {
    image: "img",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
  {
    image: "imgs",
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...",
    btn: "LEARN MORE",
  },
];

const Blog = () => {
  const navigatte=useNavigate()
  return (
    <>
      <Herosection title={"blog"} links={"blog"} />
      <div className="w-10/12 mx-auto py-8">
        <div className="grid gap-2 justify-center items-center w-full mx-40">
          <div className="text-4xl font-bold"> Our Latest News</div>
          <p className="text-gray-400 w-1/2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            aperiam esse? Repellat a tempore asperiores!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 py-9">
          {data.map((val, i) => {
            return (
              <div className="flex w-full h-full gap-4 shadow-md mx-3">
                <img className="w-44 h-44" src={imgs} alt="" />
                <div className="grid">
                  <div className="text-lg font-semibold w-full">
                    {val.title}
                  </div>
                  <div className="text-sm">{val.content}</div>
                  <div className="text-blue-500 cursor-pointer flex gap-1" onClick={()=>{
                    navigatte("blogdetails")
                  }}>
                    {val.btn} <FaArrowRight className="text-lg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
