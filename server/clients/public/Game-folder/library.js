const offset8 = {
    x: -1350,
    y: -2400
}


const libraryBackgroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
libraryBackgroundImage.src = './res/maps/library.png'

const libaryForeGroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
libaryForeGroundImage.src = './res/maps/library_foreground.png'

const playerDownImage5 = new Image()
playerDownImage5.src = './res/playerRes/CDown2.png'
const playerUpImage5 = new Image()
playerUpImage5.src = './res/playerRes/CUp2.png'
const playerRightImage5 = new Image()
playerRightImage5.src = './res/playerRes/CRight2.png'
const playerLeftImage5 = new Image()
playerLeftImage5.src = './res/playerRes/CLeft2.png'
const playerIdleDownImage5 = new Image()
playerIdleDownImage5.src = './res/playerRes/CIdle.png'
const playerIdleUpImage5 = new Image()
playerIdleUpImage5.src = './res/playerRes/CIdleUp.png'
const playerIdleLeftImage5 = new Image()
playerIdleLeftImage5.src = './res/playerRes/playerIdleLeft.png'
const playerIdleRightImage5 = new Image()
playerIdleRightImage5.src = './res/playerRes/playerIdleRight.png'

// office npc
const officeGuyDown = new Image()
officeGuyDown.src = './res/playerRes/OfficeGuyDown.png'
const officeGuyUp = new Image()
officeGuyUp.src = './res/playerRes/OfficeGuyUp.png'
const officeGuyRight = new Image()
officeGuyRight.src = './res/playerRes/OfficeGuyRight.png'
const officeGuyLeft = new Image()
officeGuyLeft.src = './res/playerRes/OfficeGuyLeft.png'

const librainanDownImage = new Image()
librainanDownImage.src = './res/playerRes/librarian_down.png'



const collisionMapLibrary = [] 
for (let i = 0; i < collision_for_library.length; i+= 90){ 
    
    collisionMapLibrary.push(collision_for_library.slice(i, 90 + i ))
    
}

const boundaries_for_library = []
collisionMapLibrary.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_library.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset8.x,
                        y: i * Boundary4.height + offset8.y
                    }
                })
            )
        }
            
    })
})

const leaveLibraryMap = []
for (let i = 0; i < leaving_library.length; i+= 90){ 
    
    leaveLibraryMap.push(leaving_library.slice(i, 90 + i ))
    
}

const boundaries_for_leaving_library = []
leaveLibraryMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_leaving_library.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset8.x,
                        y: i * Boundary4.height + offset8.y
                    }
                })
            )
        }
            
    })
})


const librainanCollision = []
for (let i = 0; i < librainanNPCCollision.length; i+= 90){
    librainanCollision.push(librainanNPCCollision.slice(i, 90 + i ))
}
const librainanBoundaries = []
librainanCollision.forEach((row, i) => {
    row.forEach((Symbol, j) => {
       // console.log(Symbol)
        if(Symbol === 872){
            librainanBoundaries.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset8.x,
                        y: i * Boundary4.height + offset8.y
                    }
                })
            )
        }
    })
})

const libraryBackground = new Sprite({
    position: {
        x: offset8.x,
        y: offset8.y
    },
    // seting the battleBackground to the image above 
    image: libraryBackgroundImage
})

const libraryBackground_foreground = new Sprite({
    position: {
        x: offset8.x,
        y: offset8.y
    },
    // seting the battleBackground to the image above 
    image: libaryForeGroundImage
})

const librainanNPC = new Sprite({
    position: {
        x: offset8.x + 2060,
        y: offset8.y + 2640
    },
    frames: {
        max: 3,
        hold: 5
    },
    // seting the battleBackground to the image above 
    image: librainanDownImage
})

const OfficeGuyNPC = new Sprite({
    position: {
        x: offset8.x + 2060,
        y: offset8.y + 3000
    }, 

    image: officeGuyDown, 
    frames: {
        max: 3,
        hold: 10
    },
    sprites: {
        up: officeGuyUp,
        down: officeGuyDown,
        left: officeGuyLeft,
        right: officeGuyRight
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const player5 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: playerIdleDownImage5, 
    frames: {
        max: 6,
        hold: 9
    },
    sprites: {
        up: playerUpImage5,
        down: playerDownImage5,
        left: playerLeftImage5,
        right: playerRightImage5, 
        idleDown: playerIdleDownImage5,
        idleUp: playerIdleUpImage5,
        idleRight: playerIdleRightImage5,
        idleLeft: playerIdleLeftImage5
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})
let actionLockCounter_OFG = 0
let actionLockCounter_OFG_2 = 0
let left_library = false
const library_moovables = [libraryBackground, ...boundaries_for_library, ...boundaries_for_leaving_library, libraryBackground_foreground, librainanNPC, ...librainanBoundaries, OfficeGuyNPC]
const movable_officeGuyNpc = [OfficeGuyNPC]

function moveOfficeMan(){
    movable_officeGuyNpc.forEach(movable => {
        //player5.position.x + player5.width >= OfficeGuyNPC.position.x
        actionLockCounter_OFG = actionLockCounter_OFG + 1
        if(actionLockCounter_OFG == 700 ){
            
            
            
            // both if statments if the npc a 50-/50 chance of going right or going left 
            // note i added the feature so the npc wont 
            
            if(actionLockCounter_OFG_2 <= 9 ){
                OfficeGuyNPC.image = OfficeGuyNPC.sprites.right
                OfficeGuyNPC.animate = true
                OfficeGuyNPC.position.x += 12
                actionLockCounter_OFG_2 = actionLockCounter_OFG_2 + 1
            }else if(actionLockCounter_OFG_2 > 9 &&  actionLockCounter_OFG_2 <= 19 ){
                OfficeGuyNPC.image = OfficeGuyNPC.sprites.left
                OfficeGuyNPC.animate = true
                OfficeGuyNPC.position.x -= 12
                actionLockCounter_OFG_2 = actionLockCounter_OFG_2 + 1
            }else {
                movable.image = OfficeGuyNPC.sprites.down
                actionLockCounter_OFG_2 = 0
            }
            actionLockCounter_OFG = 0
        } 
        
        
        if(
            rectangularCollision2({
                rectangle1: player,
                //makes a clone of the boundary object 
                rectangle2: OfficeGuyNPC,
                x: 3,
                y: 0 
            })
        ){
            moving5 = false
            officeGuyMoving = false
            if((player5.position.x + 3) + player5.width >= OfficeGuyNPC.position.x){
                keys.d.pressed = false
                moving5 = true
            }
            if((player5.position.x + 3) <= OfficeGuyNPC.position.x + OfficeGuyNPC.width){
                keys.a.pressed = false
                moving5 = true
            }
            
            
            
            // right side of player
            
            // top side of player
            
            
        }
        


    })
}


function animateLibrary(){
    
    const libaryAnimateId =  window.requestAnimationFrame(animateLibrary)
    libraryBackground.draw()
    boundaries_for_library.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_leaving_library.forEach((boundary1) => {
        boundary1.draw()
    })
    librainanBoundaries.forEach((boundary1) => {
        boundary1.draw()
    })
    
    librainanNPC.draw()
    OfficeGuyNPC.drawAI()
    libraryBackground_foreground.draw()
    document.querySelector('#librainanNPCInterface').style.display = 'none'
   
    
    let moving5 = true
    let officeGuyMoving = true
    
    player5.animate = false
    librainanNPC.animate = true
    // office guy npc moving
    if(keys.w.pressed == false && keys.a.pressed == false &&
        keys.s.pressed == false && keys.d.pressed == false
        )
    {
            if(player5.image ==  player5.sprites.down && enemyIsAttacking == false){
                player5.image = player5.sprites.idleDown
            }else if(player5.image ==  player5.sprites.up){
                player5.image = player5.sprites.idleUp
            }else if(player5.image ==  player5.sprites.right){
                player5.image = player5.sprites.idleRight
            }else if(player5.image ==  player5.sprites.left){
                player5.image = player5.sprites.idleLeft
            }
            player5.animate = true
            player5.draw()
    }else{
        player5.animate = true
        player5.draw()
    }

    openMenu()
    
    // makes sure that the player doesnt attack when player leave the coffee house
    if(keys.space.pressed){
        keys.space.pressed = false
    }

    // makes sure that the player doesn't throw a fireball
    if(keys.f.pressed){
        keys.f.pressed = false
    }
    movable_officeGuyNpc.forEach(movable => {
        //player5.position.x + player5.width >= OfficeGuyNPC.position.x
        
        
        actionLockCounter_OFG = actionLockCounter_OFG + 1
        if(actionLockCounter_OFG == 700 ){
            if(actionLockCounter_OFG_2 <= 9 ){
                if(rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 70,
                    y: 0
                }) || 
                rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 0,
                    y: -70
                }) ||
                rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 0,
                    y: 70
                }))
                {
                    OfficeGuyNPC.animate = false
                    officeGuyMoving = false
                    if(
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 2,
                            y: 0
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 0,
                            y: 2
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: -2,
                            y: 0
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 0,
                            y: -2
                        }) 
                    ){
                        if(keys.e.pressed == true){
                            document.querySelector('#officeNPCInterface').style.display = 'block' 
                            console.log('we just want')
                        }else{
                            document.querySelector('#officeNPCInterface').style.display = 'none' 
                        }
                    }else{
                        document.querySelector('#officeNPCInterface').style.display = 'none' 
                    }
                    
                }else if(rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 70,
                    y: 0
                }) == false)
                {
                    OfficeGuyNPC.animate = true
                    OfficeGuyNPC.image = OfficeGuyNPC.sprites.right
                    OfficeGuyNPC.animate = true
                    OfficeGuyNPC.position.x += 12
                    actionLockCounter_OFG_2 = actionLockCounter_OFG_2 + 1
                }
            }else if(actionLockCounter_OFG_2 > 9 &&  actionLockCounter_OFG_2 <= 19 ){
                if(rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: -70,
                    y: 0
                }) ||
                rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 0,
                    y: -70
                })
                || 
                rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: 0,
                    y: 70
                })
                )
                {
                    
                    OfficeGuyNPC.image = OfficeGuyNPC.sprites.left
                    OfficeGuyNPC.animate = false
                    officeGuyMoving = false
                    if(
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 2,
                            y: 0
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 0,
                            y: 2
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: -2,
                            y: 0
                        }) 
                        ||
                        rectangularCollision2({
                            rectangle1: player3,
                            //makes a clone of the boundary object 
                            rectangle2: OfficeGuyNPC,
                            x: 0,
                            y: -2
                        }) 
                    ){
                        if(keys.e.pressed == true){
                            document.querySelector('#officeNPCInterface').style.display = 'block' 
                            console.log('office dia')
                        }else{
                            document.querySelector('#officeNPCInterface').style.display = 'none' 
                        }
                        
                    }else{
                        document.querySelector('#officeNPCInterface').style.display = 'none' 
                    }
                }else if(rectangularCollision2({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: OfficeGuyNPC,
                    x: -70,
                    y: 0
                }) == false)
                {
                    OfficeGuyNPC.animate = true
                    OfficeGuyNPC.image = OfficeGuyNPC.sprites.left
                    OfficeGuyNPC.animate = true
                    OfficeGuyNPC.position.x -= 12
                    actionLockCounter_OFG_2 = actionLockCounter_OFG_2 + 1
                }
            }else {
                OfficeGuyNPC.animate = true
                movable.image = OfficeGuyNPC.sprites.down
                actionLockCounter_OFG_2 = 0
            }
            actionLockCounter_OFG = 0
        } 
        
        
       
        

    })
    
    if(keys.w.pressed == true && lastKey == 'w') {
        
        player5.animate = true
        player5.image = player5.sprites.up

        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: OfficeGuyNPC,
            x: 0,
            y: 3
        })
            
         ){
            moving5 = false
            OfficeGuyNPC.image = OfficeGuyNPC.sprites.down
         }

        for (let i = 0; i < boundaries_for_library.length; i++){
            const boundary = boundaries_for_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ){
                
                moving5 = false
                break
            }
        }

        //for leaving map 
        for (let i = 0; i < boundaries_for_leaving_library.length; i++){
            const boundary = boundaries_for_leaving_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ){
                window.cancelAnimationFrame(libaryAnimateId)
                animateTown()
                moving5 = false
                break
            }
        }

        if(moving5 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            library_moovables.forEach((movable) => {
            movable.position.y += 3})
            
        }
                
        
    }else if (keys.s.pressed == true && lastKey == 's') {
        
        player5.animate = true
        player5.image = player5.sprites.down

        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: OfficeGuyNPC,
            x: 0,
            y: -3
        })
            
        ){
            moving5 = false
            OfficeGuyNPC.image = OfficeGuyNPC.sprites.up
        }

        for (let i = 0; i < boundaries_for_library.length; i++){
            const boundary = boundaries_for_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ){
               
                moving5 = false
                break
            }
        }

        //for leaving map 
        for (let i = 0; i < boundaries_for_leaving_library.length; i++){
            const boundary = boundaries_for_leaving_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ){
                window.cancelAnimationFrame(libaryAnimateId)
                animateTown()
                moving5 = false
                break
            }
        }

        if(moving5 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            library_moovables.forEach((movable) => {
            movable.position.y -= 3})
        //console.log(background.position.y)
        }
        
        
    }else if(keys.a.pressed == true && lastKey == 'a') {

        player5.animate = true
        player5.image = player5.sprites.left
        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: OfficeGuyNPC,
            x: 0.5,
            y: 0
        })
            
        ){
            moving5 = false
            OfficeGuyNPC.image = OfficeGuyNPC.sprites.right
        }
        for (let i = 0; i < boundaries_for_library.length; i++){
            const boundary = boundaries_for_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y 
                        }
                    }
                })
            ){
               
                moving5 = false
                break
            }
        }

        //for leaving map 
        for (let i = 0; i < boundaries_for_leaving_library.length; i++){
            const boundary = boundaries_for_leaving_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ){
                //townBackground.position.y = -1000
                // town_movables.forEach(movable => {
                //     movable.position.y = -1000})
            
               
                moving5 = false
                
                window.cancelAnimationFrame(libaryAnimateId)
                animateTown()
                
               
                break
            }
        }

        if(moving5 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            library_moovables.forEach((movable) => {
            movable.position.x += 3})
        }
        
        
        //console.log(background.position.x)
    }else if(keys.d.pressed == true && lastKey == 'd') {

        player5.animate = true
        player5.image = player5.sprites.right
        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: OfficeGuyNPC,
            x: -3,
            y: 0
        })
            
        ){
            moving5 = false
            OfficeGuyNPC.animate = false
            OfficeGuyNPC.image = OfficeGuyNPC.sprites.left
        }
        for (let i = 0; i < boundaries_for_library.length; i++){
            const boundary = boundaries_for_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y 
                        }
                    }
                })
            ){
               
                moving5 = false
                break
            }
        }

        //for leaving map 
        for (let i = 0; i < boundaries_for_leaving_library.length; i++){
            const boundary = boundaries_for_leaving_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player5,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ){
                window.cancelAnimationFrame(libaryAnimateId)
                animateTown()
                moving5 = false
                break
            }
        }

        if(moving5 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            library_moovables.forEach((movable) => {
            movable.position.x -= 3})
        }
        
       
       // console.log(background.position.x)
    }

    // all npc's
    for (let i = 0; i < librainanBoundaries.length; i++){
        const boundary = librainanBoundaries[i]
        if(
            rectangularCollision({
                rectangle1: player5,
                //makes a clone of the boundary object 
                rectangle2: {
                    ...boundary, 
                    position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            }) && keys.e.pressed == true
        ){
            
            moving5 = false
            
            document.querySelector('#librainanNPCInterface').style.display = 'block'
           
            moving5 = false
            keys.w.pressed = false
            keys.s.pressed = false
            keys.a.pressed = false
            keys.d.pressed = false
            document.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) =>{
                    if(e.currentTarget.innerHTML == 'hey'){
                        
                        document.querySelector('#dialogueBoxForlibrainan').style.display = 'block'
                        document.querySelector('#dialogueBoxForlibrainan').innerHTML = 'hello! need a book'
                        document.querySelector('#dialogueBoxForlibrainan').addEventListener('click', (e) => {
                            e.currentTarget.style.display = 'none'
                        })
                        // this will run thee number of items to one so you get one item
                        
                        return
                    } 
                })
            })

            addEventListener('click', () =>{
                    
            })

        }
    }
}