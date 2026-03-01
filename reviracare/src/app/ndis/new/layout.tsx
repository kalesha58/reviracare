import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New to the NDIS",
  description: "Introduction to the NDIS: eligibility, planning process, and how Revira Care can support you as you start your NDIS journey.",
};

export default function NewNdisLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
