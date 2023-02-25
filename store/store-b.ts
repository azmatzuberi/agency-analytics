import { configureStore } from "@reduxjs/toolkit"
import reducer from "@/store/reducer"

export const store = configureStore({
  reducer: {
    // reference reducers here
    reducer
  }
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch