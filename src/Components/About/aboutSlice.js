import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        activeAbout: "whoweare"
    },
    reducers: {
        setActive: (state, action) => {
            state.activeAbout = `${action.payload}`
        }
    }
})

export const activeAbout = (state) => state.activeabout; 
export default aboutSlice.reducer;
export const { setActive } = aboutSlice.actions;