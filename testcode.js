   //-----BATTLE LOGIC-----//
    //if attacking run an attac method on the oppostion
    //if defending run a defense method on self
    
    //recursively attack and run logic until first health string is at a length of 0 or less
    
    //set timeout for when defense becomes true and character will defend on next turn

  
  
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


    ///IF READLINE === "CERTAIN LEVEL" CONSTRUCT BOSS1 WITH X ATTRIBUTES/PARAMETERS


    // const playGame = (count) => { //PLAY GAME AS HELPER TO BE CALLED PER TURN
    //   if (count === undefined) {
    //       console.log('o----(::::::::::>')
    //       console.log('YOUR EPIC BOSS BATTLE BEGINS!')
    //       console.log('o----(::::::::::>')
    //       console.log('')
    //       console.log(boss1.logStats())
    //       //console.log('Boss items:', boss1.Items.join(', '))
    //       console.log('')
    //       console.log(player1.logStats())
    //       console.log('Hero items:', player1.Items.join(', '))
    //       console.log('')
          
      // }
      
      // if (player1.Health <= 0) {
      //     rl.close()
      //     console.log('o----(::::::::::>')
      //     console.log ('YOU LOSE!')
      //     console.log('o----(::::::::::>')
      //     console.log('') 
          
      //     return 'YOU LOSE!'
      // }
      // if (player1.Health <= 40) {
      //     player1.playerUseHealingItem()
      //     //console.log(player1.Items)
      // }
      // if (player1.Health <= 75) {
          
      //     player1.playerUseDefenseItem()
      //     //console.log(player1.Items)
      // }
      // if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
      //     player1.playerUseBoostItem()
      // }
      // if (boss1.Health <= 0) {
      //     rl.close()
      //     console.log('o----(::::::::::>')
      //     console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
      //     console.log('o----(::::::::::>')
      //     console.log('')
  
      //     return 'YOU HAVE EMERGED TRIUMPHANT, HERO!'
      // }
  
      // console.log(boss1.bossAttackChoice(), player1.playerChoice(), )
      //console.log(player1.playerUseHealingItem())
      
      
  //     // console.log(boss1.logStats())
  //     // console.log(player1.logStats())
      
  
  
  //     // console.log('o----(::::::::::>')
      
  //     // console.log(player1.playerAttackChoice(), boss1.bossAttackChoice())
  
      
  //     // console.log('o----(::::::::::>')
  //     // console.log('')
  //     // console.log(boss1.logStats())
  //     // console.log('Boss items:', boss1.Items.join(', '))
  //     // console.log('')
  //     // console.log(player1.logStats())
  //     // console.log('Hero items:', player1.Items.join(', '))
  //     // console.log('')
      
  //     return
  
  // }
  
  // const playTurn = () => {
              
  //             if (player1.Health <= 40) {
  //                 player1.playerUseHealingItem()
  //                 //console.log(player1.Items)
  //             }
  //             if (player1.Health <= 75) {
                  
  //                 player1.playerUseDefenseItem()
  //                 //console.log(player1.Items)
  //             }
  //             if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
  //                 player1.playerUseBoostItem()
  //             }
              
          
  //             console.log(boss1.bossAttackChoice(), player1.playerAttackChoice(), )
              
  //             return
  // }
  
  // const playGame = () => {
  
  //     if (player1.Health <= 0) {
  //         console.log('o----(::::::::::>')
  //         console.log ('YOU LOSE!')
  //         console.log('o----(::::::::::>')
  //         console.log('') 
  //         return 'YOU LOSE!'
  //     }
  //     else if (boss1.Health <= 0) {
  //         console.log('o----(::::::::::>')
  //         console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
  //         console.log('o----(::::::::::>')
  //         console.log('')
  
  //         return 'YOU HAVE EMERGED TRIUMPHANT, HERO!'
  //     }
  //     playTurn()
  
  //     return playGame()
  // }


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
     //OLD BAR CODE
    // getDefenseBar() {
    //     let arr = []
    //     for (let i = 0; i <= this.Defense; i++) {
    //         arr.push('|')
    //     } 
    //     return `Defense: ${arr.join('')}`
    // }

    // let attacks = Object.entries(this.Attacks)
        // let attack = Math.floor(Math.random() * Object.keys(this.Attacks).length)
        // console.log(`Player Attack: ${attacks[attack][0]}`)
        // return boss1.Health = boss1.Health - attacks[attack][1]

// const defenseScript = (item) => {
//         if (this.checkInventory('Immovable Object')) {
//           this.defItemUse('Immovable Object')

//       //console.log('Hero', player1.getDefenseBar(75))
//           rl.close()
//           console.log(boss1.bossAttackChoice(), this.playerChoice())  
//       } 
//       else  {
//           console.log(`Immovable Object is not in Hero\'s Inventory! Check the Items list.\n`, this.Items.join(', '), '\n')
//           rl.close()
//           console.log(this.playerChoice()) 
//           }
//         }

// function defItemUse(item) {
//       this.Items.splice(this.Items.indexOf(item), 1)
//       this.Defense = this.Defense + 75
//       console.log('\nHero used Immovable Object! Defense +75!\n')
//       console.log('Hero Attacks:', Object.keys(this.Attacks).join(', '))
//       console.log('Hero Items:', this.Items.join(', '), '\n')
// }

function editListString(str) {
  let itemList = []
  let strArr = str.split('')
  for (let letter of strArr) {
      if (letter === ",") itemList.push('+')
      else itemList.push(letter)
  }
  return itemList.join('')

}

console.log(editListString('I love, rock and r,oll')) //=> I love+ rock and r+oll




// let attack = 'RPG'

                    
                    // if (this.AtkPwr <= 0) {
                    //     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[Object.keys(player1.Attacks).indexOf(attack)] / 2)
                    //     this.AtkPwr = this.AtkPwr - (Object.values(this.Attacks)[0] / 2)
                    // console.log(`\nHero used RPG! ${boss1.Name} takes ${Object.values(this.Attacks)[0] / 2} damage!\n`, '\nSweet, sweet, Destruction!\n')

                    // } else {
                    // boss1.Health = boss1.Health - (Object.values(player1.Attacks)[0])
                    // this.AtkPwr = this.AtkPwr - (Object.values(this.Attacks)[0])
                    // console.log(`\nHero used RPG! ${boss1.Name} takes ${Object.values(this.Attacks)[Object.keys(player1.Attacks).indexOf(attack)]} damage!\n`, '\nSweet, sweet, Destruction!\n')

                    // }
                    
                    // console.log('Boss', boss1.getHealthBar(), '\n', '\no----(::::::::::>\n', 'NEW TURN!\no----(::::::::::>\n')
                    // console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    // console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')

                    //console.log(boss1.bossAttackChoice(), this.playerChoice())

                    // if (this.AtkPwr <= 0) {
                    //     boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1] / 2)
                    //     this.AtkPwr = this.AtkPwr - (Object.values(this.Attacks)[1] / 2)
                    // console.log(`\nHero used Airstrike! ${boss1.Name} takes ${Object.values(this.Attacks)[1] / 2} damage!\n`, '\nSpreading Democracy!\n')

                    // } else {
                    // boss1.Health = boss1.Health - (Object.values(player1.Attacks)[1])
                    // this.AtkPwr = this.AtkPwr - (Object.values(this.Attacks)[1])
                    // console.log(`\nHero used Airstrike! ${boss1.Name} takes ${Object.values(this.Attacks)[1]} damage!\n`, '\nSpreading Democracy!\n')

                    // }
                    
                    // console.log('Boss', boss1.getHealthBar(), '\n', '\no----(::::::::::>\n', 'NEW TURN!\no----(::::::::::>\n')

                     // console.log(boss1.bossAttackChoice(), this.playerChoice())
                    // console.log('Hero Attacks:\n', '\n', Object.entries(this.Attacks).map(item => ' ' + item[0] + ': ' + item[1] + ' AtkPwr').join(' |'))
                    // console.log('\nHero Items:\n', '\n ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')))




                        // if (player1.Health <= 40) {      //Randomized game condtions
    //     player1.playerUseHealingItem()
        
    // }
    // if (player1.Health <= 75) {
        
    //     player1.playerUseDefenseItem()
      
    // }
    // if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
    //     player1.playerUseBoostItem()
    // }

     // console.log(player1.getItems())
    // console.log(player1.Items)
    // console.log(player1.useItem())
    // console.log(25 % boss1.bossAttackChoice())
    //console.log(Object.values(player1.Attacks)[0])
    // console.log(player1)
//   console.log(player1.Items)
// console.log(player1.Attacks)
// console.log(player1.Attacks)

//   console.log(player1.Items.indexOf('Tonic'))
    // console.log((player1.Items.filter(el => el.includes('Immovable Object')))[0][1])


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


                    // console.log('\nEnter a valid response please:\n', '\n RPG\n', 'Airstrike\n', 'Grenade\n', 
                    //             'Laser Strike\n', 'Precision Strike\n', 'Mortar\n', 'Herbs\n', 'Tonic\n', 
                    //             'Suluku\'s Blessing\n', 'Bark Shield\n', 'Steel Shield\n', 'Immovable Object\n',
                    //             'Ancestral Boon\n', 'Shriveled Head\n')

                  //   playerUseDefenseItem() {
                  //     for (let item of this.Items) {
                  //         //console.log(this.Items)
                  //              //DEFENSE ITEMS//
                  //              if (item === 'Bark Shield') {
                  //                  this.Items.splice(this.Items.indexOf(item), 1)
                  //                  player1.Defense = player1.Defense + 25
                  //                  console.log('Hero used Bark Shield! Defense +25!')
                  //                  console.log('Hero', player1.getDefenseBar(25)) 
                  //                  console.log('')
                  //                  return player1.DefenseState = true
                                   
                  //              } else if (item === 'Steel Shield') {
                  //                  this.Items.splice(this.Items.indexOf(item), 1)
                  //                  player1.Defense = player1.Defense + 50
                  //                  console.log('Hero used Steel Shield! Defense +50!')
                  //                  console.log('Hero', player1.getDefenseBar(50))
                  //                  console.log('')
                  //                  return player1.DefenseState = true
              
                  //              } else if (item === 'Immovable Object') {
                  //                  this.Items.splice(this.Items.indexOf(item), 1)
                  //                  player1.Defense = player1.Defense + 75
                  //                  console.log('Hero used Immovable Object! Defense +75!')
                  //                  console.log('Hero', player1.getDefenseBar(75))
                  //                  console.log('')
                  //                  return player1.DefenseState = true
              
                  //              }
                  //          }   
                  // }

                  // playerUseBoostItem() {
                  //   for (let item of this.Items) {
                  //       //console.log(this.Items)
                  //            //BOOST ITEMS//
                  //           if (item === 'Ancestral Boon') {
                  //                this.Items.splice(this.Items.indexOf(item), 1)
                  //                if (player1.Defense === 0) {
                  //                   console.log('Hero used Ancestral Boon! Defense Boost!')
                  //                   console.log('')
                  //                   return player1.Defense = player1.Defense + 50
                                    
                  //                }
                                 
                                
                  //                console.log('Hero used Ancestral Boon! Defense Boost!')
                  //                console.log('')
                  //                console.log('Hero', player1.getDefenseBar(player1.Defense + player1.Defense)) 
                                 
                  //                return player1.Defense = player1.Defense * 2
                  //           }
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
            
                //             //      return player1.DefenseState = true   
                //     }   
                // }

                // this.Items.splice(this.Items.indexOf('Steel Shield'), 1)
                    // player1.Defense = player1.Defense + 50
                    // console.log('\nHero used Steel Shield! Defense +50!\n')
                    // this.listAttacks()
                    // this.listItems()
                    //this.Items.splice(this.Items.indexOf('Herbs'), 1)
                    // this.Items = this.Items.filter(el => !el.includes('Herbs'))

                    // player1.Health = player1.Health + 25
                    // console.log('\nHero used Herbs! Health +25!\n')
                    // //console.log(this.Items.join(', '))
                    // this.listAttacks()
                    // this.listItems()
                    //console.log('Hero', player1.getHealthBar()) 