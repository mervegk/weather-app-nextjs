"use client";
import { useDispatch } from "react-redux";
import { setTheme } from "@/lib/Redux/slices/theme-slice";
import { Switch } from "./ui/switch";
import { useTheme } from "@/hooks/useTheme";
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Header() {
  const { theme, isHydrated } = useTheme();
  const dispatch = useDispatch();

  return (
    <section className="container mx-auto flex justify-end items-center p-4 gap-4">
      <Switch
        withIcon
        checked={isHydrated ? theme === "dark" : false}
        onCheckedChange={(checked) => {
          dispatch(setTheme(checked ? "dark" : "light"));
        }}
      />
      <Select>
        <SelectTrigger className="w-[180px] dark:text-white">
          <SelectValue placeholder="Choose Unit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="Celsius">Celsius</SelectItem>
            <SelectItem value="Fahrenheit">Fahrenheit</SelectItem>
            <SelectItem value="Kelvin">Kelvin</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}