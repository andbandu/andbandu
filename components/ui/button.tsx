import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "warning" | "outline" | "secondary" | "ghost" | "link" | "soft";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      default: "bg-[#fedc5a] text-[#111215] font-semibold hover:bg-[#ebd04a] shadow-sm",
      warning: "bg-[#fedc5a] text-[#111215] font-semibold hover:bg-[#ebd04a] shadow-md",
      outline: "border border-[#454954] text-gray-300 hover:border-[#fedc5a] hover:text-[#fedc5a] bg-transparent",
      secondary: "bg-[#272930] text-gray-200 hover:bg-[#32353e] border border-[#383b45]",
      ghost: "hover:bg-white/10 text-gray-300 hover:text-white",
      link: "text-[#fedc5a] underline-offset-4 hover:underline",
      soft: "bg-[#fedc5a]/10 text-[#fedc5a] border border-[#fedc5a]/20 hover:bg-[#fedc5a]/20",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-xl px-6 text-base font-semibold",
      icon: "h-10 w-10 p-0 rounded-full",
      pill: "h-11 rounded-full px-6 text-sm font-semibold",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

