import { TempState, TempUnit } from "@/types/context/temp-unit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TempState = {
  value: {
    temp_unit: "Celsius"
  }
};

const tempUnitSlice = createSlice({
  name: "temp_unit",
  initialState,
  reducers: {
    setTempUnit: (state, action: PayloadAction<TempUnit>) => {
      state.value.temp_unit = action.payload
      localStorage.setItem("temp_unit", state.value.temp_unit)
    },
    initializeTempUnit: (state) => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("temp_unit");
        if (saved === "Celsius" || saved === "Fahrenheit" || saved === "Kelvin") {
          state.value.temp_unit = saved;
        }
      }
    }
  }
})

export const { setTempUnit, initializeTempUnit } = tempUnitSlice.actions
export default tempUnitSlice.reducer