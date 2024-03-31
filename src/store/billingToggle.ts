import { createSlice } from '@reduxjs/toolkit'
export interface BillingToggleState {
    value: boolean
}
const initialState: BillingToggleState = {value:false}

export const billingToggleSlice = createSlice({
    name: "billingToggle",
    initialState,
    reducers: {
        toggle : (state) => {
            state.value = !state.value
        }
    }
})

export const {toggle} = billingToggleSlice.actions;
export default billingToggleSlice.reducer; 