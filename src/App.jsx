// import { useState } from 'react'
// import Toolbar from './Component/Navigation/Toolbar'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Sigin from './Page/Sigin';
import Home from './Page/Home';


import Layout from "./HOC/Layout"
import About from './Page/About';


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

      </Routes>
    </Router>

    </>
  )}

export default App;
