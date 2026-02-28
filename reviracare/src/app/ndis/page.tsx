"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2, Heart, Shield, Users } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    title: "Personalized Support",
    description: "Care plans built around your unique needs and aspirations.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Expert Guidance",
    description: "Navigate the NDIS with confidence alongside our experienced team.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Trusted Care",
    description: "A commitment to safety, quality, and your overall well-being.",
    icon: <Shield className="w-6 h-6" />,
  },
];

export default function NdisPage(): React.ReactElement {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 py-24 md:py-32 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_50%)]" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-wider mb-6">
              NDIS Provider
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-8">
              Tailored Care <br />
              <span className="text-zinc-500 dark:text-zinc-400">For Everyone</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Discover NDIS support that actually understands you. We design our services around your specific goals and lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 rounded-2xl font-semibold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-2xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features Grid */}
      <Section className="bg-white dark:bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-zinc-900 dark:text-zinc-50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Understanding Section */}
      <Section className="bg-zinc-50 dark:bg-zinc-900/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 leading-tight">
                Understanding NDIS <br />
                With Reviracare
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                The National Disability Insurance Scheme (NDIS) can be complex. Our mission is to make it simple, accessible, and truly beneficial for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Understanding your plan and budget",
                  "Finding the right support workers",
                  "Coordinating multiple services",
                  "Monitoring progress and adjusting care",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden"
            >
              {/* Placeholder for an image or graphic */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 italic">
                Support Image Reference
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
