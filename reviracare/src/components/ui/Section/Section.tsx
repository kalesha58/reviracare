import { cn } from "@/lib/utils";
import type { ISectionProps } from "./Section.interfaces";

export function Section({
  children,
  className,
  as: Component = "section",
}: ISectionProps): React.ReactElement {
  return (
    <Component
      className={cn(
        "py-[var(--section-py)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
