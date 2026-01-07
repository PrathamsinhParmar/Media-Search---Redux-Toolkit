import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'    // NOTE : Not use {}, beacuse it is export default
import collectionReducer from './features/collectionSlice'

export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})