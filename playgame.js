const { boss1 } = require('./characters')
const { player1 } = require('./characters')

//const readline = require('readline');

const playGame = (count) => { //PLAY GAME AS HELPER TO BE CALLED PER TURN
    if (count === undefined) {
        console.log('o----(::::::::::>')
        console.log('YOUR EPIC BOSS BATTLE BEGINS!')
        console.log('o----(::::::::::>')
        console.log('')
        console.log(boss1.logStats())
        //console.log('Boss items:', boss1.Items.join(', '))
        console.log('')
        console.log(player1.logStats())
        console.log('Hero items:', player1.Items.join(', '))
        console.log('')
        
    }
    
    // if (player1.Health <= 0) {
    //     rl.close()
    //     console.log('o----(::::::::::>')
    //     console.log ('YOU LOSE!')
    //     console.log('o----(::::::::::>')
    //     console.log('') 
        
    //     return 'YOU LOSE!'
    // }
    if (player1.Health <= 40) {
        player1.playerUseHealingItem()
        //console.log(player1.Items)
    }
    if (player1.Health <= 75) {
        
        player1.playerUseDefenseItem()
        //console.log(player1.Items)
    }
    if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
        player1.playerUseBoostItem()
    }
    // if (boss1.Health <= 0) {
    //     rl.close()
    //     console.log('o----(::::::::::>')
    //     console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
    //     console.log('o----(::::::::::>')
    //     console.log('')

    //     return 'YOU HAVE EMERGED TRIUMPHANT, HERO!'
    // }

    console.log(boss1.bossAttackChoice(), player1.playerChoice(), )
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
    
    return

}

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

module.exports = {
    playGame
}