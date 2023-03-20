import React , {Component} from "react";
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import {FirstPersonControls} from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/FirstPersonControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js'
var i = 0;

let renderer, scene, camera, stats;

let particles;

const PARTICLE_SIZE = 20;

let raycaster, intersects;
let pointer, INTERSECTED;

var rotateBool = false;
export default class ThreeScene extends Component {

    
    componentDidMount(){
        // this makes sure that we only make 1 canvas on the screen 
        if(i <= 0)
        {
        console.log(THREE.REVISION)
        this.scene = new THREE.Scene();
       
        // camera 
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 200;
        this.camera.position.y = 5;
        this.camera.position.x = 0;

        // render
     
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.autoClear = true;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            //this.setPixelRatio(window.devicePixelRatio)

            // this fixed the muliple canvas problem 
            
                this.mount.appendChild(this.renderer.domElement);
                
            
           
            this.renderer.render(this.scene, this.camera);

        

        // coontrols 
      

        // new 
        


        // donut 
        const geometry2 = new THREE.TorusGeometry(.7, .2, 16, 100)
        const geometry = new THREE.BoxGeometry( 200, 200, 200, 16, 16, 16 );



        const material2 = new THREE.PointsMaterial({
            size: 2,
            color: 0xff44ff
        })

        this.sphere = new THREE.Points(geometry, material2)
        this.scene.add(this.sphere)

        this.sphere2 = new THREE.Points(geometry2, material2)
        this.scene.add(this.sphere2)
        
        
        
        

        // cube 
        // var geometry = new THREE.BoxGeometry(1,1,1)



        var material = new THREE.MeshBasicMaterial({
            color : 0x00ff00
        })
        this.cube = new THREE.Mesh(geometry2, material2)
        

        
        // calling our animation 
        //this.scene.add(this.cube)
        

        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = this.cube.position.x
        pointLight.position.y = this.cube.position.y
        pointLight.position.z = 4
        this.scene.add(pointLight)


        this.animation();
        this.renderer.render(this.scene, this.camera)
        i += 1
        }


        
        //event handlers 
        //window.addEventListener("resize", this.handleWindowResize)
    }

    
    

    animation = () =>{
        requestAnimationFrame(this.animation);
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        
        //this.sphere2.rotation.y += 0.001;
        if(rotateBool ==true){
            this.sphere.rotation.x += 0.001;
            this.sphere.rotation.y += 0.001;
        }else {
            this.sphere.rotation.x -= 0.0005;
            this.sphere.rotation.y -= 0.001;
        }

        this.sphere.color = "0xf13456"
        this.renderer.render(this.scene, this.camera);
        window.addEventListener("keydown", function(event){
            rotateBool = true
        })

        rotateBool = false
       // console.log(this.camera.position.y)

    }

    // handleWindowResize = ()=>{
    //     // this.camera.aspect = window.innerWidth / window.innerHeight
    //     // this.camera.updateProjectionMatrix();

    //     // this.renderer.setSize(window.innerWidth, window.innerHeight)
    //     // this.renderer.render(this.scene, this.camera)
        
        
    // }
    
    render(){
        var j = 0;
        
        return(
            <div
            ref={mount => {
                if(j == 0)
                {
                    this.mount = mount;
                    j += 1
                }

            }

            }
            />
        )
            
        
        
    }
}