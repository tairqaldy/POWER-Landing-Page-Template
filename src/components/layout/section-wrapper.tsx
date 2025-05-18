import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({ children, className, containerClassName, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("w-full", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
