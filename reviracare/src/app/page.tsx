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
// import { LatestNewsSection } from "@/components/sections/LatestNewsSection";
import { SupportConfidenceSection } from "@/components/sections/SupportConfidenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const CAROUSEL_IMAGES = [
  "/images/hero/Hero-1.jpg",
  "/images/hero/Hero-2.jpg",
  "/images/hero/Hero-3.jpg",
];

const HERO_CONTENT = [
  {
    title: "And Care Every Journey Better Tomorrow",
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
      <div className="flex items-center justify-start gap-4 sm:gap-5 bg-white border-2 border-purple-brand/20 shadow-2xl rounded-2xl md:rounded-[2rem] p-4 sm:p-5 md:p-6 w-full min-w-0 min-h-[85px] sm:min-h-[100px] md:h-[120px] box-border relative overflow-hidden group">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-brand/[0.03] rounded-full -mr-16 -mt-16" />

        <div className="w-16 sm:w-20 md:w-24 h-12 sm:h-16 md:h-20 flex shrink-0 items-center justify-center p-2.5 bg-white rounded-xl shadow-lg border border-purple-brand/10 z-10 transition-transform group-hover:scale-105">
          <Image
            src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
            alt="NDIS Registered Provider"
            width={96}
            height={60}
            className="object-contain h-full w-auto"
          />
        </div>

        <div className="flex flex-col justify-center min-w-0 z-10 flex-1">
          <div className="text-[13px] sm:text-[15px] md:text-[18px] font-black text-zinc-900 uppercase leading-tight mb-1.5 tracking-tight">
            Registered <br className="sm:hidden" /> NDIS Provider
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[10px] sm:text-[11px] md:text-[13px] font-black text-purple-brand tracking-[0.15em] bg-purple-brand/10 px-3 py-1 rounded-full border border-purple-brand/10">
              NO: 4053379341
            </div>
          </div>
        </div>
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
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero Content */}
      <section className="relative min-h-[75vh] min-[480px]:min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-32 md:pb-20 overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-900/10 to-transparent" aria-hidden />
            </motion.div>
          </AnimatePresence>
        </div>
        <Container className="relative z-20">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="xl:col-span-8 flex flex-col items-start text-left min-w-0 max-w-full overflow-visible">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full min-w-0 overflow-visible"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white section-label uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Trusted Healthcare Partner
                  </div>
                  <div className="overflow-visible py-1">
                    <h1 className="hero-title font-extrabold tracking-tight leading-[1.2] mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] break-words text-white">
                      {(() => {
                        const title = HERO_CONTENT[currentImage].title;
                        const words = title.split(" ");
                        return (
                          <>
                            {words.map((word, i) => {
                              const isAccent = i % 2 === 1;
                              return (
                                <span
                                  key={`${currentImage}-${i}-${word}`}
                                  className={isAccent ? "hero-word-accent" : "hero-word-solid"}
                                >
                                  {word}
                                  {i < words.length - 1 ? " " : ""}
                                </span>
                              );
                            })}
                          </>
                        );
                      })()}
                    </h1>
                  </div>

                  <p className="subtitle text-white leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] min-w-0">
                    {HERO_CONTENT[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right Badges (Desktop/Tablet) - only on xl to avoid overlap */}
            <div className="hidden xl:flex xl:col-span-4 flex-col items-end gap-3 sm:gap-3.5 flex-shrink-0">
              {BADGES.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                  className="w-full max-w-[20rem] xl:w-80"
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
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
            <span className="caption text-white/90 dark:text-zinc-400">Scroll</span>
          </motion.div>

          {/* Mobile/Tablet Single Centered Badge */}
          <div className="xl:hidden flex justify-center px-4 sm:px-6 w-full pb-4 sm:pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="w-full max-w-[300px] sm:max-w-[340px]"
            >
              {BADGES[0].content}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* NDIS Provider Australia */}
      <NDISProviderSection />

      {/* Why Choose Revira Care */}
      <WhyChooseSection />

      {/* Latest News / Blogs - Commented out as requested
      <LatestNewsSection limit={3} showViewAll={true} />
      */}

      {/* Support at every step, Confidence in every moment */}
      <SupportConfidenceSection />

      {/* Welcome Section - Commented out as requested
      <Section className="bg-white dark:bg-zinc-950 text-foreground border-t border-purple-brand/20 dark:border-purple-brand/30 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="section-label inline-flex items-center gap-2 text-purple-brand dark:text-purple-200 uppercase tracking-[0.2em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-brand dark:bg-purple-200 animate-pulse" />
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
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300 body leading-relaxed">
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
                  <span className="block font-semibold text-purple-brand dark:text-purple-200 body">Government Registered Provider</span>
                  <span className="block caption text-purple-brand/80 dark:text-purple-200/90 uppercase tracking-wider">NDIS Quality & Safeguards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 auto-rows-fr">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-purple-brand/20 dark:border-purple-brand/30 bg-white dark:bg-zinc-900/80 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-brand/10 dark:bg-purple-brand/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" aria-hidden />
                <div className="relative">
                  <span className="text-4xl sm:text-5xl font-extrabold text-purple-brand dark:text-purple-100 tracking-tight">500+</span>
                  <p className="caption text-purple-brand dark:text-purple-100 uppercase tracking-wider mt-2">Clients Supported</p>
                </div>
                <p className="body text-slate-600 dark:text-white/70 mt-4 relative">
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
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-brand dark:text-purple-200 tracking-tight">24/7</span>
                  <p className="caption text-purple-brand/80 dark:text-purple-200/90 uppercase tracking-wider mt-2">Available Support</p>
                </div>
                <p className="body text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 relative">
                  Round-the-clock availability so you’re never without support when it matters.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      */}

      {/* Google reviews testimonials — above footer - Commented out as requested
      <TestimonialsSection />
      */}
    </main>
  );
}

