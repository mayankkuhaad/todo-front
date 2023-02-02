// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Login.css"

// function Login() {
//   return (
//     <div className='LoginPage'>
//         <h1>Login</h1>
//         <input
//             className='form-control my-2'
//             type="text"
//             placeholder="UserName"
//           ></input>
//           <input
//             className='form-control my-2'
//             type="Password"
//             placeholder="Password"
//           ></input>
//           <Link to="/Booklist"><button className='btn btn-primary' type="submit">Login</button></Link>
//           <Link to="/Signup"><button type="submit" className='btn btn-primary'>Signup</button></Link>
//     </div>
//   )
// }

// export default Login


// -----------------------------------------------

import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { Link,useNavigate } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const userLogin=async(e)=>{
    e.preventDefault()
    
    const res=await fetch("https://todo-mern-m.onrender.com/login",{
      method:'POST',
     
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data=await res.json()
    console.log(data)
    if(data.status===400 || !data){
      window.alert("Invalid user")
      console.log("Invalid user")
    }else{
      const token = data.Token
          console.log(token) 
          localStorage.setItem('token',token)
          // localStorage.setItem('user',userData)
      window.alert("Login Successful")
      console.log("Login Successful")
      navigate("/Booklist")
      
    }
}
return (
    
        <div  className='login'>
        <div className='login-heading'>
          <h2 style={{color:"gray"}}>LogIn</h2>  
        </div>
    <form method='POST'>

    

    <div >
    
     
      <input id="email" type="text" className="form-control" name="email" placeholder="Email"
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>



    <div>
      
      <input id="password" type="password" className="form-control" name="password" placeholder="Password"
      value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>



    <div >
    <input class="btn btn-primary" type="submit" name="login" id="login" value="Submit" onClick={userLogin}  />
    </div>

        </form>
        <div className='already-register'>
        <Link  to="/signup">Create an Account</Link>

        </div>
       
    </div>
    
  )
}

export default Login
