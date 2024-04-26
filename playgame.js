const { boss1 } = require('./characters')
const { player1 } = require('./characters')

const playGame = (count) => {
    if (count === undefined) {
        console.log('o----(::::::::::>')
        console.log('YOUR EPIC BOSS BATTLE BEGINS!')
        console.log('o----(::::::::::>')
        console.log('')
        console.log(boss1.logStats())
        console.log('Boss items:', boss1.Items.join(', '))
        console.log('')
        console.log(player1.logStats())
        console.log('Hero items:', player1.Items.join(', '))
        console.log('')
        
    }
    
    if (player1.Health <= 0) {
        console.log('o----(::::::::::>')
        console.log ('YOU LOSE!')
        console.log('o----(::::::::::>')
        console.log('') 
        return 'YOU LOSE!'
    }
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
    if (boss1.Health <= 0) {
        console.log('o----(::::::::::>')
        console.log ('YOU HAVE EMERGED TRIUMPHANT, HERO!') 
        console.log('o----(::::::::::>')
        console.log('')

        return 'YOU HAVE EMERGED TRIUMPHANT, HERO!'
    }

    console.log('o----(::::::::::>')
    
    console.log(player1.playerAttackChoice(), boss1.bossAttackChoice())

    
    console.log('o----(::::::::::>')
    console.log('')
    console.log(boss1.logStats())
    console.log('Boss items:', boss1.Items.join(', '))
    console.log('')
    console.log(player1.logStats())
    console.log('Hero items:', player1.Items.join(', '))
    console.log('')
    
    return playGame(count + 1)

}

module.exports = {
    playGame
}