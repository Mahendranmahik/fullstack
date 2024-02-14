import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Addusers = () => {

    let navigate=useNavigate()

const[user,setuser]=useState({                          //1.initiating user object with emtpy value
    name:"",
    username:"",
    email:""
});

const {name,username,email}=user

const oninputchange=(e)=>{                           //2.calling function to setuser the current input value          
    setuser({...user,[e.target.name]:e.target.value});
}

const onsubmit=async (e)=>{                          //3.onsubmit posting the user details 
    e.preventDefault()
    await axios.post("http://localhost:8080/user",user)
    navigate("/")                                    //4.navigating to home

}

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
                <h2 className='text-center text-primary m-4'>Register user</h2>

                <form onSubmit={(e)=>{onsubmit(e)}}>
                    
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" className='form-control'name="name"placeholder='Enter your name'
                    value={name} onChange={(e)=>oninputchange(e)} />   
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className='form-label'>UserName</label>
                    <input type="text" className='form-control'name="username"placeholder='Enter your username'
                    value={username} onChange={(e)=>oninputchange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="text" className='form-control'name="email"placeholder='Enter your email'
                    value={email} onChange={(e)=>oninputchange(e)} />
                </div>

                <button type='submit'className='btn btn-primary m-2 px-4 py-2'>Submit</button>
                <Link to="/" className='btn btn-danger m-2 px-4 py-2'>Cancel</Link>   
            </form>
            </div>
        </div>

    </div>
  )
}

export default Addusers