import { useEffect, useState } from 'react';

const  Usefetch=(url) =>{
  const [Apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(true); // Initial value should be true
  const [error, setError] = useState(null);

  const getdata = async () => { 
    setLoading(true); // Set loading to true before fetching
    try { 
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }  
      const data = await response.json(); 
      setApidata(data);  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Loading completed
    } 
  };

  useEffect(() => {
    getdata();
  }, [url]);       

  return { Apidata, loading, error };
}  


export default Usefetch;

