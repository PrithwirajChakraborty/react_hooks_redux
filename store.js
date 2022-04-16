import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./answerSlice.js";
import userReducer from './useSlice.js'

export default configureStore({
    reducer:{
        user: userReducer,
        answer: answerSlice,
    },
});