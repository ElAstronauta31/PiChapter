import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        quotes: [
            {
                id: 1,
                author: "Simón Bolívar",
                quote: "Juro por el Dios de mis padres, juro por mi patria, juro por mi honor, que no daré tranquilidad a mi alma, ni descanso a mi brazo, hasta no ver rotas las cadenas que oprimen a mi pueblo por voluntad de los poderosos"

            },
            {
                id: 2,
                author: "José Martí",
                quote: "La única fuerza y la única verdad que hay en esta vida es el amor. El patriotismo no es más que amor, la amistad no es más que amor"
                
            },
            {
                id: 3,
                author: "José de San Martín",
                quote: "Solo quiero Leones en mi regimiento"
                
            },
            {
                id: 4,
                author: "Benito Juárez",
                quote: "Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz "
                
            },
            {
                id: 5,
                author: "Bernardo O'Higgins",
                quote: "¡Vivir con honor, o morir con gloria!, ¡El que sea valiente que me siga!"
                
            }
        ]
    }
})

export default quotesSlice.reducer;