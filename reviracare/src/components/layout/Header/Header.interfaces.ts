export interface INavLink {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
}
