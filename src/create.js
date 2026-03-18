import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
    const[id,setID]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {id,name,place,phone};
        fetch("http://localhost:3001/students",{
            method : 'POST',
            headers : {
                "Content-Type" : "applicaton/json",
            },
            body : JSON.stringify(data)
        })
        .then(res => {
            alert("student data added succesfully");
            navigate('/');
        })
        .catch(err => console.log(err))
    }
    return ( 
        <div className="container_1">
            <h1>Create</h1>
          <form onSubmit={handleSubmit}>
    <div>
        <label>ID:</label>
        <input type="text" onChange={(e)=>setID(e.target.value)}/>
    </div>

    <div>
        <label>Name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>

    <div>
        <label>Place:</label>
        <input type="text" onChange={(e)=>setPlace(e.target.value)}/>
    </div>

    <div>
        <label>Phone:</label>
        <input type="text" onChange={(e)=>setPhone(e.target.value)}/>
    </div>

    <div className="button-group">
        <button className="btn btn-success">Save</button>
        <Link to="/" className="btn btn-danger">Back</Link>
    </div>
</form>
        </div>
     );
}
 
export default CreateStudent;