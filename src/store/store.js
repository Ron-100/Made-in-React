import {configureStore} from '@reduxjs/toolkit'
import AddCartSliceReducer from '../store/AddCartSlice'

export const store = configureStore({
    reducer:{
        addCartSlice: AddCartSliceReducer
    }
})