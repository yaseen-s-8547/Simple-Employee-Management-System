import axios from "axios"
export default function Input({typingSearch,setTypingSearch,setSearching,setEmpDet}){
  const handleApplliedSearch =()=>{
    axios.get(`https://simple-employee-management-system-u5c1.onrender.com/employees?search=${typingSearch}`)
    .then((response)=>{
      console.log(response.data)
      setEmpDet(response.data)
        setSearching(true)
    })
  
    
  }
  const handleClear=()=>{
    axios.get('https://simple-employee-management-system-u5c1.onrender.com/employees')
    .then((response)=>{
      setEmpDet(response.data)
       setSearching(false)

    })
   
   
    
  }

    return(
        <>
      <div className="col-3"></div>
      <div className="col-6 d-flex ">
       <input value={typingSearch} onChange={(e)=>{setTypingSearch(e.target.value)}} placeholder="none" className="form-control rounded-0"/>
        <button onClick={handleApplliedSearch}className="btn btn-primary rounded-0">Search</button><button className="btn btn-primary rounded-0" onClick={handleClear}>Clear</button>
        
      </div>
      <div className="col-3"></div>
        </>
    )
}