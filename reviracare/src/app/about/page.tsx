import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function AboutPage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">About</h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Learn more about Revira Care and our mission.
        </p>
      </Container>
    </Section>
  );
}
