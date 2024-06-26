import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-xl border border-input bg-white px-3 py-5 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium placeholder:text-gray-[#9B9B9B] md:text-gray-[#9B9B9B] placeholder:font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Input.displayName = "Input"

export { Input }
