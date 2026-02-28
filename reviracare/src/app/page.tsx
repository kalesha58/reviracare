import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function HomePage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Welcome to Revira Care
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Professional Disability and NDIS Support Services
        </p>
      </Container>
    </Section>
  );
}
