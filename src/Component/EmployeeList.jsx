import { useState } from "react"



export default function EmployeeList({ empDet  }) {
      const[activeFeild,setActiveFeild] =useState(null)
    const handleAddId = () => {
        setActiveFeild("id")
    }
    const handleSaveId = () => {
        setActiveFeild(null)
    }
    const handleCancelId = () => {
         setActiveFeild(null)
    }
    const handleAddName = () => {
        setActiveFeild("name")

    }
    const handleSaveName = () => {
       setActiveFeild(null)
    }
    const handleCancelName = () => {
         setActiveFeild(null)
    }
    const handleAddRole = () => {
        setActiveFeild("role")
    }
    const handleSaveRole = () => {
      setActiveFeild(null)
    }
    const handleCancelRole = () => {
        setActiveFeild(null)
    }
    const handleAddSal = () => {
        setActiveFeild("salary")
    }
    const handleSaveSal = () => {
        setActiveFeild(null)
    }
    const handleCancelSal = () => {
         setActiveFeild(null)
    }
    const handleAddGmail = () => {
        setActiveFeild("mail")
    }
    
    const handleSaveGmail = () => {
       setActiveFeild(null)
    }
     const handleCancelGmail = () => {
        setActiveFeild(null)
    }
    const handleAddCont = () => {
        setActiveFeild("phone")
    }
    const handleSaveCont = () => {
    setActiveFeild(null)
    }
     const handleCancelCont = () => {
         setActiveFeild(null)
    }
    return (
        <>
            <div className="col-md-1"></div>
            <div className="col-md-10 shadow py-5 rounded ">
                <table className="table table-hover  ">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">role</th>
                            <th scope="col">salary</th>
                            <th scope="col">mail</th>
                            <th scope="col">phone</th>
                            <th scope="col">...</th>


                        </tr>
                    </thead>
                    <tbody>
                        {empDet.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">1</th>
                                        <td>{item.name}</td>
                                        <td>{item.role}</td>
                                        <td>{item.salary}</td>
                                        <td className="d-flex flex-column  w-auto ">
                                            <a href="/">{item.gmail}</a>

                                        </td>
                                        <td>
                                            <a href="122">{item.phone} </a>
                                        </td>
                                        <td className="">
                                            <button className="btn btn-primary">Update</button>
                                            <button className="btn btn-primary  ms-2">delete</button>
                                        </td>
                                    </tr>
                                ))}
                        <>
                                <tr >
                                    {activeFeild==="id" ? (<>
                                        <th className="d-flex " scope="row">
                                            <input className="input form-sontrol form-control-sm " />
                                            <button className="btn btn-primary btn-sm" onClick={handleSaveId}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelId}>cancel</button>
                                        </th></>)
                                        :
                                        (<><th scope="row">
                                            <button className="btn btn-sm btn-primary" onClick={handleAddId}>Add</button>
                                        </th></>)}
                                    <td>
                                        {activeFeild==="name" ? (<>
                                            <input className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm" onClick={handleSaveName}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelName}>cancel</button></>)

                                            :
                                            (<><button className="btn btn-sm btn-primary" onClick={handleAddName}>Add</button></>)}
                                    </td>
                                    <td>
                                        {activeFeild==="role"? (<>
                                            <input className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm" onClick={handleSaveRole}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelRole}>cancel</button></>)
                                            :
                                            (<><button className="btn btn-sm btn-primary" onClick={handleAddRole}>Add</button></>)}
                                    </td>
                                    <td>
                                        {activeFeild==="salary" ? (<>
                                            <input className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm" onClick={handleSaveSal}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelSal}>cancel</button>
                                        </>) : (<><button className="btn btn-sm btn-primary" onClick={handleAddSal}>Add</button></>)}
                                    </td>
                                    <td className="d-flex  ">
                                        {activeFeild==="mail"? (<> <input className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm " onClick={handleSaveGmail}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelGmail}>cancel</button></>) : (<><button className="btn btn-sm btn-primary" onClick={handleAddGmail}>Add</button></>)}
                                    </td>
                                    <td>
                                        {activeFeild==="phone"? (<>
                                            <input className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm" onClick={handleSaveCont}>save</button> <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelCont}>cancel</button></>) : (<><button className="btn btn-sm btn-primary" onClick={handleAddCont}>Add</button></>)}
                                    </td>

                                </tr>



                            </>
                    </tbody>
                </table>

            </div>
            <div className="col-md-1"></div>
        </>
    )
}