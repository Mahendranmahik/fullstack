import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Viewuser = () => {
    
const {id}=useParams()                                         // getting id value from path using useParams

const[user,setuser]=useState({
    name:"",
    username:"",
    email:""
})



useEffect(()=>{                                                   //1.load the values by useEffect
    loaduser()
},[])

const loaduser=async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    console.log(result.data)
    setuser(result.data)
}

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
                <h2 className='text-center text-primary m-4'>User details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of user id:{user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>{user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>UserName:</b>{user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email</b>{user.email}
                            </li>

                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to home</Link>
            </div>
        </div>
    </div>
  )
}

export default Viewuser