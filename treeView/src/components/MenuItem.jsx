import { useState } from "react";
import MenuList from "./MenuList";
import './style.css'

export default function MenuItem({items}){

    const [currList,setCurrList]=useState({});
 
    const handleToggle =(currLabel)=>{
        setCurrList({
            ...currList,
            [currLabel]: !currList[currLabel],
        })
    }
    console.log(currList);

    return <li >
    <div className="menu-item" style={{fontSize:'25px'}}>
    <div>{items.label}</div>
    {
        items && items.children && items.children.length ?
        <span onClick={()=>handleToggle(items.label)}> { currList[items.label] ? '-' : '+'} </span>
        :null
    }
    </div>
    <div>
        {
            items && items.children && items.children.length > 0 && currList[items.label] ?
            <MenuList list={items.children}/>
            :null
        }
    </div>
    </li>
}