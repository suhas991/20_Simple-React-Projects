import { useState } from "react"

export default function Random(){
    const [type,setType]=useState("hex");
    const [color,setColor]=useState('#000000')
    
    const randomcolor =(length)=>{
    return Math.floor(Math.random()*length);
    }

    const handleHexColor = ()=>{
    
    const arr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hex="#"
    for(let i=0;i<6;i++){
    hex += arr[randomcolor(arr.length)]
    }
    setColor(hex);
    }

    const handleRgbColor =()=>{
    
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width: "100%",
            height: "100vh",
            background: color,
        }}>
            <div>
            <button onClick={()=>{setType('hex')}}>Create HEX</button>
            <button onClick={()=>{setType('rgb')}}>Create RGB</button>
            </div>
            <div>
             <button onClick={ type === 'hex' ? handleHexColor : handleRgbColor }>Generate Random Color</button>   
            </div>
        </div>
    )
}