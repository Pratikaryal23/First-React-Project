// import { useState } from 'react'
// import Toolbar from './Component/Navigation/Toolbar'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Sigin from './Page/Sigin';
import Home from './Page/Home';


import Layout from "./HOC/Layout"


function App() {
 

  return (
    <>
    {/* <Layout/> */}
    <Router>
    <Layout/>
      <Routes>
        <Route path="sigin" element={<Sigin/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </Router>

    </>
  )}

export default App;
