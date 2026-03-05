import { useState } from "react"

import axios from "axios"


export default function EmployeeList({ empDet, setEmpDet,searching}) {
    const [activeFeild, setActiveFeild] = useState(null)
    const [newName, setnewName] = useState('')
    const [newRole, setNewRole] = useState('')
    const [newSal, setNewSal] = useState('')
    const [newMail, setNewMail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [editingEmployee, setEditingEmployee] = useState(null)
    const [formData,setFormData]=useState({})


    const handleAddName = (id) => {

        setActiveFeild({ id: id, feild: "name" })


    }
    const handleSaveName = () => {
        axios.post("https://simple-employee-management-system-u5c1.onrender.com/employees", { name: newName })
            .then((response) => {
                setEmpDet(prev => [...prev, response.data])
            })
        setnewName("")
        setActiveFeild(null)
    }
    const handleCancelName = () => {
        setActiveFeild(null)
    }
    const handleAddRole = (id) => {

        setActiveFeild({ id: id, feild: "role" })
    }
    const handleSaveRole = (id) => {
        const empid = id
        axios.patch(`https://simple-employee-management-system-u5c1.onrender.com/employees/${empid}`, { role: newRole })
            .then((response) => {
                setEmpDet(prev => prev.map(e => e.id === response.data.id ? response.data : e))

            })
        setNewRole("")
        setActiveFeild(null)
    }
    const handleCancelRole = () => {
        setActiveFeild(null)
    }
    const handleAddSal = (id) => {
        setActiveFeild({ id: id, feild: "salary" })
    }
    const handleSaveSal = (id) => {
        axios.patch(`https://simple-employee-management-system-u5c1.onrender.com/employees/${id}`, { salary: newSal })
            .then((response) => {

                setEmpDet(prev => prev.map((s => s.id === response.data.id ? response.data : s)))
            })
        setNewSal("")
        setActiveFeild(null)
    }
    const handleCancelSal = () => {
        setActiveFeild(null)
    }
    const handleAddGmail = (id) => {
        setActiveFeild({ id: id, feild: "mail" })
    }
    const handleSaveGmail = (id) => {
        axios.patch(`https://simple-employee-management-system-u5c1.onrender.com/employees/${id}`, { gmail: newMail })
            .then((res) => {
                setEmpDet(prev => prev.map((m => m.id === res.data.id ? res.data : m)))
            })
        setNewMail("")
        setActiveFeild(null)
    }
    const handleCancelGmail = () => {
        setActiveFeild(null)
    }
    const handleAddCont = (id) => {

        setActiveFeild({ id: id, feild: "phone" })
    }
    const handleSaveCont = (id) => {
        axios.patch(`https://simple-employee-management-system-u5c1.onrender.com/employees/${id}`, { phone: newPhone })
            .then((response) => {
                setEmpDet(prev => prev.map(p => p.id === response.data.id ? response.data : p))
            })
        setNewPhone("")
        setActiveFeild(null)
    }
    const handleCancelCont = () => {
        setActiveFeild(null)
    }
    const draftId = "new"
     const handleUpdate = (emp) => {
        setEditingEmployee(emp)
        setFormData(emp)
    }
    const handleEditSave=()=>{
        axios.patch(`https://simple-employee-management-system-u5c1.onrender.com/employees/${editingEmployee.id}`,formData)
        .then((response)=>{
            setEmpDet(prev=>prev.map(ed=>ed.id===response.data.id?response.data:ed))
        })
        setEditingEmployee(null) }

    const handleDelete=(id)=>{
        axios.delete(`https://simple-employee-management-system-u5c1.onrender.com/employees/${id}`)
        .then(()=>{
            setEmpDet(prev=>prev.filter(d=>d.id!==id))
        })
    }
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10   col-xl-9  mx-auto shadow p-3 p-md-4 rounded">
                <div className="table-responsive">
                    <table className="table table-hover ">
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
                            <tr key={item._id}>
                                <th scope="row">{item._id}</th>
                                <td>{item.name ? (<>{item.name}</>) : (<> {activeFeild?.feild === "name" && activeFeild.id === item._id ? (<>
                                    <input value={newName} className="input form-sontrol form-control-sm" onChange={(e) => { setnewName(e.target.value) }} />
                                    <button className="btn btn-primary btn-sm" onClick={() => { handleSaveName(item._id) }}>save</button>
                                    <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelName}>cancel</button></>)
                                    :
                                    (<><button className="btn btn-sm btn-primary" onClick={() => { handleAddName(item._id) }}>Add</button></>)}</>)}</td>
                                <td>{item.role ? (<>{item.role}</>) : (<> {activeFeild?.feild === "role" && activeFeild.id == item._id ? (<>
                                    <input value={newRole} className="input form-sontrol form-control-sm" onChange={(e) => { setNewRole(e.target.value) }} />
                                    <button className="btn btn-primary btn-sm" onClick={() => { handleSaveRole(item._id) }}>save</button>
                                    <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelRole}>cancel</button></>)
                                    :
                                    (<><button className="btn btn-sm btn-primary" disabled={!item.name} onClick={() => { handleAddRole(item._id) }}>Add</button></>)}</>)}</td>
                                <td>{item.salary ? (<>{item.salary}</>) : (<>{activeFeild?.feild === "salary" && activeFeild.id === item._id ? (<>
                                    <input value={newSal} onChange={(e) => { setNewSal(e.target.value) }} className="input form-sontrol form-control-sm" />
                                    <button className="btn btn-primary btn-sm" onClick={() => { handleSaveSal(item._id) }}>save</button>
                                    <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelSal}>cancel</button>
                                </>) : (<><button className="btn btn-sm btn-primary" disabled={!item.name} onClick={() => { handleAddSal(item._id) }}>Add</button></>)}</>)}</td>
                                <td >
                                    {item.gmail ? (<>{item.gmail}</>) : (<> {activeFeild?.feild === "mail" && activeFeild.id === item._id ?
                                        (<> <input value={newMail} onChange={(e) => { setNewMail(e.target.value) }} className="input form-sontrol form-control-sm" />
                                            <button className="btn btn-primary btn-sm " onClick={() => { handleSaveGmail(item._id) }}>save</button>
                                            <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelGmail}>cancel</button></>) : (<><button className="btn btn-sm btn-primary" disabled={!item.name} onClick={() => { handleAddGmail(item._id) }}>Add</button></>)}</>)}

                                </td>
                                <td>
                                    {item.phone ? (<>{item.phone}</>) : (<>{activeFeild?.feild === "phone" && activeFeild.id === item._id ? (<>
                                        <input value={newPhone} onChange={(e) => { setNewPhone(e.target.value) }} className="input form-sontrol form-control-sm" />
                                        <button className="btn btn-primary btn-sm" onClick={() => { handleSaveCont(item._id) }}>save</button> <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelCont}>cancel</button></>) : (<><button disabled={!item.name} className="btn btn-sm btn-primary" onClick={() => { handleAddCont(item._id) }}>Add</button></>)} </>)}
                                </td>
                                <td className="">
                                   <div className="d-flex flex-md-row flex-column gap-3 ">
                                     <button className="btn btn-primary"
                                    onClick={() => { handleUpdate(item) }}>Update</button>
                                    <button className="btn btn-primary  ms-2"onClick={()=>{handleDelete(item._id)}}>delete</button>
                                   </div>
                                </td>
                            </tr>
                        ))}

                        {editingEmployee && (<>




                            <div className="modal d-block" tabIndex="-1" >
                                <div className="modal-dialog">
                                    <div className="modal-content ">
                                        <div className="modal-header bg-primary">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editing</h1>
                                            
                                        </div>
                                        <div className="modal-body d-flex flex-column gap-3">
                                            <input value={formData.name} onChange={(e)=>{setFormData(prev=>({...prev,name:e.target.value}))}} placeholder="name" className="form-control" />
                                            <input value={formData.role} onChange={(e)=>{setFormData(prev=>({...prev,role:e.target.value}))}}placeholder="role" className="form-control" />
                                            <input value={formData.salary}onChange={(e)=>{setFormData(prev=>({...prev,salary:e.target.value}))}} placeholder="salary" className="form-control" />
                                            <input value={formData.gmail}onChange={(e)=>setFormData(prev=>({...prev,gmail:e.target.value}))} placeholder="gmail" className="form-control" />
                                            <input value={formData.phone}onChange={(e)=>setFormData(prev=>({...prev,phone:e.target.value}))} placeholder="contact" className="form-control" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={()=>{setEditingEmployee(null)}} >Close</button>
                                            <button type="button" onClick={handleEditSave} className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>)}

                        <>
                            <tr >
                                <th>...</th>
                                <td>
                                  {!searching &&(<>  {activeFeild?.feild === "name" && activeFeild.id === draftId? (
                                    <div className="d-flex flex-column flex-sm-row gap-2">
                                        <input value={newName} className="input form-sontrol form-control-sm" onChange={(e) => { setnewName(e.target.value) }} />
                                        <button className="btn btn-primary btn-sm" onClick={handleSaveName}>save</button>
                                        <button className="btn btn-primary btn-sm mx-1" onClick={handleCancelName}>cancel</button></div>)

                                        :
                                        (<><button className="btn btn-sm btn-primary" onClick={() => { handleAddName(draftId) }}>Add</button></>)}</>)}
                                </td>


                            </tr>



                        </>
                    </tbody>
                </table>
                </div>

            </div>
            <div className="col-1"></div>
        </>
    )
}