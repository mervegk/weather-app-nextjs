export type ThemeMode = "light" | "dark";

export interface ThemeState {
  value: {
    theme: ThemeMode
  }
}