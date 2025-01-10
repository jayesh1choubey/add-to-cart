import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Products({ Addtocart, search }) {
  const [Productdata, setProductdata] = useState([]);
  const [searchingValue, setSearchingValue] = useState([]);
  const [localvalue, setLocalValue] = useState([]);
  const [error, setError] = useState(null);  
  const [favorite,setFavorite]   = useState([])
  const [start,setStart]  = useState(1)
  const [end,setEnd]  = useState(6)
  const [loading,setLoading]  = useState(false)
  const navigate  =  useNavigate() 


const getApiData=async()=> 
 {
    setLoading(false)
 try{
    const   data   = await fetch('https://fakestoreapi.com/products') 
    const   rsp  = await  data.json() 
  
    setProductdata(rsp);
    setSearchingValue(rsp)   
       localStorage.setItem('data',JSON.stringify(rsp))  
    //    setLoading(false)  
       if(!rsp.ok) 
       { 
        throw new Error("Network resp was not ok") 
       } 
 }catch(err) 
{
    console.log(err)
    setError(err.message) 
}
// finally{
//     setLoading(false)
// }
 }

console.log(searchingValue)




 const searchmethod=()=>{

    // alert("call search") 
      const searchdata  =  Productdata.filter((val,indx)=>  val.category.toLowerCase().includes(search))
    
    setSearchingValue(searchdata)
 
         }
        



useEffect(()=>{
   
    searchmethod()
},[search,Productdata])


useEffect(()=>{ 

 
  
    const localdata  =   JSON.parse(localStorage.getItem('data')) 
    console.log("localdataget"+localdata) 
  

        if(localdata && localdata.length>=0) 
        { 
            // alert("localdata get he") 
            setSearchingValue(localdata) 
        } 
    
        else{
            setTimeout(()=>{
                getApiData() 
            },100) 
           
        }  


},[])

const favorites=(id)=> 
{
if(favorite.includes(id))
{
    // alert("call"+id)
    setFavorite(favorite.filter((val,indx)=> val!==id))
        
}

else
{ 
    setFavorite([...favorite,id]) 
} 

 
}
console.log(favorite); 
const startfun=()=>
{

    // if(end==searchingValue.lenght)
    //     {
    setStart(start - 5); // Move to the previous batch
      setEnd(end - 5);
   // } 

   console.log(start) 
   console.log(end)
}
const endfun=()=>  
    { 
        if(end<=searchingValue.length-1) 
            { 
        setStart(start + 5); // Move to the next batch
        setEnd(end + 5); 
            }else{
                // alert("Item Lenght is full"+searchingValue.length) 
            }
            console.log(start)
            console.log(end)
    }

return(<>
 
{  loading ? (<>loading...</>) 

:(<> 

    {error ? (
        <h1>Error:- {error}</h1> 
    ) : (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                marginLeft: '15px',
            }}
        >
            {searchingValue.map((val,indx) => ( 
 
                <div 
                    key={indx} 
                    style={{
                        display: 'flex',  
                        flexDirection: 'column', 
                        margin: '5px',
                        padding: '5px',
                        flex: '1 0 21%',
                        backgroundColor: 'aqua',
                        borderRadius: '5px',
                        border: '5px solid blue', 
                    }} 
                >
                    <div
                        style={{ 
                            height: '150px', 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                        }}

                        onClick={() => { 
                            Addtocart(val); // Add product to cart
                            //    setTimeout(() => { 
                              navigate("/Addproduct"); // Redirect after a short delay
                            // }, 100);     
                            // Delay to allow state update to complete
                          }}
                    > 
                        <img
                            src={val.image}
                            alt={val.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}  
                        />
                    </div>
                    <div style={{ fontWeight: 'bold' }}>{val.category}</div>
                    <div>{val.price}</div>
                    <div>
                        {val.rating.rate}
                        {val.rating.rate >= 4
                            ? '⭐⭐⭐⭐'
                            : val.rating.rate >= 3
                            ? '⭐⭐⭐'
                            : val.rating.rate > 2
                            ? '⭐⭐'
                            : '⭐'}
                    </div>

                    <div> 
                <button 
                  style={{ color: 'aqua', backgroundColor: 'blue', borderRadius: '15px' }}
                  onClick={() => Addtocart(val)}
                > 
                  Add To Cart
                </button> 


                <button 
                  style={{backgroundColor: 'aqua', borderRadius: '15px' }} 
                  onClick={() => favorites(val.id)} 
                > 
                {favorite.includes(val.id) ? "❤️"  : "🤍"} 
                </button> 


              </div>
                </div>  
            ))}


        </div> 
        
    )} 
 <div style={{display:"flex",justifyContent:"center",margin:"5px",padding:"5px",fontWeight:"5px",textTransform:"uppercase"}}>  <button onClick={()=>startfun(end)} style={{backgroundColor:'blue',color:"white"}}>start</button> <button onClick={()=>endfun(start+5)} style={{backgroundColor:'blue',color:"white"}}>next</button></div> 
   
 </>)
}
   

   </>) } 
