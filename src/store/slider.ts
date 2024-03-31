import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SliderState {
    value: number
    
}

const initialState: SliderState = {value:50} 
export const slideSlice = createSlice ({
    name: "slider",
    initialState,
    reducers: {
        setValue: (state, action : PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { setValue } = slideSlice.actions
export default slideSlice.reducer 