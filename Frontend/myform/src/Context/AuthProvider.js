// import React,{useContext} from 'react'
// import axios from 'axios'

// export const AuthContext = React.createContext();


// export default function AuthProvider({ children }) {


//     async function signUp(name,email,password,confirmPassword) {
//         const data = await axios.post("http://localhost:4500/user/signup", {
//             name:name,
//             email: email,
//             password: password,
//             confirmPassword:confirmPassword
//         });
//         console.log(data);
//     }

//     const value = {
//         signUp
//     }

//     return (
//         < AuthContext.Provider value={value} >
//             {children}
//         </AuthContext.Provider >
//     )
// }
