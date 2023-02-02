import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BooksRecord.css";

function BooksRecord() {
  const [Bookrecord, setBookrecord] = useState({
    activity: "",
    status: "",
    action: "",
    date: "",
    time: "",

  });


  useEffect(() => {}, []);

  return (
    <div className="BooksRecord">
      <Link to="/Booklist">
        <button className="btn btn-primary ShowBooklist">Show Todos</button>
      </Link>
      <h1 >Todos Record</h1>
      <ol className="BookData">
        <li> activity : {Bookrecord.activity}</li>
        <li> status : {Bookrecord.status}</li>
        <li> action : {Bookrecord.action}</li>
        <li> Date : {Bookrecord.date}</li>
        <li> Time : {Bookrecord.time}</li>
      </ol>


      <div className="Buttons">
        <button  className="btn btn-primary" onClick={()=>{alert('your blog is deleted')}}>Delete Todo</button>
        <Link to="/EditBooks">
          <button className="btn btn-primary" >Edit Todo</button>
        </Link>
      </div>
    </div>
  );
}

export default BooksRecord;
