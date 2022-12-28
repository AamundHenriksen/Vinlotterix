"use strict"
const app = document.getElementById("app")
const utførteTrekningerHistorikk = [
    {
        dato: "Oktober 2022:",
        vinnere: ["Åmund", "Sondre"]
    },

    {
        dato: "November 2022:",
        vinnere: ["Ben"]
    },

    {
        dato: "",
        vinnere: []
    }
]
const ansatte = [
    "Åmund",
     "Exi",
      "Ben",
       "Loe",
        "Sondre",
         "Herman"
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
let antallVinnere = ""
let antallVinnereIgjen = ""
