import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice"

const store = configureStore( {
    reducer: {
        client: clientReducer,
    },
    enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
} );

export default store;
