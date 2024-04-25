const { boss1 } = require('./characters')
const { player1 } = require('./characters')

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

module.exports = {
    playGame
}