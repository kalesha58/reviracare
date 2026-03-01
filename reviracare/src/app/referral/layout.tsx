import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Form",
  description: "Submit an NDIS referral to connect with ReviraCare. Participant details, NDIS plan information, and service preferences.",
};

export default function ReferralLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
