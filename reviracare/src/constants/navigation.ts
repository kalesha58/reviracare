export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "NDIS",
    href: "/ndis",
    children: [
      { label: "Understanding The NDIS", href: "/ndis" },
      { label: "New To The NDIS?", href: "/ndis/new" },
      { label: "Are You Eligible For The NDIS?", href: "/ndis/eligible" },
      { label: "Are You Looking For A New NDIS Provider?", href: "/ndis/provider" },
      { label: "Referral Form", href: "/referral" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
