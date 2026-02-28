import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";

export function Header(): React.ReactElement {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <Container as="div" className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-[var(--foreground)]">
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          <Link
            href="/about"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
