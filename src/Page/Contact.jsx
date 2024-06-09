import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Field, Formik } from "formik";
import img from "../assets/img1.png";

let data = [
  {
    icon: <IoIosCall />,
    section: "Contact Us",
    phone: "98765432 / 112121212",
  },

  {
    icon: <MdEmail />,
    section: "Office Hour",
    phone: " Sunday-Friday 9-5pm",
  },
  {
    icon: <CiClock2 />,
    section: "Email",
    phone: "aryalpratik11@gmail.com",
  },
  {
    icon: <CiLocationOn />,
    section: "Location",
    phone: "Butwal",
  },
];

const Contact = () => {
  return (
    <>
      <section>
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 grid justify-center py-5 gap-3">
          <h3 className="text-3xl text-white font-serif">Contact</h3>
          <div className="flex text-white  gap-2">
            <FaHome className="text-xl" />
            <p>Home</p>
            <FaArrowRight className="text-xl" />
            <p>Contact</p>
          </div>
        </div>
        <div className="w-10/12 mx-auto my-4">
          <div>
            <p className="text-2xl font-semibold text-[#9580F1]">
              Get in Touch
            </p>
            <p className="text-md font-[lato] text-purple-300">
              Want to know more about us? Contact us right now!
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-6 py-3 ">
            {data.map((val, i) => {
              return (
                <div className="border-2 shadow-xl text-[#9580F1]  justify-center font-semibold border-gray-100 px-9 rounded-lg grid py-8 hover:bg-[#9580F1] hover:text-white hover:-translate-y-2 ">
                  <div className="text-3xl  px-4">{val.icon}</div>
                  <div className="px-3">{val.section}</div>
                  <div className="px-1">{val.phone}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-10/12 mx-auto">
          <p className="text-2xl text-[#9580F1] font-semibold">
            We’re here to help you
          </p>
          <p className="text-lg font-[Lato] text-purple-400">
            Shoot us a message if you have any question, we’re here to help!
          </p>
          <Formik>
            <form className="my-5 grid grid-cols-2 ">
              <div className=" w-full grid gap-5">
                <div className="flex justify-start gap-5 ">
                  <div className="grid">
                    <label
                      htmlFor="Name"
                      className="text-[#9580F1] text-xl font-semibold mt-4"
                    >
                      Your Name
                    </label>
                    <Field
                      name="name"
                      placeholder="Enter your Name"
                      className=" border-gray-300 rounded-md w-64 pl-3 mt-2 outline-none border-[1px] py-3"
                    />
                  </div>
                  <div className="grid ">
                    {" "}
                    <label
                      htmlFor="Password"
                      className="text-[#9580F1] text-xl font-semibold mt-4"
                    >
                      YourEmail
                    </label>
                    <Field
                      name="name"
                      placeholder="Enter your Email"
                      className=" border-gray-300 rounded-md w-64 pl-3 mt-2 outline-none border-[1px] py-3 "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                  <label
                    htmlFor="Name"
                    className="text-[#9580F1] text-lg font-semibold"
                  >
                    Date
                  </label>
                  <Field
                    name="name"
                    type="date"
                    placeholder="Enter your Name"
                    className=" border-gray-300 rounded-md w-40 pl-3 mt-2 outline-none border-2 py-3"
                  />
                  </div>
                  <div>
                  <label
                    htmlFor="Password"
                    className="text-[#9580F1] text-xl font-semibold"
                  >
                    Start Time{" "}
                  </label>
                  <Field
                    name="name"
                    type="time"
                    placeholder="Enter your Name"
                    className=" border-gray-300 rounded-md w-40 pl-3 mt-2 outline-none border-2 py-3 grid"
                  />
                  </div>
                  <div>

                  <label
                    htmlFor="Password"
                    className="text-[#9580F1] text-xl font-semibold"
                  >
                    End Time{" "}
                  </label>
                  <Field
                    name="name"
                    type="time"
                    placeholder="Enter your Name"
                    className=" border-gray-300 rounded-md w-40 pl-3 mt-2 outline-none border-2 py-3 grid"
                  />
                  </div>
                </div>

                {/* <label htmlFor="Password"className="text-[#9580F1] text-xl font-semibold mt-4">End Time </label>
<Field
  name="name"
  type="time"
  placeholder="Enter your Name"
  className=" border-gray-300 rounded-xl w-60 pl-3 mt-2 outline-none border-2 py-3 grid"/> */}

                <div>
                  <label
                    htmlFor="Password"
                    className="text-[#9580F1] text-xl font-semibold"
                  >
                    What kind of service are you looking for?{" "}
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="What kind of service are you looking for?"
                    className=" border-gray-300 rounded-md w-[540px] pl-3  outline-none border-2 py-3 "
                  />
                </div>

                <div>
                  {/* <label htmlFor="Password"className="text-[#9580F1] text-xl font-semibold">Your Message</label> */}
                  <p className="text-[#9580F1] text-xl font-semibold">
                    Message
                  </p>
                  <textarea
                    name="name"
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    
                    className="border-gray-300 rounded-md w-[540px] pl-3  outline-none border-2 py-3 resize-none "
                  />
                
                 
                </div>

                <div className="my-4">
                  <buttton className="border-2 h-fit py-4 px-6 w-full my-6  bg-[#9580F1] rounded-xl text-white">
                    Get In Touch
                  </buttton>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113065.56678320095!2d83.43566472145994!3d27.677153361839107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal!5e0!3m2!1sen!2snp!4v1714646165738!5m2!1sen!2snp"
                  width="600"
                  height="600"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Contact;
