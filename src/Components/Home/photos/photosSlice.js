import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
    name: "photos",
    initialState: {
        images: []
    }
})