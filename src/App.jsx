import React from 'react'
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import About from './About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import DoctorDetails from './DoctorDetails'
import AddDoctor from './AddDoctor'

export default function App() {
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/doctor/:id" element={<DoctorDetails/>}/>
     <Route path="/addDoctor" element={<AddDoctor></AddDoctor>}/> 
     <Route path="/edit/:id" element={<EditDoctor/>}/>

  </Routes>
  </BrowserRouter>    
    </div>
  )
}
