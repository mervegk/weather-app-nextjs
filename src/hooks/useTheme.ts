// hooks/useInitTheme.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "@/lib/Redux/slices/theme-slice";

export function useTheme() {
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    dispatch(setTheme(theme));
  }, []);
}
