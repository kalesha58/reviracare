"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { NDISProviderSection } from "@/components/sections/NDISProviderSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { LatestNewsSection } from "@/components/sections/LatestNewsSection";
import { SupportConfidenceSection } from "@/components/sections/SupportConfidenceSection";

const CAROUSEL_IMAGES = [
  "/images/hero/Hero-1.jpg",
  "/images/hero/Hero-2.jpg",
  "/images/hero/Hero-3.jpg",
];

const HERO_CONTENT = [
  {
    title: "Tailored Care For Every Journey",
    description: "Revira Care offers personalized support services designed to meet the unique needs of individuals with disabilities. Our goal is to foster independence, confidence, and a better quality of life.",
  },
  {
    title: "Your Partner In Independence And Care",
    description: "We provide comprehensive disability support, from in-home care to skill development programs. At Revira Care, we empower individuals to achieve their goals with dignity and respect.",
  },
  {
    title: "Inclusive Services For A Better Tomorrow",
    description: "With a focus on accessibility and community engagement, our services promote social inclusion and personal growth. Revira Care is here to support you every step of the way.",
  },
];

const BADGES = [
  {
    id: "ndis-official",
    content: (
      <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
        <div className="w-10 sm:w-12 flex shrink-0 items-center justify-center">
          <Image
            src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
            alt="NDIS Registered Provider"
            width={48}
            height={28}
            className="object-contain h-6 sm:h-8 w-auto"
          />
        </div>
        <div className="text-[10px] sm:text-xs font-extrabold text-zinc-800 dark:text-zinc-200 uppercase leading-snug">
          Registered <br /> NDIS Provider
        </div>
      </div>
    ),
  },
  {
    id: "ndis-support",
    content: (
      <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
        <div className="w-10 sm:w-12 flex shrink-0 items-center justify-center">
          <Image
            src="/images/hero/We-Support-NDIS-150-x-150-px-5.png"
            alt="We Support NDIS"
            width={40}
            height={40}
            className="object-contain h-8 sm:h-10 w-auto"
          />
        </div>
        <div className="text-[10px] sm:text-xs font-extrabold text-zinc-800 dark:text-zinc-200 uppercase leading-snug">
          Official <br /> Registered
        </div>
      </div>
    ),
  },
  {
    id: "phone",
    content: (
      <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
        <div className="w-10 sm:w-12 flex shrink-0 items-center justify-center">
          <span className="text-xl sm:text-2xl" aria-hidden>📱</span>
        </div>
        <span className="text-[10px] sm:text-xs font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">1800 REVIRA</span>
      </div>
    ),
  },
  {
    id: "support",
    content: (
      <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
        <div className="w-10 sm:w-12 flex shrink-0 items-center justify-center">
          <div className="text-lg sm:text-xl font-black text-primary leading-none">24/7</div>
        </div>
        <div className="text-[10px] sm:text-xs font-extrabold text-zinc-800 dark:text-zinc-200 uppercase leading-snug">Support <br /> Services</div>
      </div>
    ),
  },
];

export default function HomePage(): React.ReactElement {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Hero Content */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-36 md:pb-20 overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0 bg-white dark:bg-zinc-950 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={CAROUSEL_IMAGES[currentImage % CAROUSEL_IMAGES.length]}
                alt="Healthcare support"
                fill
                className="object-cover object-top dark:opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:from-black/80 dark:via-black/40 dark:to-zinc-950" />
              {/* Scrim behind text for readable contrast on all image areas */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-900/10 to-transparent" aria-hidden />
            </motion.div>
          </AnimatePresence>
        </div>
        <Container className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="section-label inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/95 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm text-[10px] sm:text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Trusted Healthcare Partner
                  </div>
                  <h1 className="hero-title font-extrabold tracking-tight text-white leading-[1.15] mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {(() => {
                      const words = HERO_CONTENT[currentImage].title.split(' ');
                      const lastTwo = words.slice(-2).join(' ');
                      const rest = words.slice(0, -2).join(' ');
                      return (
                        <>
                          {rest}
                          {rest && ' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">
                            {lastTwo}
                          </span>
                        </>
                      );
                    })()}
                  </h1>

                  <p className="subtitle text-white dark:text-zinc-400 leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {HERO_CONTENT[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right Badges (Desktop/Tablet) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end gap-3.5">
              {BADGES.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                  className="w-64"
                >
                  {badge.content}
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        {/* Scroll Indicator & Mobile Badges */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 dark:text-zinc-400">Scroll</span>
          </motion.div>

          {/* Mobile Horizontal Badges */}
          <div className="lg:hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 w-full max-w-lg mx-auto overflow-x-auto no-scrollbar scroll-smooth pb-2">
            {BADGES.map((badge, index) => (
              <motion.div
                key={`mobile-${badge.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="scale-[0.85] sm:scale-90 flex-shrink-0 w-[180px] sm:w-64"
              >
                {badge.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* NDIS Provider Australia */}
      <NDISProviderSection />

      {/* Why Choose Revira Care */}
      <WhyChooseSection />

      {/* Latest News / Blogs */}
      <LatestNewsSection />

      {/* Support at every step, Confidence in every moment */}
      <SupportConfidenceSection />

      {/* Welcome Section */}
      <Section className="bg-white dark:bg-zinc-950 text-foreground border-t border-purple-100 dark:border-purple-900/50 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left: Intro + highlights */}
            <div className="lg:col-span-7">
              <span className="section-label inline-flex items-center gap-2 text-primary uppercase tracking-[0.2em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Why Revira Care
              </span>
              <h2 className="section-title text-foreground mb-6 leading-tight">
                Welcome to Revira Care
              </h2>
              <p className="subtitle text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                We provide person-centred support to help you live the life you choose. Our dedicated team works closely with you to understand your goals and provide the care you deserve.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Tailored support plans built around your goals and preferences",
                  "NDIS registered provider with quality-assured services",
                  "Experienced support workers who respect your independence",
                  "Community participation and in-home care when you need it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 body-sm leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block font-semibold text-foreground body-sm">Government Registered Provider</span>
                  <span className="block caption text-muted-foreground uppercase tracking-wider">NDIS Quality & Safeguards</span>
                </div>
              </div>
            </div>

            {/* Right: Stats cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 auto-rows-fr">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-100 dark:border-purple-900/50 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 dark:bg-purple-900/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden />
                <div className="relative">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 dark:text-purple-100 tracking-tight">500+</span>
                  <p className="caption text-purple-500 dark:text-purple-400 uppercase tracking-wider mt-2">Clients Supported</p>
                </div>
                <p className="body-sm text-slate-600 dark:text-purple-200/70 mt-3 sm:mt-4 relative">
                  Individuals and families who trust us for quality, person-centred care.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden />
                <div className="relative">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">24/7</span>
                  <p className="caption text-primary/80 uppercase tracking-wider mt-2">Available Support</p>
                </div>
                <p className="body-sm text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 relative">
                  Round-the-clock availability so you’re never without support when it matters.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

