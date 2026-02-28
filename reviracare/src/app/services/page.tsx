import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ServicesPage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Services
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Our disability and NDIS support services.
        </p>
      </Container>
    </Section>
  );
}
