"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/lib/Redux/slices/theme-slice";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "./ui/switch";
import type { RootState } from "@/lib/Redux/store";
import { cn } from "@/lib/utils";

export function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const isDark = theme === "dark";

  return (
    <section>
      <Button variant="outline" size="icon" onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Switch
        withIcon
        checked={theme === "dark"}
        onCheckedChange={() => dispatch(toggleTheme())}
      />
    </section>

  );
}
