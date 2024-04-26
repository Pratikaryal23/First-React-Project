import { useState } from 'react'
import Toolbar from './Component/Navigation/Toolbar'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Layout from './HOC/Layout';

function App() {
 

  return (
    <>
<Router>
  <Routes>
    <Route path="layout" element={<Layout/>}/>
  </Routes>
</Router>

    </>
  )}

export default App
