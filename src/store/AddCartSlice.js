import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const AddCartSlice = createSlice({
    name:'addCartSlice',
    initialState,
    reducers:{
        addtoCart(state,action){
            state.push(action.payload)
        },
        reomvetoCart(state,action){
            return state.filter((itmId)=> itmId !== action.payload)
        }
    }
})

export const {addtoCart, reomvetoCart} = AddCartSlice.actions

export default AddCartSlice.reducer