import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from './secrets';
import { useNavigate } from 'react-router-dom';


export default function AllPost() {

  const Navigate = useNavigate();

  const [arr, arrset] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/getAllUsers`);
      console.log(response.data);
      arrset(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

    fetchData(); // Call the inner async function immediately

    // Since we are not using any dependencies, this effect doesn't need cleanup, so no return statement is needed.
  }, []);

  async function deletePost(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/user/${id}`);
      console.log("Post delete sucessfully")
      fetchData();
    }
    catch (err) {
      console.error("Error data not delete:", err);
    }
  }

  function handleEdit(id) {
    Navigate(`/EditPost/${id}`)
  }

  return (
    <div className='maindiv'>
      {
        arr && arr?.map((item, index) =>
          <div className='eachdiv' key={index}>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
            <h3>{item.age}</h3>
            <div className='alignbutton'>
              <button style={{ width: '80px', backgroundColor: 'skyBlue' }} onClick={()=>handleEdit(item._id)}>Edit</button>
              <button style={{ width: '80px', backgroundColor: 'skyBlue' }} onClick={() => deletePost(item._id)}>Delete</button>
            </div>
          </div>
        )
      }

    </div>
  )
}
