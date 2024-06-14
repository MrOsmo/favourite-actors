import { configureStore } from "@reduxjs/toolkit";
import { actorsSlice } from "./actorsSlice";

const store = configureStore({
  reducer: {
    actors: actorsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
export type IRootState = ReturnType<typeof store.getState>
