import { Button } from "bootstrap"
import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
const StudentTable = () => {
    const [students,setStudents]=useState("")
    const navigate = useNavigate()
    useEffect(()=>{
            fetch("http://localhost:3001/students")
            .then((res) => res.json())
            .then((data)=>{
            console.log(data)
            setStudents(data)
    })
            .catch((err)=>console.log(err.message))
        },[]);
    const displayitems=((id)=> {
        navigate("/student/view/"+id);
    })
    
    const removeDetails = (id)=>{
        if(window.confirm("Are you sure")){
            fetch("http://localhost:3001/students/" + id,{
            method : 'DELETE',
        })
        .then(res => {
            alert("student data Deleted succesfully");
            window.location.reload();
        })
        .catch(err => console.log(err))
        }
    }
    return ( 
        <div className="container">
            <h1>student records</h1>
            <div className="table-container">
                <Link to="/student/create/" className="btn btn-add">Add new student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map((student)=>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.place}</td>
                            <td>{student.phone}</td>
                            <td>
                                <Link to={`/student/view/${student.id}`} className="btn btn-info">View</Link>
                                <Link to={`/student/edit/${student.id}`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger" onClick={()=> removeDetails(student.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default StudentTable;