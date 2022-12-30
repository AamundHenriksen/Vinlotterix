"use strict"

function leggTilPåTrekningLista(ansatt) {
    if (medPåTrekningen.includes(ansatt)) {
        return console.log(`${ansatt} er allerede lagt til på lista`)

    } else if (utførteTrekningerHistorikk[utførteTrekningerHistorikk.length - 1].vinnere.length > 0) {
        return console.log("Vinnere av vinlotteriet denne måneden finnes allerede")
    }
    
    medPåTrekningen.push(ansatt)
    updateView()
}

function fjernFraTrekningLista(ansatt) {
    const ansattIndeks = medPåTrekningen.indexOf(ansatt)
    medPåTrekningen.splice(ansattIndeks, 1)
    updateView()
}

function velgAntallVinnere(antallInput) {
    if (isNaN(antallInput.value) || antallInput.value > 5) {
        console.log("Du kan kun skrive inn tall i input feltet")
        return antallInput.value = 0
    }

    antallVinnere = +antallInput.value
    antallVinnereIgjen = antallVinnere
}

function plukkTilfeldig() {
    if (medPåTrekningen.length === 0 || !antallVinnere) {
        return console.log(`Påmeldte og antall vinnere er nødvendig for å starte vinlotteriet`)
    }

    const vinnerAnsatte = medPåTrekningen[Math.floor(Math.random() * medPåTrekningen.length)]

    antallVinnereIgjen--
    console.log(`${vinnerAnsatte} har vunnet!`)
    fjernFraTrekningLista(vinnerAnsatte)
    lagreDatoOgVinnere(vinnerAnsatte)

    if (antallVinnereIgjen <= 0 || medPåTrekningen.length === 0) {
        medPåTrekningen.length = 0
        antallVinnere = 0
        antallVinnereIgjen = 0
        console.log("Vinlotteriet er ferdig")
        return updateView()
    }
}

function personerMeny() {
    const personer = document.getElementById("personer") // <-- Ikke nødvendig å ha den her, men gjør det lettere å lese koden.

    if (personer.style.display === "none") {
        return personer.style.display = "block" 
    }

    personer.style.display = "none"
}

function utførteTrekningerMeny() {
    const utførteTrekninger = document.getElementById("utførteTrekninger") // <-- Ikke nødvendig å ha den her, men gjør det lettere å lese koden.

    if (utførteTrekninger.style.display === "none") {
        return utførteTrekninger.style.display = "block"
    }

    utførteTrekninger.style.display = "none"
}

function toggleMeny(knappeTekst) {
    const meny = document.getElementById("meny") // <-- Ikke nødvendig å ha den her, men gjør det lettere å lese koden.

    if (meny.style.visibility === "visible") {
        meny.style.visibility = "hidden"
        knappeTekst.innerHTML = "Vis meny"
        return
    }
    
    meny.style.visibility = "visible"
    knappeTekst.innerHTML = "Skjul meny"
}

function lagreDatoOgVinnere(person) {
    utførteTrekningerHistorikk[utførteTrekningerHistorikk.length - 1].dato = `${måneder[d.getMonth()]} ${d.getFullYear()}:`
    utførteTrekningerHistorikk[utførteTrekningerHistorikk.length - 1].vinnere.push(person)
}