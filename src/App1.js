import React, { useState,useEffect } from 'react'

export default function App1() {

                                // INPUT BOX JISME VALUE DI JAYEGI EK OK BUTON JO U.INPUT KO STATE ME SAVE KREGA SATTE ARR[HOGI] OR ARR KI VALUE TABLE YA LI FORM ME SHOW KRO VHA DO BTN DO EDIT-DELETE OR EDIT P CLICK HO CUR PRO.UTHALE FUN ME JAYE ID PURE ARR ME JO ID HE VO USME HE  TO PURA PRUDCT EK VAR ME DEDE USKO NYA INPUT BNE USME PRINT HO VH VAR VHA ONCHANGE KRE VALUE VO VALUE BHI USE STATE VAR ME JAYE OR VH STATE KO old ya jo full arrY HE USME DOBARA Dalde:-YH HE TODO CONCEPT
                                const [fulltodo,setFulltodo]  = useState([{name:"",flag:false}]) 
                                const [name,setName]  =useState(); 
                                const [editvalu,setEditvalue]  = useState(false)
                                const [indx,setIndx]  = useState()
                                const [localdata,setLocaldata]  = useState([])
                                const[yhindx,setYhindx]  =useState()
                                const [bool,setBool]   = useState(false)
      const addTodo=()=> 
      { 
        alert("#call_todo_fun") 
setFulltodo(...fulltodo,{name:name,bool})   
// setName("")   
localStorage.setItem("todos",JSON.stringify(fulltodo)) 

alert("#todo_Added")  
      }   
 

// console.log(fulltodo); 

  useEffect(() => { 
           
    // setTimeout(()=>{

        const todos_localstorage   = JSON.parse(localStorage.getItem('todos'))
        console.log("Todo_LocalStorage data:- "+todos_localstorage); 
        setLocaldata([todos_localstorage])    
        // alert("d") 
    // },5000)
  
    },[]);  


// useEffect(() => {
//     //Runs only on the first render

//     const todos_localstorage   = JSON.parse(localStorage.getItem('todos'))
//     console.log("Todo_LocalStorage data:- "+todos_localstorage); 
//     setLocaldata([...todos_localstorage])   
//   }, []);


const edit=(value,indx)=>
{
    alert(indx) 
    setIndx(indx)   
setName(value)  
setEditvalue(true) 
} 
const remove=(id)=>
{
setFulltodo(fulltodo.filter((_,index)=> index!==id)) 
}

const editkrde=()=> 
{   
setFulltodo(fulltodo.map((val,index) =>  index===indx  ? name :  val    ))  
setEditvalue(false) 
setName("")
} 

const chng=(id)=> 
{
    alert("chng"+id)  


    

    setFulltodo(fulltodo.map((val,indx) => indx==id ? val.bool=true : false)) 
    
//  e.preventDefault();
// setYhindx(id)
//  const myElement = document.getElementById(id);
//  myElement.style.color = "red"; 

// console.log(val && val); 


   
 }   
console.log(fulltodo);

  return (  
<> 
    { 
        
        !editvalu ?(
    <div>
      App1 
      <input type='name' name="name" value={fulltodo.name} onChange={(e)=> setName(e.target.value)}/> 
      <button onClick={()=>addTodo()}>Add_Todo</button> 

      <div>

        {

localdata && localdata.map((value,index) => (<> 
            <span onClick={()=> chng(index)}  id={indx}> {value?.name}</span>  <li> <button onClick={()=>edit(value,index)}>edit</button>{" "}<button onClick={()=>remove(index)}>Remove</button>
            </li> 
            </>))   
        }

      </div> 
    </div>) 

    :  (<>
    <h2>Edit-Mode</h2>
    <input  type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>editkrde()}>Edit</button> 
    </>) 
}
</> ) 
}





//li   1  singal row eliments honge   edit delete click id  id mena fullldetail  id== true ?   click false ? design   ? design yes to krde nho to koi bat nhi 