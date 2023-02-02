import React from 'react'
import "./EditBooks.css"

function EditBooks() {
  return (
    <div className='EditBooks'>
        <h1 className='HeadingEditBook'>Edit Todos</h1>
        <div className='Titlediv'>
            <label >Activity</label>
        <input className='Title' type="text" placeholder='Name of the Activity'></input>
        </div>
      
        <div className='AuthorDiv'><label>Status</label><input className='Author' type="text" placeholder='status of activity'></input></div>
        <div className='Discribediv'><label>Action</label><input className='Discribe' type="text" placeholder="action"></input></div>
        <div className='Publisheddiv'><label>date</label><input className='Published' type="text" placeholder='Date'></input></div>
        <div className='Publisherdiv'><label>time</label><input className='Publisher' type="text" placeholder='time'></input></div>
        <button className="btn btn-primary" type='submit'  onClick={()=>{alert('your blog is edited and saved')}}>Submit</button>
    </div>
  )
}


export default EditBooks