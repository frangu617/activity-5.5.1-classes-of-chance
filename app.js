class Casino {
    // Write code here
    constructor(name, fakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.fakeCoin = fakeCoin;
    }
    playGame(betAmount) {
        if (Math.random() <= 0.5 || this.fakeCoin) {
            console.log(`${this.name} wins!`)
        }
        else {
            console.log(`You won ${betAmount * (this.timesPlayed + 1)}!`)
        }
        this.timesPlayed++;
    }
};

// TESTS
const myCasino = new Casino("Royal Casino", false);
console.log(myCasino);
myCasino.playGame(5);
console.log(`times played ${myCasino.timesPlayed}`)
myCasino.playGame(15);
console.log(`times played ${myCasino.timesPlayed}`)
myCasino.playGame(25);
console.log(`times played ${myCasino.timesPlayed}`)
myCasino.playGame(35);
console.log(`times played ${myCasino.timesPlayed}`)

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
