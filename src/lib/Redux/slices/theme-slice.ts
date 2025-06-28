import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: Theme
}

const initialState = {
  value: "Light"
}