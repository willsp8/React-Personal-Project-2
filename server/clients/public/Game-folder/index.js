// const canvas = document.querySelector('#canvas1')
// // this c stands for context and its purpose is for drawing out everything in our game 
// const c = canvas.getContext('2d')

// //this sets the canvas width 
// canvas.width = 1024
// //this sets the canvas height 
// canvas.height = 576

const keys = {
    space: {
        pressed: false
    },
    control: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    f: {
        pressed: false
    },
    q: {
        pressed: false
    },
    e: {
        pressed: false
    },
    t: {
        pressed: false
    },
    r: {
        pressed: false
    }, 
    shift: {
        pressed: false
    }
}

function rectangularCollision({rectangle1, rectangle2}){
    //if the right side of the player is greater than the left side of the red block than they are colliding 
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
        
    
}

function rectangularCollision2({rectangle1, rectangle2, x, y}){
    //if the right side of the player is greater than the left side of the red block than they are colliding 
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x + x && 
        rectangle1.position.x <= (rectangle2.position.x + x) + rectangle2.width &&
        rectangle1.position.y <= (rectangle2.position.y + y) + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y + y)
        
    
}
document.querySelector('#dialogueBox').style.display = 'none'
document.querySelector('#userInterface').style.display = 'none'
document.querySelector('#npcUserInterface').style.display = 'none'
document.querySelector('#craftingInterface').style.display = 'none'
document.querySelector('#inventory').style.display = 'none'
document.querySelector('#librainanNPCInterface').style.display = 'none'
document.querySelector('#officeNPCInterface').style.display = 'none'
document.querySelector('#catNPCInterface').style.display = 'none'
document.querySelector('#ComputerInterface').style.display = 'none'
document.querySelector('#userInterface').style.display = 'none'
document.querySelector('#menu').style.display = 'none'
let animateown = true 
function animate(){
    let animationId
    animationId  = window.requestAnimationFrame(animate)
    console.log(animationId)
    document.querySelector('#userInterface').style.display = 'none'
    document.querySelector('#npcUserInterface').style.display = 'none'
    document.querySelector('#craftingInterface').style.display = 'none'
    document.querySelector('#inventory').style.display = 'none'
    document.querySelector('#librainanNPCInterface').style.display = 'none'
    document.querySelector('#officeNPCInterface').style.display = 'none'
    document.querySelector('#catNPCInterface').style.display = 'none'
    document.querySelector('#ComputerInterface').style.display = 'none'
    document.querySelector('#baristaInterface').style.display = 'none'
    document.querySelector('#menuHUB').style.display = 'none'
    document.querySelector('#pWalletTalkingDiv').style.display = 'none'
    document.querySelector('#pStatsTalkingDiv').style.display = 'none'
    if(animateown == true){
        window.cancelAnimationFrame(animationId)
        handleStateChange()
       // animateTown()
    }
}

animate()
function handleStateChange(){
    
    
        //animateTown()
        //animatehouse()
        animateCoffeeShop()
        
        
    
}
// this will listen to 
addEventListener('click', () =>{
    
})

//so whenever a key is pushed down than it will call what ever is in the () => {
// part of the code also in the (e) basicallly adding an event object 
var timespressed = 0
window.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key == ' '){
        console.log('say hello')
    }
    // making an switch case statment 
    switch(e.key){
        case ' ':
            keys.space.pressed = true
            lastkey = ' '
            break
        case 'Control':
            keys.control.pressed = true
            lastkey = 'Control'
            break
        case 'w':
            // so when w is pressed it will set our keys const w to true instead of being false
            keys.w.pressed = true
            lastKey = 'w'
            console.log('w pressed')
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break  
        case 'f':
            keys.f.pressed = true
            break
        case 'e':
            // we dont need to have lastkey for f becauses
            if(keys.r.pressed == false){
                dialogueToggled = true
                keys.r.pressed = true
                console.log('q is owrking a')
                console.log(keys.r.pressed)
                return
            }else if(keys.r.pressed == true){
                console.log('e is working')
                keys.e.pressed = true
                dialogueToggled = false  
                keys.r.pressed = false
            }
            break     
        case 'q':
            // we dont need to have lastkey for f becauses
            if(keys.t.pressed == false){
                menuToggled = true
                keys.t.pressed = true
                console.log('q is owrking a')
                console.log(keys.t.pressed)
                return
            }else if(keys.t.pressed == true){
                console.log('e is working')
                keys.q.pressed = true
                menuToggled = false  
                keys.t.pressed = false
            }
            
            
            break
        case 't':
            // we dont need to have lastkey for f becauses
            keys.t.pressed = true
            keys.q.pressed = false
            if(gamePaused == true){
                //window.cancelAnimationFrame(animationId)
                animate()
                gamePaused = false
            }    
            break  
        case 'r':
            keys.r.pressed = true
            keys.e.pressed = false     
        case 'Shift':
            keys.shift.pressed = true
            timespressed = timespressed + 1
            //lastKey = 'Shift'
            break
    }
})

var menuToggled = false
var dialogueToggled = false
//this will listen for when the key is up and will set the keys const statement above to false
window.addEventListener('keyup', (e) => {
    //console.log(e.key)
    // making an switch case statment 

    switch(e.key){
        case ' ':
            //keys.space.pressed = false
            break
        case 'Control':
            // keys.control.pressed = false
            break
        case 'w':
            // so when w is pressed it will set our keys const w back to false 
            keys.w.pressed = false
            console.log('w lifted')
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'e':
            keys.e.pressed = false
            break     
        case 'q':
            keys.q.pressed = false
            break   
        case 'Shift':
            keys.shift.pressed = false  
            //timespressed = 0
            break
        case 'f':
            
            break
    }   
})