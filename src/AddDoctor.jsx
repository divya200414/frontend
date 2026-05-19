import React,{useState} from 'react'
import axios from 'axios'

export default function AddDoctor() {
    const[name,setName]=useState("")
    const[gender,setGender]=useState("")
    const[age,setAge]=useState("")
    const[specialization,setSpecialization]=useState("")
    const[salary,setSalary]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newDoctor={
          name:name,
          gender:gender,
          age:age,
          specialization:specialization,
          salary:salary

        
        }




        axios.post("https://doc-back.onrender.com/doctors",newDoctor)
        .then(()=>{
            alert("posted successfully")
            setName("")
            setGender("")
            setAge("")
            setSpecialization("")
            setSalary("")

        })
    }
  return (
    <div>
      Register here
      <form action="" onSubmit={handleSubmit}>
      <br /><br />
      <input type="text"
      placeholder='enter doctor name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      
      />
    <br /><br />
       <input type="text" placeholder='enter age'
       value={age}
      onChange={(e)=>setAge(e.target.value)} 
       
       />
    <br /><br />
       <input type="text" placeholder='enter specialization'
       value={specialization}
      onChange={(e)=>setSpecialization(e.target.value)}
       
       />
    <br /><br />
       <input type="text" placeholder='enter salary'
       value={salary}
      onChange={(e)=>setSalary(e.target.value)} 
       
       />
    <br /><br />
       <select name="" id="" onChange={(e)=>setGender(e.target.value)}  >
        <option value="">Enter Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       </select>
    <br /><br />

    <button>AddDoctor</button>

    </form>


    </div>
  )
}
