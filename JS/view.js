"use strict"

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
            <ul id="utførteTrekninger" style="display:none">`
                for (let i = 0; i < utførteTrekningerHistorikk.length; i++) {
                    html += `<li>${utførteTrekningerHistorikk[i].dato} ${utførteTrekningerHistorikk[i].vinnere.join(", ")}</li>`
                }
            html += `
            </ul>
        </div>
    </div>

    <button onclick="toggleMeny()">Lukk meny</button>
    
    <ul>
    `
        for (let i = 0; i < ansatte.length; i++) {
            html += `<li onclick="leggTilPåTrekningLista(this.innerHTML)">${ansatte[i]}</li>`
        }

    html += `
    </ul>

    <div id="påmeldtListe">
        <h1>Påmeldte:</h1>
        <ul>`
            for (let i = 0; i < medPåTrekningen.length; i++) {
                html += `<li onclick="fjernFraTrekningLista(this.innerHTML)">${medPåTrekningen[i]}</li>`
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