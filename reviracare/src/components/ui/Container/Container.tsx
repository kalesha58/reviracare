import { cn } from "@/lib/utils";
import type { IContainerProps } from "./Container.interfaces";

export function Container({
  children,
  className,
  as: Component = "div",
}: IContainerProps): React.ReactElement {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--section-px)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
