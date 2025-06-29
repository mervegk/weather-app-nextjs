import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/Redux/store";
import { initializeTheme } from "@/lib/Redux/slices/theme-slice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme.value);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    dispatch(initializeTheme());
    setIsHydrated(true);
  }, [dispatch]);

  return {
    theme: isHydrated ? theme : "light",
    isHydrated
  };
};
