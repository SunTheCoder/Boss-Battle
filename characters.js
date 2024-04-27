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
    //OLD BAR CODE
    // getDefenseBar() {
    //     let arr = []
    //     for (let i = 0; i <= this.Defense; i++) {
    //         arr.push('|')
    //     } 
    //     return `Defense: ${arr.join('')}`
    // }
    getDefenseBar(num) {
        let arr = []
        for (let i = 0; i <= num; i++) {
            arr.push('|')
        } 
        return `Defense: ${arr.join('')}`
    }
    getAttacks() {
        //console.log(this.Attacks)
        //return array with name and attack power. based on level the power will start at a certain num     
        return `Attacks: ${Object.keys(this.Attacks).join(', ')}`
    }
    // getItems() {
        
    //     let arr = []

    //     let items1 = Object.keys(attributes.itemsTierOne)
    //     let items2 = Object.keys(attributes.itemsTierTwo)
    //     let items3 = Object.keys(attributes.itemsTierThree)
    
    //     let item1 = items1[Math.floor(Math.random() * Object.keys(attributes.itemsTierOne).length)]
    //     let item2 = items2[Math.floor(Math.random() * Object.keys(attributes.itemsTierTwo).length)]
    //     let item3 = items3[Math.floor(Math.random() * Object.keys(attributes.itemsTierThree).length)]

    //     arr.push(item1, item2, item3)
        
    //     return `Items:   ${arr.join(', ')}`
    // }
    getItems() {
        
        let arr = []

        let items1 = Object.keys(attributes.itemsTierOne)
        let items2 = Object.keys(attributes.itemsTierTwo)
        let items3 = Object.keys(attributes.itemsTierThree)
    
        let item1 = items1[Math.floor(Math.random() * Object.keys(attributes.itemsTierOne).length)]
        let item2 = items2[Math.floor(Math.random() * Object.keys(attributes.itemsTierTwo).length)]
        let item3 = items3[Math.floor(Math.random() * Object.keys(attributes.itemsTierThree).length)]

        arr.push(item1, item2, item3)

        //console.log(`Items:   ${arr.join(', ')}`)
        
        return this.Items = arr
    }
    logStats() {
        console.log(this.getName())
        console.log(this.getType())
        console.log(this.getLevel())
        console.log('')
        console.log(this.getHealthBar())
        console.log(this.getDefenseBar(this.Defense))
        console.log('')
        console.log(this.getAttacks())
        //console.log(this.getItems())
        return '';
    }
    //BATTLE
    gameStartItems() {
        // player1.getItems()

    }
    checkDefense() {
        if (this.Defense === 0) return this.DefenseState === false 
        else return this.DefenseState === true
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

        const readline = require('node:readline');
        const { stdin: input, stdout: output } = require('node:process');

        const rl = readline.createInterface({ input, output });
      
        rl.question('\nChoose your attack or item from the Hero\'s \'Attacks\' or \'Items\' list!\n', (choice) => {
                choice = choice.toLowerCase();
                //EXPLOSIVE ATTACKS//
                if (choice === 'rpg' || choice === 'r') { 
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[0])
                    console.log('\nSweet, sweet, Destruction!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )
                    console.log('Hero items: ', this.Items.join(', '))

                }
                else if (choice === 'airstrike' || choice === 'a') {
                    boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1])
                    console.log('\nSpreading democracy!\n')
                    console.log('Boss', boss1.getHealthBar(), '\n')
                    rl.close()   
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), ) 
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
                //HEALING ITEMS
                else if (choice === 'herbs' || choice === 'h') {
                    this.Items.splice(this.Items.indexOf('Herbs'), 1)
                    player1.Health = player1.Health + 25
                    console.log('\nHero used Herbs! Health +25!\n')
                    console.log(this.Items.join(', '))
                    //console.log('Hero', player1.getHealthBar()) 
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                } 
                else if (choice === 'tonic' || choice === 't') {
                    this.Items.splice(this.Items.indexOf('Tonic'), 1)
                    player1.Health = player1.Health + 50
                    console.log('\nHero used Tonic! Health +50!\n')
                    console.log(this.Items.join(', '))
                    //            console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                } 
                else if (choice === 'suluku\'s blessing' || choice === 's') {
                    this.Items.splice(this.Items.indexOf('Suluku\'s Blessing'), 1)
                    player1.Health = player1.Health + 75
                    console.log('\nHero used Suluku\'s Blessing! Health +75!\n')
                    console.log(this.Items.join(', '))
                            // console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
                }
                else {
                    console.log('Enter a valid response please:\n', 'RPG\n', 'Airstrike\n', 'Grenade\n', 'Laser Strike\n', 'Precision Strike\n', 'Mortar\n')
                    rl.close() 
                    return this.playerChoice()
                }
        })
        // let attacks = Object.entries(this.Attacks)
        // let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        // console.log(`Player Attack: ${attacks[attack][0]}`)
        // return boss1.Health = boss1.Health - attacks[attack][1]
        return ''
    }
    
    playerDefense() {

    }

    // playerUseHealingItem() {
    //    for (let item of this.Items) {
    //    //console.log(this.Items)
    //         //HEALING ITEMS//
    //         if (item === 'Herbs') {
    //             this.Items.splice(this.Items.indexOf(item), 1)
    //             player1.Health = player1.Health + 25
    //             console.log('Hero used Herbs! Health +25!')
    //             console.log('Hero', player1.getHealthBar()) 
    //             return '' //FIX RETURN
    //         } else if (item === 'Tonic') {
    //             this.Items.splice(this.Items.indexOf(item), 1)
    //             player1.Health = player1.Health + 50
    //             console.log('Hero used Tonic! Health +50!')
    //             console.log('Hero', player1.getHealthBar())
    //             return '' //FIX RETURN
    //         } else if (item === 'Suluku\'s Blessing') {
    //             this.Items.splice(this.Items.indexOf(item), 1)
    //             player1.Health = player1.Health + 75
    //             console.log('Hero used Suluku\'s Blessing! Health +75!')
    //             console.log('Hero', player1.getHealthBar())
    //             return '' //FIX RETURN
    //         }
    //         const readline = require('node:readline');
    //         const { stdin: input, stdout: output } = require('node:process');
    
    //         const rl = readline.createInterface({ input, output });
          
    //         rl.question('\nChoose your item from the Hero\'s \"Items\" list!\n', (item) => {
    //                 item = item.toLowerCase();
    //                 //EXPLOSIVE ATTACKS//
    //                 if (item === 'herbs' || item === 'h') { 
    //                     this.Items.splice(this.Items.indexOf(item), 1)
    //                     this.Health = this.Health + 25
    //                     console.log('Some good ol\' healing!')
    //                     console.log('Hero used Herbs! Health +25!')
    //                     rl.close()   
    //                     console.log('Hero items: ', this.Items.join(', '))
    
    //                 }
    //                 else if (attack === 'airstrike' || attack === 'a') {
    //                     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1])
    //                     console.log('\nSpreading democracy!\n')
    //                     console.log('Boss', boss1.getHealthBar(), '\n')
    //                     rl.close()   
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), ) 
    //                 }
    //                 else if (attack === 'grenade' || attack === 'g') {
    //                     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[2])
    //                     console.log('\nHere comes the BOOM!\n')
    //                     console.log('Boss', boss1.getHealthBar(), '\n')
    //                     rl.close()   
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), )  
    //                 }
    //                 else if (attack === 'laser strike' || attack === 'l') {
    //                     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[3])
    //                     console.log('\nZip, Zap, Zow, BITCH!\n')
    //                     console.log('Boss', boss1.getHealthBar(), '\n')
    //                     rl.close()   
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
    //                 }
    //                 else if (attack === 'precision strike' || attack === 'p') {
    //                     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[4])
    //                     console.log('\nWait for it..............BOOOOM!\n')
    //                     console.log('Boss', boss1.getHealthBar(), '\n')
    //                     rl.close()   
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
    //                 }
    //                 else if (attack === 'mortar' || attack === 'm') {
    //                     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[5])
    //                     console.log('\nHail Mary!\n')
    //                     console.log('Boss', boss1.getHealthBar(), '\n')
    //                     rl.close()   
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
    //                 } 
    //                 else {
    //                     console.log('Enter a valid response please:\n', 'RPG\n', 'Airstrike\n', 'Grenade\n', 'Laser Strike\n', 'Precision Strike\n', 'Mortar\n')
    //                     rl.close()
    //                     return this.playerUseHealingItem()
    //                 }
    //         //DAMAGE ITEMS//
    //     })   
    // }

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

    bossAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        console.log(`Boss Attack: ${attacks[attack][0]}`)
        if (player1.Defense !== 0) {
            //console.log('YOOOOOOOOOOOOOOOO', player1.defenseState)
            let res = player1.Defense - attacks[attack][1]
            if (res >= 0) {
                player1.Defense = player1.Defense - attacks[attack][1]
                console.log('Hero', player1.getHealthBar())
                return ''
                
            }
            player1.Health = player1.Health - (attacks[attack][1] - player1.Defense)
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
