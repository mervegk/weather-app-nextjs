import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/lib/Redux/store"
import { initializeTempUnit } from "@/lib/Redux/slices/temp-unit-slice"

export const useTempUnit = () => {
  const dispatch = useDispatch();
  const { temp_unit } = useSelector(
    (state: RootState) => state.temp_unit.value
  );
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    dispatch(initializeTempUnit());
    setIsHydrated(true);
  }, [dispatch]);

  return { temp_unit: isHydrated ? temp_unit : undefined, isHydrated }
}