import Link from "next/link";
import { cn } from "@/lib/utils";
import type { IButtonProps } from "./Button.interfaces";

const variantClasses = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
  secondary: "bg-[var(--muted)] text-[var(--foreground)] hover:bg-zinc-200",
  outline:
    "border-2 border-[var(--border)] bg-transparent hover:bg-[var(--muted)]",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className,
  disabled = false,
}: IButtonProps): React.ReactElement {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius)] px-5 py-2.5 text-sm font-medium transition-opacity";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, variantClasses[variant], className)}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(base, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}
