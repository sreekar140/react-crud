import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateStudent = () => {
    const[id,setID]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const[validate,setValidate]=useState(false)
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
        <input type="text" required value={id} onChange={(e)=>setID(e.target.value)} onMouseDown={()=>setValidate(true)}/>
        {id.length===0 && validate && <span className="errorMsg">Please Enter Your ID :</span>}
    </div>

    <div>
        <label>Name:</label>
        <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} onMouseDown={()=>setValidate(true)}/>
        {name.length===0 && validate && <span className="errorMsg">Please Enter Your Name :</span>}
    </div>

    <div>
        <label>Place:</label>
        <input type="text" required value={place} onChange={(e)=>setPlace(e.target.value)} onMouseDown={()=>setValidate(true)}/>
        {place.length===0 && validate && <span className="errorMsg">Please Enter Your Place :</span>}
    </div>

    <div>
        <label>Phone:</label>
        <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)} onMouseDown={()=>setValidate(true)}/>
        {phone.length===0 && validate && <span className="errorMsg">Please Enter Your Phone :</span>}
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