import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { data } from 'react-router-dom';
import Usefetch from './component/Usefetch';

export default function Form() {  
  const [storedata,setStoredata] =  useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
       console.log(data); 
        
    
      setStoredata(data.name) 
      console.log(data.name) 
    }
console.log("storedata "+ storedata);  
  
    const gender=[  
        {text:"male", value:"male"}, 
        {text:"female", value:"female"}, 
        {text:"other",value:"other"} 

     ];   

    const url = 'https://fakestoreapi.com/products'; 
    const { Apidata, loading, error } = Usefetch(url);

console.log("formval"+Apidata,error); 


  if (loading) { 
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }
 
  return ( 
    <div>
      form 
    <form onSubmit={handleSubmit(onSubmit)}> 
      <label htmlFor="name">Name</label>
   
      {/* use aria-invalid to indicate field contain error */}
      <input
        id="name" 
        aria-invalid={errors.name ? "true" : "false"} 
        {...register('name', { required: true, maxLength: 30 })}
      />
      
      {/* use role="alert" to announce the error message */}
      {errors.name && errors.name.type === "required" && (
        <span role="alert">This is required</span> 
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )} 
     
      <select type="select" {...register('select')}>
        <option>select</option>
        {
            gender.map((val,indx)=>(<option >{val.value}</option>))
        }
      </select>  
      <input type="submit" />
    </form>



    </div>
  )
}
