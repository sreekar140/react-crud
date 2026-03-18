import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentDetails = () => {
    const {studentid}=useParams()
    const[students,setStudent]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3001/students/"+studentid)
        .then((res)=>res.json())
        .then((data)=>setStudent(data))
        .catch((err)=> console.log(err.message))
    },[students])
    return ( 
    <div className="container">
        <h1>Student Details</h1>
      { students && (
      <>
       <div className="details">
            <p><strong>ID: </strong>{students.id}</p>
            <p><strong>Name: </strong>{students.name}</p>
            <p><strong>Place: </strong>{students.place}</p>
            <p><strong>Phone: </strong>{students.phone}</p>
        </div>
        <div className="btn-container">
                <Link to="/" className="btn btn-danger">Back</Link>
            </div>
            </>
       ) }
       </div>
     );
}
 
export default StudentDetails;