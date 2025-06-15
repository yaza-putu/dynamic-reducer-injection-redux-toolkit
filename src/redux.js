import {combineReducers, configureStore} from "@reduxjs/toolkit";
import home from '../src/stores/home';
import about from '../src/stores/about';
import global from '../src/stores/global';

// global reducer
const staticReducers = {
    global: global
}

const createReducer = (asyncReducers = {}) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    })
}

export const store = configureStore({
    reducer: createReducer(),
    devTools: import.meta.env.MODE == "production" ? false : true
})

store.asyncReducers = {}

store.injectReducer = (key, asyncReducer) => {
    if(store.asyncReducers[key]) {
        console.warn(`Reducer ${key} already exists`)
        return false
    }
    store.asyncReducers[key] = asyncReducer

    store.replaceReducer(createReducer(store.asyncReducers))

    return true
}

store.removeReducer = (key) => {
    if(!store.asyncReducers[key]) {
        console.warn(`Reducer ${key} is not found`);
        return false
    }

    delete store.asyncReducers[key]
    store.replaceReducer(createReducer(store.asyncReducer))

    return true
}