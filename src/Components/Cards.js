import React,{useState} from 'react'
import "./Card.css"
import Card from  "./Card"

function Cards() {
    const [cardinfo,setcards] = useState([{name:"Jatin Udasi",email:"jatin.udasi88@gmail.com",info:"good programmer",Img:"https://i.ibb.co/6JZ8NyV/IMG.png"},{name:"Jatin Udasi",email:"jatin.udasi88@gmail.com",info:"good programmer",Img:"https://i.ibb.co/6JZ8NyV/IMG.png"},{name:"Jatin Udasi",email:"jatin.udasi88@gmail.com",info:"good programmer",Img:"https://i.ibb.co/6JZ8NyV/IMG.png"},{name:"Jatin Udasi",email:"jatin.udasi88@gmail.com",info:"good programmer",Img:"https://i.ibb.co/6JZ8NyV/IMG.png"}])
    return (
        <div className="Cards">
            {
            // cardinfo.map(card=><Card {...cardinfo} />
            cardinfo.map(card => <Card  {...card}/>)
            }
        </div>
    )
}

export default Cards


