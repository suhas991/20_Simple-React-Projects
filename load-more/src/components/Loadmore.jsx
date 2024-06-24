import { useState,useEffect } from "react"
import "./Loadmore.css"

export default function Loadmore(){
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const [count,setCount]=useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProduct(){
     
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`);
            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProduct((prevData)=>
                [...prevData, ...data.products]
                )
                setLoading(false);
            }
            //console.log(data);

        }catch(e){
            console.log(e);
            setLoading(false);
        }   
    }

    useEffect(()=>{
        fetchProduct();
    },[count]);
    
    useEffect(() => {
        if (product && product.length === 190) 
            setDisableButton(true);
      }, [product]);

      if (loading) {
        return <div>Loading data ! Please wait.</div>;
      }  

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
    <div className='button-container'>
    <button disabled={disableButton} onClick={()=>setCount(count=>count+1)}>Load More</button>
    {disableButton ? <p>No more Products</p> : null}
    </div>
    </div>
    )
}