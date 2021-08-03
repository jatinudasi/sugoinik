import React,{useEffect, useState} from 'react'
import "./Card.css"
import Card from  "./Card"
import axios from 'axios'

function Cards() {
    const [cardinfo,setcards] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/user")
        .then(res=>setcards(res.data))
    },[])
    return (
        <div className="Cards">
            {
            cardinfo.length?cardinfo.map(card => <Card  {...card}/>):<h1>no result found</h1>
            }
        </div>
    )
}

export default Cards


