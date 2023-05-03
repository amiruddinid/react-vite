import { configureStore } from "@reduxjs/toolkit";
import motorReducer from "../pages/List/ListSlice";

export default configureStore({
    reducer:{
        motor: motorReducer
    }
})