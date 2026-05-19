import React from 'react'

export default function EditDoctor() {
    const[name,setName]=useState("")
    const[gender,setGender]=useState("")
    const[age,setAge]=useState("")
    const[specialization,setSpecialization]=useState("")
    const[salary,setSalary]=useState("")

useEffect(()=>{
loadDoctors()
},[])
    const{id}=useParams()
    function loadDoctors(){
        axios.get(`https://doc-back.onrender.com/doctors/${id}`)
        .then((mani)=>{
            console.log(mani.data);
            setName(mani.data.name);
            setSalary(mani.data.salary);
            setGender(mani.data.gender);
            setAge(mani.data.age);
            setSpecialization(mani.data.specialization)
        })
    }


    function updateDoctor(e){
        e.preventDefault()
axios.put(`https://doc-back.onrender.com/doctors/${id}`,{
    name,
    salary,
    age,
    gender,
    specialization

}).then(()=>{
    alert("updated successfully")
})        
    }
    })
    
  return (
    <div>
      UPDATE DOCTOR
    <div>
    <form action="" onSubmit={updateDoctor}>
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
    )
