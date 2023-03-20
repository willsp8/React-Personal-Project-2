
import './App.css';
import ThreeScene from "./three.js/three-scene.js";
//import gsap from 'gsap'
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import {FirstPersonControls} from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';
//import * as dat from 'dat.gui'
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { About } from './pages/About';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Logout } from './pages/Logout';
import { Login } from './pages/Login';
//import Login from './pages/Login';
import { Signedin } from './pages/Login';


function App() {
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const[LoginStatus, setLoginStatus] = useState("");

  const LogOut = () =>{


    // Axios.delete('http://localhost:3000/logout', {withCredentials: true}).then(response => {
    //     console.log("success")
    //   }).catch(error => {
    //     console.log("hello: " + error)
    //   })
    Axios.request({
      url: "http://localhost:3000/logout",
      method: "get",
      headers:{
          Cookie: "cookie1=value; cookie2=value; cookie3=value;"
      } 
    }).then( (response) =>{
      
      
      if(response.data.message)
      {
        setLoginStatus(response.data[0].username)
          
      }else{
        setLoginStatus(response.data[0].username)
      }
    }).catch(error => {
        console.log("hello: " + error)
    })
  };

  console.log(Signedin)
  if(Signedin == false)
  {
    return (
      <div className="App">
        <Router>
          <div> Navbar 
            <navbar>
              <Link to="/"> Home </Link>
              <Link to="/Login"> Login </Link>
              
              <Link to="/Logout"> Logout </Link>
              <Link to="/about"> About </Link>
              <Link to="/game"> Game </Link>
              <button onClick={LogOut}> Logout</button>
              <a  href={process.env.PUBLIC_URL + "Game3.html"} > terminos</a>
  
            </navbar>
            
          </div>
          <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={< About />}/>
            <Route path="/game" element={< Game />}/>
            <Route path="/dashboard" element={< Dashboard />}/>
            <Route path="/Login" element={< Login />}/>
            <Route path="/Logout" element={< Logout />}/>
            <Route exact path="/game3.html" render={() => {window.location.href="Game3.html"}} />
          </Routes>
        </Router>
  
        <div className="threeCanvas">
      
        </div>
        
       
        
      </div>
      
    );
  }else if(Signedin == true)
  {
    return (
    
      <div className="App">
        <Router>
          <div> Navbar 
            <navbar>
              <Link to="/"> Home </Link>
           
              <Link to="/about"> About </Link>
              <Link to="/game"> Game </Link>
              <a  href={process.env.PUBLIC_URL + "Game3.html"} > terminos</a>
  
            </navbar>
            
          </div>
          <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={< About />}/>
            <Route path="/game" element={< Game />}/>
            <Route path="/dashboard" element={< Dashboard />}/>
            <Route path="/Login" element={< Login />}/>
            
            <Route exact path="/game3.html" render={() => {window.location.href="Game3.html"}} />
          </Routes>
        </Router>
  
        <div className="threeCanvas">
      
        </div>
        
       
        
      </div>
      
    );
  }else{

  }
  
}

export default App;
