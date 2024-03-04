import React,{useState} from 'react'
import axios from 'axios'
// import { AuthContext } from './Context/AuthProvider';
import { useNavigate } from 'react-router-dom';


export default function CreatePost() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '', 
    email: '',
    password: '', 
    confirmPassword: ''
  });

  const [isError,setIsError]= useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    await signUp(formData.name,formData.age,formData.email,formData.password,formData.confirmPassword);
    Navigate('AllPost')
  };

  async function signUp(name,age,email,password,confirmPassword) {
    try{
      const data = await axios.post("https://deploy-mern-server-delta.vercel.app/user/signup", {
        name:name,
        age:age,
        email: email,
        password: password,
        confirmPassword:confirmPassword
     });
      setIsError("");
     console.log(data);
    }
    catch(err){
      setIsError(err);
      console.log(err);
    }
}

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      {isError&& <h2>{isError}</h2>}
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
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
