import {combineReducers, legacy_createStore} from 'redux'
import {loadingReducer} from '../p2-homeworks/h10/bll/loadingReducer'
import {themeReducer} from "../p2-homeworks/h12/bll/themeReducer";

const reducers = combineReducers({
    isloading: loadingReducer,
    theme: themeReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
