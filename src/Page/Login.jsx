import React from "react";
import imgs from "../assets/login.png";
// import { Field } from "formik";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
const schema = Yup.object().shape();

const Login = () => {
  return (
    <>
      <div className="w-10/12 mx-auto py-10 ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            Password: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            console.log("values");
          }}
        >
          <Form>
            <div className="grid grid-cols-2 gap-5">
              <div className="p-3">
                <div className="font-bold text-2xl">Login</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, dolores!
                </p>
                <div className="grid">
                  <label htmlFor="email" className="text-black font-bold mt-4">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"
                  />
                  <label
                    htmlFor="password"
                    className="text-black font-bold mt-4"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="pasword"
                    placeholder="Enter your Password"
                    className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"
                  />
                </div>
                <div className="flex gap-64 py-4">
                  <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales" className="text-md">
                      Remember Me
                    </label>
                  </div>

                  <div className="text-blue-500">Forget Password?</div>
                  </div>

                  <div className="py-3">
                    <buttton className="border-2 h-fit px-56 w-88 py-3 bg-blue-600 rounded-xl text-white">
                      Login
                    </buttton>
                  </div>
                  <div className="py-3">Not have an Account? <span className="text-blue-600 cursor-pointer">Create Account</span></div>
                
              </div>
              <div>
                <img className="w-9/12" src={imgs} alt="" />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
