import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'
import './Card.css'
import DoctorCard from './DoctorCard'

export default function About() {
  const[doctors,setDoctors]=useState([])
  const[search,setSearch]=useState("")

useEffect(()=>{
  console.log("Hellooo sai tejaa")
  loadData()
},[])
//dependency array

const filterDoctors=doctors.filter((doctor)=>(
  doctor.name.toLowerCase().includes(search.toLowerCase())
))
 

function loadData(){
    axios.get("https://doc-back.onrender.com/doctors")
    .then((result)=>{
        console.log(result.data);
        setDoctors(result.data)
        
    })
}  
// console.log("doctors")

//delete data

function deleteDoctor(id){
  axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
  .then(()=>{
    alert("deleted successfully")
    loadData()
    
  })

}

  return (
<div>  
    <div className="search">
    <input type="text" 
    placeholder="search doctor"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    </div>

    <div className="card">
{
  
  filterDoctors.length===0?
  (<h1>Not Found</h1>) :
  (filterDoctors.map((i)=>(
    <div key={i.id}>
    <DoctorCard 
    id={i.id}
    name={i.name}
    age={i.age}
    gender={i.gender}
    specialization={i.specialization}
    salary={i.salary}
    deleteDoctor={deleteDoctor}
     />
    </div>

    // <div key={i.id} className="child">
    //   <p><b>Name:</b>{i.name}</p>
    //   <p><b>gender:</b>{i.gender}</p>
    //   <p><b>age:</b>{i.age}</p>
    //   <p><b>specialization:</b>{i.specialization}</p>
    //   <p><b>salary:</b>{i.salary}</p>
    // </div>

  )))
}      

    </div>
</div>      
  )
}
