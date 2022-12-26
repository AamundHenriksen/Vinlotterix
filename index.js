"use strict"

// Model
const app = document.getElementById("app")
const ansatte = [
    "Åmund",
    "Exi",
    "Ben",
    "Loe",
    "Sondre",
    "Herman"
]
const medPåTrekningen = []
let antallVinnere = ""
let antallVinnereIgjen = ""

// View
updateView() 
function updateView() {
    let html = ""

    html += `
    <div id="meny" style="visibility:visible">
        <div>
            <h1 onclick="menneskerMeny()">Mennesker</h1>
            <p id="mennesker" style="display:none">Mennesker test</p>
        </div>

        <div>
            <h1 onclick="utførteTrekningerMeny()">Utførte trekninger</h1>
            <p id="utførteTrekninger" style="display:none">Utførte trekninger test</p>
        </div>
    </div>

    <button onclick="toggleMeny()">Lukk meny</button>
    
    <ul>
    `
        for (let i = 0; i < ansatte.length; i++) {
            html += `<li onclick="leggTilPåLista(this.innerHTML)">${ansatte[i]}</li>`
        }

    html += `
    </ul>

    <div id="påmeldtListe">
        <h1>Påmeldte:</h1>
        <ul>`
            for (let i = 0; i < medPåTrekningen.length; i++) {
                html += `<li onclick="fjernFraLista(this.innerHTML)">${medPåTrekningen[i]}</li>`
            }
    html += `
        </ul>

    </div>

    <h1>Velg antall vinnere:</h1>
    <input type="number" oninput="velgAntallVinnere(this.value)" min=0 max=5 style="width:50px" value=${antallVinnere}> <br>

    <button onclick="plukkTilfeldig()">Plukk tilfeldig</button>
    `

    app.innerHTML = html
}

// Controller
function leggTilPåLista(ansatt) {
    if (medPåTrekningen.includes(ansatt)) {
        return console.log(`${ansatt} er allerede lagt til på lista`)
    }
    medPåTrekningen.push(ansatt)
    updateView()
}

function fjernFraLista(ansatt) {
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

    const vinnerAnsatt = medPåTrekningen[Math.floor(Math.random() * medPåTrekningen.length)]

    antallVinnereIgjen--
    console.log(`${vinnerAnsatt} har vunnet!`)
    fjernFraLista(vinnerAnsatt)

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
