import React,{useState} from 'react'
import './Navbar.css'

function Navbar({handle,search}) {
    // const [search,setsearch] = useState('')
    return (
        <div className="Nav">
            <ul>
                <li>Add</li>
                <li><input placeholder="Search Monster" value={search} onChange={e=>handle(e)} /></li>
                
            </ul>
            
        </div>
    )
}

export default Navbar
