import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function AllPost() {

  const [arr, arrset] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/getAllUsers");
        console.log(response.data);
        arrset(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Call the inner async function immediately
  
    // Since we are not using any dependencies, this effect doesn't need cleanup, so no return statement is needed.
  }, []);

  return (
    <div className='maindiv'>
      {
        arr && arr?.map((item, index) =>
          <div className='eachdiv' key={index}>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
            <h3>{item.age}</h3>
            <div className='alignbutton'>
              <button style={{ width: '80px', backgroundColor: 'skyBlue' }}>Edit</button>
              <button style={{ width: '80px', backgroundColor: 'skyBlue' }}>Delete</button>
            </div>
          </div>
        )
      }

    </div>
  )
}
