"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  ArrowRight,
  Target,
  ClipboardCheck,
  ClipboardList,
  Settings,
  Sparkles,
  KeyRound,
  RefreshCw,
  Info,
} from "lucide-react";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  purpose: Target,
  eligibility: ClipboardCheck,
  planning: ClipboardList,
  choice: Settings,
  early: Sparkles,
  accessing: KeyRound,
  continuity: RefreshCw,
};

const SECTIONS = [
  {
    id: "purpose",
    title: "Purpose and Principles",
    content: "The NDIS operates under the principle that every person with a disability has unique needs and aspirations. It seeks to provide individualised support based on these needs, focusing on choice and control for participants. The primary goal is to enable individuals with disabilities to enhance their independence, well-being, and social participation.",
  },
  {
    id: "eligibility",
    title: "Eligibility and Access",
    content: "To be eligible for the NDIS, an individual must be under the age of 65 and have a permanent and significant disability that affects their ability to participate in daily activities. Eligibility criteria may include functional impairments, duration, and impact on daily life. Once eligible, individuals can apply for access to the NDIS.",
  },
  {
    id: "planning",
    title: "Planning and Supports",
    content: "NDIS participants go through a planning process to identify their goals, aspirations, and support needs. This involves creating a personalised plan that outlines the necessary supports and services. Supports can include assistance with daily living, therapy services, mobility aids, community participation, and more. The plan is regularly reviewed and adjusted to meet evolving needs.",
  },
  {
    id: "choice",
    title: "Choice and Control",
    content: "The NDIS emphasises giving participants control over their support arrangements. They have the flexibility to choose their service providers, decide on the types of support they require, and manage their funding through individualised budgets. This person-centered approach aims to enhance autonomy and enable participants to make decisions that best suit their individual circumstances.",
  },
  {
    id: "early",
    title: "Early Intervention",
    content: "The NDIS recognises the importance of early intervention for children with disabilities. Early intervention services are available to support the development and well-being of children, focusing on maximising their potential and minimising the impact of disabilities on their lives. Early intervention aims to provide timely support to address challenges and promote positive outcomes.",
  },
  {
    id: "accessing",
    title: "Accessing Services",
    content: "Once an NDIS plan is in place, participants can access a range of services and supports. These can include allied health professionals, assistive technology, therapies, home modifications, employment assistance, and more. The NDIS also supports community participation and social inclusion, enabling individuals to engage in activities that interest them and foster meaningful connections.",
  },
  {
    id: "continuity",
    title: "Continuity of Support",
    content: "The NDIS works closely with existing disability support systems to ensure a smooth transition for participants. It focuses on maintaining continuity of support and minimising disruptions during the transition period. The NDIS collaborates with various service providers and government agencies to ensure a holistic approach to disability support.",
  },
];

export default function UnderstandingNdisPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Hero – same treatment as About: image + purple-brand (footer) overlays */}
      <section className="relative min-h-[95vh] md:min-h-[92vh] flex items-center pt-24 md:pt-28 pb-64 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-purple-brand dark:bg-zinc-950 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/ndis/understanding.png"
              alt="Revira Care NDIS Support Services"
              fill
              className="object-cover object-top dark:opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-brand/90 dark:from-black/80 dark:via-black/40 dark:to-zinc-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-brand/80 via-purple-brand/30 to-transparent dark:from-zinc-900/80 dark:via-zinc-900/30 dark:to-transparent" aria-hidden />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-brand/20 dark:bg-zinc-800/40 blur-[120px] rounded-full" />
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
              href="/"
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mb-6 uppercase tracking-widest font-bold"
            >
              Back to Home
            </Link>
            <h1 className="hero-title font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              NDIS Support & Care
            </h1>
            <p className="subtitle text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium">
              Understanding the NDIS and how we support you to live your best life.
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

      <NDISBrandingBar title="Understanding the NDIS" />

      <Section className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Intro - full width */}
        <div className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
          <Container className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="section-label inline-flex items-center gap-2 text-[var(--primary)] dark:text-emerald-400 font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] dark:bg-emerald-400 animate-pulse" />
                Overview
              </span>
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                It is a comprehensive and person-centric approach that aims to empower people with disabilities to live fulfilling lives and participate actively in their communities.
              </p>
            </motion.div>
          </Container>
        </div>

        {/* Content blocks - full width alternating */}
        <div className="w-full">
          {SECTIONS.map((section, index) => {
            const Icon = SECTION_ICONS[section.id] ?? Target;
            const isAlt = index % 2 === 1;
            return (
              <motion.article
                key={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className={`w-full py-10 sm:py-12 md:py-16 ${isAlt ? "bg-zinc-50 dark:bg-zinc-900/40" : "bg-white dark:bg-zinc-950"}`}
              >
                <Container className="max-w-5xl">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 md:gap-10">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 dark:bg-emerald-500/20 text-[var(--primary)] dark:text-emerald-400 border border-[var(--primary)]/10 dark:border-emerald-500/20">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px] sm:text-base md:text-lg max-w-3xl">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Container>
              </motion.article>
            );
          })}
        </div>

        {/* Important notice - full width */}
        <div className="w-full py-10 sm:py-12 md:py-16 bg-amber-50/80 dark:bg-amber-950/20 border-y border-amber-200/60 dark:border-amber-800/30">
          <Container className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 dark:bg-amber-500/30 text-amber-600 dark:text-amber-400">
                <Info className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2">Important notice</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  It&apos;s important to note that while this content provides a general understanding of the NDIS, the scheme itself is complex, and the specific details and processes may vary. It&apos;s advisable to refer to official NDIS resources, consult with the NDIS directly, or seek professional advice for comprehensive and up-to-date information based on your specific circumstances.
                </p>
              </div>
            </motion.div>
          </Container>
        </div>

        {/* CTAs - full width */}
        <div className="w-full py-12 sm:py-16 bg-white dark:bg-zinc-950">
          <Container className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 sm:gap-5"
            >
              <Link
                href="/ndis/new"
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--primary)]/20 text-sm sm:text-base"
              >
                New to the NDIS? <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl border-2 border-[var(--border)] dark:border-zinc-600 text-[var(--foreground)] font-semibold hover:bg-[var(--muted)] dark:hover:bg-zinc-800 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </Container>
        </div>
      </Section>
    </main>
  );
}
