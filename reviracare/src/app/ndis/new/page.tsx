"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

const ELIGIBILITY_ITEMS = [
  "Be an Australian citizen or hold a Permanent or Special Category visa.",
  "Reside in Australia.",
  "Be aged between seven and 65 years.",
  "Have a permanent and significant disability.",
];

export default function NewToNdisPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24 md:pt-28">
      <NDISBrandingBar title="New to the NDIS?" />

      <Section className="bg-white dark:bg-zinc-950">
        <Container className="max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            If you haven&apos;t heard of the National Disability Insurance Scheme (NDIS), it&apos;s an effort of the Australian government to help and support people with disabilities. The NDIS wants to give disabled people more power by giving them personal help that is based on their specific needs and goals. You can get a lot of different services and help through the NDIS to improve your freedom, health, and ability to interact with other people.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="section-title text-zinc-900 dark:text-white mb-6">
              Eligibility
            </h2>
            <ul className="space-y-3">
              {ELIGIBILITY_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            To make the most of this life-changing program, you should learn about who is eligible for the NDIS, how to make a plan, and the kinds of help that are available.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            Get in touch with our representatives or support managers at Revira Care for help and advice as you use the NDIS and take advantage of the opportunities it provides.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/ndis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity"
            >
              Understanding the NDIS <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--muted)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
