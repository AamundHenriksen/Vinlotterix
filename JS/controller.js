"use strict"

function addToDrawList(person) {
    const message = document.getElementById("message") // <-- Not necessary to have it here, but makes the code easier to read.

    if (model.inTheDraw.includes(person)) {
        message.style.display = "block"
        return message.innerHTML = `${person} has already been added to the list`

    } else if (model.performedDrawsHistory[model.performedDrawsHistory.length - 1].winners.length > 0) {
        message.style.display = "block"
        return message.innerHTML = "Winners of this month's wine lottery already exist"
    }

    model.inTheDraw.push(person)
    updateView()
}

function removeFromDrawList(person) {
    const personIndex = model.inTheDraw.indexOf(person)
    model.inTheDraw.splice(personIndex, 1)
    updateView()
}

function selectAmountOfWinners(amountInput) {
    if (isNaN(amountInput.value) || amountInput.value > 5) {
        return amountInput.value = 0
    }

    model.amountOfWinners = +amountInput.value
    model.amountOfWinnersLeft = model.amountOfWinners
}

function pickRandom() {
    const message = document.getElementById("message") // <-- Not necessary to have it here, but makes the code easier to read.

    if (model.inTheDraw.length === 0 || !model.amountOfWinners) {
        message.style.display = "block"
        return message.innerHTML = `Entrants and the amount of winners are required to start the wine lottery`
    }

    const winnerPerson = model.inTheDraw[Math.floor(Math.random() * model.inTheDraw.length)]

    model.amountOfWinnersLeft--
    removeFromDrawList(winnerPerson)
    saveDateAndWinners(winnerPerson)
    updateView()

    if (model.amountOfWinnersLeft <= 0 || model.inTheDraw.length === 0) {
        model.inTheDraw.length = 0
        model.amountOfWinners = 0
        model.amountOfWinnersLeft = 0
        return updateView()
    }
}

function toggleMenu(buttonText) {
    const menu = document.getElementById("menu") // <-- Not necessary to have it here, but makes the code easier to read.

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden"
        return buttonText.innerHTML = "Show menu"
    }
    
    menu.style.visibility = "visible"
    buttonText.innerHTML = "Hide menu"
}

function saveDateAndWinners(person) {
    model.performedDrawsHistory[model.performedDrawsHistory.length - 1].date = `${model.months[model.d.getMonth()]} ${model.d.getFullYear()}:`
    model.performedDrawsHistory[model.performedDrawsHistory.length - 1].winners.push(person)
}