import { configureStore } from "@reduxjs/toolkit"
import schoolReducer from "./slices/schoolsSlices.js";


const store = configureStore({
    reducer: {
        schools: schoolReducer
    }
})

export default store