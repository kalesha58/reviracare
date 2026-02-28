import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <Container as="div" className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Footer">
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
        </div>
      </Container>
    </footer>
  );
}
