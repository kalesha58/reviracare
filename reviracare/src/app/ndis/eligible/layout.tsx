import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are You Eligible For The NDIS?",
  description: "NDIS eligibility criteria in Australia: age, disability, residency, and how ReviraCare can help you through the application process.",
};

export default function EligibleNdisLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
