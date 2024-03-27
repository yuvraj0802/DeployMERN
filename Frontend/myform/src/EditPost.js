import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { AuthContext } from './Context/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from './secrets';

export default function CreatePost() {
    const Navigate = useNavigate();
    //   const [arr, setArr] = useState([]);

    const params = useParams();
    const id = params.id;

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/user/${id}`);
                //   console.log(response.data.data);
                //   setArr([response?.data?.data]);
                const userData = response.data.data;

                // Update formData state by merging with the existing state
                setFormData(prevData => ({
                    ...prevData,
                    name: userData.name,
                    age: userData.age,
                    email: userData.email
                }));


            } catch (error) {
                console.error("Error in fetching data:", error);
            }
        };

        fetchData();
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevdata) => ({ ...prevdata, [name]: value }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
        await EditPost(formData.name, formData.age, formData.email);
        Navigate('/AllPost')
    };




    async function EditPost(name, age, email) {
        try {
            const data = await axios.patch(`${BASE_URL}/user/${id}`, {
                name: name,
                age: age,
                email: email
            });
            //   setIsError("");
            console.log(data);
        }
        catch (err) {
            //   setIsError(err);
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit">Update</button>
        </form>
    )
}
