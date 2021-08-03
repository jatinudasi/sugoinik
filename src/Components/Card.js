import React, { useEffect } from 'react'
import './Card.css'

function Card({name,email,info,Img}) {
    useEffect(()=>{
        console.log(name,email,info,Img);
    },[])
    
    return (
       
            <div className="Card">
            
                <img src={Img}></img>
            
                <div className="content">
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{info}</p>
                </div>
            </div>
        
    )
}

export default Card
