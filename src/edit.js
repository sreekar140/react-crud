import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditStudent = () => {
     const[id,setID]=useState("");
        const[name,setName]=useState("");
        const[place,setPlace]=useState("");
        const[phone,setPhone]=useState("");
        const[validate,setValidate]=useState(false)
        const {studentid}=useParams()
        const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:3001/students/"+studentid)
        .then((res)=>res.json())
        .then((data)=>{
            setID(data.id);
            setName(data.name);
            setPlace(data.place);
            setPhone(data.phone)
        })
        .catch((err)=> console.log(err.message))
    },[studentid])

    const handleUpdate = (e) =>{
        e.preventDefault()
        const Updateblog = {id,name,place,phone}
        fetch("http://localhost:3001/students/" + studentid,{
            method : 'PUT',
            headers : {
                "Content-Type" : "applicaton/json",
            },
            body : JSON.stringify(Updateblog)
        })
        .then(res => {
            alert("student data updated succesfully");
            navigate('/');
        })
        .catch(err => console.log(err))
    }
    return (  
        <div className="container_1">
            <h1>Edit Student Details</h1>
          <form onSubmit={handleUpdate}>
    <div>
        <label>ID:</label>
        <input type="text" required value={id} onChange={(e)=>setID(e.target.value)} onBlur={()=>setValidate(true)}/>
        {id.length===0 && validate && <span className="errorMsg">Please Enter Your ID :</span>}
    </div>

    <div>
        <label>Name:</label>
        <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} onBlur={()=>setValidate(true)}/>
        {name.length===0 && validate && <span className="errorMsg">Please Enter Your Name :</span>}
    </div>

    <div>
        <label>Place:</label>
        <input type="text" required value={place} onChange={(e)=>setPlace(e.target.value)} onBlur={()=>setValidate(true)}/>
        {place.length===0 && validate && <span className="errorMsg">Please Enter Your Place :</span>}
    </div>

    <div>
        <label>Phone:</label>
        <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)} onBlur={()=>setValidate(true)}/>
        {phone.length===0 && validate && <span className="errorMsg">Please Enter Your Phone :</span>}
    </div>

    <div className="button-group">
        <button className="btn btn-success">Update</button>
        <Link to="/" className="btn btn-danger">Back</Link>
    </div>
</form>
        </div>
 
    );
}
 
export default EditStudent;