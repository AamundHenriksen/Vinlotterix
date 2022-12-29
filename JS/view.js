"use strict"

updateView() 
function updateView() {
    let html = ""

    html += `
    <div class="container">
        <div id="meny" style="visibility:visible">
            <div>
                <h1 onclick="personerMeny()">Personer</h1>
                <ul id="personer">
                `
                    for (let i = 0; i < personerListe.length; i++) {
                        html += `<li onclick="leggTilPåTrekningLista(this.innerHTML)">${personerListe[i]}</li>`
                    }
            
                html += `
                </ul>
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

        <button onclick="toggleMeny(this)">Skjul meny</button>
        <div class="vinlotteri-oppsett">

            <div class="påmeldte">
                <h2>Påmeldte:</h2>
                <ul>`
                    for (let i = 0; i < medPåTrekningen.length; i++) {
                        html += `<li onclick="fjernFraTrekningLista(this.innerHTML)">${medPåTrekningen[i]}</li>`
                    }
            html += `
                </ul>

            </div>

            <div class="antall-vinnere">
                <h2>Velg antall vinnere (1-9):</h2>
                <input type="text" oninput="velgAntallVinnere(this)" maxlength=1 value="${antallVinnere}">
            </div>

            <button onclick="plukkTilfeldig()">Plukk tilfeldig</button>

        </div>
    </div>
    `
    app.innerHTML = html
}