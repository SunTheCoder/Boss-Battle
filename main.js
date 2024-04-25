const { attributes } = require(`./attributes`)

    
class Characters {
    constructor (name = '', type = '', level = null, health = [], defense = [], attacks, items) {
        this.Name = name;
        this.Type = type;
        this.Level = level;
        this.Health = health;
        this.Defense = defense;
        this.Attacks = attacks;
        this.Items = items
    }
    
    //user input for max and min within class??
    //ATTRIBUTES
    getName() {
        return `Name: ${this.Name}`
    }
    getType() {
        return `Type: ${this.Type}`
    }
    getLevel() {
        return `Level: ${this.Level}`
    }
    getHealthBar() {
        let arr = []
        for (let i = 0; i <= this.Health; i++) {
            arr.push('|')
        }
        return `Health:  ${arr.join('')}` 
    }
    getDefenseBar() {
        let arr = []
        for (let i = 0; i <= this.Defense; i++) {
            arr.push('|')
        } 
        return `Defense: ${arr.join('')}`
    }
    getAttacks() {
        //console.log(this.Attacks)
        //return array with name and attack power. based on level the power will start at a certain num     
        return `Attacks: ${Object.keys(this.Attacks).join(', ')}`
    }
    getItems() {
        
        let arr = []

        let items1 = Object.keys(attributes.itemsTierOne)
        let items2 = Object.keys(attributes.itemsTierTwo)
        let items3 = Object.keys(attributes.itemsTierThree)
    
        let item1 = items1[Math.floor(Math.random() * Object.keys(attributes.itemsTierOne).length)]
        let item2 = items2[Math.floor(Math.random() * Object.keys(attributes.itemsTierTwo).length)]
        let item3 = items3[Math.floor(Math.random() * Object.keys(attributes.itemsTierThree).length)]

        arr.push(item1, item2, item3)
        
        return `Items:   ${arr.join(', ')}`
    }
    logStats() {
        console.log(this.getName())
        console.log(this.getType())
        console.log(this.getLevel())
        console.log(this.getHealthBar())
        console.log(this.getDefenseBar())
        console.log(this.getAttacks())
        console.log(this.getItems())
        return '';
    }
    //BATTLE
    playerAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        console.log(`Player Attack: ${attacks[attack][0]}`)
        return `Boss Health: ${boss1.Health = boss1.Health - attacks[attack][1]}`
    }
    playerDefense() {

    }
    bossAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        console.log(`Boss Attack: ${attacks[attack][0]}`)
        return `Player Health: ${player1.Health = player1.Health - attacks[attack][1]}`
    }
    bossDefense() {

    }
}

    class Boss extends Characters {
        constructor(name, type, level, health, defense, attacks, items){
            super(name, type, level, health, defense, attacks, items)
            
        }
    }
    
    class Player extends Characters {
        constructor(name, type, level, health,  defense, attacks, items){
            super(name, type, level, health,  defense, attacks, items)
        }
    }
    
    const boss1 = new Boss('Fenrir', 'Fire', 8, 100, 100, attributes.fireAttacks)
    
    const player1 = new Player('Hero', 'Explosive', 7, 85, 85, attributes.explosiveAttacks)
    
    //Game run tester
    
    // console.log('o----(::::::::::>')
    // console.log('YOUR EPIC BOSS BATTLE BEGINS!')
    // console.log('o----(::::::::::>')
    // console.log('')
    // console.log(boss1.logStats())
    // console.log(player1.logStats())
    
    // console.log('o----(::::::::::>')
    // console.log(boss1.bossAttackChoice(), player1.playerAttackChoice())
    // console.log('o----(::::::::::>')
    // console.log('')
    // console.log(boss1.logStats())
    // console.log(player1.logStats())

    // console.log('o----(::::::::::>')
    // console.log(boss1.bossAttackChoice(), player1.playerAttackChoice())
    // console.log('o----(::::::::::>')
    // console.log('')
    // console.log(boss1.logStats())
    // console.log(player1.logStats())

    // console.log('o----(::::::::::>')
    // console.log(boss1.bossAttackChoice(), player1.playerAttackChoice())
    // console.log('o----(::::::::::>')
    // console.log('')
    // console.log(boss1.logStats())
    // console.log(player1.logStats())

    // console.log('o----(::::::::::>')
    // console.log(boss1.bossAttackChoice(), player1.playerAttackChoice())
    // console.log('o----(::::::::::>')
    // console.log('')
    // console.log(boss1.logStats())
    // console.log(player1.logStats())

    //Game run function
    const playGame = (count) => {
        if (count === undefined) {
            console.log('o----(::::::::::>')
            console.log('YOUR EPIC BOSS BATTLE BEGINS!')
            console.log('o----(::::::::::>')
            console.log('')
            console.log(boss1.logStats())
            console.log(player1.logStats())
        }


        if (player1.Health <= 0) {
            console.log('o----(::::::::::>')
            console.log ('YOU LOSE!')
            console.log('o----(::::::::::>')
            console.log('') 
            return 'YOU LOSE!'
        }
        if (boss1.Health <= 0) {
            console.log('o----(::::::::::>')
            console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
            console.log('o----(::::::::::>')
            console.log('')

            return 'YOU HAVE EMERGED TRIUMPHANT, HERO!'
        }


        console.log('o----(::::::::::>')
        console.log(boss1.bossAttackChoice(), player1.playerAttackChoice())
        console.log('o----(::::::::::>')
        console.log('')
        console.log(boss1.logStats())
        console.log(player1.logStats())

        return playGame(count + 1)

    }
    //console.log(player1.health)
    
    playGame()
    //-----BATTLE LOGIC-----//
    //if attacking run an attac method on the oppostion
    //if defending run a defense method on self
    
    //recursively attack and run logic until first health string is at a length of 0 or less
    
    //set timeout for when defense becomes true and character will defend on next turn

    module.exports = {
        
        player1,
        boss1
    }