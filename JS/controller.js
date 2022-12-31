"use strict"

function addToDrawList(person) {
    if (model.inTheDraw.includes(person)) {
        return console.log(`${person} has already been added to the list`)

    } else if (model.performedDrawsHistory[model.performedDrawsHistory.length - 1].winners.length > 0) {
        return console.log("Winners of this month's wine lottery already exist")
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
        console.log("Du kan kun skrive inn tall i input feltet")
        return amountInput.value = 0
    }

    model.amountOfWinners = +amountInput.value
    model.amountOfWinnersLeft = model.amountOfWinners
}

function pickRandom() {
    if (model.inTheDraw.length === 0 || !model.amountOfWinners) {
        return console.log(`Entrants and the amount of winners are required to start the wine lottery`)
    }

    const winnerPersons = model.inTheDraw[Math.floor(Math.random() * model.inTheDraw.length)]

    model.amountOfWinnersLeft--
    console.log(`${winnerPersons} has won!`)
    removeFromDrawList(winnerPersons)
    saveDateAndWinners(winnerPersons)

    if (model.amountOfWinnersLeft <= 0 || model.inTheDraw.length === 0) {
        model.inTheDraw.length = 0
        model.amountOfWinners = 0
        model.amountOfWinnersLeft = 0
        console.log("The wine lottery is over")
        return updateView()
    }
}

function personsMenu() {
    const persons = document.getElementById("persons") // <-- Not necessary to have it here, but makes the code easier to read.

    if (persons.style.display === "none") {
        return persons.style.display = "block" 
    }

    persons.style.display = "none"
}

function performedDrawsMenu() {
    const performedDraws = document.getElementById("performedDraws") // <-- Not necessary to have it here, but makes the code easier to read.

    if (performedDraws.style.display === "none") {
        return performedDraws.style.display = "block"
    }

    performedDraws.style.display = "none"
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