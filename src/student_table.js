import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
const StudentTable = () => {
    const [students,setStudents]=useState("")
    useEffect(()=>{
            fetch("http://localhost:3001/students")
            .then((res) => res.json())
            .then((data)=>{
            console.log(data)
            setStudents(data)
    })
            .catch((err)=>console.log(err.message))
        },[]);
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
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.place}</td>
                            <td>{student.phone}</td>
                            <td>
                                <Link to="/student/view/:studentid" className="btn btn-info">View</Link>
                                <Link to="/student/edit/:studentid" className="btn btn-primary">Edit</Link>
                                <Link to="" className="btn btn-danger">Delete</Link>
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