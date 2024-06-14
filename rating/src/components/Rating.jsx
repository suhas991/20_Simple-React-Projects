import { useState } from "react";
import {FaStar} from "react-icons/fa"
import './Rating.css'
export default function Rating({stars=5}){
    
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    const handleClick =(currIndex)=>{
       setRating(currIndex);
    }

    const handleMouseMove=(currIndex)=>{
        setHover(currIndex);
    }

    const handleMouseLeave =(currIndex)=>{
        setHover(rating);
    }

    return <>
    <div style={{
        backgroundColor:"grey",
        padding:"10px",
        borderRadius:"5px",
    }}>
     {
        [...Array(stars)].map((_,index)=>{
            index+=1;

            return <FaStar
            key={index}
            className={index <= (hover || rating) ? "active": "inactive" }
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>{handleMouseLeave(index)}}
            size={40}
            />
        })
     }

     <h2 style={{color:"black"}}>Rating : {rating}</h2>
     <button onClick={()=>{setRating(0) 
        setHover(0)}}>Clear</button>
    </div>
    </>
}