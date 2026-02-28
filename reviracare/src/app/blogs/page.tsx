import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function BlogsPage(): React.ReactElement {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Blogs</h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          News, updates and insights from Revira Care.
        </p>
      </Container>
    </Section>
  );
}
