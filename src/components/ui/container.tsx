import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "narrow" | "default" | "wide" | "full";
}

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-8xl",
        size === "full" && "max-w-none px-0",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

