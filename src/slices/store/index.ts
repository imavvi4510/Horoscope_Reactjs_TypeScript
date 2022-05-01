import {configureStore, ThunkAction} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import horoscopeReducer from "../DailyHoroSlice"

export  const store = configureStore({
  reducer:{
    horoscope:horoscopeReducer
  }
})

type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const selectHoroscope=(state:RootState)=>state.horoscope