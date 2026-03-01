"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Footprints, Heart, Users, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";
import type { ISupportPoint } from "./SupportConfidenceSection.interfaces";

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
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "premium" feel
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
    <Section className="bg-muted/40 dark:bg-muted/15 text-foreground border-t border-border overflow-hidden">
      <Container>
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 md:mb-20"
        >
          <motion.h2
            variants={ITEM_VARIANTS}
            custom={0}
            className="section-title text-foreground leading-tight mb-5"
          >
            Support at every step.
            <br />
            <span className="text-primary">Confidence in every moment.</span>
          </motion.h2>
          <motion.p
            variants={ITEM_VARIANTS}
            custom={1}
            className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed"
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
            viewport={{ once: true }}
            variants={LINE_VARIANTS}
            className="absolute left-[19px] sm:left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-primary/50 to-primary origin-top hidden sm:block"
            aria-hidden
          />

          <ul className="relative space-y-0">
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
                    className="relative z-10 flex shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-2 border-primary/30 dark:border-primary/40 flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300"
                    aria-hidden
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-xl">
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
