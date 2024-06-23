import { lazy, useEffect } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react"
import "./Slider.css"
export default function Slider({url,limit=5,page=1}){
    const [images,setImages]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [currSlide,setCurrslide]=useState(0);

    async function fetchImages(getUrl){
    try{
        setLoading(true);
        const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data= await response.json();
        
        if(data){
            setImages(data);
            setLoading(false);
        }
    }catch(e){
        setError(e.message);
        setLoading(false);
    }
    }

    const handlePrev =()=>{
        setCurrslide(currSlide===0?images.length-1:currSlide-1);
    }

    const handleNext = ()=>{
        setCurrslide(currSlide===images.length-1 ? 0:currSlide+1);
    }
    
    useEffect(()=>{
        if(url!=="") fetchImages(url);
    },[url]);

    console.log(images);
    
    if(loading){
        return <div>Loading Data..!</div>
    }

    if(error!==null){
        return <div>Error occured ! {error}</div>
    }

    return (
        <>
        <div className="container">
        <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
        />
        {
         images && images.length
         ? images.map((item,index)=>(
            <img 
            src={item.download_url} 
            alt={item.download_url } 
            key={item.id}
            className={
                currSlide===index 
                ?"current-image"
                :"current-image hide-current-image"
            }
            />
          )):null}

          <BsArrowRightCircleFill 
          onClick={handleNext}
          className="arrow arrow-right"
          />
          
        <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrslide(index)}
              ></button>
            ))
          : null}
         </span>
        </div>
        </>
    )
}