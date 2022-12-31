"use strict"

const model = {
    app: document.getElementById("app"),

    performedDrawsHistory: [
        {
            date: "October 2022:",
            winners: ["Lars", "Mille"]
        },
    
        {
            date: "November 2022:",
            winners: ["Nils", "Trude", "Mathias"]
        },
    
        {
            date: "",
            winners: []
        }
    ],

    personsList: [
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
    ],

    inTheDraw: [],

    months: [
        "January",
        "February",
         "Mars",
          "April",
           "May",
            "June",
             "July",
              "August",
               "September",
                "October",
                 "November",
                  "December"
    ],

    d: new Date(),
    amountOfWinners: 0,
    amountOfWinnersLeft: 0
}