"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Heart, Target, Lightbulb, Users, CheckCircle2, Shield, Zap, Award,
  Search, FileText, Handshake, Activity, RotateCcw, ShieldCheck,
  Lock, Scale, MessageSquare, HelpCircle, ChevronDown, Rocket,
  Star, Globe, Quote
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const VALUES = [
  {
    icon: <Heart className="w-8 h-8 text-purple-brand" />,
    title: "Compassion",
    description: "We lead with empathy and understanding, ensuring every individual feels heard and valued.",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-brand" />,
    title: "Integrity",
    description: "We maintain the highest standards of professional ethics and transparency in all our actions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-brand" />,
    title: "Empowerment",
    description: "We provide the tools and support needed for individuals to take control of their own lives.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-brand" />,
    title: "Excellence",
    description: "We are committed to delivering the highest quality of care through continuous improvement.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery",
    icon: <Search className="w-6 h-6 text-purple-brand" />,
    description: "We start by listening to your story, understanding your goals, and identifying your unique needs."
  },
  {
    step: "02",
    title: "Planning",
    icon: <FileText className="w-6 h-6 text-purple-brand" />,
    description: "Together, we craft a personalized support plan that aligns perfectly with your NDIS budget and aspirations."
  },
  {
    step: "03",
    title: "Matching",
    icon: <Handshake className="w-6 h-6 text-purple-brand" />,
    description: "We match you with the right support workers who share your interests and respect your preferences."
  },
  {
    step: "04",
    title: "Support",
    icon: <Activity className="w-6 h-6 text-purple-brand" />,
    description: "Implementation of your plan with consistent, high-quality care that focuses on your daily well-being."
  },
  {
    step: "05",
    title: "Review",
    icon: <RotateCcw className="w-6 h-6 text-purple-brand" />,
    description: "Regular check-ins and adjustments ensure your support evolves as your needs and goals change."
  }
];

const FAQS = [
  {
    question: "Is Revira Care a registered NDIS provider?",
    answer: "Yes, Revira Care is a fully registered NDIS provider. We comply with all NDIS Quality and Safeguards Commission standards to ensure the highest level of care and safety."
  },
  {
    question: "What areas do you provide services in?",
    answer: "We provide community-based support services across multiple regions. Contact us to find out if we are currently active in your specific local government area."
  },
  {
    question: "Can I choose my own support worker?",
    answer: "Absolutely! We focus on 'matching' participants with support workers. We encourage you to be part of the selection process to ensure compatibility and comfort."
  },
  {
    question: "How do you ensure the quality of your services?",
    answer: "We implement rigorous vetting processes for all staff, regular training updates, and frequent service audits. We also actively seek and act on feedback from our participants."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left text-foreground hover:text-purple-brand dark:hover:text-purple-200 transition-colors"
      >
        <span className={`subsection-title pr-6 sm:pr-8 ${isOpen ? 'text-purple-brand dark:text-purple-200' : ''}`}>{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-brand dark:text-purple-200' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 sm:pb-6 body-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background dark:bg-zinc-950 text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] min-[480px]:min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-32 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white dark:bg-zinc-950 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero/team-v3.png"
              alt="Revira Care Professional Team"
              fill
              className="object-cover object-top dark:opacity-60"
              priority
              sizes="100vw"
            />
            {/* Main Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:from-black/80 dark:via-black/40 dark:to-zinc-950" />

            {/* Scrim behind text for readable contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-zinc-900/20 to-transparent" aria-hidden />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>

        <Container className="relative z-20">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="xl:col-span-8 flex flex-col items-start text-left min-w-0 max-w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full min-w-0"
              >
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white section-label uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Trusted NDIS Partner
                </div>
                <div className="overflow-visible py-1">
                  <h1 className="hero-title font-extrabold tracking-tight leading-[1.2] mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] break-words">
                    {(() => {
                      const title = "Reimagining The Care Experience";
                      const words = title.split(" ");
                      return (
                        <>
                          {words.map((word, i) => (
                            <span
                              key={`about-hero-${i}-${word}`}
                              className={i % 2 === 1 ? "hero-word-accent" : "hero-word-solid"}
                            >
                              {word}
                              {i === 0 ? <br className="hidden sm:block" /> : null}
                              {i < words.length - 1 && i !== 0 ? " " : ""}
                              {i === 0 ? " " : ""}
                            </span>
                          ))}
                        </>
                      );
                    })()}
                  </h1>
                </div>
                <p className="subtitle text-white leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] min-w-0">
                  Revira Care is more than a service provider. We are your partners in creating a life characterized by empowerment, independence, and joy.
                </p>
              </motion.div>
            </div>

            {/* Right Badges (Desktop only - xl to avoid overlap on tablet) */}
            <div className="hidden xl:flex xl:col-span-4 flex-col items-end gap-3 sm:gap-3.5 flex-shrink-0">
              {[
                {
                  id: "ndis-official",
                  logo: (
                    <Image
                      src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
                      alt="NDIS Registered Provider"
                      width={48}
                      height={28}
                      className="object-contain h-6 sm:h-8 w-auto"
                    />
                  ),
                  label: "Registered NDIS Provider"
                },
                {
                  id: "ndis-support",
                  logo: (
                    <Image
                      src="/images/hero/We-Support-NDIS-150-x-150-px-5.png"
                      alt="We Support NDIS"
                      width={40}
                      height={40}
                      className="object-contain h-8 sm:h-10 w-auto"
                    />
                  ),
                  label: "Official Registered"
                },
                {
                  id: "phone",
                  logo: <span className="text-xl sm:text-2xl" aria-hidden>📱</span>,
                  label: "1800 REVIRA"
                },
                {
                  id: "support",
                  logo: <div className="text-xl font-black text-primary leading-none">24/7</div>,
                  label: "Support Services"
                }
              ].map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                  className="w-full max-w-[16rem] xl:w-64"
                >
                  <div className="flex items-center justify-start gap-2 sm:gap-3 md:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-2 rounded-xl sm:rounded-2xl border-2 border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-0 min-h-[56px] sm:min-h-[64px] md:h-[72px] box-border">
                    <div className="w-9 sm:w-10 md:w-12 flex shrink-0 items-center justify-center">
                      {badge.logo}
                    </div>
                    <div className="text-caption text-zinc-800 dark:text-zinc-200 uppercase leading-snug min-w-0">
                      {badge.label.split(' ').length > 2 ? (
                        <>
                          {badge.label.split(' ').slice(0, 1).join(' ')} <br />
                          {badge.label.split(' ').slice(1).join(' ')}
                        </>
                      ) : (
                        badge.label.split(' ').map((word, i) => (
                          <React.Fragment key={i}>
                            {word} {i === 0 && <br />}
                          </React.Fragment>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        {/* Scroll Indicator & Mobile Badges */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-6 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
            <span className="caption text-white/90 dark:text-zinc-400">Scroll</span>
          </motion.div>

          {/* Mobile/Tablet Horizontal Badges */}
          <div className="xl:hidden flex flex-nowrap justify-start sm:justify-center items-stretch gap-2 sm:gap-3 px-4 sm:px-6 w-full overflow-x-auto overflow-y-hidden scroll-smooth pb-4 sm:pb-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.3)_transparent]">
            {[
              {
                id: "ndis-official-mobile",
                logo: (
                  <Image
                    src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
                    alt="NDIS Registered Provider"
                    width={48}
                    height={28}
                    className="object-contain h-6 sm:h-8 w-auto"
                  />
                ),
                label: "Registered NDIS Provider"
              },
              {
                id: "ndis-support-mobile",
                logo: (
                  <Image
                    src="/images/hero/We-Support-NDIS-150-x-150-px-5.png"
                    alt="We Support NDIS"
                    width={40}
                    height={40}
                    className="object-contain h-8 sm:h-10 w-auto"
                  />
                ),
                label: "Official Registered"
              },
              {
                id: "phone-mobile",
                logo: <span className="text-xl sm:text-2xl" aria-hidden>📱</span>,
                label: "1800 REVIRA"
              },
              {
                id: "support-mobile",
                logo: <div className="text-xl font-black text-primary leading-none">24/7</div>,
                label: "Support Services"
              }
            ].map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="flex-shrink-0 w-[150px] min-w-[150px] sm:w-52 sm:min-w-[13rem] md:w-56 md:min-w-[14rem]"
              >
                <div className="flex items-center justify-start gap-2 sm:gap-3 md:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-2 rounded-xl sm:rounded-2xl border-2 border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-0 min-h-[56px] sm:min-h-[64px] md:h-[72px] box-border h-full">
                  <div className="w-9 sm:w-10 md:w-12 flex shrink-0 items-center justify-center">
                    {badge.logo}
                  </div>
                  <div className="text-caption text-zinc-800 dark:text-zinc-200 uppercase leading-snug text-left min-w-0">
                    {badge.label.split(' ').length > 2 ? (
                      <>
                        {badge.label.split(' ').slice(0, 1).join(' ')} <br />
                        {badge.label.split(' ').slice(1).join(' ')}
                      </>
                    ) : (
                      badge.label.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word} {i === 0 && <br />}
                        </React.Fragment>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & History */}
      <Section id="story" className="overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white dark:bg-zinc-950 text-foreground border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label text-purple-brand dark:text-purple-200 uppercase tracking-[0.2em] block mb-4">Our Heritage</span>
              <h2 className="section-title text-foreground mb-4 sm:mb-5 leading-tight">Founded on Faith, <br className="hidden sm:block" /> Built for Impact</h2>
              <p className="body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                Revira Care began with a simple vision: to bridge the gap between clinical support and authentic human connection. We saw individuals being treated as "cases" rather than "people," and we knew we could do better.
              </p>
              <p className="body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                Today, we stand as a beacon of quality in the community care sector, driven by a diverse team that shares one common goal: seeing our participants thrive, grow, and achieve what they once thought was impossible.
              </p>

              <div className="flex flex-wrap gap-8 sm:gap-10">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-0.5">500+</div>
                  <div className="caption text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Lives Touched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-0.5">15+</div>
                  <div className="caption text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Specialized Services</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-2xl rounded-[3rem]" />
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/hero/disability-support.png"
                  alt="Our Heritage"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-muted/40 dark:bg-zinc-900/50 py-16 sm:py-20 md:py-24 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-background dark:bg-zinc-900 border border-border hover:border-purple-brand/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Target className="w-6 h-6 text-purple-brand" />
                </div>
                <h3 className="subsection-title text-foreground">Our Mission</h3>
              </div>
              <p className="body text-muted-foreground leading-relaxed font-medium">
                To provide high-quality, inclusive support services that empower individuals to achieve their goals, enhance their independence, and live their best possible lives within their community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-background dark:bg-zinc-900 border border-border hover:border-purple-brand/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Lightbulb className="w-6 h-6 text-purple-brand" />
                </div>
                <h3 className="subsection-title text-foreground">Our Vision</h3>
              </div>
              <p className="body text-muted-foreground leading-relaxed font-medium">
                To be the leading innovator in disability support, fostering a world where accessibility and inclusion are the standard, and every individual is empowered to reach their full potential.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="py-16 sm:py-20 md:py-24 bg-background dark:bg-zinc-950 text-foreground border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="section-title text-foreground mb-3 sm:mb-4">Our Core Values</h2>
            <p className="body text-muted-foreground leading-relaxed font-medium">
              These principles guide everything we do, from the way we interact with our participants to how we develop our support programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-7 rounded-2xl bg-muted/60 dark:bg-white/5 border border-border hover:bg-muted dark:hover:bg-white/[0.08] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0">{value.icon}</div>
                  <h4 className="subsection-title text-foreground">{value.title}</h4>
                </div>
                <p className="body text-muted-foreground leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Methodology (Step-by-Step) */}
      <Section className="bg-muted/40 dark:bg-zinc-900/40 border-y border-border py-16 sm:py-20 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <span className="section-label text-purple-brand dark:text-purple-200 uppercase tracking-[0.2em] block mb-4">How We Work</span>
            <h2 className="section-title text-foreground mb-3 sm:mb-4">Your Journey With Us</h2>
            <p className="subtitle text-muted-foreground">
              We follow a rigorous, person-centered methodology to ensure your support is as unique as you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

            {METHODOLOGY.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-background dark:bg-zinc-950 border border-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-purple-brand/50 transition-all duration-500 shadow-sm">
                  {step.icon}
                </div>
                <div className="caption text-muted-foreground mb-1.5 uppercase tracking-tighter">{step.step}</div>
                <h4 className="subsection-title text-foreground mb-2.5">{step.title}</h4>
                <p className="body-sm text-muted-foreground leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Holistic Care Section (Image Right) */}
      <Section className="py-16 sm:py-20 md:py-24 bg-background dark:bg-zinc-950 text-foreground border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/hero/elderly-care.png"
                  alt="Holistic Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="section-label text-purple-brand dark:text-purple-200 uppercase tracking-[0.2em] block mb-4">Broad Support</span>
              <h2 className="section-title text-foreground mb-4 sm:mb-5">A Holistic Approach to Well-being</h2>
              <p className="body text-muted-foreground leading-relaxed mb-6">
                Our services extend beyond basic care. We look at the "whole person"—their social life, their health, their skills, and their happiness.
              </p>
              <ul className="space-y-3.5" role="list">
                {[
                  "Personalized Allied Health Coordination",
                  "Social & Community Participation",
                  "Daily Living Skills Development",
                  "Complex Nursing Care Support"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 body-sm text-muted-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/80 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Quality & Safety grid */}
      <Section className="bg-muted/40 dark:bg-zinc-900/50 py-16 sm:py-20 md:py-24 border-t border-border">
        <Container>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="section-title text-foreground mb-2 sm:mb-3">Committed to Quality & Safety</h2>
            <p className="subtitle text-muted-foreground">How we maintain the highest standards of care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "NDIS Compliance", desc: "Strict adherence to the NDIS Quality and Safeguards Commission standards.", icon: <Scale className="w-7 h-7 text-purple-brand" /> },
              { title: "Rigorous Vetting", desc: "All staff undergo extensive police checks and Working with Children checks.", icon: <Lock className="w-7 h-7 text-purple-brand" /> },
              { title: "Ongoing Training", desc: "Continuous professional development for all our support workers and nurses.", icon: <Rocket className="w-7 h-7 text-purple-brand" /> }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-background dark:bg-zinc-950 border border-border hover:border-zinc-300 dark:hover:border-white/10 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="shrink-0">{item.icon}</div>
                  <h4 className="subsection-title text-foreground">{item.title}</h4>
                </div>
                <p className="body-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Impact (Image Left) */}
      <Section className="py-16 sm:py-20 md:py-24 bg-background dark:bg-zinc-950 text-foreground border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label text-purple-brand dark:text-purple-200 uppercase tracking-[0.2em] block mb-3 sm:mb-4">Our Impact</span>
              <h2 className="section-title text-foreground mb-4 sm:mb-5 leading-tight">Real Progress, <br className="hidden sm:block" /> Real Lives</h2>
              <p className="body text-muted-foreground leading-relaxed mb-8">
                Success is measured by the smiles on our participants' faces and the goals checked off their lists. Whether it's learning a new skill or becoming more active in the community, every victory is celebrated.
              </p>

              <div className="bg-muted/60 dark:bg-white/5 border border-border p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="w-12 h-12 text-foreground" />
                </div>
                <p className="body text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                  "Revira Care has completely transformed how I approach my daily goals. I feel empowered and truly supported for the first time."
                </p>
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 p-px">
                    <div className="w-full h-full rounded-full bg-muted dark:bg-zinc-900 flex items-center justify-center caption text-foreground">SJ</div>
                  </div>
                  <div>
                    <div className="body-sm font-bold text-foreground">Sarah J.</div>
                    <div className="caption text-muted-foreground uppercase tracking-wider">Participant</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/hero/therapy.png"
                  alt="Our Impact"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/40 dark:bg-zinc-900/30 py-16 sm:py-20 md:py-24 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="section-title text-foreground mb-2 sm:mb-3">Common Questions</h2>
              <p className="subtitle text-muted-foreground">Everything you need to know about getting started.</p>
            </div>

            <div className="bg-background dark:bg-zinc-900 border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              {FAQS.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Section */}
      <Section className="py-16 sm:py-20 md:py-24 pb-32 bg-background dark:bg-zinc-950 text-foreground border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            {[
              { icon: <Star className="w-8 h-8 text-purple-brand" />, title: "Quality First", desc: "Never compromising on the safety and standard of our care." },
              { icon: <Users className="w-8 h-8 text-purple-brand" />, title: "Inclusive Community", desc: "Fostering an environment where everyone belongs." },
              { icon: <Globe className="w-8 h-8 text-purple-brand" />, title: "Local Presence", desc: "Deeply connected to the communities we serve." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-muted dark:bg-zinc-900 border border-border shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="subsection-title text-foreground">{feature.title}</h4>
                </div>
                <p className="body-sm text-muted-foreground leading-relaxed max-w-[240px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
