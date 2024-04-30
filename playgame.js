const { boss1 } = require('./characters')
const { player1 } = require('./characters')

//set timeout story prompt!!

const playGame = (count) => { //PLAY GAME AS HELPER TO BE CALLED PER TURN
    if (count === undefined) {
        console.log('\no----(::::::::::>', '\nYOUR EPIC BOSS BATTLE BEGINS!', '\no----(::::::::::>\n')
        // console.log('')
        // console.log('o----(::::::::::>')
        setTimeout(function() {
            console.log('\n', boss1.logStats())
            console.log('o----(::::::::::>\n')

            //console.log('Boss items:', boss1.Items.join(', '))
        }, 3000)
        setTimeout(function() {
            
            console.log(player1.logStats(), '\nHero Items:\n', '\n  ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')
        }, 6000)
        
        setTimeout(function() {
            console.log('o----(::::::::::>\nGOOD LUCK, WARRIOR!\no----(::::::::::>')
        },9000)
            
        
    }
    if (player1.Health <= 40) {
        player1.playerUseHealingItem()
        
    }
    if (player1.Health <= 75) {
        
        player1.playerUseDefenseItem()
      
    }
    // if (player1.Health === Math.floor(Math.random() * player1.Health) || player1.Health <= 25) {
    //     player1.playerUseBoostItem()
    // }
    setTimeout(function() {
    console.log('\no----(::::::::::>\nNEW TURN!\no----(::::::::::>\n')
        console.log(boss1.bossAttackChoice(), player1.playerChoice())
    }, 12000);

    return
}

module.exports = {
    playGame
}