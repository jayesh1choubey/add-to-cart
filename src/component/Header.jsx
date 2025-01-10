import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
import  homeimg  from '../homeimg.png'

export default function Header({pcount,serchingvalu}) {


 


  return ( 
    <div   style={{   
      backgroundColor:"pink",border:"5px solid gray" ,padding:"5px",display:"flex",justifyContent:"space-between"
    }}>  
      <Link to="/"> <img src={homeimg} alt="Home" style={{height:"30px",width:"40px",marginLeft:"24px",padding:"2px"}}/>  </Link> 
      <div style={{marginRight:"120px"}}> 
      <Link to="/Addproduct" >🛒<span>{pcount}</span></Link> </div>  
      <input type='search' placeholder='Enter Your Search' onChange={(e)=>serchingvalu(e)}></input>

    </div>
  )
}
