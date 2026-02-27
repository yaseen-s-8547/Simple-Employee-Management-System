
import Navbar from "./Component/Navbar"
import EmployeeList from "./Component/EmployeeList"
import Input from "./Component/Input"
import { useState,useEffect } from "react"
import axios from "axios"


function App() {
  const[empDet,setEmpDet]=useState([])
  const[typingSearch,setTypingSearch]=useState("")
  const[appliedSearch,setAppliedSearch]=useState("")
  const [searching,setSearching]=useState(false)
 
  
   
  useEffect(()=>{
    axios.get("http://localhost:5000/employees")
    .then((response)=>{
      setEmpDet(response.data)
    })
  })

  

  return (
    <>
    <div className="container-fluid ">
      <div className="row ">
        <Navbar empDet={empDet}/>
      </div>
    </div>
    <div className="container py-3">
      <div className="row">
        <Input   empDet={empDet} typingSearch={typingSearch} setTypingSearch={setTypingSearch}  setSearching={setSearching}  setAppliedSearch={setAppliedSearch}/>
      </div>
    </div>

    <div className="container-fluid mt-5">
      <div className="row">
        <EmployeeList  empDet={empDet} setEmpDet={setEmpDet} appliedSearch={appliedSearch} searching={searching}/>
      </div>
    </div>
    </>
  )
}

export default App
