// import { useState } from 'react'
// import Toolbar from './Component/Navigation/Toolbar'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Sigin from './Page/Sigin';
import Home from './Page/Home';

// import Footer from "../Na"


import Layout from "./HOC/Layout"
import About from './Page/About';
import Footer from './Component/Navigation/Footer';
import Contact from './Page/Contact';
import Service from './Page/Service';
import Login from './Page/Login';


function App() {
 

  return (
    <>
    {/* <Layout/> */}
    <Router>
    <Layout/>
    
      <Routes>
        <Route path="/sigin" element={<Sigin/>}/>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/Sigin/login" element={<Login/>}/>

      </Routes>
    </Router>
    <Footer/>

    </>
  )}

export default App;
