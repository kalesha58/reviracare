export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "NDIS",
    href: "/ndis",
    children: [
      { label: "Understanding NDIS", href: "/ndis" },
      { label: "In-Home Support", href: "/services/in-home" },
      { label: "Social Participation", href: "/services/social" },
      { label: "Group Activities", href: "/services/group" },
      { label: "Independent Living", href: "/services/sil" },
      { label: "Life Skills", href: "/services/skills" },
      { label: "Accessibility (SDA)", href: "/services/sda" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
