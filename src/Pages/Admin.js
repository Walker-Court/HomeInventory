import React from 'react'
import users from '../Data/users'
import Header from '../Components/Header';
import { useState } from 'react';
import HyperLinks from '../Components/HyperLinks';

export default function Admin() {
    const [user,setUsers] = useState(users);
    const [addUser,setAddUser] = useState({
      email:"",
      username:"",
      password:""
    });
   
    const onFormEdit= (e)=>{
      e.preventDefault();
     const formName = e.target.getAttribute('name');
     const formValue = e.target.value;
 
     const newUsers = {...addUser};
     newUsers[formName] = formValue;
     setAddUser(newUsers);
    };
     
    const onSubmit = (e) =>{
      e.preventDefault();
 
      const newUser= {
       key: users.length +1,
       email: addUser.email,
       username: addUser.username,
       password: addUser.password
      }
      const tempUsers = [...user,newUser]
      setUsers(tempUsers);
    }
   return (
         <div>
                <div className="header">
                       <Header props="Admin"></Header>
                       <HyperLinks></HyperLinks>
                   </div>

                   <div className="tables">
                   <h2>Table</h2>
                     
                     <table>
                         <thead>
                             <tr>
                                 <th>Email</th>
                                 <th>Username</th>
                                 <th>Password</th>
                                 <th>Delete</th>
                                 <th>Edit</th>
                             </tr>
                         </thead>
                       
                         <tbody>
                         {user.map((user)=> (
                          
                              <tr key={user.key}> 
                              
                              <td hidden={true}>
                                <input hidden={true} id={user.key} name="key"></input>
                              </td>                            
                                 <td>{user.email}</td>
                                 <td>{user.username}</td>
                                 <td>{user.password}</td>
                                 <td><button id={user.key} type="submit">Delete</button></td>
                                 <td><button>Edit</button></td> 
                             </tr>   
                         ))}                
                         </tbody>
                     </table>
                     
                   </div>
                   <div className="form">
                   <h2>Add Item</h2>
                     <form onSubmit={onSubmit} >
                     <div>
                     <label>Email:</label>
                     <input type="text"name="email" onChange={onFormEdit}></input>
                     </div>  
                     <div>
                     <label>Username:</label>
                     <input type="text"name="username" onChange={onFormEdit}></input>
                     </div>
                     <div>
                     <label>Password:    </label>
                     <input type="text"name="password" onChange={onFormEdit}></input>
                     </div>
                     <br></br>
                     <button>Add Item!</button>
                     </form>
                   </div>
                 </div>
                 
             )
         
     }
     

    

