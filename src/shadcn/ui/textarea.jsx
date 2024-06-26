import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      style={{ resize: "none" }}
      className={cn(
        "flex min-h-[60px] w-full rounded-xl border border-input bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-[#9B9B9B] md:placeholder:text-gray-[#9B9B9B] placeholder:font-bold  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
