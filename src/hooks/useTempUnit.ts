import { useSelector } from "react-redux"
import { RootState } from "@/lib/Redux/store"

const useTempUnit = () => {
  const { temp_unit } = useSelector(
    (state: RootState) => state.temp_unit.value
  )

  return { temp_unit }
}