


const offset5 = {
    x: -1700,
    y: -1700
}

const offset6 = {
    x: -2080,
    y: -2500
}

function changeOffSet(x1, y1){
    console.log(x1)
    offset5.x = x1
    offset5.y = y1
    console.log(offset5.x)
}


console.log(townEnmeny3)
const townBackgroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
townBackgroundImage.src = './res/maps/ice_town_map_final.png'
// player
const playerDownImage3 = new Image()
playerDownImage3.src = './res/playerRes/CDown2.png'
const playerUpImage3 = new Image()
playerUpImage3.src = './res/playerRes/CUp2.png'
const playerRightImage3 = new Image()
playerRightImage3.src = './res/playerRes/CRight2.png'
const playerLeftImage3 = new Image()
playerLeftImage3.src = './res/playerRes/CLeft2.png'
const playerIdleDownImage3 = new Image()
playerIdleDownImage3.src = './res/playerRes/CIdle.png'
const playerIdleUpImage3= new Image()
playerIdleUpImage3.src = './res/playerRes/CIdleUp.png'
const playerIdleLeftImage3= new Image()
playerIdleLeftImage3.src = './res/playerRes/playerIdleLeft.png'
const playerIdleRightImage3= new Image()
playerIdleRightImage3.src = './res/playerRes/playerIdleRight.png'
//enemy
const enemyDownImage1 = new Image()
// seting the image src to the image i want to use for the player
//playerDownImage2.src = './res/playerDown.png']
enemyDownImage1.src = './res/playerRes/EmDown.png'
const enemyUpImage1 = new Image()
enemyUpImage1.src = './res/playerRes/EmDown.png'
const enemyRightImage1 = new Image()
enemyRightImage1.src = './res/playerRes/EmDown.png'
const enemyLeftImage1 = new Image()
enemyLeftImage1.src = './res/playerRes/EmDown.png'

const townBattleZoneMap = []
for (let i = 0; i < townBattleZone.length; i+= 120){ 
    townBattleZoneMap.push(townBattleZone.slice(i, 120 + i ))
}
const townBattleZones = []
townBattleZoneMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 1){
            
            townBattleZones.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

const collisionMapTown = [] 
for (let i = 0; i < collision_for_town.length; i+= 120){ 
    
    collisionMapTown.push(collision_for_town.slice(i, 120 + i ))
    
}
const boundaries_for_town = []
collisionMapTown.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_town.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

const enterLibraryMap = []
for (let i = 0; i < enter_libary.length; i+= 120){ 
    
    enterLibraryMap.push(enter_libary.slice(i, 120 + i ))
    
}

const boundaries_for_entering_library = []
enterLibraryMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_library.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

//cafe start 
const enterCafeMap = []
for (let i = 0; i < enter_cafe.length; i+= 120){ 
    
    enterCafeMap.push(enter_cafe.slice(i, 120 + i ))
    
}

const boundaries_for_entering_cafe = []
enterCafeMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_cafe.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})
// cafe end 

// house start
const enterHouseMap = []
for (let i = 0; i < enter_house.length; i+= 120){ 
    
    enterHouseMap.push(enter_house.slice(i, 120 + i ))
    
}

const boundaries_for_entering_house = []
enterHouseMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_house.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})
//house end 

const townBackground = new Sprite({
    position: {
        x: offset5.x,
        y: offset5.y
    },
    // seting the battleBackground to the image above 
    image: townBackgroundImage
})

const townEnmeny1 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 100
    },
    image: enemyDownImage1,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage1,
        down: enemyDownImage1,
        left: enemyLeftImage1,
        right: enemyRightImage1
    }
})

const townEnmeny2 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 400
    },
    image: enemyDownImage1,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage1,
        down: enemyDownImage1,
        left: enemyLeftImage1,
        right: enemyRightImage1
    }
})

const player3 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: playerIdleDownImage3, 
    frames: {
        max: 6,
        hold: 6
    },
    
    sprites: {
        up: playerUpImage3,
        down: playerDownImage3,
        left: playerLeftImage3,
        right: playerRightImage3,
        idleDown: playerIdleDownImage3,
        idleUp: playerIdleUpImage3,
        idleRight: playerIdleRightImage3,
        idleLeft: playerIdleLeftImage3
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const PlayerDyingImage = new Image()
PlayerDyingImage.src = './res/playerRes/playerDying.png'
const player3Dying = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: PlayerDyingImage, 
    frames: {
        max: 10,
        hold: 6
    },
    
    sprites: {
        dying: PlayerDyingImage,
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})



const vertexFireBallImage = new Image()
vertexFireBallImage.src = './res/playerRes/vertexMagic.png'
const vertexFireBall = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2) 
    },
    image: vertexFireBallImage, 
    frames: {
        max: 8,
        hold: 4
    },
    sprites: {
        fireball: vertexFireBallImage
    }
})

const playerhitImage = new Image()
playerhitImage.src = './res/playerRes/hitdown.png'
const playerhitUpImage = new Image()
playerhitUpImage.src = './res/playerRes/hitUp.png'
const playerhitLeftImage = new Image()
playerhitLeftImage.src = './res/playerRes/hitLeft.png'
const playerhitRightImage = new Image()
playerhitRightImage.src = './res/playerRes/hitRight.png'
const playerHit = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    },
    image: playerhitImage, 
    frames: {
        max: 3,
        hold: 6
    },
    sprites: {
        playerhitDown: playerhitImage,
        playerHitUp: playerhitUpImage,
        playerHitLeft: playerhitLeftImage,
        playerHitRight: playerhitRightImage

    }
})
const spinMoveImage = new Image()
spinMoveImage.src = './res/playerRes/spinMove.png'

const spinMoveSprite = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 125, 
        y: (canvas.height / 2 - 68 / 2) - 125
    },
    image: spinMoveImage, 
    frames: {
        max: 8,
        hold: 4
    },
    sprites: {
        spinmove: spinMoveImage
    }
})

const playerARImage3 = new Image()
playerARImage3.src = './res/playerRes/playerAttackingRight.png'
const playerALImage3 = new Image()
playerALImage3.src = './res/playerRes/playerAttackingLeft.png'
const playerAUpImage3 = new Image()
playerAUpImage3.src = './res/playerRes/playerAttackingUp.png'
const playerADownImage3 = new Image()
playerADownImage3.src = './res/playerRes/playerAttackingDown.png'
const playerSwordRsprite = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2) -49
    },
    image: playerARImage3, 
    frames: {
        max: 6,
        hold: 10
    },
    sprites: {
        up: playerARImage3,
        down: playerARImage3,
        left: playerALImage3,
        right: playerARImage3
    }
})





const playerSwordLsprite = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 49, 
        y: (canvas.height / 2 - 68 / 2) -49
    },
    image: playerARImage3, 
    frames: {
        max: 6,
        hold: 10
    },
    sprites: {
        up: playerARImage3,
        down: playerARImage3,
        left: playerALImage3,
        right: playerARImage3
    }
})

const playerSwordUpsprite = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 49, 
        y: (canvas.height / 2 - 68 / 2) -49
    },
    image: playerAUpImage3, 
    frames: {
        max: 6,
        hold: 10
    },
    sprites: {
        up: playerAUpImage3,
        down: playerARImage3,
        left: playerALImage3,
        right: playerARImage3
    }
})

const playerSwordDownsprite = new Sprite2({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 49, 
        y: (canvas.height / 2 - 68 / 2) -49
    },
    image: playerADownImage3, 
    frames: {
        max: 6,
        hold: 10
    },
    sprites: {
        up: playerAUpImage3,
        down: playerADownImage3,
        left: playerALImage3,
        right: playerARImage3
    }
})
const playerSwordR = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 20, 
        y: (canvas.height / 2 - 68 / 2)
    }
})
const playerSwordRSpin = new Boundary8({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 50, 
        y: (canvas.height / 2 - 68 / 2)  - 50
    }
})

const playerSwordL = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 20, 
        y: (canvas.height / 2 - 68 / 2)
    }
})
const playerSwordLSpin = new Boundary8({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 50, 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})
const playerSwordD = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2) + 20
    }
})
const playerSwordDSpin = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2) + 50
    }
})
const playerSwordU = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 20
    }
})
const playerSwordUSpin = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})

const playerFireBall = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})



const battle2 = {
    initiated: false
}
let enemyStat3 = {
    ememyHealth: 25
}
let enemyStat4 = {
    ememyHealth: 25
}

let enemyStats = {
    ememyHealth: 25
}

let actionLockCounterCat = 0
let actionLockCounterCat2 = 0
let ALC1 = 0
let ALC2 = 0
let ALC3 = 0
let ALC4 = 0
let ALC5 = 0
let ALC6 = 0
let ALC7 = 0
let ALC8 = 0
let ALC9 = 0
let ALC10 = 0

let ALCShift = 0
let ALCShift2 = 0

let ALCControl = 0
let ALCControl2 = 0

let ALCFireBall = 0
let ALCFireBall2 = 0

let coolDownDone = false 
let shiftAllowed = false 
let spinMoveCoolDown = false

const town_movables = [vertexFireBall, playerFireBall, townEnmeny3, townEnmeny4, TestBoundary3, AreaBoundary3, StartingPoint3, TestBoundary4, AreaBoundary4, StartingPoint4, 
    ...townBattleZones, townEnmeny2, townEnmeny1, townBackground, ...boundaries_for_town, ...boundaries_for_entering_library, ...boundaries_for_entering_cafe, ...boundaries_for_entering_house]
const movable_enemy1 = [townEnmeny2, townEnmeny1,  townEnmeny4, TestBoundary3,  TestBoundary4, AreaBoundary4, StartingPoint4]
const movable_enemy2 = [ townEnmeny3,  TestBoundary3, AreaBoundary3, StartingPoint3,]
const movableFireBall = [playerFireBall, vertexFireBall]
function rectangularCollisionHouse({rectangle1, rectangle2}){
    //if the right side of the player is greater than the left side of the red block than they are colliding 
    
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
        
    
}
let leave_library_timer = 0
let actionLockCounter1 = 0
let actionLockCounter2 = 0
let townEnemyDead = false
let townEnemyDead2 = false
let townEnemyBeforeDeath = false
let townEnemyBeforeDeath2 = false
let runfire = false
let toggledFireBall = false
let toggledFireBallD = false
let toggledFireBallR = false
let toggledFireBallL = false
let toggledFireBallU = false

let leftDone = false
let rightDone = false
let upDone = false
let downDone = false
let isAttacking = false
let enemyIsAttacking = false
let playerWasHit = false

function animateTown(){
    const townAnimateId =  window.requestAnimationFrame(animateTown)
   
    
    townBackground.draw()
    townBattleZones.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_town.forEach((boundary) => {
        boundary.draw()
    })
    
    boundaries_for_entering_library.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_entering_cafe.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_entering_house.forEach((boundary) => {
        boundary.draw()
    })

    // this is for testing 
    //note draw the enemies after they player
    //townEnmeny1.drawAI()
    // townEnmeny2.drawAI()
    //player.drawAI()
    // AreaBoundary3.draw()
    //  TestBoundary3.draw()
    // StartingPoint3.draw()
    //townEnmeny3.draw()
    //spinMoveSprite.draw()
    // playerSwordU.draw()
    // playerSwordD.draw()
    // AreaBoundary4.draw()
    //  TestBoundary4.draw() 
    // StartingPoint4.draw()
    //townEnmeny4.draw()
    
    
    if(isAttacking == false && enemyIsAttacking == false && playerStats.playerHealth > 0){
        //console.log(enemyIsAttacking)
        
        player3.draw()
        
    }else if(enemyIsAttacking == true){
        if(player3.image == player3.sprites.down){
            playerHit.image = playerHit.sprites.playerhitDown
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.up){
            playerHit.image = playerHit.sprites.playerHitUp
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.left){
            playerHit.image = playerHit.sprites.playerHitLeft
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.right){
            playerHit.image = playerHit.sprites.playerHitRight
            playerHit.animate = true
            playerHit.update()
        }
    }
    // if(player3.image == player3.sprites.left &&isAttacking == false && enemyIsAttacking == false ){
    //     player3.image = player3.sprites.idleDown
    //     player3.animate = true
    //     player3.draw()
    // }

    // player3.drawAI()
    let moving3 = true
    let movingnpc_1 = true
    let movingEnemy = true
    let movingEnemy2 = true
    let firemoving = true
    

    player3.animate = false
    
    // if(lastKey == 'w' &&  keys.space.pressed == false){
    //     console.log('why not')
    //     player3.image = player3.sprites.idleUp
    //     player3.animate = true
    // }
    shiftAllowed = true

    //enemy attack system
        if(playerStats.playerHealth > 0){
            enemyAttackTown(player3, TestBoundary4, movingEnemy, townEnemyDead)
            enemyAttackTown(player3, TestBoundary3, movingEnemy2, townEnemyDead2)
        }
        
    

    //enemy movement
        const angleE1 = Math.atan2(player3.position.y - townEnmeny4.position.y, player3.position.x - townEnmeny4.position.x )
        const angleE12 = Math.atan2(StartingPoint4.position.y - townEnmeny4.position.y, StartingPoint4.position.x - townEnmeny4.position.x )
        const angleE3 = Math.atan2(player3.position.y - townEnmeny3.position.y, player3.position.x - townEnmeny3.position.x )
        const angleE32 = Math.atan2(StartingPoint3.position.y - townEnmeny3.position.y, StartingPoint3.position.x - townEnmeny3.position.x )
       
        movable_enemy1.forEach(move =>{
            if(townEnemyDead == false){
                enemyAITown(player3, townEnmeny4, TestBoundary4, AreaBoundary4, StartingPoint4, movingEnemy, angleE1, angleE12, 9, 0)
            }   
            
            //enemyAITown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, StartingPoint3, movingEnemy2, angleE3, angleE32)
        })
       

        movable_enemy2.forEach(move =>{
            
            if(townEnemyDead2 == false){
                enemyAITown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, StartingPoint3, movingEnemy2, angleE3, angleE32, 0, 9)
            }
        })
    // players attack 
        playerAttackTown(player3, townEnmeny4, TestBoundary4, AreaBoundary4, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy, enemyStat4, 
            playerSwordRsprite, playerSwordLsprite, playerSwordUpsprite, playerSwordDownsprite)
        
        playerAttackTown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy2, enemyStat3, playerSwordRsprite,
            playerSwordLsprite, playerSwordUpsprite, playerSwordDownsprite)
        playerAttackSpinTown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, playerSwordRSpin, playerSwordLSpin, playerSwordDSpin, playerSwordUSpin, movingEnemy2, enemyStat3, spinMoveSprite)
        playerAttackSpinTown(player3, townEnmeny4, TestBoundary4, AreaBoundary4, playerSwordRSpin, playerSwordLSpin, playerSwordDSpin, playerSwordUSpin, movingEnemy, enemyStat4, spinMoveSprite)
        
        

        openMenu()

        

        playerFireBallAttack(player3, playerFireBall, townEnmeny4, boundaries_for_town, enemyStat4, playerStats, firemoving, vertexFireBall)
        playerFireBallAttack(player3, playerFireBall, townEnmeny3, boundaries_for_town, enemyStat3, playerStats, firemoving, vertexFireBall)
       
        if(enemyStat4.ememyHealth <= 0 && townEnemyBeforeDeath == false){
            if(townEnmeny4.image = townEnmeny4.sprites.left){
                townEnmeny4.image = townEnmeny4.sprites.dyingLeft
            }
            if(townEnmeny4.image = townEnmeny4.sprites.right){
                townEnmeny4.image = townEnmeny4.sprites.dyingRight
            }
            townEnemyDead = true
            
            setTimeout(() => {
                playerStats.playerMoney = playerStats.playerMoney + 10
                document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
                townEnmeny4.position.x = 7000
                TestBoundary4.position.x = 7000
                AreaBoundary4.position.x = 7000
                console.log('enemy has died')
                townEnemyBeforeDeath = true
            }, 1000)
            
        }else if(playerStats.playerHealth <= 0)
        {   
            player3Dying.animate = true
            player3Dying.update()
            moving3 = false
            console.log('player has died')
            //window.cancelAnimationFrame(townAnimateId)
        }

        if(enemyStat3.ememyHealth <= 0 && townEnemyBeforeDeath2 == false){
            if(townEnmeny3.image = townEnmeny3.sprites.left){
                townEnmeny3.image = townEnmeny3.sprites.dyingLeft
            }
            if(townEnmeny3.image = townEnmeny3.sprites.right){
                townEnmeny3.image = townEnmeny3.sprites.dyingRight
            }
            
            townEnemyDead2 = true
            setTimeout(() => {
                playerStats.playerMoney = playerStats.playerMoney + 10
                document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
                townEnmeny3.position.x = 7000
                TestBoundary3.position.x = 7000
                AreaBoundary3.position.x = 7000
                console.log('enemy has died')
                townEnemyBeforeDeath2 = true
            }, 1000)
        }else if(playerStats.playerHealth <= 0 )
        {   
            player3Dying.animate = true
            player3Dying.update()
            moving3 = false
            console.log('player has died')
           // window.cancelAnimationFrame(townAnimateId)
        }


        ALCShift = ALCShift + 1
        if(ALCShift == 200){
            console.log(' spin is ready')
            coolDownDone = true
            ALCShift = 0
            
        }

    if(keys.w.pressed == false && keys.a.pressed == false &&
        keys.s.pressed == false && keys.d.pressed == false &&
        isAttacking == false && enemyIsAttacking == false && keys.space.pressed == false && 
        playerStats.playerHealth > 0 
        )
    {
            
            if(player3.image ==  player3.sprites.down && enemyIsAttacking == false){
                player3.image = player3.sprites.idleDown
            }else if(player3.image ==  player3.sprites.up){
                player3.image = player3.sprites.idleUp
            }else if(player3.image ==  player3.sprites.right){
                player3.image = player3.sprites.idleRight
            }else if(player3.image ==  player3.sprites.left){
                player3.image = player3.sprites.idleLeft
            }
            player3.animate = true
            player3.draw()
    }else if(enemyIsAttacking == true){
        console.log('whats up')
        if(player3.image == player3.sprites.down){
            playerHit.image = playerHit.sprites.playerhitDown
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.up){
            playerHit.image = playerHit.sprites.playerHitUp
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.left){
            playerHit.image = playerHit.sprites.playerHitLeft
            playerHit.animate = true
            playerHit.update()
        }
        if(player3.image == player3.sprites.right){
            playerHit.image = playerHit.sprites.playerHitRight
            playerHit.animate = true
            playerHit.update()
        }
    }
    //note draw the enemies after they player
    townEnmeny3.draw()
    townEnmeny4.draw()

    if(keys.w.pressed == true && lastKey == 'w') {
        
        player3.animate = true
        player3.image = player3.sprites.up
            
        if(rectangularCollision2({
            rectangle1: player3,
            //makes ad clone of the boundary object 
            rectangle2: townEnmeny1,
            x: 0,
            y: 3
        })
            
         ){
            moving3 = false
            
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                
                moving3 = false
                break
            }
        }
        
        for (let i = 0; i < boundaries_for_entering_library.length; i++){
            const boundary = boundaries_for_entering_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                window.cancelAnimationFrame(townAnimateId)
                
                moving3 = false
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    // this will repeat the opacity 3 times
                    repeat: 1,
                    // can this make the flashing smooth
                    yoyo: true,
                    duration: 0.4,
                    // this makes sure to that it ends on a black screen
                    onComplete(){
                        gsap.to('#overlappingDiv',{
                            opacity: 1, 
                            duration: 0.4,
                            onComplete(){
                                // this will run the animate battle function and the code below is needed
                                animateLibrary()
                                
                                gsap.to('#overlappingDiv',{
                                    // make sure that this is 0 in order to see battle image after flashing 
                                    opacity: 0, 
                                    duration: 0.4  
                                })
                                
                            }
                        })
                        
                        
                    }
                    
                
                })
                break
            }
        }

        // for entering library 
       

        // for entering cafe 
        for (let i = 0; i < boundaries_for_entering_cafe.length; i++){
            const boundary = boundaries_for_entering_cafe[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
                window.cancelAnimationFrame(townAnimateId)
                
                moving3 = false
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    // this will repeat the opacity 3 times
                    repeat: 1,
                    // can this make the flashing smooth
                    yoyo: true,
                    duration: 0.4,
                    // this makes sure to that it ends on a black screen
                    onComplete(){
                        gsap.to('#overlappingDiv',{
                            opacity: 1, 
                            duration: 0.4,
                            onComplete(){
                                // this will run the animate battle function and the code below is needed
                                animateCoffeeShop()
                                
                                gsap.to('#overlappingDiv',{
                                    // make sure that this is 0 in order to see battle image after flashing 
                                    opacity: 0, 
                                    duration: 0.4  
                                })
                                
                            }
                        })
                        
                        
                    }
                    
                
                })
                break
            }
        }

        // entering house 
        for (let i = 0; i < boundaries_for_entering_house.length; i++){
            const boundary = boundaries_for_entering_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
                window.cancelAnimationFrame(townAnimateId)
                moving3 = false
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    // this will repeat the opacity 3 times
                    repeat: 1,
                    // can this make the flashing smooth
                    yoyo: true,
                    duration: 0.4,
                    // this makes sure to that it ends on a black screen
                    onComplete(){
                        gsap.to('#overlappingDiv',{
                            opacity: 1, 
                            duration: 0.4,
                            onComplete(){
                                // this will run the animate battle function and the code below is needed
                                animatehouse()
                                
                                gsap.to('#overlappingDiv',{
                                    // make sure that this is 0 in order to see battle image after flashing 
                                    opacity: 0, 
                                    duration: 0.4  
                                })
                                
                            }
                        })
                        
                        
                    }
                    
                
                })
                
                break
            }
        }
        
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 80
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.y += 9
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.y += 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.y += 3})
            }
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            
        //console.log(background.position.y)
        }
        keys.shift.pressed = false
                
        
    }else if (keys.s.pressed == true && lastKey == 's') {
        player3.animate = true
        player3.image = player3.sprites.down
        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1,
            x: 0,
            y: -3
        })
            
         ){
            moving3 = false
            movingnpc_1 == false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }

        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 80
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.y -= 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.y -= 3})
                }
                
                    
            }else{
                //console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.y -= 3})
            }
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            
        //console.log(background.position.y)
        }
        keys.shift.pressed = false
        
    }else if(keys.a.pressed == true && lastKey == 'a') {
        
        player3.animate = true
        player3.image = player3.sprites.left
        if( rectangularCollisionHouse({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1
            })
            
         ){
            moving3 = false
            town_movables.forEach(movable => {
                movable.position.x -= 1})
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }
        // moving is true run the lines of code below
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 80,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.x += 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.x += 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.x += 3})
            }
        }
        
        keys.shift.pressed = false
        //console.log(background.position.x)
    }else if(keys.d.pressed == true && lastKey == 'd') {
        player3.animate = true
        player3.image = player3.sprites.right
        if( rectangularCollisionHouse({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1
            })
            
         ){
            moving3 = false
            town_movables.forEach(movable => {
                movable.position.x += 3})
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }
        // moving is true run the lines of code below
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 80,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.x -= 80
                            
                        })
                        // if you want a transition 
                       // setTimeout(diftTimer, 2000)
                        coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.x -= 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.x -= 3})
            }
        }
        
        keys.shift.pressed = false
        
       
       // console.log(background.position.x)
    }

    movable_enemy1.forEach(movable_enemy => {
        //movable_boss.position.x += .4
        actionLockCounter1 = actionLockCounter1 + 1
        if(actionLockCounter1 == 50 )
        {
            if(actionLockCounter2 <= 19 ){
                
                    
                 
                // townEnmeny1.image = townEnmeny1.sprites.right
                // townEnmeny1.animate = true
                // townEnmeny1.position.x += 5
                // town Emeny 2
                townEnmeny2.image = townEnmeny2.sprites.right
                townEnmeny2.animate = true
                townEnmeny2.position.x += 5
                actionLockCounter2 = actionLockCounter2+ 1
                    
            }else if(actionLockCounter2 > 19 &&  actionLockCounter2 <= 39 ){
                

                
             
                        // townEnmeny1.image = townEnmeny1.sprites.left
                        // townEnmeny1.animate = true
                        // townEnmeny1.position.x -= 5
                // town emeny 2
                        townEnmeny2.image = townEnmeny2.sprites.left
                        townEnmeny2.animate = true
                        townEnmeny2.position.x -= 5
                actionLockCounter2 = actionLockCounter2 + 1
                    
                
            }else{
                    
                    townEnmeny1.position.x -= 12
                    actionLockCounter2 = 0
                 }
                
            
            actionLockCounter1 = 0
        } 
        // use this for small enemies not for boss
        //startBattle2(player3, townEnmeny1, 'coffee', townAnimateId, true)
        
        

    })

    // if(lastKey == 's' &&  keys.space.pressed == false &&){
    //     console.log('why not')
    //     player3.image = player3.sprites.idleDown
    //     player3.animate = true
    // }


}
//c.clearRect(0, 0, canvas.width, canvas.height)
//so whenever a key is pushed down than it will call what ever is in the () => {
// part of the code also in the (e) basicallly adding an event object 
// window.addEventListener('keydown', (e) => {
//     //console.log(e.key)
//     // making an switch case statment 
//     switch(e.key){
//         case 'w':
//             // so when w is pressed it will set our keys const w to true instead of being false
//             keys.w.pressed = true
//             lastKey = 'w'
//             console.log('w pressed')
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             break
//         case 's':
//             keys.s.pressed = true
//             lastKey = 's'
//             break  
//         case 'f':
//             // we dont need to have lastkey for f becauses
//             keys.f.pressed = true
//             lastKey = 'f'
//             break     
//         case 'q':
//             // we dont need to have lastkey for f becauses
//             keys.q.pressed = true
            
//             break
//         case 'e':
//             // we dont need to have lastkey for f becauses
//             keys.e.pressed = true
//             keys.q.pressed = false
//             if(gamePaused == true){
//                 //window.cancelAnimationFrame(animationId)
//                 animate()
//                 gamePaused = false
//             }    
//             break  
//         case 'r':
//             keys.r.pressed = true
//             keys.f.pressed = false     
//     }
// })

// //this will listen for when the key is up and will set the keys const statement above to false
// window.addEventListener('keyup', (e) => {
//     //console.log(e.key)
//     // making an switch case statment 
//     switch(e.key){
//         case 'w':
//             // so when w is pressed it will set our keys const w back to false 
//             keys.w.pressed = false
//             console.log('w lifted')
//             break
//         case 'a':
//             keys.a.pressed = false
//             break
//         case 'd':
//             keys.d.pressed = false
//             break
//         case 's':
//             keys.s.pressed = false
//             break
//         case 'f':
//             //keys.f.pressed = false
//             break     
//         case 'q':
            
//             break     
//     }
// })



function enemyAttackTown(player, testBoundary, moving, enemyDead){
   

    if(rectangularCollision2({
        rectangle1: player,
        //makes a clone of the boundary object 
        rectangle2: testBoundary,
        x: 0,
        y: 0
    }) && enemyDead == false)
    {
        moving = false
        
        //console.log('player hit')
        
        ALC3 = ALC3 + 1
        if(ALC3 == 100 ){
            
            if(ALC4  <= 1000 ){
                enemyIsAttacking = true
                ALC4 = ALC4 + 1
            }else{
                ALC4 = 0
            } 
            ALC3 = 0
        }

        if(enemyIsAttacking == true){
            
            //testBoundary.draw()
            console.log('player was attacked')
            playerStats.playerHealth = playerStats.playerHealth - .5
            document.querySelector('#pHealth').innerHTML = 'Health Level: ' + playerStats.playerHealth
            console.log(playerStats.playerHealth)
            if(player.image == player.sprites.down || player.image == player.sprites.idleDown){
                playerHit.image = playerHit.sprites.playerhitDown
                playerHit.animate = true
                playerHit.update()
            }
            if(player.image == player.sprites.up || player.image == player.sprites.idleUp){
                playerHit.image = playerHit.sprites.playerHitUp
                playerHit.animate = true
                playerHit.update()
            }
            if(player.image == player.sprites.left || player.image == player.sprites.idleLeft){
                playerHit.image = playerHit.sprites.playerHitLeft
                playerHit.animate = true
                playerHit.update()
            }
            if(player.image == player.sprites.right || player.image == player.sprites.idleRight){
                playerHit.image = playerHit.sprites.playerHitRight
                playerHit.animate = true
                playerHit.update()
            }
            setTimeout(() => {
                
                enemyIsAttacking = false
            }, 500)
        }{
            
        }
         
    }else{
        
    }
}

function diftTimer(){
    console.log('player is difting for this amount of time')
    coolDownDone = false
}

function playerFireBallAttack(player, playerFireBall, enemy, 
    boundaries, enemyStats, playerStats, firemoving, fireball){
        
    if(keys.f.pressed == true ){
        //playerFireBall.position.y = player.position.y
        //playerFireBall.position.x = player.position.x  
        if(player.image == player.sprites.left && rightDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25 ||
            player.image == player.sprites.idleLeft && rightDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25) {
            toggledFireBallL = true
            leftDone = true
            //console.log('go to go')
            
        }else if(player.image == player.sprites.right && leftDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25 ||
                player.image == player.sprites.idleRight && leftDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25){
            
            toggledFireBallR = true
            rightDone = true
            console.log('go to go')
        }else if(player.image == player.sprites.up && upDone == false && leftDone == false && rightDone == false && downDone == false && playerStats.playerMagic > 25 ||
                player.image == player.sprites.idleUp && upDone == false && leftDone == false && rightDone == false && downDone == false && playerStats.playerMagic > 25 ){
            
            toggledFireBallU = true
            upDone = true
        }else if(player.image == player.sprites.down && downDone == false && leftDone == false && rightDone == false && playerStats.playerMagic > 25 ||
            player.image == player.sprites.idleDown && downDone == false && leftDone == false && rightDone == false && playerStats.playerMagic > 25 ){
            toggledFireBallD = true
            downDone = true
        }
        
        if(toggledFireBallL == true && leftDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                
                
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                fireball.position.x = enemy.position.x - 25
                fireball.position.y = enemy.position.y - 25
                enemyStats.ememyHealth = enemyStats.ememyHealth - .1
                console.log(enemyStats.ememyHealth)
                firemoving = false
             }
            
             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x - 6,
                                y: boundary.position.y 
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }   
            
            if(firemoving == true){
                playerFireBall.draw()
                fireball.image = fireball.sprites.fireball
                fireball.animate = true
                fireball.update()
                fireball.position.x -=6
                playerFireBall.position.x -= 6
                
            }
            
        }else if(toggledFireBallR == true && rightDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                fireball.position.x = enemy.position.x - 25
                fireball.position.y = enemy.position.y - 25
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
             }

             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x + 6,
                                y: boundary.position.y 
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                fireball.image = fireball.sprites.fireball
                fireball.animate = true
                fireball.update()
                fireball.position.x +=6
                playerFireBall.position.x += 6
            }
            
        }else if (toggledFireBallU == true && upDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
            ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                fireball.position.x = enemy.position.x -25
                fireball.position.y = enemy.position.y - 25
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
            }
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - 6
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                fireball.image = fireball.sprites.fireball
                fireball.animate = true
                fireball.update()
                fireball.position.y -= 6
                playerFireBall.position.y -= 6
            }

            
            
        }else if (toggledFireBallD == true && downDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                fireball.position.x = enemy.position.x - 25
                fireball.position.y = enemy.position.y - 25
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
                
             }
             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + 6
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                fireball.image = fireball.sprites.fireball
                fireball.animate = true
                fireball.update()
                fireball.position.y +=6
                playerFireBall.position.y += 6
            }
            
        }
       
        setTimeout(() => {
            toggledFireBallL = false
            leftDone = false
            
            toggledFireBallR = false
            rightDone = false

            toggledFireBallU = false
            upDone = false

            toggledFireBallD = false
            downDone = false
            keys.f.pressed = false
        }, 2000)

    }else if (keys.f.pressed == false){
       
        playerFireBall.position.y = player.position.y
        playerFireBall.position.x = player.position.x
        fireball.position.y = player.position.y - 25
        fireball.position.x = player.position.x - 25
    }
}

function throwFire(){
    console.log('rev')
    //console.log(keys.f.pressed)
    toggledFireBallL = false
    leftDone = false

    toggledFireBallR = false
    rightDone = false

    toggledFireBallU = false
    upDone = false

    toggledFireBallD = false
    downDone = false
    keys.f.pressed = false
    
    //playerFireBall.position.y = player3.position.y
    //playerFireBall.position.x = player3.position.x
    //console.log(keys.f.pressed)
}

function enemyAITown(player, enemy, testBoundary, areaBoundary, enemystartingpoint, moving, angle, angle2, moveX, moveY){
    ALC1 = ALC1 + 1;

            if(ALC1 == 50 ){
                
                if(ALC2  <= 9 && moving == true){
                    
                    if(rectangularCollision2({
                        rectangle1: player,
                        //makes a clone of the boundary object 
                        rectangle2: areaBoundary,
                        x: 0,
                        y: 0
                    }))
                    {
                        if(rectangularCollision2({
                            rectangle1: player,
                            //makes a clone of the boundary object 
                            rectangle2: testBoundary,
                            x: 0,
                            y: 0
                        }) == false)
                        {
                            if(angle >= 1.7 && angle < 3.2)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                                enemy.position.x -= angle
                                enemy.position.y += angle
                                //attack 
                                testBoundary.position.x -= angle
                                testBoundary.position.y += angle
                            
                                //area to start following player
                                areaBoundary.position.x -= angle
                                areaBoundary.position.y += angle
                                
                                console.log('on  3')
                            }else if(angle <= -1 && angle < -1.7)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                                enemy.position.x += angle
                                enemy.position.y += angle
                                // attack
                                testBoundary.position.x += angle
                                testBoundary.position.y += angle
                                //area
                                areaBoundary.position.x += angle
                                areaBoundary.position.y += angle
                                console.log('on  2')
                            }
                            if(angle >= -1.7 && angle < -.01)
                            {
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                                console.log('on  1')
                                enemy.position.x -= angle - 3
                                enemy.position.y += angle 
                                //attack 
                                testBoundary.position.x -= angle - 3
                                testBoundary.position.y += angle
                                // area
                                areaBoundary.position.x -= angle - 3
                                areaBoundary.position.y += angle
                            }else if(angle >= -.01 && angle < 1.7){
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                                enemy.position.x += angle + 2
                                enemy.position.y += angle + 2
                                //attack
                                testBoundary.position.x += angle + 2
                                testBoundary.position.y += angle + 2
                                // area
                                areaBoundary.position.x += angle + 2
                                areaBoundary.position.y += angle + 2

                                console.log('on  4')
                            }
                        }else{
                            if(angle >= 1.7 && angle < 3.2)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                            }else if(angle <= -1 && angle < -1.7)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                            }
                            if(angle >= -1.7 && angle < -.01)
                            {
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                            }else if(angle >= -.01 && angle < 1.7){
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                            }
                        }
                        //for the starting point
                    }else if(rectangularCollision2({
                        rectangle1: enemystartingpoint,
                        //makes a clone of the boundary object 
                        rectangle2: enemy,
                        x: 0,
                        y: 0
                    }) == false)
                    {
                        if(angle2 >= 1.7 && angle2 < 3.2)
                        {
                            enemy.image = enemy.sprites.left
                            enemy.animate = true
                            enemy.position.x -= angle2
                            enemy.position.y += angle2
                            //attack 
                             testBoundary.position.x -= angle2
                             testBoundary.position.y += angle2
                        
                            //area to start following player
                            areaBoundary.position.x -= angle2
                            areaBoundary.position.y += angle2
                            console.log('on  3')
                        }else if(angle2 <= -1 && angle2 < -1.7)
                        {
                            enemy.image = enemy.sprites.left
                            enemy.animate = true
                            enemy.position.x += angle2
                            enemy.position.y += angle2
                            // attack
                             testBoundary.position.x += angle2
                             testBoundary.position.y += angle2
                            //area
                            areaBoundary.position.x += angle2
                            areaBoundary.position.y += angle2
                            console.log('on  2')
                        }
                        if(angle2 >= -1.7 && angle2 < -.01)
                        {
                            enemy.image = enemy.sprites.right
                            enemy.animate = true
                            console.log('on  1')
                            enemy.position.x -= angle2 - 3
                            enemy.position.y += angle2 
                            //attack 
                             testBoundary.position.x -= angle2 - 3
                             testBoundary.position.y += angle2
                            // area
                            areaBoundary.position.x -= angle2 - 3
                            areaBoundary.position.y += angle2
                        }else if(angle2 >= -.01 && angle2 < 1.7){
                            enemy.image = enemy.sprites.right
                            enemy.animate = true
                            enemy.position.x += angle2 + 2
                            enemy.position.y += angle2 + 2
                            //attack
                             testBoundary.position.x += angle2 + 2
                             testBoundary.position.y += angle2 + 2
                            // area
                            areaBoundary.position.x += angle2 + 2
                            areaBoundary.position.y += angle2 + 2

                            console.log('on  4')
                        }
                    }else if(
                        rectangularCollision2({
                            rectangle1: enemystartingpoint,
                            //makes a clone of the boundary object 
                            rectangle2: enemy,
                            x: 0,
                            y: 0
                        })
                    ){
                        enemy.image = enemy.sprites.right 
                        enemy.animate = true
                        enemy.position.x += moveX
                        testBoundary.position.x += moveX
                        areaBoundary.position.x += moveX
                        enemy.position.y += moveY
                        testBoundary.position.y += moveY
                        areaBoundary.position.y += moveY
                            
                    }
                    
                    
                    
                    //  testBoundary.position.x -= 12
                    //areaBoundary.position.x -= 12
                    // catTestBoundary3.position.x -= 12
                    // catTestBoundary4.position.x -= 12
                    // catTestBoundary5.position.x -= 12
                    
                    ALC2 = ALC2 + 1
                }else if(ALC2 > 9 &&  ALC2 <= 19 && moving == true){
                    // this gets the bottom left corner
                    // if(angle < -2){
                    //     enemy.position.x += angle
                    // }else if(angle >= 0){
                    //     enemy.position.y += angle
                    // }else if(angle > 0 ){
                    //     enemy.position.y -= angle
                    // }
                    if(rectangularCollision2({
                        rectangle1: player,
                        //makes a clone of the boundary object 
                        rectangle2: areaBoundary,
                        x: 0,
                        y: 0
                    }))
                    {
                        if(rectangularCollision2({
                            rectangle1: player,
                            //makes a clone of the boundary object 
                            rectangle2: testBoundary,
                            x: 0,
                            y: 0
                        }) == false)
                        {
                            if(angle >= 1.7 && angle < 3.2)
                            {
                                enemy.position.x -= angle
                                enemy.position.y += angle
                                //attack 
                                testBoundary.position.x -= angle
                                testBoundary.position.y += angle
                            
                                //area to start following player
                                areaBoundary.position.x -= angle
                                areaBoundary.position.y += angle
                                //console.log('on  3')
                            }else if(angle <= -1 && angle < -1.7)
                            {
                                enemy.position.x += angle
                                enemy.position.y += angle
                                // attack
                                testBoundary.position.x += angle
                                testBoundary.position.y += angle
                                //area
                                areaBoundary.position.x += angle
                                areaBoundary.position.y += angle
                            // console.log('on  2')
                            }
                            if(angle >= -1.7 && angle < -.01)
                            {
                                //console.log('on  1')
                                enemy.position.x -= angle - 3
                                enemy.position.y += angle 
                                //attack 
                                testBoundary.position.x -= angle - 3
                                testBoundary.position.y += angle
                                // area
                                areaBoundary.position.x -= angle - 3
                                areaBoundary.position.y += angle
                            }else if(angle >= -.01 && angle < 1.7){
                                enemy.position.x += angle + 2
                                enemy.position.y += angle + 2
                                //attack
                                testBoundary.position.x += angle + 2
                                testBoundary.position.y += angle + 2
                                // area
                                areaBoundary.position.x += angle + 2
                                areaBoundary.position.y += angle + 2

                            // console.log('on  4')
                            }
                        }else{
                            if(angle >= 1.7 && angle < 3.2)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                            }else if(angle <= -1 && angle < -1.7)
                            {
                                enemy.image = enemy.sprites.left
                                enemy.animate = true
                            }
                            if(angle >= -1.7 && angle < -.01)
                            {
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                            }else if(angle >= -.01 && angle < 1.7){
                                enemy.image = enemy.sprites.right
                                enemy.animate = true
                            }
                        }
                    }else if(rectangularCollision2({
                        rectangle1: enemystartingpoint,
                        //makes a clone of the boundary object 
                        rectangle2: enemy,
                        x: 0,
                        y: 0
                    }) == false)
                    {
                        if(angle2 >= 1.7 && angle2 < 3.2)
                        {
                            enemy.position.x -= angle2
                            enemy.position.y += angle2
                            //attack 
                             testBoundary.position.x -= angle2
                             testBoundary.position.y += angle2
                        
                            //area to start following player
                            areaBoundary.position.x -= angle2
                            areaBoundary.position.y += angle2
                           // console.log('on  3')
                        }else if(angle2 <= -1 && angle2 < -1.7)
                        {
                            enemy.position.x += angle2
                            enemy.position.y += angle2
                            // attack
                             testBoundary.position.x += angle2
                             testBoundary.position.y += angle2
                            //area
                            areaBoundary.position.x += angle2
                            areaBoundary.position.y += angle2
                            //console.log('on  2')
                        }
                        if(angle2 >= -1.7 && angle2 < -.01)
                        {
                            //console.log('on  1')
                            enemy.position.x -= angle2 - 3
                            enemy.position.y += angle2 
                            //attack 
                             testBoundary.position.x -= angle2 - 3
                             testBoundary.position.y += angle2
                            // area
                            areaBoundary.position.x -= angle2 - 3
                            areaBoundary.position.y += angle2
                        }else if(angle2 >= -.01 && angle2 < 1.7){
                            enemy.position.x += angle2 + 2
                            enemy.position.y += angle2 + 2
                            //attack
                             testBoundary.position.x += angle2 + 2
                             testBoundary.position.y += angle2 + 2
                            // area
                            areaBoundary.position.x += angle2 + 2
                            areaBoundary.position.y += angle2 + 2

                           // console.log('on  4')
                        }
                    }else if(
                        rectangularCollision2({
                            rectangle1: enemystartingpoint,
                            //makes a clone of the boundary object 
                            rectangle2: enemy,
                            x: 0,
                            y: 0
                        })
                    ){
                        enemy.image = enemy.sprites.left  
                        enemy.animate = true
                        enemy.position.x -= moveX
                        testBoundary.position.x -= moveX
                        areaBoundary.position.x -= moveX
                        enemy.position.y -= moveY
                        testBoundary.position.y -= moveY
                        areaBoundary.position.y -= moveY
                            
                    }
                    ALC2 = ALC2 + 1
                }else{
                    
                    ALC2 = 0
                }
                ALC1 = 0
            }
}

function playerAttackTown(player, enemy, enmeySword, enemyArea, playerSwordR, playerSwordL, playerSwordD, playerSwordU, moving, enemyStat, playerRightSwordSprite,
    playerLeftSwordSprite, playerUpSwordSprite, playerDownSwordSprite){
    if(keys.space.pressed == true && enemyIsAttacking == false){
        isAttacking = true
        // note we need to change some things 
        console.log(playerRightSwordSprite.frameCurrent)
        
        if(player.image == player.sprites.right || player.image == player.sprites.idleRight){
            //playerSwordR.draw()

            playerRightSwordSprite.animate = true
            playerRightSwordSprite.image = playerRightSwordSprite.sprites.up
            playerRightSwordSprite.update()
            //playerRightSwordSprite.drawAI()

            console.log('hit right ')
            if(rectangularCollision2({
                rectangle1: playerSwordR,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){       


                        if(moving == true){
                            enemy.image = enemy.sprites.hitRight
                            enemy.position.x += 4
                            enmeySword.position.x += 4
                            enemyArea.position.x += 4
                            enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                            console.log('enemy health')
                            console.log(enemyStat.ememyHealth)   
                        }
                        
                
                }
                if(playerRightSwordSprite.image = playerRightSwordSprite.sprites.right && playerRightSwordSprite.frameCurrent <  playerRightSwordSprite.frames.max ){ 
                    console.log('crazy')
                    return
                }else{
                    playerRightSwordSprite.frameCurrent = 0
                    console.log('22crazy')
                    keys.space.pressed = false
                }
                
            
            
        }
        if(player.image == player.sprites.left || player.image == player.sprites.idleLeft){
            //playerSwordL.draw()
            playerLeftSwordSprite.animate = true
            playerLeftSwordSprite.image = playerLeftSwordSprite.sprites.left
            playerLeftSwordSprite.update()
            if(rectangularCollision2({
                rectangle1: playerSwordL,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                console.log('hit left ')
                //note to self this makes the cat move towards the right away from the player like link between worlds
                //note this then makes the the console log hit or go 4 to 5 times which should help with the rest of the stuff also create collsion for cat and boundies
                    if(moving == true){
                        
                        enemy.image = enemy.sprites.hitRight
                        enemy.position.x -= 4
                        enmeySword.position.x -= 4
                        enemyArea.position.x -= 4
                        enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                        console.log('enemy health')
                            console.log(enemyStat.ememyHealth)  
                    }
                        
            }

            if( playerLeftSwordSprite.frameCurrent <  playerLeftSwordSprite.frames.max){ 
                console.log('crazy')
                return
            }else{
                playerLeftSwordSprite.frameCurrent = 0
                console.log('22crazy')
                keys.space.pressed = false
            }   
            
            
        }
        if(player.image == player.sprites.up || player.image == player.sprites.idleUp){
            //playerSwordU.draw()
            playerUpSwordSprite.animate = true
            playerUpSwordSprite.image = playerUpSwordSprite.sprites.up
            playerUpSwordSprite.update()
            console.log('hit up ')
            if(rectangularCollision2({
                rectangle1: playerSwordU,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                console.log('hit up ')
                if(moving == true){
                    if(enemy.image = enemy.sprites.Left){
                        enemy.image = enemy.sprites.hitLeft
                    }
                    if(enemy.image = enemy.sprites.right){
                        enemy.image = enemy.sprites.hitRight
                    }
                    enemy.position.y -= 4
                    enmeySword.position.y -= 4
                    enemyArea.position.y -= 4
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    
                    
                    console.log('enemy health')
                            console.log(enemyStat.ememyHealth) 
                }
                    
            }
            if( playerUpSwordSprite.frameCurrent <  playerUpSwordSprite.frames.max){ 
                console.log('crazy')
                return
            }else{
                playerUpSwordSprite.frameCurrent = 0
                console.log('22crazy')
                keys.space.pressed = false
            }  
        }
        if(player.image == player.sprites.down || player.image == player.sprites.idleDown  ){
            //playerSwordD.draw()
            playerDownSwordSprite.animate = true
            playerDownSwordSprite.image = playerDownSwordSprite.sprites.down
            playerDownSwordSprite.update()
            if(rectangularCollision2({
                rectangle1: playerSwordD,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                
                if(moving == true){
                    if(enemy.image = enemy.sprites.Left){
                        enemy.image = enemy.sprites.hitLeft
                    }
                    if(enemy.image = enemy.sprites.right){
                        enemy.image = enemy.sprites.hitRight
                    }
                    enemy.position.y += 4
                    enmeySword.position.y += 4
                    enemyArea.position.y += 4
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    console.log('enemy health')
                            console.log(enemyStat.ememyHealth) 
                }
        
            }

            if( playerDownSwordSprite.frameCurrent <  playerUpSwordSprite.frames.max){ 
                console.log('crazy')
                return
            }else{
                playerDownSwordSprite.frameCurrent = 0
                console.log('22crazy')
                keys.space.pressed = false
            } 
        }
    

    }else{
        isAttacking = false
        // if(lastKey == 's' ){
        //     player.draw()
        //     console.log('why not')
        //     player.image = player.sprites.idleDown
        //     player.animate = true
        // }
    }
}

function playerAttackSpinTown(player, enemy, enmeySword, enemyArea, playerSwordR, playerSwordL, playerSwordD, playerSwordU, moving, enemyStat, spinMoveSprite){
    ALCControl = ALCControl + 1
    
    //console.log(ALCControl)
    if(ALCControl == 500){
        
        spinMoveCoolDown = true
        ALCControl = 0

    }
    if(spinMoveCoolDown == true && playerStats.playerEnergy > 40){
        // this will tell the player that spin move is ready
        // spinMoveSprite.animate = true
        // spinMoveSprite.update()
    }
    if(keys.control.pressed == true && spinMoveCoolDown == true && playerStats.playerEnergy > 40){
        // note we need to change some things 
        spinMoveSprite.animate = true
        spinMoveSprite.update()

        playerStats.playerEnergy = playerStats.playerEnergy - 1
        document.querySelector('#pEnergy').innerHTML = 'Enegry Level: ' + playerStats.playerEnergy
            //playerSwordR.draw()
            const angle = Math.atan2(enemy.position.y - player.position.y, enemy.position.x - player.position.x )
            if(rectangularCollision2({
                rectangle1: playerSwordR,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){       
                        if(moving == true){
                            enemy.image = enemy.sprites.hitLeft
                            console.log('right was hit ')
                            enemy.position.x += angle + 20
                            enmeySword.position.x += angle + 20
                           enemyArea.position.x += angle + 20
                            enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                            console.log('enemy health')
                            console.log(enemyStat.ememyHealth)   
                        }
                        
                
                }
            
            
        
        
            //playerSwordL.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordL,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                //note to self this makes the cat move towards the right away from the player like link between worlds
                //note this then makes the the console log hit or go 4 to 5 times which should help with the rest of the stuff also create collsion for cat and boundies
                    if(moving == true){
                        enemy.image = enemy.sprites.hitRight
                        console.log('l was hit ')
                        enemy.position.x -= angle + 20
                        enmeySword.position.x -= angle + 20
                       enemyArea.position.x -= angle + 20
                        enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                        console.log('enemy health')
                            console.log(enemyStat.ememyHealth)  
                    }   
                        
                }

                
            
            
        
        
            //playerSwordU.draw()
            
            if(rectangularCollision2({
                rectangle1: playerSwordU,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                if(moving == true){
                    console.log('up was hit ')
                    enemy.image = enemy.sprites.hitRight
                    enemy.position.y -= angle + 20
                    enmeySword.position.y -= angle + 20
                   enemyArea.position.y -= angle + 20
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                    
                    
                    
                            
                }
                    
            }
        
        
            //playerSwordD.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordD,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                
                if(moving == true){
                   
                    console.log('d was hit ')
                    enemy.image = enemy.sprites.hitLeft
                    enemy.position.y += angle + 20
                    enmeySword.position.y += angle + 20
                   enemyArea.position.y += angle + 20
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    
                }
        
            }
            // setTimeout(spinMoveTimer, 2000)
            setTimeout(() => {
                keys.control.pressed = false
                spinMoveCoolDown = false
            }, 2000)
            console.log('nko)')
            //spinMoveCoolDown = false
            
    }else if(keys.control.pressed == true && spinMoveCoolDown == false){
        keys.control.pressed = false
    }
    
    //spinMoveCoolDown = false
}

function spinMoveTimer(){
    console.log('freak')
    spinMoveCoolDown = false
}