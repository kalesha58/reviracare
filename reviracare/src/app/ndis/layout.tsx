import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding the NDIS",
  description: "Learn about the National Disability Insurance Scheme (NDIS): purpose, eligibility, planning, choice and control, and how to access supports.",
};

export default function NdisLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="[--primary:var(--secondary)] [--accent:var(--purple-100)] [--accent-foreground:var(--purple-700)] dark:[--accent:#3b0764] dark:[--accent-foreground:#f3e8ff]">
      {children}
    </div>
  );
}
