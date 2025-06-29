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
    }
  }
})

export const { setTempUnit } = tempUnitSlice.actions
export default tempUnitSlice.reducer