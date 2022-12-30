"use strict"

const app = document.getElementById("app")
const utførteTrekningerHistorikk = [
    {
        dato: "Oktober 2022:",
        vinnere: ["Lars", "Mille"]
    },

    {
        dato: "November 2022:",
        vinnere: ["Nils", "Trude", "Mathias"]
    },

    {
        dato: "",
        vinnere: []
    }
]
const personerListe = [
    "Marianne",
     "Bjørnar",
      "Glenn",
       "Trude",
        "Lars",
         "Anne",
         "Elisabeth",
         "Helge",
         "Mathias",
         "Mille",
         "Roger",
         "Nils"
        ]
const medPåTrekningen = []
const måneder = [
    "Januar",
     "Februar",
      "Mars",
       "April",
        "Mai",
         "Juni",
          "Juli",
           "August",
            "September",
             "Oktober",
              "November",
               "Desember"
            ]
const d = new Date()
let antallVinnere = 0
let antallVinnereIgjen = 0
