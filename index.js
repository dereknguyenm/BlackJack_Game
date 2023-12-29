// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard = 2
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""


function startGame()
{
    // 2. Reassign the message variable to the string we're logging out
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
}



// 3. Log it out!
console.log(message)