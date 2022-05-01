import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchHoroscopeByDate } from "../utlites/fetchHoro";
import { Params } from "../type/HoroscopeParam";
import {DailyHoroscopeResponse, Prediction} from "../type/Horolist"

const initialState ={
  horoscope:[] as Prediction[]
}

export const fetchHoroscope = createAsyncThunk<DailyHoroscopeResponse, Params>(
  "fetch/horoscope",
  async (data:Params) => {
    const response = await fetchHoroscopeByDate(data)
    return response
  }
)

export const DailyHoroscopeSlice = createSlice({
  name: "horoscope",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchHoroscope.pending, (state, action) => { }),
    builder.addCase(fetchHoroscope.fulfilled, (state, action) => {
      state.horoscope=[action.payload.data.prediction]

    }),
    builder.addCase(fetchHoroscope.rejected, (state, action) => { })
  }
})


export default DailyHoroscopeSlice.reducer;

