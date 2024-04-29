        import React from 'react'
import Layout from '../HOC/Layout';
import { MdPassword } from 'react-icons/md';
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import imgs from "../assets/Group 47757.png"


const schema = Yup.object().shape({
  name: Yup.string().required("this section is necessary").email('invalid email'),
  email: Yup.string().required("This section is necessary"),
  password: Yup.string().required(" passis required"),
});
        
        const Sigin = () => {
          return (
            <>
       <div className='w-10/12 mx-auto py-8 gap-7'>
        {/* <Layout/> */}
        <Formik       
        initialValues={{
          name: "",
          email: "",
          Password: "",
        
        }}
        validationSchema={schema}
        onSubmit={(values,{resetForm}) => {
          console.log("values");
        }}>
          <Form className='grid grid-cols-2'>
          <div className='grid'>
  <h1 className='text-4xl font-bold'>Sign In</h1>
  <label
   htmlFor="name"               
  className="text-black font-bold mt-4">Name</label>
  <Field
  name="name"
  placeholder="Enter your Name"
  className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"/>

    <label htmlFor="email"className="text-black font-bold mt-4">Email</label>
  <Field
  name="email"
  type="text"
  placeholder="Enter your email"
  className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"/>

   <label htmlFor="Password"className="text-black font-bold mt-4">Password</label>
  <Field
  placeholder="Enter your Password"
  name="password"
  type="text"
  className=" border-gray-300 rounded-2xl w-88 pl-3 mt-2 outline-none border-2 py-3"/>
    <buttton className="border-2 h-fit py-3 px-56 w-88 my-6  bg-blue-600 rounded-xl text-white">Signin</buttton>

</div>
<div className='mx-8'>
  <img className="w-9/12" src={imgs} alt=""/>
</div>
</Form>
</Formik>

       </div>
       </>
          )
        }
        
        export default Sigin;                                        