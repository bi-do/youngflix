import { configureStore } from "@reduxjs/toolkit";
import movieslice from "./reducer/movieslice";

const store = configureStore({
    reducer:{
        movie:movieslice.reducer
    }
})

export default store