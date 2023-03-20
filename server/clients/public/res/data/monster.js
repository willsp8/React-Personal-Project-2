// creating emby for our battle animate loop 
const embyImage = new Image()
embyImage.src = './res/embySprite.png'

// this create draggle in our battle animate loop 
const draggleImage = new Image()
draggleImage.src = './res/draggleSprite.png'


const monsters = {
    Emby: {
        position: {
            x: 300, 
            y: 320
        },
        image: {
            src: './res/embySprite.png'
        },
        frames: {
            max: 4,
            hold: 20
        },
        name: 'Emby',
        attacks: [attacks.Tackle, attacks.Fireball, attacks.Heal, attacks.Fast]
        
    },
    
    Draggle: {
        position: {
            x: 800, 
            y: 100
        },
        image: {
            src: './res/draggleSprite.png'
        },
        frames: {
            max: 4,
            hold: 20
        }, 
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        // this what kind of attacks a monster can have 
        
        attacks: [attacks.Tackle, attacks.Fireball]
    }
    
}