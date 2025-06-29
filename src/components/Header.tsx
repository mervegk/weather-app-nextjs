"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "./ui/switch";
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { setTheme } from "@/lib/Redux/slices/theme-slice";
import { useTheme } from "@/hooks/useTheme";
import { setTempUnit } from "@/lib/Redux/slices/temp-unit-slice";
import { useTempUnit } from "@/hooks/useTempUnit";
import type { TempUnit } from "@/types/context/temp-unit";

export function Header() {
  const { theme, isHydrated } = useTheme()
  const { temp_unit } = useTempUnit()
  const dispatch = useDispatch()
  const [defaultValue, setDefaultValue] = useState<TempUnit>();

  useEffect(() => {
    setDefaultValue(temp_unit)
  }, [temp_unit])

  return (
    <section className="container mx-auto flex justify-end items-center p-4 gap-4">
      <Switch
        withIcon
        checked={isHydrated ? theme === "dark" : false}
        onCheckedChange={(checked) => {
          dispatch(setTheme(checked ? "dark" : "light"));
        }}
      />
      <Select value={defaultValue} onValueChange={(e: TempUnit) => dispatch(setTempUnit(e))}>
        <SelectTrigger className="w-[180px] dark:text-white">
          <SelectValue placeholder="Choose Unit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Units</SelectLabel>
            <SelectItem value="Celsius">Celsius</SelectItem>
            <SelectItem value="Fahrenheit">Fahrenheit</SelectItem>
            <SelectItem value="Kelvin">Kelvin</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}