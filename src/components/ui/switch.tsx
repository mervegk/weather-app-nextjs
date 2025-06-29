"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  withIcon?: boolean
}

function Switch({ className, withIcon = false, ...props }: SwitchProps) {
  const isControlled = props.checked !== undefined
  const [internalChecked, setInternalChecked] = React.useState(
    Boolean(props.defaultChecked)
  )

  const checked = isControlled ? Boolean(props.checked) : internalChecked

  const handleChange = (val: boolean) => {
    if (!isControlled) {
      setInternalChecked(val)
    }
    props.onCheckedChange?.(val)
  }

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      checked={checked}
      onCheckedChange={handleChange}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground",
          withIcon && "flex items-center justify-center text-[10px]"
        )}
      >
        {withIcon &&
          (checked ? (
            <Moon className="h-3 w-3 text-foreground" />
          ) : (
            <Sun className="h-3 w-3 text-foreground" />
          ))}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }