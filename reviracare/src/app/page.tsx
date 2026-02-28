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
  "/images/hero/elderly-care.png",
  "/images/hero/disability-support.png",
  "/images/hero/team.png",
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
    id: "ndis",
    content: (
      <div className="flex items-center gap-3 bg-[#6A2B86] text-white px-5 py-3 rounded-2xl shadow-xl shadow-purple-500/20 border border-white/10">
        <span className="font-bold text-xl tracking-tighter">ndis</span>
        <div className="w-px h-6 bg-white/20" />
        <div className="text-[10px] leading-tight font-bold uppercase text-left">
          Registered <br /> Provider
        </div>
      </div>
    ),
  },
  {
    id: "phone",
    content: (
      <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
        <span className="text-xl">📱</span>
        <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">1800 REVIRA</span>
      </div>
    ),
  },
  {
    id: "support",
    content: (
      <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
        <div className="text-xl font-bold text-blue-400 leading-none">24/7</div>
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Support</div>
      </div>
    ),
  },
  {
    id: "covid",
    content: (
      <div className="flex items-center gap-3 px-5 py-3 bg-[#00A3E0]/20 backdrop-blur-xl text-[#00A3E0] rounded-2xl border border-[#00A3E0]/40 shadow-xl">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-[11px] font-bold tracking-wider uppercase">COVID Safe</span>
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
      <section className="relative min-h-[600px] md:h-[65vh] md:min-h-[500px] flex items-center pt-24 md:pt-24 pb-32 md:pb-12 overflow-hidden">
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
                className="object-cover object-center dark:opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:from-black/80 dark:via-black/40 dark:to-zinc-950" />
            </motion.div>
          </AnimatePresence>
        </div>
        <Container className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Trusted Healthcare Partner
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] dark:[text-shadow:none]">
                    {HERO_CONTENT[currentImage].title.split(' ').map((word, i) => (
                      i >= HERO_CONTENT[currentImage].title.split(' ').length - 2 ? (
                        <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-zinc-900 to-blue-600 dark:from-emerald-400 dark:via-white dark:to-blue-400">
                          {word}{' '}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    ))}
                  </h1>

                  <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl font-medium [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] dark:[text-shadow:none]">
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
                  className="w-fit"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Scroll</span>
          </motion.div>

          {/* Mobile Horizontal Badges */}
          <div className="lg:hidden flex flex-wrap justify-center items-center gap-3 px-4 w-full max-w-lg mx-auto overflow-x-auto no-scrollbar scroll-smooth pb-2">
            {BADGES.map((badge, index) => (
              <motion.div
                key={`mobile-${badge.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="scale-90 flex-shrink-0"
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
      <Section className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Welcome to Revira Care
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                We provide person-centred support to help you live the life you
                choose. Our dedicated team works closely with you to understand
                your goals and provide the care you deserve.
              </p>
              <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-6 h-6" />
                <span>Government Registered Provider</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/5 p-8 flex flex-col justify-end">
                <div className="text-4xl font-bold mb-2 text-zinc-900 dark:text-white">500+</div>
                <div className="text-zinc-500 font-bold uppercase text-xs tracking-wider">Clients Supported</div>
              </div>
              <div className="h-64 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-3xl border border-emerald-500/10 dark:border-emerald-500/20 p-8 flex flex-col justify-end">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">24/7</div>
                <div className="text-emerald-600/60 dark:text-emerald-400/60 font-bold uppercase text-xs tracking-wider">Available Support</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

