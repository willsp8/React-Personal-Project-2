//note zoom in 400% when exporting images from tiled

// where the Sprite class is created should help with move the players and changing the x and y
const canvas = document.querySelector('#canvas1')
// this c stands for context and its purpose is for drawing out everything in our game 
const c = canvas.getContext('2d')

//this sets the canvas width 
canvas.width = 1024
//this sets the canvas height 
canvas.height = 576
let runFast = true
class Sprite{
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, rotation=0, height_of_image,}){
        this.position = position
        this.frameCurrent = 0
        this.image = new Image() 
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max 
            this.height = this.image.height // this should help change where the image is for the height 
        }
        this.image.src = image.src
        this.animate = animate
        this.sprites = sprites 
        this.opacity = 1
        this.rotation = rotation
        this.framesElapsed = 0
    }

    draw_3(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    clear(){
        c.clearRect(0, 0, canvas.width, canvas.height);
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.frames.hold == 0){
            if(this.frameCurrent < this.frames.max - 1){
                this.frameCurrent++
            }else{
                this.frameCurrent = 0
            }
        }
    }
    
    // creating a draw method 
    draw (){
        c.save()
        c.beginPath()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        
        c.rotate(this.rotation)
        
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        //this fixes the blur
        
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.imageSmoothingEnabled = false;
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height / this.frames.max + 48, // 24
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height / this.frames.max + 48 // 24
            
           
        )
        
        c.restore()

        // Store the current transformation matrix
        
        
        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold == 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
       
    }

    drawAI (){
        c.save()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height, 
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
            
           
        )
        c.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false)
        
        c.strokeStyle = 'red';
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        c.beginPath();
       // c.arc(this.position.x + 20, this.position.y + 35, 45, 0, 2 * Math.PI);
        //console.log('radius')
        //console.log()
        c.stroke();
        c.restore()

        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold === 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
        
        
       

        
        
    }


    update(){
        this.draw()
        this.animateFrames()
        
    }
    
}


class Sprite2{
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, rotation=0, height_of_image,}){
        this.position = position
        this.frameCurrent = 0
        this.image = new Image() 
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max 
            this.height = this.image.height // this should help change where the image is for the height 
        }
        this.image.src = image.src
        this.animate = animate
        this.sprites = sprites 
        this.opacity = 1
        this.rotation = rotation
        this.framesElapsed = 0
    }

    draw_3(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    clear(){
        c.clearRect(0, 0, canvas.width, canvas.height);
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.frames.hold == 0){
            if(this.frameCurrent < this.frames.max ){
                this.frameCurrent++
                
            }else{
                
                this.frameCurrent = 0
            }
        }
    }
    
    // creating a draw method 
    draw (){
        c.save()
        c.beginPath()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        
        c.rotate(this.rotation)
        
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        //this fixes the blur
        
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.imageSmoothingEnabled = false;
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height 
            
           
        )
        
        c.restore()

        // Store the current transformation matrix
        
        
        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold == 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
       
    }

    drawAI (){
        c.save()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height, 
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height 
            
           
        )
        c.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false)
        
        c.strokeStyle = 'red';
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        c.beginPath();
       // c.arc(this.position.x + 20, this.position.y + 35, 45, 0, 2 * Math.PI);
        //console.log('radius')
        //console.log()
        c.stroke();
        c.restore()

        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold === 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
        
        
       

        
        
    }

    update(){
        this.draw()
        this.animateFrames()
        
    }

    
}

//  creating a class for the Boundary
class Boundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary2{
    static width = 16
    static height = 16
    constructor({position}) {
        this.position = position
        this.width = 16
        this.height = 16
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary3{
    static width = 32
    static height = 32
    constructor({position}) {
        this.position = position
        this.width = 32
        this.height = 32
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary4{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary5{
    static width = 80
    static height = 80
    constructor({position}) {
        this.position = position
        this.width = 80
        this.height = 80
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary6{
    static width = 288
    static height = 288
    constructor({position}) {
        this.position = position
        this.width = 288
        this.height = 288
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(200, 247, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary7{
    static width = 288
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 288
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        //c.fillStyle = 'rgba(200, 3, 0)'
        c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary8{
    static width = 48
    static height = 148
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 148
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

// draws npc Boundary onto the screen 
class NpcBoundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}