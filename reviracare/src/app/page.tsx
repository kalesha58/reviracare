"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <span className="font-black text-xl tracking-tighter">ndis</span>
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
        <div className="text-xl font-black text-blue-400 leading-none">24/7</div>
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Support</div>
      </div>
    ),
  },
  {
    id: "covid",
    content: (
      <div className="flex items-center gap-3 px-5 py-3 bg-[#00A3E0]/20 backdrop-blur-xl text-[#00A3E0] rounded-2xl border border-[#00A3E0]/40 shadow-xl">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-[11px] font-black tracking-wider uppercase">COVID Safe</span>
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
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-zinc-950 overflow-hidden">
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
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-zinc-950" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
        <Container className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
                    {HERO_CONTENT[currentImage].title.split(' ').map((word, i) => (
                      i >= HERO_CONTENT[currentImage].title.split(' ').length - 2 ? (
                        <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-blue-400">
                          {word}{' '}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    ))}
                  </h1>

                  <p className="text-base md:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl font-medium">
                    {HERO_CONTENT[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold text-sm flex items-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-sm hover:bg-white/10 transition-all hover:border-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Badges */}
            <div className="lg:col-span-5 flex flex-col items-end gap-4 md:gap-6">
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <Section className="bg-zinc-950 text-white border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Welcome to Revira Care
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                We provide person-centred support to help you live the life you
                choose. Our dedicated team works closely with you to understand
                your goals and provide the care you deserve.
              </p>
              <div className="flex items-center gap-4 text-emerald-400 font-bold">
                <CheckCircle2 className="w-6 h-6" />
                <span>Government Registered Provider</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8 flex flex-col justify-end">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-zinc-500 font-bold uppercase text-xs tracking-wider">Clients Supported</div>
              </div>
              <div className="h-64 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 p-8 flex flex-col justify-end">
                <div className="text-4xl font-black text-emerald-500 mb-2">24/7</div>
                <div className="text-emerald-500/60 font-bold uppercase text-xs tracking-wider">Available Support</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

