import React,{useState} from 'react'
import "./Form.css"
import axios from 'axios';

function Form() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [info, setinfo] = useState('')

    const handlesubmit =(e)=>{
        console.log("form submitted");
        e.preventDefault()
        axios.post("",{name,email,info})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))


    }
    return (
        <div className="Form">
            <form onSubmit={handlesubmit}>
                <input type="text" value={name} placeholder="Enter Name" onChange={e=>setname(e.target.value)}/>
                <input type="email" value={email} placeholder="Enter Email" onChange={e=>setemail(e.target.value)}/>
                <input type="text" value={info} placeholder="Enter Info" onChange={e=>setinfo(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
