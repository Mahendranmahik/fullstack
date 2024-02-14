import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {


const [users,setusers]=useState([]);           // 1.managing state       

const {id}=useParams()

useEffect(()=>{                                //2.by useEffect() rendering the loaduser function for setuser
    loadusers();
},[]);

const loadusers=async()=>{                    
    const result=await axios.get("http://localhost:8080/allusers")  //3.function calling using axios
   setusers(result.data)                                            
    
}

const deleteusers=async(id)=>{
     await axios.delete(`http://localhost:8080/user/${id}`)
     loadusers()
}

  return (
    <div className='container'>
        <div className='py-4'>
    <table className="table border shadow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,index)=>(                          //4.map the users array and destructuring the data in table
                <tr>
                        <th scope="row" key={index}>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link className="btn btn-primary m-2" to={`/viewuser/${user.id}`}>View</Link>
                          <Link className="btn btn-outline-primary m-2"to={`/edituser/${user.id}`}>Edit</Link>
                          <button className="btn btn-danger m-2" onClick={()=>{deleteusers(user.id)}}>Delete</button>
                        </td>   
                </tr> 
          )) 
        }
        
      </tbody>
    </table>
  </div>

</div>
  )
}

export default Home