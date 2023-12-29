// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard = 2
let secondCard = 11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")

// another more powerful tool is using querySelector instead of get ElementbyID
// the . means for a class and the # means by ID
let sumEl = document.querySelector(".sum-el")


function startGame()
{
    cardEl.textContent = "Cards: " + firstCard + " , " + secondCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard()
{
    let newCard = 8

    //Adds new card to sum
    sum += newCard

    startGame()
}