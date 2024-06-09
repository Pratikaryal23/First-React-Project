import React from "react";
import img from "../assets/img1.png";
import Services from "../Component/UI/Services";
import images from "../assets/imagesss.jpg";
import Carousel from "../Component/UI/Carousel";
// import Getin from '../Component/UI/Getin'/
import { MdPassword } from "react-icons/md";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import imgs from "../assets/image 81.png";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("this section is necessary")
    .email("invalid email"),
  email: Yup.string().required("This section is necessary"),
  residence: Yup.string().required(" ress is required"),
});

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-2 w-10/12 mx-auto">
        <div>
          <div className="mx-6 py-16  ">
            <h2 className="text-xl font-semibold text-blue-400 ">
              Learn From Today
            </h2>
            <h1 className=" text-4xl font-bold w-96 py-5">
              Happiness Is Freely{" "}
              <span className="text-blue-400">Cleaning</span> House
            </h1>
            <p className="text-xl">
              Training programs can bring you a super exciting experience of
              learning through online! You never face any negative experience
              while enjoying your classes Awesome site. on the top advertising a
              Courses available available business having.. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate ad litora
              torquent
            </p>
          </div>
          <div className="flex gap-4">
            <buttton className="border-2 h-fit py-3 px-6 w-fit  bg-blue-600 rounded-xl text-white">
              About us
            </buttton>
            <buttton className="border-2 py-3 px-4 w-fit h-fit shadow- shadow-gray-500 bg-transparent  text-blue-500 rounded-xl border-blue-600 hover:bg-gray-200">
              Book my order
            </buttton>
          </div>
        </div>
        <div className="h-full w-full">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </section>
      <div className="">
        <Services />
      </div>
      <div className="mx-auto w-10/12 pt-10">
        <div className="grid grid-cols-2  ">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
              We Provide Top Quality Cleaning
            </h1>
            <p className="text-lg">
              Training programs can bring you a super exciting experience of
              learning through online! You never face any negative experience
              while enjoying your classes Awesome site. on the top advertising a
              Courses available available business having.. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nunc vulputate ad litora
              torquent
            </p>

            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              similique!
            </p>

            <div className="flex gap-2">
              <span className="text-2xl text-blue-500">-</span>
              <p className="text-lg">Residental Service Near You !</p>
            </div>
            <div className="flex gap-1">
              <span className="text-xl text-blue-500">-</span>
              <p className="text-lg">
                Commercial Cleaning Service IN Australia .
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-2xl text-blue-500">-</span>
              <p className="text-lg">Professional Floor And Carpet Cleanng .</p>
            </div>
            <button className="w-fit h-fit border-2 b0rder-gray-200 px-8 bg-[#9580F1] rounded-full py-3 text-white">
              Learn More
            </button>
          </div>
          <div className="w-full h-full">
            <img className="w-full h-full object-cover" src={images} alt="" />
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto bg-white shadow-lg mt-4 py-8 flex gap-20 mb-6">
        <p className="grid border-r-2 px-6 py-8 text-2xl  border-gray-500 text-[#9580F1]">
          <span className="text-black text-4xl font-semibold">500+</span>{" "}
          project Done
        </p>
        <p className="grid border-r-2 px-6 py-8 text-[#9580F1] text-2xl border-gray-500">
          <span className="text-black text-4xl ">800</span>Happy Client
        </p>
        <p className="grid border-r-2 px-6 py-8 text-[#9580F1] text-2xl border-gray-500">
          <span className="text-black text-4xl font-semibold">18+</span>Awards
        </p>
        <p className="grid  px-6 py-8  text-[#9580F1] text-2xl ">
          <span className="text-black text-4xl font-semibold">600+</span>Team
          Member
        </p>
      </div>
      <Carousel />

      <div className="w-10/12 mx-auto py-8 gap-7">
        {/* <Layout/> */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            residence: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            console.log("values");
          }}
        >
          <Form className="grid grid-cols-2">
            <div className="w-full h-full">
              <img className="w-full h-full object-cover" src={imgs} alt="" />
            </div>
            <div className="grid shadow-lg px-4">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Having Questions?</h1>
                <p className="text-2xl font-semibold">
                  Get in <span className="text-xl text-blue-500">Touch</span>
                </p>
              </div>

              <label htmlFor="name" className="text-black font-bold mt-4">
                Name
              </label>
              <Field
                name="name"
                placeholder="Enter your Name"
                className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"
              />

              <label htmlFor="email" className="text-black font-bold mt-4">
                Email
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Enter your email"
                className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"
              />

              <label htmlFor="Text" className="text-black font-bold mt-4">
                Your Residence
              </label>
              <Field
                placeholder="Enter your Residence"
                name="residence"
                type="text"
                className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"
              />
              <buttton className="border-2 h-fit py-3 px-56 w-88 my-6  bg-blue-600 rounded-xl text-white">
                Submit
              </buttton>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Home;
