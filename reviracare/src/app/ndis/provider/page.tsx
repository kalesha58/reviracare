"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Users, Compass } from "lucide-react";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

export default function NewProviderNdisPage(): React.ReactElement {
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
              src="/images/ndis/provider.png"
              alt="Revira Care NDIS Provider"
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
              NDIS Provider NSW
            </h1>
            <p className="subtitle text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium">
              Looking for a new NDIS provider? We’re here to support your journey.
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

      <NDISBrandingBar title="Looking For A New NDIS Provider?" />

      <Section className="bg-white dark:bg-zinc-950">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our dedicated NDIS Support Coordinators are experts at making sure that your NDIS journey goes smoothly. We want to make the NDIS process easy and helpful for you by giving you our knowledge and advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Expert Support Coordinators
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Our team is trained to guide you through planning, provider choice, and getting the most from your plan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Person-Centred Approach
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We design supports around your goals and situation, so your plan truly fits your life.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/referral"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity"
            >
              Submit a Referral <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ndis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--muted)] transition-colors"
            >
              Understanding the NDIS
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
