import React,{useEffect, useState} from 'react'
import "./Card.css"
import Card from  "./Card"
import axios from 'axios'

function Cards({search}) {
    const [cardinfo,setcards] = useState([])

    useEffect(()=>{
        console.log("value of search form card",search)
        axios.get(`${!search?'http://localhost:8000/user':`http://localhost:8000/user/search/${search}`}`)
        .then(res=>setcards(res.data))
    })
    return (
        <div className="Cards">
            {
            cardinfo.length?cardinfo.map(card => <Card  {...card}/>):<h1>no result found</h1>
            }
        </div>
    )
}

export default Cards


