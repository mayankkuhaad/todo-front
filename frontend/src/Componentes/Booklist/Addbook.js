import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Addbook.css"

function Addbook() {
  const Navigator = useNavigate();
  const [BookData,setBookData] = useState({
    activity: "",
    status: "",
    action: "",
    date : "",
    time: ""
    
  })


  let submitHandle =()=>{
    console.log(BookData);
    axios.post("https://todo-mern-m.onrender.com/todolist",BookData).then((res)=>{
      alert('Todo is added');
      Navigator("/Booklist");
    })
  }

  return (
    <div className='Addbook'>
        <Link to="/Booklist"><button className='btn btn-primary ShowBooklist'>Show Todos</button></Link>
        <h1 className='Heading'>Add Todo</h1>
        <input className='form-control my-2' type="text" placeholder='activity you need to do' value={BookData.activity} onChange={(e)=>{setBookData((data )=>{return {...data, activity : e.target.value }}) }}></input>
        <input className='form-control my-2' type="text" placeholder='status of the activity' value={BookData.status} onChange={(e)=>{setBookData( (data )=>{return {...data, status : e.target.value }})}}></input>
        <input  type="text" className='form-control my-2' placeholder='action' value={BookData.action} onChange={(e)=>{setBookData( (data )=>{return {...data, action : e.target.value }})}}></input>
       
        <input className='form-control my-2' type="text" placeholder='Date' value={BookData.date} onChange={(e)=>{setBookData( (data )=>{return {...data, date : e.target.value }})}}></input>
        <input type="text" className='form-control my-2' placeholder='time'value={BookData.time} onChange={(e)=>{setBookData( (data )=>{return {...data, time : e.target.value }})}}></input>
        <button className='btn btn-primary' type='submit'  onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Addbook
