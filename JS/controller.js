"use strict"

function leggTilPåTrekningLista(ansatt) {
    if (medPåTrekningen.includes(ansatt)) {
        return console.log(`${ansatt} er allerede lagt til på lista`)
    }
    medPåTrekningen.push(ansatt)
    updateView()
}

function fjernFraTrekningLista(ansatt) {
    const ansattIndeks = medPåTrekningen.indexOf(ansatt)
    medPåTrekningen.splice(ansattIndeks, 1)
    updateView()
}

function velgAntallVinnere(antall) {
    antallVinnere = antall
    antallVinnereIgjen = antallVinnere
}

function plukkTilfeldig() {
    if (medPåTrekningen.length === 0 || antallVinnere === "") {
        return console.log(`Påmeldte og antall vinnere er nødvendig for å begynne`)
    } 

    const vinnerAnsatte = medPåTrekningen[Math.floor(Math.random() * medPåTrekningen.length)]

    antallVinnereIgjen--
    console.log(`${vinnerAnsatte} har vunnet!`)
    fjernFraTrekningLista(vinnerAnsatte)
    lagreDatoOgVinnere(vinnerAnsatte)

    if (antallVinnereIgjen === 0 || medPåTrekningen.length === 0) {
        medPåTrekningen.length = 0
        antallVinnere = ""
        antallVinnereIgjen = ""
        console.log("Vinlotteriet er ferdig")
        return updateView()
    }
}

function menneskerMeny() {
    const mennesker = document.getElementById("mennesker") // <-- Ikke nødvendig å ha de her, men gjør det lettere å lese koden.
    const utførteTrekninger = document.getElementById("utførteTrekninger")

    if (mennesker.style.display === "block") {
        mennesker.style.display = "none"
        return 
    }

    mennesker.style.display = "block"
    utførteTrekninger.style.display = "none"
}

function utførteTrekningerMeny() {
    const utførteTrekninger = document.getElementById("utførteTrekninger")
    const mennesker = document.getElementById("mennesker") // <-- Ikke nødvendig å ha de her, men gjør det lettere å lese koden.

    if (utførteTrekninger.style.display === "block") {
        utførteTrekninger.style.display = "none"
        return 
    }

    utførteTrekninger.style.display = "block" 
    mennesker.style.display = "none"
}

function toggleMeny() {
    const meny = document.getElementById("meny") // <-- Ikke nødvendig å ha den her, men gjør det lettere å lese koden.

    if (meny.style.visibility === "visible") {
        meny.style.visibility = "hidden"
        return
    }
    
    meny.style.visibility = "visible"
}

function lagreDatoOgVinnere(ansatt) {
    utførteTrekningerHistorikk[utførteTrekningerHistorikk.length - 1].dato = `${måneder[d.getMonth()]} ${d.getFullYear()}:`
    utførteTrekningerHistorikk[utførteTrekningerHistorikk.length - 1].vinnere.push(ansatt)
}