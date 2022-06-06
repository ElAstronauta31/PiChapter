import {configureStore} from "@reduxjs/toolkit";
import photosSlice from "../Components/Home/photos/photosSlice";

const store = configureStore({
    reducer: {
        photos: photosSlice,
    }
})

export default store