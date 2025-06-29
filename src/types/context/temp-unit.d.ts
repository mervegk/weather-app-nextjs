export type TempUnit = "Celsius" | "Fahrenheit" | "Kelvin"

interface TempState {
  value: {
    temp_unit: TempUnit
  }
}