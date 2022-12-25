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

// View
updateView() 
function updateView() {
    let html = ""

    html += `
    <div class="meny">
        <div id="mennesker" onclick="toggleMenu()">
            <h1>Mennesker</h1>
        </div>

        <div id="utførteTrekninger" onclick="toggleMenu()">
            <h1>Utførte trekninger</h1>
        </div>
    </div>
    
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
    <input type="number" min=1 max=3 style="width:50px" value=1> <br>

    <button onclick="delUtTilfeldigTall()">Del ut tilfeldig tall</button>
    `

    app.innerHTML = html
}

// Controller
function leggTilPåLista(ansatt) {
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
}

function delUtTilfeldigTall() {
    const tallEn = Math.floor(Math.random() * 10) + 1
    const tallTo = Math.floor(Math.random() * 10) + 1
    const tallTre = Math.floor(Math.random() * 10) + 1
    const vinnerTall = `${tallEn} ${tallTo} ${tallTre}`
    const vinnerAnsatte = medPåTrekningen[Math.floor(Math.random() * medPåTrekningen.length)]
    console.log(tallEn)
    console.log(tallTo)
    console.log(tallTre)
    console.log(vinnerAnsatte)
}

