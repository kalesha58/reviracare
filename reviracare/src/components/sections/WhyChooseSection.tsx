"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Heart,
  UserCheck,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import type { Variants } from "framer-motion";

const FEATURES = [
  {
    icon: Heart,
    title: "Compassionate Support",
    description: "Person-centred care that puts your wellbeing and dignity at the heart of everything we do.",
  },
  {
    icon: UserCheck,
    title: "Personalized Services",
    description: "Tailored support plans designed around your goals, preferences, and lifestyle.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced support workers who are committed to your independence and quality of life.",
  },
  {
    icon: Shield,
    title: "Dignity & Independence",
    description: "We empower you to make choices and live life on your terms with respect and autonomy.",
  },
  {
    icon: Sparkles,
    title: "Better Quality of Life",
    description: "A wide range of services that help you thrive at home and in the community.",
  },
] as const;

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: 0.05 + i * 0.08,
    },
  }),
};

function ConnectorLines() {
  return (
    <>
      {/* Desktop Connectors (5 columns) */}
      <div className="hidden xl:block absolute inset-x-0 h-0 top-[118px] pointer-events-none z-0">
        <Container className="relative h-full">
          <div className="grid grid-cols-5 gap-6 h-full px-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative flex items-center" style={{ gridColumn: i + 1 }}>
                <svg
                  className="absolute left-[calc(100%+0.5rem)] w-[2rem] h-2"
                  viewBox="0 0 32 8"
                  fill="none"
                >
                  <motion.path
                    d="M0 4H32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className={i % 2 === 0 ? "text-primary/30" : "text-purple-400/30"}
                    initial={{ strokeDashoffset: 32, opacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6 + i * 0.1,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  />
                </svg>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Tablet Connectors (3 columns) */}
      <div className="hidden lg:block xl:hidden absolute inset-x-0 h-0 top-[118px] pointer-events-none z-0">
        <Container className="relative h-full">
          <div className="grid grid-cols-3 gap-6 h-full px-8">
            {[0, 1, 3, 4].map((i) => (
              <div key={i} className="relative flex items-center" style={{ gridColumn: (i % 3) + 1 }}>
                {(i % 3 !== 2 && i < FEATURES.length - 1) && (
                  <svg
                    className="absolute left-[calc(100%+0.5rem)] w-[2rem] h-2"
                    viewBox="0 0 32 8"
                    fill="none"
                  >
                    <motion.path
                      d="M0 4H32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="text-primary/30"
                      initial={{ strokeDashoffset: 32, opacity: 0 }}
                      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + (i % 3) * 0.1,
                        ease: "linear",
                        repeat: Infinity
                      }}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Mobile Vertical Connectors (1 column) */}
      <div className="sm:hidden absolute inset-x-0 inset-y-0 pointer-events-none z-0 mt-44 pb-32">
        <div className="relative flex flex-col gap-0 h-full items-center">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative h-[216px] flex items-end">
              <svg
                className="w-2 h-8"
                viewBox="0 0 8 32"
                fill="none"
              >
                <motion.path
                  d="M4 0V32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-primary/20"
                  initial={{ strokeDashoffset: 32, opacity: 0 }}
                  whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.1,
                    ease: "linear",
                    repeat: Infinity
                  }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function WhyChooseSection(): React.ReactElement {
  return (
    <Section className="bg-purple-50 dark:bg-purple-950/20 text-foreground border-t border-purple-100 dark:border-purple-900/50 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.span
            variants={CARD_VARIANTS}
            custom={0}
            className="section-label text-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={CARD_VARIANTS}
            custom={1}
            className="section-title text-foreground mb-6 leading-tight"
          >
            Why Choose Revira Care?
          </motion.h2>
          <motion.p
            variants={CARD_VARIANTS}
            custom={2}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            Revira Care provides compassionate, personalized support and a wide
            range of services tailored to empower individuals with disabilities.
            Our dedicated team ensures dignity, independence, and a better quality
            of life for every individual we serve.
          </motion.p>
        </motion.div>

        <div className="relative">
          <ConnectorLines />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={CONTAINER_VARIANTS}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 relative z-10"
          >
            {FEATURES.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={CARD_VARIANTS}
                custom={index}
                className="group relative flex flex-col p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary/20 text-secondary border border-secondary/10 dark:border-secondary/20 group-hover:bg-secondary/20 dark:group-hover:bg-secondary/30 transition-colors duration-300">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
