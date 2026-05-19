import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect } from 'react';

export default function DoctorDetails() {
  const[Doctor,setDoctor]=useState([]);

  useEffect(()=>{
    console.log("hello")
    getDoctor()
  },[])
 


  const{id}=useParams()
 
  function getDoctor(){
    axios.get(`https://doc-back.onrender.com/doctors/${id}`)
    .then((getin)=>{
      console.log(getin.data)
      setDoctor(getin.data)

    }

    )
  }
  return (
    <div>
      <p>this is doctor details page</p>
      {id}
      
   
  
 
    <div>
    <p>{Doctor.name}</p>
    <p>{Doctor.age}</p>
    <p>{Doctor.gender}</p>
    <p>{Doctor.specialization}</p>
    <p>{Doctor.salary}</p>
    </div>
    
 </div>

  )
}   