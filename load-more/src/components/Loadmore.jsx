import { useState,useEffect } from "react"
import "./Loadmore.css"
export default function Loadmore(){
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const [count,]=useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProduct(){
     
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0? 0 : count * 10}`);
            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProduct((prevData)=>
                [...prevData, ...data.products]
                )
                setLoading(false);
            }
            console.log(data);
            setCount(count+1);

        }catch(e){
            console.log(e);
            setLoading(false);
        }

        if(loading){
            return <h4>Loading data..! Please wait..!</h4>
        }
        
    }

    useEffect(()=>{
        fetchProduct();
    },[count]);


    return( 
    <div className="container">
    <div className="card"> 
        {
            product && product.length 
            ?product.map((item)=>(
                <div className="product">
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.title}</p>
              </div>
            ))
            :null
        }
    </div>
    </div>
    )
}