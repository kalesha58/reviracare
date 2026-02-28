import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function CareersPage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Careers
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Join our team and make a difference in disability and NDIS support.
        </p>
      </Container>
    </Section>
  );
}
