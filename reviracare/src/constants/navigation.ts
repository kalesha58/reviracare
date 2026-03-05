export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "NDIS",
    href: "/ndis",
    children: [
      { label: "Understanding The NDIS", href: "/ndis", icon: "BookOpen" },
      { label: "New To The NDIS?", href: "/ndis/new", icon: "Sparkles" },
      { label: "Are You Eligible For The NDIS?", href: "/ndis/eligible", icon: "ClipboardCheck" },
      { label: "Are You Looking For A New NDIS Provider?", href: "/ndis/provider", icon: "Building" },
      { label: "News & Articles", href: "/blogs", icon: "FileText" },
      { label: "Referral Form", href: "/referral", icon: "FileText" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
