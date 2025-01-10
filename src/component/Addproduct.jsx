import React from 'react'

export default function Addproduct({addcart,rmtocart,increment,decrement}) {
 
    

    const  val  =    addcart.reduce((accu,cur) =>   {
             return  accu +(cur.price*cur.quantity)
            
                 
        } 
        ,0) 
    console.log("val"+val) 


    const numericTotal = parseFloat(val.toFixed(2));
///  ~~  use remove point value USE ---------------   ~~   ------------------------------------------
 

  return (
   <> 
      <div  className='totalvalue' style={{color:"white",backgroundColor:'blue',display:"flex",flexDirection:"column",alignItems:"center",width:"50px",justifyContent:"space-between",marginLeft:"45%",padding:"5px"}}>
 {~~~~numericTotal}                       {/*  { ///point .0 zero me value nhi print krega ayegi } */}
      </div> 
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", width: "100%",marginLeft:"15px"}}>
            {  
 
            addcart.map((val)=>( 
           <div style={{display:"flex",flexDirection:"column" ,margin:"5px",padding:"5px",flex: "1 0 21%"}}>   
               <div style={{height: "150px", width:  "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <img src={val.image} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}}/></div>
               <div>{val.category}</div>   
               <div>{val.quantity*val.price}</div> 
               <div>{val.quantity}</div> 
                
               <div><button style={{color:"aqua",backgroundColor:"transparent",borderRadius:"15px" }}  disabled={val.quantity===0 ?  true : false} onClick={()=>decrement(val.id)}>--</button>
               <button style={{color:"aqua",backgroundColor:"blue",borderRadius:"15px" }} onClick={()=>increment(val.id)}  >++</button>
               <button style={{color:"aqua",backgroundColor:"blue",borderRadius:"15px"}} onClick={()=>rmtocart(val.id)}>Removecart</button></div>
           </div>
          
        ) )
            } 
            </div> 
 </>  
  )
}
