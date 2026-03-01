import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "News, updates and insights from ReviraCare on disability support, NDIS, inclusion, and living well.",
};

export default function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return children;
}
