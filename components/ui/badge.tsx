import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "gold" | "outline" | "soft-blue" | "soft-emerald" | "soft-purple";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#25272e] text-gray-200 border border-[#373b45]",
    secondary: "bg-[#1f2025] text-gray-400 border border-[#30333c]",
    gold: "bg-[#fedc5a]/15 text-[#fedc5a] border border-[#fedc5a]/30",
    outline: "border border-[#444853] text-gray-300",
    "soft-blue": "bg-blue-500/15 text-blue-400 border border-blue-500/25",
    "soft-emerald": "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
    "soft-purple": "bg-purple-500/15 text-purple-400 border border-purple-500/25",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

