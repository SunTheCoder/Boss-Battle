const { boss1 } = require('./characters')
const { player1 } = require('./characters')

const playGame = (count) => { //PLAY GAME AS HELPER TO BE CALLED PER TURN
    //INTRO
    if (count === undefined) {
        console.log('\no----(::::::::::>', '\nYOUR EPIC BOSS BATTLE BEGINS!', '\no----(::::::::::>\n')
        // console.log('')
        // console.log('o----(::::::::::>')
        setTimeout(function() {
            console.log('...\n')
        }, 3000)
        setTimeout(function() {
            console.log('...\n')
        }, 6000)
        setTimeout(function() {
            console.log('...\n')
        }, 9000)
        setTimeout(function() {
            console.log('You have traveled far...\n')
        }, 12000)
        setTimeout(function() {
            console.log('Sacrificing much of who you thought you were to get here...\n')
        }, 16000)
        setTimeout(function() {
            console.log('NOW! The greatest threat to all that lives is before you...\n')
        }, 20000)
        setTimeout(function() {
            console.log('Will you triumph?\n')
        }, 24000)
        setTimeout(function() {
            console.log(`${boss1.Name} is approaching...\n`)
        }, 30000)
         setTimeout(function() {
            console.log('...\n')
        }, 34000)
         setTimeout(function() {
            console.log('...\n')
        }, 38000)
         setTimeout(function() {
            console.log('...\n')
        }, 42000)
        setTimeout(function() {
            console.log('\n', boss1.logStats())
            console.log('o----(::::::::::>\n')

            //console.log('Boss items:', boss1.Items.join(', '))
        }, 46000)
        setTimeout(function() {
            
            console.log(player1.logStats(), '\nHero Items:\n', '\n  ', player1.editListString(player1.Items.map(item => item[0] + ': ' + item[1]).join(' | ')), '\n')
        }, 50000)
        
        setTimeout(function() {
            console.log('o----(::::::::::>\nGOOD LUCK, WARRIOR!\no----(::::::::::>')
        }, 54000)
    }

    setTimeout(function() {
    console.log('\no----(::::::::::>\nNEW TURN!\no----(::::::::::>\n')
        console.log(boss1.bossAttackChoice(), player1.playerChoice())
    }, 58000);

    return
}

module.exports = {
    playGame
}