import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function DoctorCard(props) {
    const navigate=useNavigate()
  return (
    <div className="child">
      <p><b>Name:</b>{props.name}</p>
      <p><b>gender:</b>{props.gender}</p>
      <p><b>age:</b>{props.age}</p>
      <p><b>specialization:</b>{props.specialization}</p>
      <p><b>salary:</b>{props.salary}</p>
      <button onClick={()=>navigate(`/doctor/${props.id}`)}>ViewDetails</button>
      <button onClick={()=>{props.deleteDoctor(props.id)}}>Delete</button>
      <button onClick={()=>navigate(`/edit/${props.id}`)}>Update</button>

    </div>

  )
}
