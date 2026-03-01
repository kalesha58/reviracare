"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

const ELIGIBILITY_ITEMS = [
  "An Australian citizen or hold a Permanent or a Special Category visa.",
  "Resident in Australia.",
  "Aged between seven and 65 years.",
  "Have a permanent and significant disability.",
];

export default function NewToNdisPage(): React.ReactElement {
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
              src="/images/ndis/new.png"
              alt="Revira Care Support"
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
              Welcome to NDIS
            </h1>
            <p className="subtitle text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium">
              New to the NDIS? Here’s how we can help you get started.
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

      <NDISBrandingBar title="New to the NDIS?" />

      <Section className="bg-white dark:bg-zinc-950">
        <Container className="max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            The NDIS aims to empower people with disabilities by offering individualised support tailored to their unique needs and aspirations. Through the NDIS, you can access a range of services and supports to enhance your independence, well-being, and social participation.
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
            It&apos;s important to familiarise yourself with the NDIS eligibility criteria, planning process, and available supports to make the most of this transformative scheme. Reach out to our representatives or our support coordinators for guidance and assistance as you navigate your way through the NDIS and unlock the opportunities it offers.
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
