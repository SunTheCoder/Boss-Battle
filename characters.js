const { attributes } = require(`./attributes`)


class Characters {
    constructor (name = '', type = '', level = null, health = [], defense = 0, attacks, items, defenseState = false) {
        this.Name = name;
        this.Type = type;
        this.Level = level;
        this.Health = health;
        this.Defense = defense;
        this.Attacks = attacks;
        this.Items = items
        this.DefenseState = defenseState
    }
    
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
    getDefenseBar(num) {
        let arr = []
        for (let i = 0; i <= num; i++) {
            arr.push('|')
        } 
        return `Defense: ${arr.join('')}`
    }
    getAttacks() {   
        return `Attacks:\n\n  ${Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |')}`
    }
    getItems() {
        
        let arr = []

        let items1 = Object.entries(attributes.itemsTierOne)
        let items2 = Object.entries(attributes.itemsTierTwo)
        let items3 = Object.entries(attributes.itemsTierThree)
    
        let item1 = items1[Math.floor(Math.random() * Object.entries(attributes.itemsTierOne).length)]
        let item2 = items2[Math.floor(Math.random() * Object.entries(attributes.itemsTierTwo).length)]
        let item3 = items3[Math.floor(Math.random() * Object.entries(attributes.itemsTierThree).length)]

        arr.push(item1, item2, item3)

        //console.log(`Items:   ${arr.join(', ')}`)
        
        return this.Items = arr
    }
    logStats() {
        console.log(this.getName())
        console.log(this.getType())
        console.log(this.getLevel(), '\n')
        console.log(this.getHealthBar())
        console.log(this.getDefenseBar(this.Defense), '\n')
        console.log(this.Name, this.getAttacks())
        //console.log(this.getItems())
        return ''
    }
    editListString(str) {
        
        let itemList = []
        let strArr = str.split('')
        for (let letter of strArr) {
            if (letter === ",") itemList.push(' +')
            else itemList.push(letter)
        }
        return itemList.join('')

    }
    //BATTLE
    gameStartItems() {
        // player1.getItems()
    }
    checkDefense() {
        if (this.Defense === 0) return this.DefenseState === false 
        else return this.DefenseState === true
    }
    // checkInventory(item) {
    //     if (!(this.Items.includes(item))) {   
    //         return false
    //     }
    //     return true
    // }
    checkInventory(item) {
        for (let el of this.Items) {
            if (el.includes(item)) {   
            return true
            }
        }
        return false
    }
    //PLAYER CHOICE//
    defenseScript(item) {
        if (this.checkInventory(item)) {
          this.Items.splice(this.Items.indexOf(item), 1)
          player1.Defense = player1.Defense + 75
          console.log('\nHero used Immovable Object! Defense +75!\n')
          console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
          console.log('Hero Items:', this.Items.join(', '), '\n')

      //console.log('Hero', player1.getDefenseBar(75))
        //   rl.close()
          //console.log(boss1.bossAttackChoice(), this.playerChoice())  
      } 
      else  {
          console.log(`Immovable Object is not in Hero\'s Inventory! Check the Items list.\n`, this.Items.join(', '), '\n')
        //   rl.close()
          //console.log(boss1.bossAttackChoice(), this.playerChoice()) 
          }
        }
    defItemUse(item) {
            let defPwr = this.Items.filter(el => el.includes(item))[0][1][0]
            this.Defense = this.Defense + defPwr
            
            console.log(`\nHero used ${item}! Defense + ${defPwr}!\n`)
            this.Items.splice(this.Items.indexOf(item), 1)
            console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
            console.log('Hero Items:', this.Items.join(', '), '\n')
    }
    playerChoice() {
        if (player1.Health <= 0) {
            
            console.log('\no----(::::::::::>')
            console.log ('YOU LOSE!')
            console.log('o----(::::::::::>')
            console.log('') 
            
            return ''
        } else if (boss1.Health <= 0) {
            
            console.log('o----(::::::::::>')
            console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
            console.log('o----(::::::::::>')
            console.log('')
    
            return ''
        }
        if (player1.Defense > 0) {

            console.log('Hero', player1.getDefenseBar(this.Defense), '')
        }
        
        const readline = require('node:readline');
        const { stdin: input, stdout: output } = require('node:process');

        const rl = readline.createInterface({ input, output });
      
        rl.question('\nChoose your attack or item from the Hero\'s \'Attacks\' or \'Items\' list!\n', (choice) => {
                choice = choice.toLowerCase();
                //EXPLOSIVE ATTACKS//
                if (choice === 'rpg' || choice === 'r') {  //<-----MAIN FUNCTION LOGIC TO COPY FOR ATTACKS
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[0])
                    console.log('\nSweet, sweet, Destruction!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n', '\no----(::::::::::>\n', 'NEW TURN!\no----(::::::::::>\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice())
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')))

                }
                else if (choice === 'airstrike' || choice === 'a') {
                    // boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1])
                    // console.log('\nSpreading democracy!\n')
                    // console.log('Boss', boss1.getHealthBar(), '\n')
                    // rl.close()   
                    // console.log(boss1.bossAttackChoice(), this.playerChoice(), ) 
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1])
                    console.log('\nSweet, sweet, Destruction!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n', '\no----(::::::::::>\n', 'NEW TURN!\no----(::::::::::>\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice())
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')))
                }
                else if (choice === 'grenade' || choice === 'g') {
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[2])
                    console.log('\nHere comes the BOOM!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )  
                }
                else if (choice === 'laser strike' || choice === 'l') {
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[3])
                    console.log('\nZip, Zap, Zow, BITCH!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                }
                else if (choice === 'precision strike' || choice === 'p') {
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[4])
                    console.log('\nWait for it..............BOOOOM!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                }
                else if (choice === 'mortar' || choice === 'm') {
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[5])
                    console.log('\nHail Mary!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                } 
                //HEALING ITEMS//
                else if (choice === 'herbs' || choice === 'h') {
                    //this.Items.splice(this.Items.indexOf('Herbs'), 1)
                    this.Items = this.Items.filter(el => !el.includes('Herbs'))

                    player1.Health = player1.Health + 25
                    console.log('\nHero used Herbs! Health +25!\n')
                    //console.log(this.Items.join(', '))
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')
                    //console.log('Hero', player1.getHealthBar()) 
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                } 
                else if (choice === 'tonic' || choice === 't') { //<----MAIN UPDATED HEALING ITEM FUNC
                    //this.Items.splice(this.Items.indexOf('Tonic'), 1)
                    this.Items = this.Items.filter(el => !el.includes('Tonic'))
                    player1.Health = player1.Health + 50
                    console.log('\nHero used Tonic! Health +50!\n')
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')
                    //            console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                } 
                else if (choice === 'suluku\'s blessing' || choice === 'su') {
                    //this.Items.splice(this.Items.indexOf('Suluku\'s Blessing'), 1)
                    this.Items = this.Items.filter(el => !el.includes('Suluku\'s Blessing'))

                    player1.Health = player1.Health + 75
                    console.log('\nHero used Suluku\'s Blessing! Health +75!\n')
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')
                    //console.log(this.Items.join(', '))
                            // console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                }
                //DEFENSE ITEMS//
                else if (choice === 'bark shield' || choice === 'b') {
                    //this.Items.splice(this.Items.indexOf('Bark Shield'), 1)
                    this.Items = this.Items.filter(el => !el.includes('Bark Shield'))

                    player1.Defense = player1.Defense + 25
                    console.log('\nHero used Bark Shield! Defense +25!\n')
                    // console.log('Hero Attacks:', this.Items.join(', '))
                    // console.log('Hero Items:', Object.keys(this.Attacks).join(', '), '\n')
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')

                    //console.log('Hero', player1.getDefenseBar(25)) 
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), ) 

                } else if (choice === 'steel shield' || choice === 'st') {
                    //this.Items.splice(this.Items.indexOf('Steel Shield'), 1)
                    this.Items = this.Items.filter(el => !el.includes('Steel Shield'))
                    player1.Defense = player1.Defense + 50
                    console.log('\nHero used Steel Shield! Defense +50!\n')
                    // console.log('Hero Attacks:', this.Items.join(', '))
                    // console.log('Hero Items:', Object.keys(this.Attacks).join(', '), '\n')
                    console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')

                    //console.log('Hero', player1.getDefenseBar(50))
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                    
                } else if (choice === 'immovable object' || choice === 'i') { //<-----DEF ITEM LOGIC TO BE USED ON ALL W/ HELPERS
                    let item = 'Immovable Object'
                    
                    if (this.checkInventory(item)) {
                        this.defItemUse(item)
                        rl.close()
                        console.log(boss1.bossAttackChoice(), this.playerChoice())  
                    } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.Items.join(' '), '\n')
                        rl.close()
                        console.log(this.playerChoice()) 
                        }
                      
                    // if (this.checkInventory('Immovable Object')) {
                    //     this.Items.splice(this.Items.indexOf('Immovable Object'), 1)
                    //     player1.Defense = player1.Defense + 75
                    //     console.log('\nHero used Immovable Object! Defense +75!\n')
                    //     console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
                    //     console.log('Hero Items:', this.Items.join(', '), '\n')

                    // //console.log('Hero', player1.getDefenseBar(75))
                    //     rl.close()
                    //     console.log(boss1.bossAttackChoice(), this.playerChoice())  
                    // } 
                    // else  {
                    //     console.log(`Immovable Object is not in Hero\'s Inventory! Check the Items list.\n`, this.Items.join(', '), '\n')
                    //     rl.close()
                    //     console.log(boss1.bossAttackChoice(), this.playerChoice()) 
                    //     }


                }
                //BOOST ITEMS//
                else if (choice === 'ancestral boon' || choice === 'an') {
                    this.Items.splice(this.Items.indexOf('Ancestral Boon'), 1)
                    console.log('Hero used Ancestral Boon! Defense Boost!\n')
                    if (this.Defense === 0) this.Defense = 50
                    this.Defense = this.Defense * 2
                    console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
                    console.log('Hero Items:', this.Items.join(', '), '\n')
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice())             
                }
                //ATTACK ITEMS//
                else if (choice === 'shriveled head' || choice === 'sh') { //<------MAIN ATK ITEM FUNC TO BE COPIED/TEST
                    this.Items.splice(this.Items.indexOf('Shriveled Head'), 1)
                    console.log('Hero used Shriveled Head! Boss takes damage!\n')
                    boss1.Health = boss1.Health - (boss1.Health / 5)
                    console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
                    console.log('Hero Items:', this.Items.join(', '), '\n')
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice()) 
                }
                else if (choice === 'death' || choice === 'de') {
                    this.Items.splice(this.Items.indexOf('Death'), 1)
                    console.log('Hero used Shriveled Head! Boss takes damage!\n')
                    boss1.Health = boss1.Health - (boss1.Health / 3)
                    console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
                    console.log('Hero Items:', this.Items.join(', '), '\n')
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice()) 
                }
                else {
                    console.log('\nEnter a valid response please:\n', '\n RPG\n', 'Airstrike\n', 'Grenade\n', 
                                'Laser Strike\n', 'Precision Strike\n', 'Mortar\n', 'Herbs\n', 'Tonic\n', 
                                'Suluku\'s Blessing\n', 'Bark Shield\n', 'Steel Shield\n', 'Immovable Object\n',
                                'Ancestral Boon\n', 'Shriveled Head\n')
                    rl.close() 
                    return this.playerChoice()
                }
        })
        return ''
    }
    
    playerDefense() {

    }

    playerUseDefenseItem() {
        for (let item of this.Items) {
            //console.log(this.Items)
                 //DEFENSE ITEMS//
                 if (item === 'Bark Shield') {
                     this.Items.splice(this.Items.indexOf(item), 1)
                     player1.Defense = player1.Defense + 25
                     console.log('Hero used Bark Shield! Defense +25!')
                     console.log('Hero', player1.getDefenseBar(25)) 
                     console.log('')
                     return player1.DefenseState = true
                     
                 } else if (item === 'Steel Shield') {
                     this.Items.splice(this.Items.indexOf(item), 1)
                     player1.Defense = player1.Defense + 50
                     console.log('Hero used Steel Shield! Defense +50!')
                     console.log('Hero', player1.getDefenseBar(50))
                     console.log('')
                     return player1.DefenseState = true

                 } else if (item === 'Immovable Object') {
                     this.Items.splice(this.Items.indexOf(item), 1)
                     player1.Defense = player1.Defense + 75
                     console.log('Hero used Immovable Object! Defense +75!')
                     console.log('Hero', player1.getDefenseBar(75))
                     console.log('')
                     return player1.DefenseState = true

                 }
             }   
    }

    playerUseBoostItem() {
        for (let item of this.Items) {
            //console.log(this.Items)
                 //BOOST ITEMS//
                if (item === 'Ancestral Boon') {
                     this.Items.splice(this.Items.indexOf(item), 1)
                     if (player1.Defense === 0) {
                        console.log('Hero used Ancestral Boon! Defense Boost!')
                        console.log('')
                        return player1.Defense = player1.Defense + 50
                        
                     }
                     
                    
                     console.log('Hero used Ancestral Boon! Defense Boost!')
                     console.log('')
                     console.log('Hero', player1.getDefenseBar(player1.Defense + player1.Defense)) 
                     
                     return player1.Defense = player1.Defense * 2
                }
                //  } else if (item === 'Steel Shield') {
                //      this.Items.splice(this.Items.indexOf(item), 1)
                //      player1.Defense = player1.Defense + 50
                //      console.log('Hero used Steel Shield! Defense +50!')
                //      console.log('Hero', player1.getDefenseBar(50))
                //      console.log('')
                //      return player1.DefenseState = true

                //  } else if (item === 'Immovable Object') {
                //      this.Items.splice(this.Items.indexOf(item), 1)
                //      player1.Defense = player1.Defense + 75
                //      console.log('Hero used Immovable Object! Defense +75!')
                //      console.log('Hero', player1.getDefenseBar(75))
                //      console.log('')

                //      return player1.DefenseState = true   
        }   
    }
    //BOSS LOGIC//
    bossAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        console.log(`Boss Attack:  ${attacks[attack][0]}`)
        if (player1.Defense !== 0) {
            //console.log('YOOOOOOOOOOOOOOOO', player1.defenseState)
            let res = player1.Defense - attacks[attack][1]
            if (res >= 0) {
                player1.Defense = player1.Defense - attacks[attack][1]
                console.log('Hero', player1.getHealthBar())
                return ''
                
            }
            //defense with attack
            //player1.Health = player1.Health - (attacks[attack][1] - player1.Defense)
            player1.Defense = player1.Defense - attacks[attack][1]
            player1.Health = player1.Health + player1.Defense
            player1.Defense = 0
            console.log('Hero', player1.getHealthBar())
            return ''
            

        }
        player1.Health = player1.Health - attacks[attack][1]
        console.log('Hero', player1.getHealthBar())
        return ''
        
    }

    bossDefense() {

    }
    bossUseItem() {

    }

}

    class Boss extends Characters {
        constructor(name, type, level, health, defense, attacks, items, defenseState){
            super(name, type, level, health, defense, attacks, items, defenseState)
            
        }
    }
    
    class Player extends Characters {
        constructor(name, type, level, health,  defense, attacks, items, defenseState){
            super(name, type, level, health,  defense, attacks, items, defenseState)
        }
    }
    
    const boss1 = new Boss('Fenrir', 'Fire', 8, 200, 25, attributes.fireAttacks)
    
    const player1 = new Player('Hero', 'Explosive', 7, 85, 0, attributes.explosiveAttacks)

module.exports = {
    Characters,
    Boss,
    Player,
    boss1,
    player1
}
