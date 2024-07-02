import React from "react";
// import Layout from '../HOC/Layout';
import imgs from "../assets/image 86.png";
import Herosection from "../Component/UI/Herosection";
import { SlCalender } from "react-icons/sl";
import ims from "../assets/image 87.png";
import imo from "../assets/image 88.png";
import iop from "../assets/image 89.png";
import life from "../assets/lifestyle.png";
import tempo from "../assets/lifestyle2.png";

// import imgs from "../assets/login.png";
// import { Field } from "formik";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
// import { useClerk } from "@clerk/clerk-react";
const schema = Yup.object().shape();

const Blogdetails = () => {
  return (
    <>
      <Herosection title={"blog"} links={"blog"} />
      <div className="mx-auto w-10/12  ">
        <div className=" grid grid-cols-12 gap-10 ">
          <div className=" col-span-8  py-5 grid gap-3  px-2">
            <img className="w-full rounded-lg h-88" src={imgs} alt="" />
            <div className="flex gap-3">
              <SlCalender className="text-blue-300 h-6" />
              <p className="text-gray-500">Friday jan1,2023</p>
            </div>
            <div>
              <h3 className="text-black text-xl font-bold">
                Must Have Cleaning Product For kitchen
              </h3>
              <div>
                <p className="py-3 text-gray-400 text-sm">
                  {" "}
                  The rush to give employees access to all the tools they’d need
                  to work from home was a bit, well, sudden for many employers.
                  But after everyone settled in, what quickly became apparent to
                  many office-based teams is that employees could be productive
                  and focused when not in the office—in many cases, even more
                  so. Employers everywhere began to understand that remote work
                  really works.
                </p>
                <p className="text-gray-400">
                  {" "}
                  Whether you’re on the hunt for a remote job or are already
                  working virtually, check out this list of the advantages of
                  working from home, along with some of the top companies that
                  hire for remote jobs.
                </p>
              </div>
              <div className="flex gap-3 py-4">
                <img src={ims} alt="" className="w-72 h-40 rounded-md" />
                <img src={imo} alt="" className="w-72 h-40 rounded-md" />
              </div>
              <div className="text-lg font-bold ">Replica Quests</div>
              <p className="text-sm text-gray-400 py-1">
                As we’ve long known, remote work has a host of advantages for
                workers. We’re listing out the best of the best benefits of
                working from home—some you may already be aware of, and some
                that may open your eyes even more to remote work’s impact on
                employers, employees, the economy, and the planet.
              </p>
              <div className="text-lg font-bold py-2">Takeaways</div>

              <p className="text-sm text-gray-400">
                <span className="text-blue-600 text-2xl px-2">.</span>As we’ve
                long known, remote work has a host of advantages for workers.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-blue-600 text-2xl px-2">.</span>As we’ve
                long known, remote work has a host of advantages for workers.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-blue-600 text-2xl px-2">.</span>As we’ve
                long known, remote work has a host of advantages for workers.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-blue-600 text-2xl px-2">.</span>As we’ve
                long known, remote work has a host of advantages for workers.
              </p>
              <div className="py-4">
                <img src={iop} className="rounded-md" alt="" />
              </div>
              <div className="grid gap-4">
                <p className="text-sm text-gray-400">
                  {" "}
                  The rush to give employees access to all the tools they’d need
                  to work from home was a bit, well, sudden for many employers.
                  But after everyone settled in, what quickly became apparent to
                  many office-based teams is that employees could be productive
                  and focused when not in the office—in many cases, even more
                  so. Employers everywhere began to understand that remote work
                  really works.
                </p>

                <p className="text-sm text-gray-400">
                  Whether you’re on the hunt for a remote job or are already
                  working virtually, check out this list of the advantages of
                  working from home, along with some of the top companies that
                  hire for remote jobs.
                </p>

                <div>
                  <p className="text-black text-xl font-bold">
                    <span>2</span> Comments
                  </p>
                </div>
                <div className="flex gap-7 border-l-2 mx-24 rounded-md border-gray-200 relative px-2">
                  <img className="rounded-full w-16 h-16 absolute -left-24" src={life} alt="" />
                  <div className="grid">
                    <p className="font-semibold text-lg">Taylor Swift</p>
                    <p className="text-sm text-gray-400">
                      January 9, 2022 . 7:08 pm
                    </p>
                    <div className="px-3">
                      <div className="grid gap-4 py-4 ">
                        <p className="text-sm text-gray-400">
                          Many remote jobs also come with flexible schedules,
                          which means that workers can start and end their day
                          as they choose, as long as their work.
                        </p>
                        <button className="w-fit h-fit border-2 b0rder-gray-200 px-6 bg-[#9580F1] rounded-full py-2 text-white">
                          Reply
                        </button>
                      </div>
                      <div className="px-2 py-3 flex relative gap-7 ">
                        <div className="h-[2px] w-4 absolute top-10 left-0 -mx-5  rounded-md bg-gray-400"></div>
                        <img className="rounded-full h-16 w-16" src={tempo} alt="" />
                        <div className="grid">
                          <p className="font-semibold text-lg">Amber Ross</p>
                          <p className="text-sm text-gray-400">
                            January 9, 2022 . 7:08 pm
                          </p>
                          <div className="grid gap-4 py-4 ">
                        <p className="text-sm text-gray-400">
                          Many remote jobs also come with flexible schedules,
                          which means that workers can start and end their day
                          as they choose, as long as their work.
                        </p>
                        <button className="w-fit h-fit border-2 b0rder-gray-200 px-6 bg-[#9580F1] rounded-full py-2 text-white">
                          Reply
                        </button>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <Formik
          initialValues={{
            name: "",
            email: "",
            service:"",
            
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            console.log("values");
          }}
        >
          <Form>
            <div className="grid grid-cols-2">
              <div className="">
                <div className="font-bold text-2xl py-8">Leave A Reply</div>
              <div className="grid gap-8">
                <div className="flex gap-10">
                  <div className="grid">
                  <label htmlFor="email" className="text-black font-bold mt-4">
                    Your Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your email"
                    className=" border-gray-300 rounded-2xl w-[350px] pl-3 mt-2 outline-none border-2 py-3"
                  />
                  </div>
                  <div className="grid">                 
                     <label
                    htmlFor="password"
                    className="text-black font-bold mt-4"
                  >
                    Your Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    placeholder="Enter your Password"
                    className=" border-gray-300 rounded-2xl w-[350px] pl-3 mt-2 outline-none border-2 py-3"
                  />
                </div>
                </div>

                <div>
                <label
                    htmlFor="service"
                    className="text-black font-bold mt-4"
                  >
                    What kind of Service Looking for *
                  </label>
                  <Field
                    name="service"
                    type="text"
                    placeholder="Enter your text"
                    className=" border-gray-300 rounded-2xl w-[750px] pl-3 mt-2 outline-none border-2 py-3"
                  />
                </div>
                <div>
                  {/* <label htmlFor="Password"className="text-[#9580F1] text-xl font-semibold">Your Message</label> */}
                  <p className="text-black text-xl font-semibold">
                    Message
                  </p>
                  <textarea
                    name="name"
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    
                    className="border-gray-300 rounded-md w-[750px] pl-3  outline-none border-2 py-3 resize-none "
                  />
                
                 
                </div>
              
               

                <div className="py-3">
                  <buttton className="border-2 h-fit px-16 w-88 py-3 bg-blue-600 rounded-xl text-white">
                    Login
                  </buttton>
                </div>
               
                
              </div>
            </div>
            </div>
          </Form>
        </Formik>
            </div>
          </div>
          <div className="col-span-4 py-6">
            <div className="text-xl font-bold px-3 ">Search</div>
            {/* <Field
            name="search"
            type="text"
            placeholder="Search Here"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetails;
