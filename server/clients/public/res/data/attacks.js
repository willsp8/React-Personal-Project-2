// this is a list of all of the attacks in our game
const  attacks = {
    Tackle: {
        name: 'Tackle',
        damage: 10,
        restore: 0,
        type: 'Normal', 
        color: 'black'
    },
    Fireball: {
        name: 'Fireball',
        damage: 25,
        restore: 0,
        type: 'Fire',
        color: 'red',
        cost: 15
    },
    Heal: {
        name: 'Heal',
        damage: 0,
        restore: 15,
        type: 'Normal', 
        color: 'black',
        cost: 10

    },
    Coffee: {
        name: 'Coffee',
        damage: 0,
        restore: 15,
        magicRestore: 0,
        type: 'Item', 
        color: 'black',
        cost: 0

    },
    GreenTea: {
        name: 'GreenTea',
        damage: 0,
        restore: 0,
        magicRestore: 15,
        type: 'Item',
        color: 'green',
        cost: 0
    },
    Fast: {
        name: 'Fast',
        damage: 0,
        restore: 0,
        magicRestore: 0,
        type: 'Item', 
        color: 'purple',
        cost: 30

    }
}