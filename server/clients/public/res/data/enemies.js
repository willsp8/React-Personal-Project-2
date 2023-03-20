let playerStats = {
    playerHealth: 100,
    playerMagic: 1000,
    playerEnergy: 1000,
    playerMoney: 400,
    playerCoffee: 1,
    playerGreenTea: 2,
    catTreats: 2
}





const enemyDownImage2 = new Image()
// seting the image src to the image i want to use for the player
//playerDownImage2.src = './res/playerDown.png']
enemyDownImage2.src = './res/playerRes/EmDown.png'
const enemyUpImage2 = new Image()
enemyUpImage2.src = './res/playerRes/EmUp.png'
const enemyRightImage2 = new Image()
enemyRightImage2.src = './res/playerRes/enemyRight.png'
const enemyLeftImage2 = new Image()
enemyLeftImage2.src = './res/playerRes/enemyLeft.png'
const enemyHitLeftImage2 = new Image()
enemyHitLeftImage2.src = './res/playerRes/enemyHitLeft.png'
const enemyHitRightImage2 = new Image()
enemyHitRightImage2.src = './res/playerRes/enemyHitRight.png'
const enemyDyingLeftImage2 = new Image()
enemyDyingLeftImage2.src = './res/playerRes/enemyDyingLeft.png'
const enemyDyingRightImage2 = new Image()
enemyDyingRightImage2.src = './res/playerRes/enemyDyingRight.png'
const townEnmeny3 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 500
    },
    image: enemyLeftImage2,
    frames: {
        max: 6,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage2,
        down: enemyDownImage2,
        left: enemyLeftImage2,
        right: enemyRightImage2,
        hitLeft: enemyHitLeftImage2,
        hitRight: enemyHitRightImage2,
        dyingLeft: enemyDyingLeftImage2, 
        dyingRight: enemyDyingRightImage2
    }
})



const TestBoundary3 = new Boundary3({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 495, 
        y: (canvas.height / 2 - 68 / 2) + 500
    }
})

const AreaBoundary3 = new Boundary6({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 625, 
        y: (canvas.height / 2 - 68 / 2) + 400
    }
})

const StartingPoint3 = new Boundary7({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 650, 
        y: (canvas.height / 2 - 68 / 2) + 500
    }
})

const townEnmeny4 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 200
    },
    image: enemyLeftImage2,
    frames: {
        max: 6,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage2,
        down: enemyDownImage2,
        left: enemyLeftImage2,
        right: enemyRightImage2,
        hitLeft: enemyHitLeftImage2,
        hitRight: enemyHitRightImage2, 
        dyingLeft: enemyDyingLeftImage2,
        dyingRight: enemyDyingRightImage2
    }
})

const TestBoundary4 = new Boundary3({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 495, 
        y: (canvas.height / 2 - 68 / 2) + 200
    }
})

const AreaBoundary4 = new Boundary6({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 625,
        y: (canvas.height / 2 - 68 / 2) + 95
    }
})

const StartingPoint4 = new Boundary7({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 600, 
        y: (canvas.height / 2 - 68 / 2) + 200
    }
})