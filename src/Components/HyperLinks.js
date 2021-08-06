import React from 'react'
import {Link} from 'react-router-dom'
export default function HyperLinks() {
    return (
    <div>
        <ul>
            <li>
              
                <Link to="/Admin">Admin</Link>
            </li>
             <li>

                <Link to="/HomeInventory">HomeInventory</Link>          
             </li>
             <li>
                <Link to="/">Logout</Link>
             </li>
        </ul>   
    </div>       
    )
}
