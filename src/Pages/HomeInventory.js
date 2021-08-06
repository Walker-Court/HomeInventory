import React from 'react'
import Header from '../Components/Header'
import items from '../Data/items'
import { useState } from 'react'
import HyperLinks from '../Components/HyperLinks'
import '../Styles/Styles.css'

 const HomeInventory =() =>  {
   const [item,setItems] = useState(items);
   const [addItem,setAddItem] = useState({
     name:"",
     room:"",
     price:0
   });

   const onFormEdit= (e)=>{
     e.preventDefault();
    const formName = e.target.getAttribute('name');
    const formValue = e.target.value;

    const newItems = {...addItem};
    newItems[formName] = formValue;
    console.log(newItems);
    setAddItem(newItems);
   };

  const size = item.length;

   const onSubmit = (e) =>{
     e.preventDefault();

     const newItem = {
      key: size+1,
      name: addItem.name,
      room: addItem.room,
      price: addItem.price
     }
     const tempItems = [...item,newItem]
     setItems(tempItems);
     

   }
        return (
            <div>
              <div className="header">
                  <Header props="HomeInventory"></Header>
                  <HyperLinks></HyperLinks>
              </div>
              <div className="tables">
              <h2>Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {item.map((item)=> (
                         <tr key={item.key}>
                            <td>{item.name}</td>
                            <td>{item.room}</td>
                            <td>$ {item.price}</td>
                            <td><button >Delete</button></td>
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
                <label>Name:</label>
                <input type="text"name="name" onChange={onFormEdit}></input>
                </div>  
                <div>
                <label>Room:</label>
                <input type="text"name="room" onChange={onFormEdit}></input>
                </div>
                <div>
                <label>Price:    </label>
                <input type="text"name="price" onChange={onFormEdit}></input>
                </div>
                <br></br>
                <button>Add Item!</button>
                </form>
              </div>
            </div>
            
        )
    
}
export default HomeInventory