
//import './src/App.css';
import ThreeScene from "../three.js/three-scene.js";
//import gsap from 'gsap'
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import {FirstPersonControls} from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';
//import * as dat from 'dat.gui'
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const Home = () =>{
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const[LoginStatus, setLoginStatus] = useState("");

  let nagivate = useNavigate() 
    
    
  Axios.defaults.withCredentials = true;

  const addUser = () =>{
    Axios.post('http://localhost:3000/Create', {
      name: name, 
      username: username, 
      password: password
    }).then( () =>{
      nagivate('/Login')
      console.log("success")
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
            <label className="font">name </label>
            
            <input type="text" 
            onChange={(event) => {
              setName(event.target.value)
              }}/>
            <label className="font">email</label>
            <input type="text" onChange={(event) => {
              setUsername(event.target.value)
              }}/>
            <label className="font">password</label>
            {/* target value */}
            <input type="text" onChange={(event) => {
              setPassword(event.target.value)
              }}/>
            <button onClick={addUser}> add user</button>
            {/* <button onClick={displayInfo}> add user</button> */}
            
          </div>
          <div>
            -----------------------
          </div>
          <div>
            <button>
              Show user
            </button>
          </div>
          
        </div>
        
      );
}