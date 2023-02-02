
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function Signup() {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    email:"" ,password:""
  })

  let name, value;
  const handelInput=(e)=>{
    console.log(e)
    name=e.target.name
    value=e.target.value
    setUser({...user,[name]:value})
  }

  const handelsubmit=async(e)=>{
    e.preventDefault()
    const {email,password}=user

    const res=await fetch("https://todo-mern-m.onrender.com/register",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
       email ,password
      })
    })

    const data=await res.json()

    if(data.status===400 || !data){
      window.alert("Invalid registatuation")
      console.log("Invalid registatuation")
    }else{
      window.alert("Registration Successful")
      console.log("Registration  Successful")
      
    }
    navigate("/")
  }
  return (
    <div  className='registration'>
        <div className='signup-heading'>
          <h2 style={{color:"gray"}}>Signup</h2>  
        </div>
    <form method='POST'>

    

    <div >
   
      <input id="email" type="text" className="form-control" name="email" placeholder="Email"
      value={user.email} onChange={handelInput}/>
    </div>


    <div>
  
      <input id="password" type="password" className="form-control" name="password" placeholder="Password"
      value={user.password} onChange={handelInput}/>
    </div>



    <div className="input-group form-button m-3">
    <button type="submit" className="btn btn-info" onClick={handelsubmit}>Register</button>
    </div>

        </form>
        <div className='already-register'>
        <Link  to="/">Already Registered?</Link>
  
        </div>
       
    </div>
  )
}

export default Signup
