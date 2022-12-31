"use strict"

updateView() 
function updateView() {
    let html = ""

    html += `
    <div class="container">

        <div class="wine-lottery-setup">

            <div class="entrants">
                <h2>Entrants:</h2>
                <ul>`
                    for (let i = 0; i < model.inTheDraw.length; i++) {
                        html += `<li onclick="removeFromDrawList(this.innerHTML)">${model.inTheDraw[i]}</li>`
                    }
            html += `
                </ul>

            </div>

            <div class="amount-of-winners">
                <h2>Select amount of winners (1-5):</h2>
                <input type="text" oninput="selectAmountOfWinners(this)" maxlength=1 value="${model.amountOfWinners}">
            </div>

            <button onclick="pickRandom()">Pick random</button>
            <button onclick="toggleMenu(this)">Hide menu</button>

        </div>

        <div id="menu" style="visibility:visible">
            <div>
                <h1 onclick="personsMenu()">Persons</h1>
                <ul id="persons">
                `
                    for (let i = 0; i < model.personsList.length; i++) {
                        html += `<li onclick="addToDrawList(this.innerHTML)">${model.personsList[i]}</li>`
                    }
            
                html += `
                </ul>
            </div>

            <div>
                <h1 onclick="performedDrawsMenu()">Performed draws</h1>
                <ul id="performedDraws">`
                    for (let i = 0; i < model.performedDrawsHistory.length; i++) {
                        html += `
                        <li>
                            <b><i>${model.performedDrawsHistory[i].date}</i></b>
                            ${model.performedDrawsHistory[i].winners.join(", ")}
                        </li>
                        `
                    }
                html += `
                </ul>
            </div>
        </div>

    </div>
    `
    model.app.innerHTML = html
}