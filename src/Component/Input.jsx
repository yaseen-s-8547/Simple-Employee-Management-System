export default function Input({typingSearch,setTypingSearch,setAppliedSearch,empDet,setSearching}){
  const handleApplliedSearch =()=>{
    setAppliedSearch(typingSearch)
    setSearching(true)
    
  }
  const handleClear=()=>{
    setAppliedSearch("")
    setTypingSearch("")
    setSearching(false)
   
    
  }

    return(
        <>
      <div className="col-md-3"></div>
      <div className="col-md-6 d-flex ">
       {empDet.length>0&&(<> <input value={typingSearch} onChange={(e)=>{setTypingSearch(e.target.value)}} placeholder="none" className="form-control rounded-0"/>
        <button onClick={handleApplliedSearch}className="btn btn-primary rounded-0">Search</button><button className="btn btn-primary" onClick={handleClear}>Clear</button></>)}
        
      </div>
      <div className="col-md-3"></div>
        </>
    )
}