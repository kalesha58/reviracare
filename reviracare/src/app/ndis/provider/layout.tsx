import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are You Looking For A New NDIS Provider?",
  description: "ReviraCare offers person-centred NDIS support coordination and services. Find a provider that understands your needs and goals.",
};

export default function ProviderNdisLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
