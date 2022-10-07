import {configureStore} from "@reduxjs/toolkit";
import aboutSlice from "../Components/About/aboutSlice";
import photosSlice from "../Components/Home/photos/photosSlice";
import brothersSlice from "../Components/Brothers/brothersSlice";

const store = configureStore({
    reducer: {
        photos: photosSlice,
        about: aboutSlice,
        brothers: brothersSlice
    }
})

export default store