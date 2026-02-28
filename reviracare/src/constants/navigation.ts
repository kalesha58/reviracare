export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "NDIS",
    href: "/ndis",
    children: [
      { label: "Understanding NDIS", href: "/ndis" },
      { label: "Our NDIS Services", href: "/services" },
      { label: "Get Started", href: "/contact" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
