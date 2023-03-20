import ThreeScene from "../three.js/three-scene2.js";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export var Signedin = false;

export const Login = () =>{
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const[LoginStatus, setLoginStatus] = useState("");

    let nagivate = useNavigate() 
    
    
    Axios.defaults.withCredentials = true;

    const Login = () =>{
        Axios.post('http://localhost:3000/Login', {
        name: name, 
        username: username, 
        password: password
        }).then( (response) =>{
            console.log("success")
            nagivate('/dashboard')
            if(response.data.message)
            {

                setLoginStatus(response.data.message)
                
                
            }else{
                setLoginStatus(response.data[0].username)
            }
        })
    }

    

    useEffect(() =>{
        Axios.get('http://localhost:3000/Login').then((response) =>{
            
            // if user is logged in thean set setLoginStatus to the user and redirect to dashboard 
            if(response.data.loggedIn == true)
            {
                setLoginStatus(response.data.user[0].username)
                
                nagivate('/dashboard')
            }
        
        })
    }, [])
    return (
        <div className="App">
          
    
        
          <diiv className="threeCanvas">
          <ThreeScene/>
          </diiv>
          <div className="information" >
            
            <label className="font">email</label>
            <input type="text" onChange={(event) => {
              setUsername(event.target.value)
              }}/>
            <label className="font">password</label>
            {/* target value */}
            <input type="text" onChange={(event) => {
              setPassword(event.target.value)
              }}/>
            <button onClick={Login}> Login</button>
            {/* <button onClick={displayInfo}> add user</button> */}
            
          </div>

          <h1 className="font" >
            {LoginStatus}
          </h1>
        
        </div>
    )
}

// import React from "React"
// import { Nagivate } from "react-router-dom"


// function About()
// {
//     const[goToConect, setGotoConect] = React.useState(false)
//     return (
        
//         <div>
//             <Nagivate></Nagivate>
//             hey about me page 
//         </div>
//     )
        
    
// }

export default Login;
