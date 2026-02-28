import { cn } from "@/lib/utils";
import type { ISectionProps } from "./Section.interfaces";

export function Section({
  children,
  className,
  as: Component = "section",
  id,
}: ISectionProps): React.ReactElement {
  return (
    <Component
      id={id}
      className={cn(
        "py-[var(--section-py)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
