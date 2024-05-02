const { attributes } = require(`./attributes`);
const fenrirIntro = require('./fenririntro');
const nightmareIntro = require('./nightmareintro')


class Characters {
    constructor (name = '', type = '', level = null, health, defense = 0, attacks, items, defenseState = false, atkPwr) {
        this.Name = name;
        this.Type = type;
        this.Level = level;
        this.Health = health;
        this.Defense = defense;
        this.Attacks = attacks;
        this.Items = items
        this.DefenseState = defenseState
        this.AtkPwr = atkPwr;
    }
    
    //ATTRIBUTES
    printHelp() {

            console.log('\n o----(::::::::::>\n',
                        '\n HOW TO PLAY:\n\n', '-Type the name of of the "Item" or "Attack" you want to choose and press ENTER.\n    The player can type the first two letters of the "Item" or "Attack" as a shorthand.\n\n',
                        '-Each "Attack" has an "AtkPwr" (attack power) associated with it, respresented by a number.\n\n',
                        '-When an "Attack" is chosen, the "\Boss\" will be damaged by the amount represented by "AtkPwr",\n    and the players "Attack Power" bar will be depleted by the amount represented by "AtkPwr".\n\n',
                        '-The player must be mindful of their "Attack" choices. If the "Attack Power" bar is depleted; you will not be able to attack.\n    Use "Items" and "Attack" wisely!\n\n',
                        '-If a defensive "Item" (Steel shield, etc.) is used; the player will gain a "Defense" bar.\n    All damage will now be absorbed by the defensive "Item" until the "Defense" bar is completely depleted.\n\n',
                        'DISPLAY COMMANDS:\n\n',
                        '-If the player needs to see their current stats, type "Pstats"\n\n',
                        '-If the player needs to see the "Boss\'" current stats, type "Bstats"\n\n',

                        'ENJOY! and THANK YOU! for playing!\n\n',
                        'Game Creator: Bobby "Sun" English Jr. -April 2024\n\n',
                        'o----(::::::::::>')

    }
    getName() {
        if (this instanceof Boss) return `Boss: ${this.Name}`
        return `Player: ${this.Name}`
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
    getAtkPwrBar() {
        let arr = []
        for (let i = 0; i <= this.AtkPwr; i++) {
            arr.push('|')
        }
        return `Atk Pwr: ${arr.join('')}` 
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
    getSuluku() {
        player1.Name = 'Suluku'
        player1.Type = 'Atrophy'
        player1.Level = 9
        player1.Health = 150
        player1.Attacks = attributes.atrophyAttacks
        player1.AtkPwr = 100
    }
    getStorm() {
        player1.Name = 'Storm'
        player1.Type = 'Electric'
        player1.Level = 8
        player1.Health = 125
        player1.Attacks = attributes.electricAttacks
        player1.AtkPwr = 150
    }
    logStats() {
        console.log(this.getName())
        console.log(this.getType())
        console.log(this.getLevel(), '\n')
        console.log(this.Name, this.getHealthBar())
        if (!(this instanceof Boss)) console.log(this.Name, this.getAtkPwrBar())
        console.log('\n')
        //console.log(this.getDefenseBar(this.Defense), '\n')
        if (this instanceof Boss) console.log(this.Name, 'Attacks:\n\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + Object.values(this.Attacks)[Object.keys(this.Attacks).indexOf(item[0])].filter(el => typeof el === 'number')+ ' AtkPwr').join(' |'))
        else console.log(this.Name, 'Attacks:\n\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + Object.values(this.Attacks)[Object.keys(player1.Attacks).indexOf(item[0])].filter(el => typeof el === 'number')+ ' AtkPwr').join(' |'))
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
    timeoutTurn(playChar, boss) {
        setTimeout(() => {
            console.log(boss.bossAttackChoice(), playChar.playerChoice(playChar, boss))
            console.log('o----(::::::::::>')

        }, 3500)
    }

    pAttack = (attack, boss) => {
        if (player1.AtkPwr <= 0) {
            boss.Health = boss.Health - (Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'number') / 2)
            playChar.AtkPwr = playChar.AtkPwr * 0
            console.log(`\nHero used ${attack}! ${boss.Name} takes ${Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'number') / 2} damage!\n`, `\n${Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'string')}\n`)
    
            } else {
            boss.Health = boss.Health - Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'number')
            player1.AtkPwr = player1.AtkPwr - Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'number')
            console.log(`\nHero used ${attack}! ${boss.Name} takes ${Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'number')} damage!\n`, `\n${Object.values(this.Attacks)[Object.keys(player1.Attacks).indexOf(attack)].filter(el => typeof el === 'string')}\n`)
    
            }
    
            ///SET TIMEOUT FOR MORE ACTION SEQUENCE FOR ATTACKS
            
            console.log(`${boss.Name}`, boss1.getHealthBar(), '\n', '\no----(::::::::::>\n', 'NEW TURN!\no----(::::::::::>\n')
            this.listAttacks(attack)
            this.listItems()
        }
    pItem = (item) => {

    }
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
    //LISTS//
    listItems = () => {
        console.log(`\n${this.Name} Items:\n\n  ${player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | '))}\n`)
    }
    listAttacks = () => {
        console.log(`\n${this.Name} Attacks:\n\n ${Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + Object.values(this.Attacks)[Object.keys(player1.Attacks).indexOf(item[0])].filter(el => typeof el === 'number') + ' AtkPwr').join(' |')}`)
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
    removeItemFromList(item) {
        return this.Items = this.Items.filter(el => !el.includes(item))
    }
    defItemUse(item) {
            let defPwr = player1.Items.filter(el => el.includes(item)).flat().flat().filter(el => typeof el === 'number').join()
            this.Defense = this.Defense + defPwr
            
            console.log(`\nHero used ${item}! Defense + ${defPwr}!`)
            this.Items = this.Items.filter(el => !el.includes(item))
            this.listAttacks()
            this.listItems()
    }
 
    healItemUse(item) {
        let healAmount = player1.Items.filter(el => el.includes(item)).flat().flat().filter(el => typeof el === 'number').join()
        this.Health = this.Health + healAmount
        
        console.log(`\nHero used ${item}! Health + ${healAmount}!`)
        this.Items = this.Items.filter(el => !el.includes(item))
        this.listAttacks()
        this.listItems()
    }
    choosePlayer() {
        const readline = require('node:readline');
        const { stdin: input, stdout: output, features } = require('node:process');

        const rl = readline.createInterface({ input, output });

        rl.question('\nWhich character will you choose?\n\n -Hero (type "He")\n -Suluku (type "Su")\n -Storm (type "St")\n\n', (choice) => {

        choice = choice.toLowerCase()

            if (choice === 'hero' || choice === 'he') {
            
                rl.close()
                player1.chooseBoss()
            
            } else if (choice === 'suluku' || choice === 'su') {
                
                rl.close()     
                player1.getSuluku()
                player1.chooseBoss()
            
            } else if (choice === 'storm' || choice === 'st') {
                
                rl.close()     
                player1.getStorm()
                player1.chooseBoss()
            
            }

        })
    }

    chooseBoss() {
        const readline = require('node:readline');
        const { stdin: input, stdout: output, features } = require('node:process');

        const rl = readline.createInterface({ input, output });

        rl.question('\nWhich story will you choose?\n\n -The Demise of Fenrir (type "Fe")\n -The Sun Rises (type "Su")\n\n', (choice) => {

        choice = choice.toLowerCase()

        if (choice === 'fenrir' || choice === 'fe') {
            let boss = boss1
            rl.close()
           
            fenrirIntro(boss)
            
            setTimeout(() => {
                console.log(boss1.logStats(), this.playerChoice(player1, boss1))
            }, 70000)

        } else if (choice === 'sun' || choice === 'su') {
            let boss = nightmare
            rl.close()

            nightmareIntro(boss)

            setTimeout(() => {
                console.log(nightmare.logStats(), this.playerChoice(player1, nightmare))
            }, 70000)
        }
    })
    }

    
    // playerChoice() {
    //     if (boss1.Health <= 0) {
    //         console.log('\no----(::::::::::>\n', 'YOU ARE TRIUMPHANT, HERO!')
    //         console.log('o----(::::::::::>')
    //         return '\no----(::::::::::>\nGAME OVER\no----(::::::::::>'
    //     }
    //     if (player1.Health <= 0) {
    //         console.log('\no----(::::::::::>\n', 'YOU LOSE!')
    //         console.log('o----(::::::::::>')
    //         return'\no----(::::::::::>\nGAME OVER\nno----(::::::::::>'
    //     }
    //     if (player1.Defense > 0) {

    //         console.log('Hero', player1.getDefenseBar(this.Defense), '')
    //     }
    //     //ATKPWR DEFICIT//
    //     if (this.AtkPwr <= 0) console.log('\n"Attack Power" depleted! Hero\'s "Attack" does HALF DAMAGE! Refill with an +AtkPwr "Item" if available!')
        
        
    //     const readline = require('node:readline');
    //     const { stdin: input, stdout: output } = require('node:process');

    //     const rl = readline.createInterface({ input, output });

      
    //     rl.question('\nChoose your attack or item from the Hero\'s \'Attacks\' or \'Items\' list!\n\nType "Help" for directions on HOW TO PLAY. Type "Quit" or "Q" and ENTER to quit.\n', (choice) => {
    //             choice = choice.toLowerCase();
                
    //             //HELP//
    //             if (choice === 'help') {
    //                 this.printHelp()
    //                 rl.close() 
    //                 return this.playerChoice()
    //             }
    //             //QUIT
    //             else if (choice === 'quit' || choice === 'q') rl.close()
    //             //DISPLAY//
    //             else if (choice === 'pstats') {
    //                 console.log('\n', player1.logStats())
    //                 player1.listItems()
    //                 rl.close() 
    //                 return this.playerChoice()
    //             }
    //             else if (choice === 'bstats') {
    //                 console.log('\n', boss1.logStats())
    //                 rl.close() 
    //                 return this.playerChoice()
    //             }
    //             //EXPLOSIVE ATTACKS//
    //             else if (choice === 'rpg' || choice === 'rp') {  
    //                 this.pAttack('RPG')
    //                 rl.close()   
    //                 this.timeoutTurn()
    //             }
    //             else if (choice === 'airstrike' || choice === 'ai') {
    //                 this.pAttack('Airstrike')
    //                 rl.close()
    //                 this.timeoutTurn()    
    //             }
    //             else if (choice === 'grenade' || choice === 'gr') {
    //                 this.pAttack('Grenade')
    //                 rl.close()   
    //                 this.timeoutTurn()
    //             }
    //             else if (choice === 'laser strike' || choice === 'la') {
    //                 this.pAttack('Laser Strike')
    //                 rl.close()   
    //                 this.timeoutTurn()
    //             }
    //             else if (choice === 'precision strike' || choice === 'pr') {
    //                 this.pAttack('Precision Strike')
    //                 rl.close()   
    //                 this.timeoutTurn()
    //                 } 
    //             else if (choice === 'mortar' || choice === 'mo') {
    //                 this.pAttack('Mortar')
    //                 rl.close()   
    //                 this.timeoutTurn()
    //                 } 

    //             //HEALING ITEMS//
    //             else if (choice === 'herbs' || choice === 'he') { ////bind a readline?
    //                 let item = 'Herbs'
    //                 if (this.checkInventory(item)) {
    //                     this.healItemUse(item)
                        
    //                     rl.close()
    //                 }
    //                 console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                 rl.close()
    //                 console.log(this.playerChoice())   
    //             } 
    //             else if (choice === 'tonic' || choice === 'to') { //<----MAIN UPDATED HEALING ITEM FUNC dynmi
    //                 //this.Items.splice(this.Items.indexOf('Tonic'), 1)
    //                 let item = 'Tonic'
                    
    //                 if (this.checkInventory(item)) {
                        
    //                 this.Items = this.Items.filter(el => !el.includes(item))
    //                 player1.Health = player1.Health + 50
    //                 console.log(`\nHero used ${item}! Health +50!\n`)
    //                 this.listAttacks()
    //                 this.listItems()
    //                 //            console.log('Hero', player1.getHealthBar())
    //                 rl.close()
    //                 console.log(boss1.bossAttackChoice(), this.playerChoice(), )  
    //                 } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, '\n', this.listItems())
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                 } 
    //             } 
    //             else if (choice === 'suluku\'s blessing' || choice === 'su') {
    
    //                 let item = 'Suluku\'s Blessing'

    //                 if (this.checkInventory(item)) {
                        
    //                 this.Items = this.Items.filter(el => !el.includes(item))
    //                 player1.Health = player1.Health + 75
    //                 console.log(`\nHero used ${item}! Health +75!\n`)
    //                 this.listAttacks()
    //                 this.listItems()
    //                 //console.log(this.Items.join(', '))
    //                         // console.log('Hero', player1.getHealthBar())
    //                 rl.close()
    //                 console.log(boss1.bossAttackChoice(), this.playerChoice(), ) 
    //                 } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, '\n', this.listItems())
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                 } 
    //             }

    //             //DEFENSE ITEMS//
    //             else if (choice === 'bark shield' || choice === 'ba') {
    //                 let item = 'Bark Shield'
    //                 if (this.checkInventory(item)) {
    //                     this.defItemUse(item)
    //                     rl.close()
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice())  
    //             } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                     }

    //             } else if (choice === 'steel shield' || choice === 'st') {
    //                     let item = 'Steel Shield'
    //                     if (this.checkInventory(item)) {
    //                     this.defItemUse(item)
    //                     rl.close()
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice(), )   
    //             } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                     }
                    
    //             } else if (choice === 'immovable object' || choice === 'im') { 
    //                 let item = 'Immovable Object'
                    
    //                 if (this.checkInventory(item)) {
    //                     this.defItemUse(item)
    //                     rl.close()
    //                     console.log(boss1.bossAttackChoice(), this.playerChoice())  
    //                 } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                     }
    //             }
    //             //ATK PWR REPLENISH ITEMS//
    //             else if (choice === 'passionfruit' || choice === 'pa') {
    //                 let item = 'Passionfruit'
    //                 let atkPwrPlus = player1.Items.filter(el => el.includes(item)).flat().flat().filter(el => typeof el === 'number').join()

    //                 if (this.checkInventory(item)) {
    //                 this.AtkPwr = this.AtkPwr + atkPwrPlus
    //                 this.removeItemFromList()
    //                 console.log(`${this.Name} used ${item}! Atk Pwr replenished by ${atkPwrPlus}!\n`)
    //                 this.listAttacks()
    //                 this.listItems()
    //                 } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n\n`, this.listItems(), '\n')
    //                     rl.close()
    //                     console.log(this.playerChoice()) 
    //                 }
                    

    //             }
    //             //BOOST ITEMS//
    //             else if (choice === 'ancestral boon' || choice === 'an') {
    //                 let item = 'Ancestral Boon'

    //                 if (this.checkInventory(item)) {
    //                 this.Items = this.Items.filter(el => !el.includes(item))
    //                 console.log(`${this.Name} used Ancestral Boon! Defense Boost!\n`)
    //                 if (this.Defense === 0) this.Defense = 50
    //                 this.Defense = this.Defense * 2
    //                 this.listAttacks()
    //                 this.listItems()
    //                 rl.close()
    //                 console.log(boss1.bossAttackChoice(), this.playerChoice())    
    //             } else {
    //                     console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                     rl.close()
    //                     console.log(this.playerChoice()) 

    //                 }         
    //             }

    //             //UNIQUE ATTACK ITEMS//
    //             else if (choice === 'shriveled head' || choice === 'sh') { //<------MAIN ATK ITEM FUNC TO BE COPIED/TEST
    //                 let item = 'Shriveled Head'

    //                 if (this.checkInventory(item)) {
    //                 this.Items = this.Items.filter(el => !el.includes(item))
    //                 console.log(`Hero used Shriveled Head! Boss takes ${Math.floor(boss1.Health / 4)} damage!\n`)
    //                 boss1.Health = boss1.Health - (boss1.Health / 4)
    //                 this.listAttacks()
    //                 this.listItems()
    //                 rl.close()
    //                 console.log(boss1.bossAttackChoice(), this.playerChoice()) 
    //             } else {
    //                 console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                 rl.close() 
    //                 return this.playerChoice()
    //             }

    //             }
    //             else if (choice === 'death' || choice === 'de') {
    //                 let item = 'Death'

    //                 if (this.checkInventory(item)) {
    //                 this.Items = this.Items.filter(el => !el.includes(item))
    //                 console.log(`Hero used ${item}! Boss takes ${Math.floor(boss1.Health / 3)} damage!\n`)
    //                 boss1.Health = boss1.Health - (Math.floor(boss1.Health / 3))
    //                 this.listAttacks()
    //                 this.listItems()
    //                 rl.close()
    //                 console.log(boss1.bossAttackChoice(), this.playerChoice()) 
    //             } else {
    //                 console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
    //                 rl.close() 
    //                 return this.playerChoice()
    //             }
                
    //         }
    //         else {
    //             console.log('\nEnter a valid response please:\n\n To choose an "Item" or "Attack", type the selection or the first two letters of the selection and press ENTER.\n, For example, "Airstrike" or "Ai" will execute the "Airstrike" attack and damage the boss.\n "Tonic" or "To" will use the "Tonic" "Item" and add Health to the "Health" bar if the item is available.')
    //                 rl.close() 
    //                 return this.playerChoice()
    //         }
    //     })
    //     return ''
    // }
    


     
    playerChoice(playChar, boss) {
        
        if (boss.Health <= 0) {
            console.log('\no----(::::::::::>\n', 'YOU ARE TRIUMPHANT, HERO!')
            console.log('o----(::::::::::>')
            return '\no----(::::::::::>\nGAME OVER\no----(::::::::::>'
        }
        if (playChar.Health <= 0) {
            console.log('\no----(::::::::::>\n', 'YOU LOSE!')
            console.log('o----(::::::::::>')
            return'\no----(::::::::::>\nGAME OVER\nno----(::::::::::>'
        }
        if (playChar.Defense > 0) {

            console.log('Hero', playChar.getDefenseBar(this.Defense), '')
        }
        //ATKPWR DEFICIT//
        if (playChar.AtkPwr <= 0) console.log('\n"Attack Power" depleted! Hero\'s "Attack" does HALF DAMAGE! Refill with an +AtkPwr "Item" if available!')
        
        
        const readline = require('node:readline');
        const { stdin: input, stdout: output } = require('node:process');

        const rl = readline.createInterface({ input, output });

      
        rl.question('\nChoose your attack or item from the Hero\'s \'Attacks\' or \'Items\' list!\n\nType "Help" for directions on HOW TO PLAY. Type "Quit" or "Q" and ENTER to quit.\n', (choice) => {
                choice = choice.toLowerCase();
                
                //HELP//

                if (choice === 'help') {
                    this.printHelp()
                    rl.close() 
                    return this.playerChoice(playChar, boss)
                }

                //QUIT

                else if (choice === 'quit' || choice === 'q') rl.close()

                //DISPLAY//

                else if (choice === 'pstats') {
                    console.log('\n', playChar.logStats())
                    playChar.listItems()
                    rl.close() 
                    return this.playerChoice(playChar, boss)
                }
                else if (choice === 'bstats') {
                    console.log('\n', boss.logStats())
                    rl.close() 
                    return this.playerChoice(playChar, boss)
                }

                //EXPLOSIVE ATTACKS//

                else if (choice === 'rpg' || choice === 'rp') {  
                    this.pAttack('RPG', boss)
                    rl.close()   
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'airstrike' || choice === 'ai') {
                    this.pAttack('Airstrike', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)    
                }
                else if (choice === 'grenade' || choice === 'gr') {
                    this.pAttack('Grenade', boss)
                    rl.close()   
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'laser strike' || choice === 'la') {
                    this.pAttack('Laser Strike', boss)
                    rl.close()   
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'precision strike' || choice === 'pr') {
                    this.pAttack('Precision Strike', boss)
                    rl.close()   
                    this.timeoutTurn(playChar, boss)
                    } 
                else if (choice === 'mortar' || choice === 'mo') {
                    this.pAttack('Mortar', boss)
                    rl.close()   
                    this.timeoutTurn(playChar, boss)
                    }

                //ATROPHY ATTACKS//

                else if (choice === 'poison dart' || choice === 'po') {
                    this.pAttack('Poison Dart', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'touch of death' || choice === 'to') {
                    this.pAttack('Touch of Death', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'transition' || choice === 'tr') {
                    this.pAttack('Transition', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'ashes to ashes' || choice === 'as') {
                    this.pAttack('Ashes to Ashes', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)
                }
                else if (choice === 'zulu spear' || choice === 'zu') {
                    this.pAttack('Zulu Spear', boss)
                    rl.close()
                    this.timeoutTurn(playChar, boss)
                }

                //HEALING ITEMS//

                else if (choice === 'herbs' || choice === 'he') { ////bind a readline?
                    let item = 'Herbs'
                    if (this.checkInventory(item)) {
                        this.healItemUse(item)
                        
                        rl.close()
                    }
                    console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                    rl.close()
                    console.log(this.playerChoice(playChar, boss))   
                } 
                else if (choice === 'tonic' || choice === 'to') { //<----MAIN UPDATED HEALING ITEM FUNC dynmi
                    //this.Items.splice(this.Items.indexOf('Tonic'), 1)
                    let item = 'Tonic'
                    
                    if (playChar.checkInventory(item)) {
                        
                    this.Items = this.Items.filter(el => !el.includes(item))
                    playChar.Health = playChar.Health + 50
                    console.log(`\nHero used ${item}! Health +50!\n`)
                    this.listAttacks()
                    this.listItems()
                    //            console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss.bossAttackChoice(), playChar.playerChoice(playChar, boss), )  
                    } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, '\n', this.listItems())
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                    } 
                } 
                else if (choice === 'suluku\'s blessing' || choice === 'su') {
    
                    let item = 'Suluku\'s Blessing'

                    if (this.checkInventory(item)) {
                        
                    this.Items = this.Items.filter(el => !el.includes(item))
                    playChar.Health = playChar.Health + 75
                    console.log(`\nHero used ${item}! Health +75!\n`)
                    this.listAttacks()
                    this.listItems()
                    //console.log(this.Items.join(', '))
                            // console.log('Hero', player1.getHealthBar())
                    rl.close()
                    console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss), ) 
                    } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, '\n', this.listItems())
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                    } 
                }

                //DEFENSE ITEMS//
                else if (choice === 'bark shield' || choice === 'ba') {
                    let item = 'Bark Shield'
                    if (this.checkInventory(item)) {
                        this.defItemUse(item)
                        rl.close()
                        console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss))  
                } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                        }

                } else if (choice === 'steel shield' || choice === 'st') {
                        let item = 'Steel Shield'
                        if (this.checkInventory(item)) {
                        this.defItemUse(item)
                        rl.close()
                        console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss), )   
                } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                        }
                    
                } else if (choice === 'immovable object' || choice === 'im') { 
                    let item = 'Immovable Object'
                    
                    if (this.checkInventory(item)) {
                        this.defItemUse(item)
                        rl.close()
                        console.log(boss.bossAttackChoice(), this.playerChoice())  
                    } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                        }
                }
                //ATK PWR REPLENISH ITEMS//
                else if (choice === 'passionfruit' || choice === 'pa') {
                    let item = 'Passionfruit'
                    let atkPwrPlus = playChar.Items.filter(el => el.includes(item)).flat().flat().filter(el => typeof el === 'number').join()

                    if (this.checkInventory(item)) {
                    this.AtkPwr = this.AtkPwr + atkPwrPlus
                    this.removeItemFromList()
                    console.log(`${this.Name} used ${item}! Atk Pwr replenished by ${atkPwrPlus}!\n`)
                    this.listAttacks()
                    this.listItems()
                    } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n\n`, this.listItems(), '\n')
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 
                    }
                    

                }
                //BOOST ITEMS//
                else if (choice === 'ancestral boon' || choice === 'an') {
                    let item = 'Ancestral Boon'

                    if (this.checkInventory(item)) {
                    this.Items = this.Items.filter(el => !el.includes(item))
                    console.log(`${this.Name} used Ancestral Boon! Defense Boost!\n`)
                    if (this.Defense === 0) this.Defense = 50
                    this.Defense = this.Defense * 2
                    this.listAttacks()
                    this.listItems()
                    rl.close()
                    console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss))    
                } else {
                        console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                        rl.close()
                        console.log(this.playerChoice(playChar, boss)) 

                    }         
                }

                //UNIQUE ATTACK ITEMS//
                else if (choice === 'shriveled head' || choice === 'sh') { //<------MAIN ATK ITEM FUNC TO BE COPIED/TEST
                    let item = 'Shriveled Head'

                    if (this.checkInventory(item)) {
                    this.Items = this.Items.filter(el => !el.includes(item))
                    console.log(`Hero used Shriveled Head! Boss takes ${Math.floor(boss.Health / 4)} damage!\n`)
                    boss.Health = boss.Health - (boss.Health / 4)
                    this.listAttacks()
                    this.listItems()
                    rl.close()
                    console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss)) 
                } else {
                    console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                    rl.close() 
                    return this.playerChoice()
                }

                }
                else if (choice === 'death' || choice === 'de') {
                    let item = 'Death'

                    if (this.checkInventory(item)) {
                    this.Items = this.Items.filter(el => !el.includes(item))
                    console.log(`Hero used ${item}! Boss takes ${Math.floor(boss.Health / 3)} damage!\n`)
                    boss.Health = boss.Health - (Math.floor(boss.Health / 3))
                    this.listAttacks()
                    this.listItems()
                    rl.close()
                    console.log(boss.bossAttackChoice(), this.playerChoice(playChar, boss)) 
                } else {
                    console.log(`${item} is not in Hero\'s Inventory! Check the Items list.\n`, this.listItems(), '\n')
                    rl.close() 
                    return this.playerChoice(playChar, boss)
                }
                
            }
            else {
                console.log('\nEnter a valid response please:\n\n To choose an "Item" or "Attack", type the selection or the first two letters of the selection and press ENTER.\n, For example, "Airstrike" or "Ai" will execute the "Airstrike" attack and damage the boss.\n "Tonic" or "To" will use the "Tonic" "Item" and add Health to the "Health" bar if the item is available.')
                    rl.close() 
                    return this.playerChoice(playChar, boss)
            }
        })
        return ''
    }
    playerDefense() {

    }

   

    
    //BOSS LOGIC//
    bossAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        let atkDmg = attacks[attack][1].filter(el => typeof el === 'number')
        console.log(`${this.Name} Attack:  ${attacks[attack][0]} depletes Hero's health by ${atkDmg} damage!\n`)
        let attackSpeech = attacks[attack][1].filter(el => typeof el === 'string')
        let speech = attackSpeech[Math.floor(Math.random() * attackSpeech.length)]
        console.log(`${speech}\n`)
        console.log(this.Name, this.getHealthBar(), '\n')
        if (player1.Health < 50) console.log('"You must be regretting your choice now, foolish mortal. To think you can kill a GOD!"')
        if (player1.Defense !== 0) {
            
            let res = player1.Defense - atkDmg
            if (res >= 0) {
                player1.Defense = player1.Defense - atkDmg
                console.log('Hero', player1.getHealthBar())
                console.log('Hero', player1.getAtkPwrBar())
                return ''
                
            }
            //defense with attack
            //player1.Health = player1.Health - (attacks[attack][1] - player1.Defense)
            player1.Defense = player1.Defense - atkDmg
            player1.Health = player1.Health + player1.Defense
            player1.Defense = 0
            console.log('Hero', player1.getHealthBar())
            console.log('Hero', player1.getAtkPwrBar())
            return ''
            

        }
        player1.Health = player1.Health - atkDmg
        console.log('Hero', player1.getHealthBar())
        console.log('Hero', player1.getAtkPwrBar())
        return ''
        
    }

    nightAttackChoice() {
        let attacks = Object.entries(this.Attacks)
        let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        let atkDmg = attacks[attack][1].filter(el => typeof el === 'number')
        console.log(`${this.Name} Attack:  ${attacks[attack][0]} depletes Hero's health by ${atkDmg} damage!\n`)
        let attackSpeech = attacks[attack][1].filter(el => typeof el === 'string')
        let speech = attackSpeech[Math.floor(Math.random() * attackSpeech.length)]
        console.log(`${speech}\n`)
        console.log(this.Name, this.getHealthBar(), '\n')
        if (player1.Health < 50) console.log('"You must be regretting your choice now, foolish mortal. To think you can kill a GOD!"')
        if (player1.Defense !== 0) {
            
            let res = player1.Defense - atkDmg
            if (res >= 0) {
                player1.Defense = player1.Defense - atkDmg
                console.log('Hero', player1.getHealthBar())
                console.log('Hero', player1.getAtkPwrBar())
                return ''
                
            }
            //defense with attack
            //player1.Health = player1.Health - (attacks[attack][1] - player1.Defense)
            player1.Defense = player1.Defense - atkDmg
            player1.Health = player1.Health + player1.Defense
            player1.Defense = 0
            console.log('Hero', player1.getHealthBar())
            console.log('Hero', player1.getAtkPwrBar())
            return ''
            

        }
        player1.Health = player1.Health - atkDmg
        console.log('Hero', player1.getHealthBar())
        console.log('Hero', player1.getAtkPwrBar())
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
        constructor(name, type, level, health,  defense, attacks, items, defenseState, atkPwr, winPhrase){
            super(name, type, level, health,  defense, attacks, items, defenseState, atkPwr)
            this.winPhrase = winPhrase
        }
    }
    
    const boss1 = new Boss('Fenrir', 'Fire', 8, 200, 25, attributes.fireAttacks)

    const nightmare = new Boss('Nightmare', 'Blood', 9, 300, 25, attributes.bloodAttacks)

    //fenrir: 'Fenrir', 'Fire', 8, 200, 25, attributes.fireAttacks, false, null, 100
    
    const player1 = new Player('Hero', 'Explosive', 7, 100, 0, attributes.explosiveAttacks, false, null, 100)

    const suluku = new Player('Suluku', 'Atrophy', 9, 150, 0, attributes.atrophyAttacks, false, null, 100)

    //player1: 'Hero', 'Explosive', 7, 85, 0, attributes.explosiveAttacks, false, null, 100

module.exports = {
    Characters,
    Boss,
    Player,
    boss1,
    player1,
    suluku
}
