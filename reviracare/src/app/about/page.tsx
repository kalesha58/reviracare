"use client";

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
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Compassion",
    description: "We lead with empathy and understanding, ensuring every individual feels heard and valued.",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    title: "Integrity",
    description: "We maintain the highest standards of professional ethics and transparency in all our actions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Empowerment",
    description: "We provide the tools and support needed for individuals to take control of their own lives.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-600" />,
    title: "Excellence",
    description: "We are committed to delivering the highest quality of care through continuous improvement.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery",
    icon: <Search className="w-6 h-6 text-primary" />,
    description: "We start by listening to your story, understanding your goals, and identifying your unique needs."
  },
  {
    step: "02",
    title: "Planning",
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    description: "Together, we craft a personalized support plan that aligns perfectly with your NDIS budget and aspirations."
  },
  {
    step: "03",
    title: "Matching",
    icon: <Handshake className="w-6 h-6 text-primary" />,
    description: "We match you with the right support workers who share your interests and respect your preferences."
  },
  {
    step: "04",
    title: "Support",
    icon: <Activity className="w-6 h-6 text-purple-500" />,
    description: "Implementation of your plan with consistent, high-quality care that focuses on your daily well-being."
  },
  {
    step: "05",
    title: "Review",
    icon: <RotateCcw className="w-6 h-6 text-primary" />,
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
    <div className="border-b border-zinc-200 dark:border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left text-zinc-900 dark:text-white hover:text-primary transition-colors"
      >
        <span className="text-base sm:text-lg font-bold pr-6 sm:pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 sm:pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
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
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-36 md:pb-20 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-900/10 to-transparent" aria-hidden />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>

        <Container className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <div className="section-label inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/95 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm text-[10px] sm:text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Trusted NDIS Partner
                </div>
                <h1 className="hero-title font-extrabold tracking-tight text-white leading-[1.15] mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  Reimagining <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">
                    The Care Experience
                  </span>
                </h1>
                <p className="subtitle text-white dark:text-zinc-400 leading-relaxed mb-6 sm:mb-10 max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  Revira Care is more than a service provider. We are your partners in creating a life characterized by empowerment, independence, and joy.
                </p>
              </motion.div>
            </div>

            {/* Right Badges (Desktop/Tablet) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end gap-3.5">
              {[
                { label: "Registered Provider", sub: "NDIS Accredited", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
                { label: "24/7 Availability", sub: "Always Support", icon: <Zap className="w-6 h-6 text-secondary" /> },
                { label: "Certified Staff", sub: "Highly Vetted", icon: <Award className="w-6 h-6 text-primary" /> },
                { label: "Client Focused", sub: "100% Person Centered", icon: <Heart className="w-6 h-6 text-secondary" /> }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                  className="w-64"
                >
                  <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
                    <div className="w-12 flex shrink-0 items-center justify-center">
                      {badge.icon}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100 uppercase leading-snug">
                        {badge.label}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        {badge.sub}
                      </div>
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
            <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 dark:text-zinc-400">Scroll</span>
          </motion.div>

          {/* Mobile Horizontal Badges */}
          <div className="lg:hidden flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 w-full max-w-lg mx-auto overflow-x-auto no-scrollbar scroll-smooth pb-2">
            {[
              { label: "Registered Provider", sub: "NDIS Accredited", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
              { label: "24/7 Availability", sub: "Always Support", icon: <Zap className="w-6 h-6 text-secondary" /> },
              { label: "Certified Staff", sub: "Highly Vetted", icon: <Award className="w-6 h-6 text-primary" /> },
              { label: "Client Focused", sub: "100% Person Centered", icon: <Heart className="w-6 h-6 text-secondary" /> }
            ].map((badge, index) => (
              <motion.div
                key={`mobile-${badge.label}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="scale-[0.85] sm:scale-90 flex-shrink-0 w-[180px] sm:w-64"
              >
                <div className="flex items-center justify-start gap-3 sm:gap-4 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl w-full min-w-[140px] max-w-[200px] sm:max-w-[240px] lg:w-64 h-[64px] sm:h-[72px]">
                  <div className="w-12 flex shrink-0 items-center justify-center">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100 uppercase leading-snug">
                      {badge.label}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      {badge.sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & History */}
      <Section id="story" className="overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white dark:bg-transparent">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Our Heritage</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight text-zinc-900 dark:text-white">Founded on Faith, <br className="hidden sm:block" /> Built for Impact</h3>
              <p className="text-zinc-600 dark:text-zinc-500 text-base leading-relaxed mb-5">
                Revira Care began with a simple vision: to bridge the gap between clinical support and authentic human connection. We saw individuals being treated as "cases" rather than "people," and we knew we could do better.
              </p>
              <p className="text-zinc-600 dark:text-zinc-500 text-base leading-relaxed mb-8">
                Today, we stand as a beacon of quality in the community care sector, driven by a diverse team that shares one common goal: seeing our participants thrive, grow, and achieve what they once thought was impossible.
              </p>

              <div className="flex flex-wrap gap-8 sm:gap-10">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-0.5">500+</div>
                  <div className="text-zinc-500 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Lives Touched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-0.5">15+</div>
                  <div className="text-zinc-500 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Specialized Services</div>
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
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 shadow-2xl">
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
      <Section className="bg-zinc-100 dark:bg-zinc-900/50 py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                To provide high-quality, inclusive support services that empower individuals to achieve their goals, enhance their independence, and live their best possible lives within their community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 hover:border-secondary/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                To be the leading innovator in disability support, fostering a world where accessibility and inclusion are the standard, and every individual is empowered to reach their full potential.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-transparent">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-zinc-900 dark:text-white">Our Core Values</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
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
                className="p-5 sm:p-7 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200/80 dark:hover:bg-white/[0.08] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0">{value.icon}</div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{value.title}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-[13px] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Methodology (Step-by-Step) */}
      <Section className="bg-zinc-100 dark:bg-zinc-900/40 border-y border-zinc-200 dark:border-white/5 py-16 sm:py-20 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-primary font-bold uppercase text-[10px] tracking-[0.3em] mb-4">How We Work</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-zinc-900 dark:text-white">Your Journey With Us</h3>
            <p className="text-zinc-600 dark:text-zinc-500 text-base">
              We follow a rigorous, person-centered methodology to ensure your support is as unique as you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-white/10 to-transparent z-0" />

            {METHODOLOGY.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-[10px] font-bold text-zinc-500 dark:text-zinc-600 mb-1.5 uppercase tracking-tighter">{step.step}</div>
                <h4 className="text-lg font-bold mb-2.5 text-zinc-900 dark:text-white">{step.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-500 text-[13px] leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Holistic Care Section (Image Right) */}
      <Section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-transparent">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 shadow-2xl">
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
              <h2 className="text-secondary font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Broad Support</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-zinc-900 dark:text-white">A Holistic Approach to Well-being</h3>
              <p className="text-zinc-600 dark:text-zinc-500 text-base leading-relaxed mb-6">
                Our services extend beyond basic care. We look at the "whole person"—their social life, their health, their skills, and their happiness.
              </p>
              <ul className="space-y-3.5">
                {/* Update list items if needed to use secondary/primary */}
                {[
                  "Personalized Allied Health Coordination",
                  "Social & Community Participation",
                  "Daily Living Skills Development",
                  "Complex Nursing Care Support"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-[15px] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Quality & Safety grid */}
      <Section className="bg-zinc-100 dark:bg-zinc-900/50 py-16 sm:py-20 md:py-24">
        <Container>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-zinc-900 dark:text-white">Committed to Quality & Safety</h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">How we maintain the highest standards of care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "NDIS Compliance", desc: "Strict adherence to the NDIS Quality and Safeguards Commission standards.", icon: <Scale className="w-7 h-7 text-primary" /> },
              { title: "Rigorous Vetting", desc: "All staff undergo extensive police checks and Working with Children checks.", icon: <Lock className="w-7 h-7 text-secondary" /> },
              { title: "Ongoing Training", desc: "Continuous professional development for all our support workers and nurses.", icon: <Rocket className="w-7 h-7 text-primary" /> }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="shrink-0">{item.icon}</div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-500 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Impact (Image Left) */}
      <Section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-transparent">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold uppercase text-[10px] tracking-[0.3em] mb-3 sm:mb-4">Our Impact</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight text-zinc-900 dark:text-white">Real Progress, <br className="hidden sm:block" /> Real Lives</h3>
              <p className="text-zinc-600 dark:text-zinc-500 text-base leading-relaxed mb-8">
                Success is measured by the smiles on our participants' faces and the goals checked off their lists. Whether it's learning a new skill or becoming more active in the community, every victory is celebrated.
              </p>

              <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="w-12 h-12 text-zinc-900 dark:text-white" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 italic text-[15px] mb-6 leading-relaxed relative z-10">
                  "Revira Care has completely transformed how I approach my daily goals. I feel empowered and truly supported for the first time."
                </p>
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 p-px">
                    <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-900 dark:text-white">SJ</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">Sarah J.</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase font-bold tracking-widest">Participant</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 shadow-2xl">
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
      <Section className="bg-zinc-100 dark:bg-zinc-900/30 py-16 sm:py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-zinc-900 dark:text-white">Common Questions</h2>
              <p className="text-zinc-600 dark:text-zinc-500 text-sm">Everything you need to know about getting started.</p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              {FAQS.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Section */}
      <Section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-transparent">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            {[
              { icon: <Star className="w-8 h-8 text-primary" />, title: "Quality First", desc: "Never compromising on the safety and standard of our care." },
              { icon: <Users className="w-8 h-8 text-secondary" />, title: "Inclusive Community", desc: "Fostering an environment where everyone belongs." },
              { icon: <Globe className="w-8 h-8 text-primary" />, title: "Local Presence", desc: "Deeply connected to the communities we serve." }
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
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{feature.title}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-500 text-[13px] leading-relaxed max-w-[240px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24 sm:pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-zinc-100 dark:to-zinc-900 border border-zinc-200 dark:border-white/10 p-8 sm:p-12 md:p-20 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight text-zinc-900 dark:text-white">
                Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-purple-300">New Chapter</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                We&apos;re ready to listen, plan, and support you. Your journey towards more independence starts with a single conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-xl font-bold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 shadow-xl shadow-emerald-500/5"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white rounded-xl font-bold text-sm hover:bg-white dark:hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full" />
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
