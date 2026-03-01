"use client";

import { motion } from "framer-motion";
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
  CheckCircle2,
  Phone,
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
    title: "Goals And Principles",
    content: "It is the idea behind the NDIS that each person with a disability has their own wants and goals. The NDIS strives to provide customized support to each individual, emphasizing their autonomy and self-determination. People with disabilities should be able to improve their freedom, health, and ability to participate in society.",
  },
  {
    id: "eligibility",
    title: "Eligibility And Getting In",
    content: "To qualify for the NDIS, individuals must be under 65 years old and have a permanent, significant disability that makes it difficult for them to perform daily tasks. Criteria for eligibility may include functional problems, how long they last, and how they affect daily life. Once qualified, individuals can apply for access to the NDIS.",
  },
  {
    id: "planning",
    title: "Making Plans And Giving Help",
    content: "People who are part of the NDIS plan to figure out their goals, ambitions, and support needs. This entails creating a personalized plan that outlines the necessary services and supports. Supports can include things like help with daily tasks, therapy, mobility tools, being involved in the community, and more. We often review and adjust plans to adapt to evolving circumstances.",
  },
  {
    id: "choice",
    title: "Choice And Power",
    content: "The NDIS puts a lot of emphasis on giving people power over how they get help. Individualized budgets give them the freedom to pick their own service providers, decide what kinds of help they need, and handle their money. The goal of this person-centered approach is to give people more freedom and help them make choices that are best for them.",
  },
  {
    id: "early",
    title: "Getting Help Early",
    content: "The NDIS knows how important it is to help disabled kids as soon as possible. Early intervention services are available to help kids grow and stay healthy, with the goal of helping them reach their full potential and reducing the effects of disabilities on their lives. The goal of early intervention is to help people deal with problems and make things better as soon as possible.",
  },
  {
    id: "accessing",
    title: "Getting To Services",
    content: "Individuals with an NDIS plan have access to a wide range of services and assistance. Some of these services include access to allied health experts, assistive technology, therapies, home modifications, job placement assistance, and more. The NDIS also encourages people to be a part of their communities and make friends so they can do things that interest them and make real bonds.",
  },
  {
    id: "continuity",
    title: "Support That Doesn't Stop",
    content: "Existing disability support services and the NDIS work together to make sure that participants have a smooth transition. Its main goal is to keep support going and keep problems to a minimum during the transition time. The NDIS collaborates with various service providers and government departments to ensure comprehensive provision of disability assistance.",
  },
];

const EXPERTISE_ITEMS = [
  "Support Coordination",
  "Supported Independent Living (SIL)",
  "Specialist Disability Accommodation",
  "Community Participation & Care",
  "In-Home Assistance",
];

const WHY_CHOOSE_ITEMS = [
  "We endeavour to be the leading NDIS Providers in Australia.",
  "All our support coordinators are well updated with every 'norm' of NDIS and can assist you at any stage.",
  "Our health carers are professionally trained, qualified, and have years of experience.",
  "Our core values revolve around honesty, respect, integrity, authenticity, compassion, and achievement.",
  "We believe in a holistic and person-centered approach.",
  "We are local, with exceptional service provider networks and community knowledge.",
  "We provide a wide range of services that meet even the complex needs of participants.",
];

export default function UnderstandingNdisPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24 md:pt-28">
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
                The Australian government runs the National Disability Insurance Scheme (NDIS) as a program to help and support people with disabilities. The goal of this all-around and person-centered method is to give disabled people the tools they need to live full lives and be involved in their communities.
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

        {/* Closing paragraph - full width */}
        <div className="w-full py-10 sm:py-12 md:py-16 bg-zinc-50 dark:bg-zinc-900/40">
          <Container className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center"
            >
              In Australia, the NDIS represents a significant shift in the way we support people with disabilities. It helps people with disabilities live full lives and reach their full potential by putting them at the center and giving them the freedom, control, and supports that are just right for them.
            </motion.p>
          </Container>
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
                  Please keep in mind that while this article gives you a general idea of the NDIS, the program is very complicated, and the exact details and steps may be different for each person. If you want complete and up-to-date information that applies to your particular situation, you should use official NDIS resources, talk to the NDIS directly, or get professional help.
                </p>
              </div>
            </motion.div>
          </Container>
        </div>

        {/* Our Registered NDIS Provider Expertise - full width */}
        <div className="w-full py-10 sm:py-12 md:py-16 bg-white dark:bg-zinc-950">
          <Container className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Our Registered NDIS Provider Expertise in:
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {EXPERTISE_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Container>
        </div>

        {/* Why Choose Revira Care - full width */}
        <div className="w-full py-10 sm:py-12 md:py-16 bg-zinc-50 dark:bg-zinc-900/40">
          <Container className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Why Choose Revira Care for NDIS Services?
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Container>
        </div>

        {/* CTAs - full width */}
        <div className="w-full py-12 sm:py-16 bg-white dark:bg-zinc-950">
          <Container className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-600 dark:text-zinc-400 mb-6"
            >
              For more information, feel free to contact us or call us anytime. Our representatives are more than happy to address your queries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 sm:gap-5 items-center"
            >
              <a
                href="tel:0433435959"
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-purple-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-brand/20 text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                0433 43 5959
              </a>
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
