import React from 'react'
import './Navbar.css'
import {
    Link
  } from "react-router-dom";
  

function Navbar({handle,search}) {
    // const [search,setsearch] = useState('')
    return (
        <div className="Nav">
            <ul>
                <li><Link to='/add'>Add</Link></li>
                <li><input placeholder="Search Monster" value={search} onChange={e=>handle(e)} /></li>
                
            </ul>
            
        </div>
    )
}

export default Navbar
