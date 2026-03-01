"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

const CRITERIA = [
  "Be under the age of 65.",
  "Have a permanent and significant disability that impacts your ability to participate in daily activities. The disability should be likely to be permanent and require support from the NDIS throughout your life.",
  "Be an Australian citizen, a permanent resident, or hold a Protected Special Category Visa.",
];

export default function EligibleNdisPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Hero – same as main NDIS: purple-brand (footer) + image */}
      <section className="relative min-h-[95vh] md:min-h-[92vh] flex items-center pt-24 md:pt-28 pb-64 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-purple-brand dark:bg-zinc-950 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/ndis/eligibility.png"
              alt="Revira Care Eligibility"
              fill
              className="object-cover object-top dark:opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-brand/90 dark:from-black/80 dark:via-black/40 dark:to-purple-brand" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-brand/80 via-purple-brand/30 to-transparent" aria-hidden />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-brand/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
        <Container className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Link
              href="/ndis"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mb-6 uppercase tracking-widest font-bold"
            >
              Back to NDIS
            </Link>
            <h1 className="hero-title font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              NDIS Eligibility
            </h1>
            <p className="subtitle text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium">
              Find out if you meet the criteria to access the NDIS.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">Scroll</span>
          </motion.div>
        </div>
      </section>

      <NDISBrandingBar title="Are You Eligible For The NDIS?" />

      <Section className="bg-white dark:bg-zinc-950">
        <Container className="max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            To be eligible for the NDIS, you must:
          </p>

          <ul className="space-y-4 mb-10">
            {CRITERIA.map((item) => (
              <li key={item.slice(0, 30)} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0 mt-2" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Meeting the eligibility criteria does not guarantee automatic entry into the NDIS, as each individual&apos;s circumstances are assessed on a case-by-case basis.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            It&apos;s important to contact the NDIS or visit their official website to learn more about the eligibility requirements and the process for applying to determine your specific eligibility status.
          </p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-white mb-8">
            For further assistance, feel free to reach out to Revira Care. Our team is here to guide you through the eligibility and application process.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--primary)]" />
              Our Address
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">Revira Care</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Level 5, Nexus Building,<br />
              4 Columbia Court,<br />
              Norwest NSW 2153 Australia
            </p>
            <a
              href="tel:0288606462"
              className="mt-4 inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              02 8860 6462
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ndis/provider"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity"
            >
              Looking for a provider? <ArrowRight className="w-4 h-4" />
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
