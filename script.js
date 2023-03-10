/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let p1attack = document.getElementById('attack1')
let p2attack = document.getElementById('attack2')
let p1heal = document.getElementById('heal1')
let p2heal = document.getElementById('heal2')
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
alert("This game can be accessed on both PC and mobile devices. On PC, Player 1 can use the keys 'Q' to attack and 'A' to heal, while Player 2 can use the keys 'P' to attack and 'L' to heal. On mobile devices, the game can be played in horizontal mode by using touch input.");

let name1 = prompt("enter player1 name")
let name2 = prompt("enter player2 name")
// let name1 = ""
// let name2 = ""
// ** Check if either players health is  0 and if it is, then update isOver to true **

const updateGame = (p1, p2, gameState) => {
    // Update the DOM with the names and the latest health of players


    p1HealthDiv.innerText = p1.health
    p2HealthDiv.innerText = p2.health
    if (p1.health <= 0 || p2.health <= 0) {
        game.isOver = true;
        gameState = game.isOver;
        result.innerText = game.declareWinner(game.isOver, p1, p2)
    }
    return gameState;

    // Condition IF either player health is <= 0 then set isOver to true and declareWinner

}

//updateGame(0,0,true)

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDmg = attackDamage;
    }
    // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
    strike(player, enemy, attackDmg) {
        const damageAmount = Math.ceil(Math.random() * attackDmg)
        enemy.health -= damageAmount
        updateGame(p1, p2, game.isOver)
        return `${player.name} attacks ${enemy.name} for ${damageAmount}`


        // Get random number between 1 - 10 and that is damageAmount

        // Subtract the enemy health with the damageAmount

        //  Update the game and DOM with updateGame()

        //  Return a message of 'player name attacks enemy name for damageAmount'

    }
    // ** Heal the player for random number from  1 to 5 **
    heal(player) {

        let hpamount = Math.ceil(Math.random() * 5)

        player.health += hpamount

        updateGame(player, p2, game.isOver)

        return ` ${player.name} heals for ${hpamount} Hp`


        // Get random number between 1 - 5 and store that in hpAmount

        // Add hpAmount to players health

        //  Update the game and DOM with updateGame()

        //  Return a message of 'player name heals for hpAmount HP'

    }
}

// ** Create the Game class with all it's attributes and methods to run a match **
// game = new Game()
// game.isOver 👉 false
class Game {
    constructor() {
        this.isOver = false;
    }

    // ** If the game is over and a player has 0 health declare the winner! **
    declareWinner(isOver, p1, p2) {

        // Create a message variable that will hold a message based on the condition
        let message = "tie";
        if (isOver == true && p1.health <= 0) {
            message = `${p2.name} Wins`
        } else if (isOver == true && p2.health <= 0) {
            message = `${p1.name} Wins`
        }
        // If isOver is true AND p1 health is <= 0 then update message variable  to 'p1 WINS!'

        // Else if isOver is true AND p2 health is <= 0 then update message variable  to 'p2 WINS!'
        // Play victory sound
        document.getElementById("victory").play()
        // Return message variable 
        return message
    }

    // ** Reset the players health back to it's original state and isOver to FALSE **
    reset(p1, p2) {
        // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()
        p1.health = 100
        p2.health = 100
        this.isOver = false
        resultDiv.innerText = ''
        updateGame(p1, p2,this.isOver)
    }

    // ** Simulates the whole match untill one player runs out of health **
    play(p1, p2) {
        // Reset to make sure player health is back to full before starting
        this.reset(p1, p2);
        // Make sure the players take turns untill isOver is TRUE
        while (!this.isOver) {
            //Make sure both players get strike() and heal() once each loop
            p1.strike(p1, p2, p1.attackDmg)
            p2.strike(p2, p1, p2.attackDmg)
            p1.heal(p1)
            p2.heal(p2)
        }
       return this.declareWinner(this.isOver, p1, p2)
       
        // Once isOver is TRUE run the declareWinner() method 

    }

}

// ** Create 2 players using the player class **
let player1 = new Player(name1, 100, 10)
let player2 = new Player(name2, 100, 10)
//console.log(player1.name)

// ** Save original Player Data into a variable in order to reset **
let p1 = player1;
let p2 = player2;
p1NameDiv.innerText += ` ${p1.name}`
p2NameDiv.innerText += ` ${p2.name}`

// ** Create the game object from the Game class **
let game = new Game()
updateGame(p1, p2, Game.isOver)
console.log(game)
// ** Intialize the game by calling updateGame() **


// ** Save intial isOver from the game object inside this variable **
let gameState;

playButton.onclick = () => result.innerText = game.play(p1,p2)
// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
    // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
    if (e.key == 'q' && p2.health > 0 && game.isOver == false) {
        p1.strike(p1, p2, p1.attackDmg)
        document.getElementById('p1attack').play()
    }
    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {

    // if you press a AND the player health is greater than 0 AND isOver is still false then strike()
    if (e.key == 'a' && p2.health > 0 && game.isOver == false) {
        p1.heal(p1)
        document.getElementById('p1heal').play()
    }

    // After healing then play heal sound

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {

    // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
    if (e.key == 'p' && p1.health > 0 && game.isOver == false) {
        p2.strike(p2, p1, p2.attackDmg)
        document.getElementById('p2attack').play()
    }
    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
    // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
    if (e.key == 'l' && p1.health > 0 && game.isOver == false) {
        p2.heal(p2)
        document.getElementById('p2heal').play()
    }
    // After healing then play heal sound

});


// ** Player 1 Controls **
p1attack.addEventListener('click', function() {
    // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
    if ( p2.health > 0 && game.isOver == false) {
        p1.strike(p1, p2, p1.attackDmg)
        document.getElementById('p1attack').play()
    }
    // After striking then play attack sound

});

p1heal.addEventListener('click', function() {

    // if you press a AND the player health is greater than 0 AND isOver is still false then strike()
    if ( p2.health > 0 && game.isOver == false) {
        p1.heal(p1)
        document.getElementById('p1heal').play()
    }

    // After healing then play heal sound

});

// ** Player 2 Controls **
p2attack.addEventListener('click', function() {

    // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
    if (  p1.health > 0 && game.isOver == false) {
        p2.strike(p2, p1, p2.attackDmg)
        document.getElementById('p2attack').play()
    }
    // After striking then play attack sound

});

p2heal.addEventListener('click', function() {
    // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
    if (p1.health > 0 && game.isOver == false) {
        p2.heal(p2)
        document.getElementById('p2heal').play()
    }
    // After healing then play heal sound

});


