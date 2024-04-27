const { boss1 } = require('./characters')
const { player1 } = require('./characters')
//set timeout story prompt!!
const playGame = (count) => { //PLAY GAME AS HELPER TO BE CALLED PER TURN
    if (count === undefined) {
        console.log('\no----(::::::::::>', '\nYOUR EPIC BOSS BATTLE BEGINS!', '\no----(::::::::::>\n')
        // console.log('')
        // console.log('o----(::::::::::>')
        console.log('\n', boss1.logStats())
        //console.log('Boss items:', boss1.Items.join(', '))
        console.log(player1.logStats(), 'Hero Items:', player1.Items.join(', '), '\n', '\no----(::::::::::>\n')
        
    }
    if (player1.Health <= 40) {
        player1.playerUseHealingItem()
        
    }
    if (player1.Health <= 75) {
        
        player1.playerUseDefenseItem()
      
    }
    if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
        player1.playerUseBoostItem()
    }
    console.log(boss1.bossAttackChoice(), player1.playerChoice())

    return
}

module.exports = {
    playGame
}