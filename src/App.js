import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Products from './component/Products';
import Addproduct from './component/Addproduct';
import Header from './component/Header';
import { useState } from 'react';
import Usefetch  from './component/Usefetch'; 
function App() {

  const[addcart,setAddcart]  = useState([])
  const [pcount,setPcount]  = useState(0)
  const  [search,setSearch]  = useState(null)
  const Addtocart=(Product)=>
  { 
    
   // alert("cart call"+Product) 
    
    
    const match = addcart.find((val,indx)=> val.id===Product.id)
    // alert("hello Jii") 
    if(match) 
    { 
      // alert("hello Jii") 
      setAddcart(addcart.map((val)=>   
        val.id===Product.id ?
         {...val,quantity:val.quantity+1}
        : val 
      )) 
    } 
    else{ 
 
setAddcart([...addcart,{...Product,quantity:1}]) 
setPcount(pcount+1); 
    } 

// const match = addcart.filter((val) => val.id === Product.id);
// alert("hello Jii");
 
// if (match.length === 1) {
//   // Update the quantity of the matched product
//   setAddcart(
//     addcart.map((val) =>
//       val.id === Product.id ? { ...val, quantity: val.quantity + 1 } : val
//     )
//   );
// } else {
//   // Add the new product to the cart
//   setAddcart([...addcart, { ...Product, quantity: 1 }]);
// }

     // setAddcart([addcart.map((val,indx)=> {
      // return    val.id===Product.id
      //  ?  { ...addcart, quantity:val.quantity+1}
      //   :  ([...addcart,{Product,quentity:1}])
      // } 
      // )]) 
    
   
  } 

console.log(addcart); 

  
const url = 'https://fakestoreapi.com/products'; 
const { Apidata, loading, error } = Usefetch(url);
  

console.log("App,Apidata"+Apidata,error);

const removetocart=(pid)=>
  {  
 
    // alert("hello Jii"+pid)  
    setAddcart(addcart && addcart.filter((val,indx)=> val.id!==pid))  ///agr map lgate to jo condition usko true baki sabhi false krdeta baki result bhi nhi dikhega 
    setPcount(pcount-1); 
  } 
console.log(addcart); 



const increment=(id)=> 
{
  // alert("++ call ")

  
  setAddcart(addcart.map(val  =>val.id===id ? {...val,quantity:val.quantity+1} : val))
}

const decrement=(id)=> 
{ 
  setAddcart(addcart.map(val  => val.id==id ? {...val,quantity:val.quantity-1}: val))  
}

console.log("search_value"+search)

const serchingvalu=(e)=>
{
  // alert("search valu call")
  e.preventDefault(); 
setSearch(e.target.value) 
} 




  return ( 
    <div> 
      {/* <header className="App-header"> */}
      {/* This is Form<Form/>  */}

     <Router>
          <Header  pcount={pcount} serchingvalu={serchingvalu}/> 
          {/* <Form/>   */} 
      <Routes> 
        <Route path="/" element={<Products Addtocart={Addtocart} search={search}/>}></Route> 
        <Route path="/Addproduct" element={<Addproduct  addcart={addcart} rmtocart={removetocart} increment={increment} decrement={decrement}/>}></Route> 
      </Routes>   
     </Router>
      {/* </header>  */}
    </div>
  );
}

export default App;
