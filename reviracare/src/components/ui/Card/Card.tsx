import { cn } from "@/lib/utils";
import type { ICardProps } from "./Card.interfaces";

export function Card({ children, className }: ICardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
