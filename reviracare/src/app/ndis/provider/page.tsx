"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Users, Compass } from "lucide-react";

export default function NewProviderNdisPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[900px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/ndis/provider.png"
            alt="Are You Looking For A New NDIS Provider?"
            fill
            className="object-cover object-center w-full h-full dark:opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-50 dark:from-black/80 dark:via-black/50 dark:to-zinc-950" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              href="/ndis"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mb-4"
            >
              Home
            </Link>
            <h1 className="hero-title tracking-tight text-white leading-[1.1]">
              Are You Looking For A New NDIS Provider?
            </h1>
            <p className="text-lg text-zinc-200 mt-4 max-w-2xl">
              If you want an NDIS service that will understand your specific needs, make plans that fit them, and understand your unique situation, then Revira Care is the best choice for you.
            </p>
          </motion.div>
        </Container>
      </section>

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
