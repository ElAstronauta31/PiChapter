import { createSlice } from "@reduxjs/toolkit";

const brothersSlice = createSlice({
    name: "brothers",
    initialState: {
        brothers: [
            {
                brotherNumber: 1,
                firstName: "Ruben",
                lastName: "Colon",
                brotherName: "Intelectual",
                lineName: "",
                semesterYear: "SPR1996"
            },
            {
                brotherNumber: 2,
                firstName: "Barry",
                lastName: "Roman",
                brotherName: "Perdido",
                lineName: "",
                semesterYear: "FA1996"
            },
            {
                brotherNumber: 3,
                firstName: "Peter",
                lastName: "Flores",
                brotherName: "El Guapo",
                lineName: "",
                semesterYear: "FA1996"
            },
            {
                brotherNumber: 4,
                firstName: "Omar",
                lastName: "Rosa",
                brotherName: "Batallante",
                lineName: "",
                semesterYear: "SPR1997"
            },
            {
                brotherNumber: 5,
                firstName: "Pedro",
                lastName: "Morales",
                brotherName: "Torreon",
                lineName: "",
                semesterYear: "FA1997"
            },
            {
                brotherNumber: 6,
                firstName: "David",
                lastName: "Silva",
                brotherName: "Distraido",
                lineName: "",
                semesterYear: "SPR1999"
            },
            {
                brotherNumber: 7,
                firstName: "Henry",
                lastName: "Garcia",
                brotherName: "Bendecido",
                lineName: "",
                semesterYear: "SPR1999"
            },
            {
                brotherNumber: 8,
                firstName: "Donial",
                lastName: "Rodriguez",
                brotherName: "Paponlivo",
                lineName: "",
                semesterYear: "SPR1999"
            },
            {
                brotherNumber: 9,
                firstName: "David",
                lastName: "Seltzer",
                brotherName: "Pookito",
                lineName: "",
                semesterYear: "SPR2000"
            },
            {
                brotherNumber: 10,
                firstName: "Pablo",
                lastName: "Rochez",
                brotherName: "Talentoso",
                lineName: "",
                semesterYear: "SPR2001"
            },
            {
                brotherNumber: 11,
                firstName: "Anthony",
                lastName: "Gonzalez",
                brotherName: "La Ley",
                lineName: "",
                semesterYear: "FA2001"
            },
            {
                brotherNumber: 12,
                firstName: "Ricardo",
                lastName: "Rivera",
                brotherName: "Temerario",
                lineName: "",
                semesterYear: "FA2001"
            },
            {
                brotherNumber: 13,
                firstName: "Jose",
                lastName: "Lopez",
                brotherName: "Dedicado",
                lineName: "",
                semesterYear: "SPR2003"
            },
            {
                brotherNumber: 14,
                firstName: "Juan",
                lastName: "Galindo",
                brotherName: "El Constante",
                lineName: "",
                semesterYear: "SPR2003"
            },
            {
                brotherNumber: 15,
                firstName: "Bruno",
                lastName: "Rubin De Celic",
                brotherName: "Veneco",
                lineName: "",
                semesterYear: "SPR2003"
            },
            {
                brotherNumber: 16,
                firstName: "Thomas",
                lastName: "McCarthy",
                brotherName: "Sentinel",
                lineName: "",
                semesterYear: "SPR2003"
            },
            {
                brotherNumber: 17,
                firstName: "Victor",
                lastName: "Ramirez",
                brotherName: "Insistente",
                lineName: "",
                semesterYear: "FA2003"
            },
            {
                brotherNumber: 18,
                firstName: "Timothy",
                lastName: "Martino",
                brotherName: "Magnifico",
                lineName: "",
                semesterYear: "SPR2004"
            },
            {
                brotherNumber: 19,
                firstName: "Bladamir",
                lastName: "Santamaria",
                brotherName: "Asesino",
                lineName: "",
                semesterYear: "FA2004"
            },
            {
                brotherNumber: 20,
                firstName: "Leo",
                lastName: "Espinosa",
                brotherName: "Leon Dormido",
                lineName: "",
                semesterYear: "SPR2007"
            },
            {
                brotherNumber: 21,
                firstName: "Carlos",
                lastName: "Tejeda",
                brotherName: "La Causa",
                lineName: "",
                semesterYear: "SPR2009"
            },
            {
                brotherNumber: 22,
                firstName: "Johnathan",
                lastName: "Martinez",
                brotherName: "Chiche",
                lineName: "",
                semesterYear: "SPR2013"
            },
            {
                brotherNumber: 23,
                firstName: "Manuel",
                lastName: "Navarro",
                brotherName: "Del Carmen",
                lineName: "",
                semesterYear: "SPR2013"
            },
            {
                brotherNumber: 24,
                firstName: "Jovany",
                lastName: "Martinez",
                brotherName: "Nonito",
                lineName: "",
                semesterYear: "SPR2013"
            },
            {
                brotherNumber: 25,
                firstName: "Elmer",
                lastName: "Rodriguez",
                brotherName: "Anubis",
                lineName: "",
                semesterYear: "FA2013"
            },
            {
                brotherNumber: 26,
                firstName: "Kenley",
                lastName: "Peguero",
                brotherName: "Santana",
                lineName: "",
                semesterYear: "FA2014"
            },
            {
                brotherNumber: 27,
                firstName: "Abel",
                lastName: "Nunez",
                brotherName: "Rafael",
                lineName: "",
                semesterYear: "FA2015"
            },
            {
                brotherNumber: 28,
                firstName: "Raul",
                lastName: "Ramirez",
                brotherName: "Adiel",
                lineName: "",
                semesterYear: "FA2015"
            },
            {
                brotherNumber: 29,
                firstName: "Rodolfo",
                lastName: "Martinez",
                brotherName: "Certus",
                lineName: "",
                semesterYear: "FA2015"
            },
            {
                brotherNumber: 30,
                firstName: "Jesus",
                lastName: "Flores",
                brotherName: "Goyo",
                lineName: "",
                semesterYear: "FA2015"
            },
            {
                brotherNumber: 31,
                firstName: "Rony",
                lastName: "Colon",
                brotherName: "Veris",
                lineName: "El Soldado Potente",
                semesterYear: "SPR2016"
            },
            {
                brotherNumber: 32,
                firstName: "Jason",
                lastName: "Lopez",
                brotherName: "Augustus",
                lineName: "",
                semesterYear: "SPR2018"
            },
            {
                brotherNumber: 33,
                firstName: "Angel",
                lastName: "Carrasquillo",
                brotherName: "Julito",
                lineName: "",
                semesterYear: "SPR2018"
            },
            {
                brotherNumber: 34,
                firstName: "Ariel",
                lastName: "Murillo",
                brotherName: "Guayas",
                lineName: "",
                semesterYear: "SPR2020"
            },
            {
                brotherNumber: 35,
                firstName: "Joshua",
                lastName: "Batres",
                brotherName: "Leopoldo",
                lineName: "",
                semesterYear: "SPR2020"
            }

        ],
        activeBrother: ''
    },
    reducers: {
        
    }
})  


export default brothersSlice.reducer;

    // get line name information
    // Useselector to grab brtohers
    // Create active brothers for homes page
    // Add ability to add another Brother
    // Allow upload of excel with set information
