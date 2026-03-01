"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Footprints, Heart, Users, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";
import type { ISupportPoint } from "./SupportConfidenceSection.interfaces";
import { cn } from "@/lib/utils";

const SUPPORT_POINTS: ISupportPoint[] = [
  {
    id: "every-step",
    title: "Support at every step",
    description:
      "From planning to daily life, we walk alongside you with consistent, reliable care tailored to your journey.",
  },
  {
    id: "confidence",
    title: "Confidence in every moment",
    description:
      "Feel secure knowing our trained team is there when you need us—so you can focus on living fully.",
  },
  {
    id: "personalized",
    title: "Personalized care that inspires",
    description:
      "Your goals and preferences shape your support plan. We adapt to you, not the other way around.",
  },
  {
    id: "inclusion",
    title: "Fostering inclusion",
    description:
      "We help you connect with community, build relationships, and feel a true sense of belonging.",
  },
];

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1
    },
  }),
};

const LINE_VARIANTS: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2
    },
  },
};

const ICONS = [Footprints, Heart, Users, Sparkles] as const;

export function SupportConfidenceSection(): React.ReactElement {
  return (
    <Section
      aria-labelledby="support-confidence-heading"
      className="relative bg-white dark:bg-zinc-950 text-foreground border-t border-border overflow-hidden"
    >
      {/* Hierarchy / flight background: journey from left to right */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        {/* Base gradient: flight starts left (lighter) → moves right (richer) */}
        <div
          className="absolute inset-0 opacity-[0.97] dark:opacity-100"
          style={{
            background:
              "linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(243,232,255,0.35) 35%, rgba(233,213,255,0.25) 60%, rgba(54,20,59,0.08) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-80 dark:opacity-60"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.6) 0%, transparent 45%, transparent 55%, rgba(54,20,59,0.06) 100%)",
          }}
        />
        {/* Origin glow (left): where the journey starts */}
        <div
          className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[70%] h-[120%] rounded-full blur-3xl opacity-40 dark:opacity-25"
          style={{
            background: "radial-gradient(ellipse 70% 50% at center, rgba(147,51,234,0.2) 0%, rgba(147,51,234,0.06) 40%, transparent 70%)",
          }}
        />
        {/* Destination glow (right): journey lands */}
        <div
          className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[55%] h-[100%] rounded-full blur-3xl opacity-35 dark:opacity-20"
          style={{
            background: "radial-gradient(ellipse 60% 50% at center, rgba(54,20,59,0.18) 0%, rgba(54,20,59,0.05) 50%, transparent 75%)",
          }}
        />
        {/* Flight path curve: subtle arc from left to right */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.12]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="support-flight-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(147,51,234)" stopOpacity="0" />
              <stop offset="30%" stopColor="rgb(147,51,234)" stopOpacity="0.4" />
              <stop offset="70%" stopColor="rgb(54,20,59)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(54,20,59)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M -5% 55% Q 25% 45%, 50% 50% T 105% 48%"
            fill="none"
            stroke="url(#support-flight-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Dark mode: soften and keep hierarchy */}
        <div
          className="absolute inset-0 hidden dark:block opacity-90"
          style={{
            background:
              "linear-gradient(to right, rgba(9,9,11,0.4) 0%, transparent 40%, transparent 60%, rgba(54,20,59,0.15) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 md:mb-20"
        >
          <motion.h2
            id="support-confidence-heading"
            variants={ITEM_VARIANTS}
            custom={0}
            className="section-title text-foreground leading-tight mb-5"
          >
            Support at every step.
            <br />
            <span className="text-secondary">Confidence in every moment.</span>
          </motion.h2>
          <motion.p
            variants={ITEM_VARIANTS}
            custom={1}
            className="subtitle text-muted-foreground leading-relaxed"
          >
            Offering personalized care and services that inspire confidence and
            foster inclusion.
          </motion.p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={CONTAINER_VARIANTS}
          className="relative max-w-2xl mx-auto"
        >
          {/* Vertical line - desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={LINE_VARIANTS}
            className="absolute left-[19px] sm:left-6 top-8 bottom-8 w-px bg-gradient-to-b from-secondary via-purple-brand to-secondary origin-top hidden sm:block"
            aria-hidden
          />

          <ul className="relative space-y-0" role="list">
            {SUPPORT_POINTS.map((point, index) => {
              const Icon = ICONS[index];
              return (
                <motion.li
                  key={point.id}
                  variants={ITEM_VARIANTS}
                  custom={index}
                  className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0 group"
                >
                  <motion.div
                    whileInView={{ scale: [1, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={cn(
                      "relative z-10 flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-2 flex items-center justify-center shadow-sm transition-all duration-300",
                      index % 2 === 0
                        ? "border-secondary/30 text-secondary group-hover:border-secondary group-hover:bg-secondary/5"
                        : "border-purple-brand/30 text-purple-brand dark:text-purple-100 group-hover:border-purple-brand group-hover:bg-purple-brand/10 dark:group-hover:bg-purple-brand/20"
                    )}
                    aria-hidden
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="subsection-title text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground body-sm leading-relaxed max-w-xl">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
