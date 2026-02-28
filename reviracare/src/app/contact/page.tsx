import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ContactPage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          Contact
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          Get in touch with Revira Care.
        </p>
      </Container>
    </Section>
  );
}
