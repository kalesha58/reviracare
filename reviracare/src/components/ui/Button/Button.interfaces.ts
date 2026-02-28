export interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}
