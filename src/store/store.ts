import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from "./slider"
import billingToggleReducer from "./billingToggle"
import themeToggleReducer from "./theme"


export const store =  configureStore({
  reducer: {
    slider : sliderReducer,
    billingToggle : billingToggleReducer, 
    themeToggle : themeToggleReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch