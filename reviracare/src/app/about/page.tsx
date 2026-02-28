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
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Compassion",
    description: "We lead with empathy and understanding, ensuring every individual feels heard and valued.",
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: "Integrity",
    description: "We maintain the highest standards of professional ethics and transparency in all our actions.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Empowerment",
    description: "We provide the tools and support needed for individuals to take control of their own lives.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-500" />,
    title: "Excellence",
    description: "We are committed to delivering the highest quality of care through continuous improvement.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Discovery",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    description: "We start by listening to your story, understanding your goals, and identifying your unique needs."
  },
  {
    step: "02",
    title: "Planning",
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    description: "Together, we craft a personalized support plan that aligns perfectly with your NDIS budget and aspirations."
  },
  {
    step: "03",
    title: "Matching",
    icon: <Handshake className="w-6 h-6 text-purple-400" />,
    description: "We match you with the right support workers who share your interests and respect your preferences."
  },
  {
    step: "04",
    title: "Support",
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    description: "Implementation of your plan with consistent, high-quality care that focuses on your daily well-being."
  },
  {
    step: "05",
    title: "Review",
    icon: <RotateCcw className="w-6 h-6 text-amber-400" />,
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
    <div className="border-b border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
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
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/team.png"
            alt="Revira Care Team"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-zinc-950" />

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Trusted NDIS Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-[1.1]">
              Reimagining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-blue-500">
                The Care Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
              Revira Care is more than a service provider. We are your partners in creating a life characterized by empowerment, independence, and joy.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Trust Badges */}
      <div className="relative z-20 -mt-8 mb-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Registered Provider", sub: "NDIS Accredited", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "24/7 Availability", sub: "Always Support", icon: <Zap className="w-4 h-4" /> },
              { label: "Certified Staff", sub: "Highly Vetted", icon: <Award className="w-4 h-4" /> },
              { label: "Client Focused", sub: "100% Person Centered", icon: <Heart className="w-4 h-4" /> }
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-3.5 shadow-xl shadow-black/20"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="text-xs font-bold">{badge.label}</div>
                  <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Our Story & History */}
      <Section id="story" className="overflow-hidden pt-12 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-indigo-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Our Heritage</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">Founded on Faith, <br /> Built for Impact</h3>
              <p className="text-zinc-500 text-base leading-relaxed mb-5">
                Revira Care began with a simple vision: to bridge the gap between clinical support and authentic human connection. We saw individuals being treated as "cases" rather than "people," and we knew we could do better.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-8">
                Today, we stand as a beacon of quality in the community care sector, driven by a diverse team that shares one common goal: seeing our participants thrive, grow, and achieve what they once thought was impossible.
              </p>

              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5">500+</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Lives Touched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5">15+</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Specialized Services</div>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-2xl rounded-[3rem]" />
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
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
      <Section className="bg-zinc-900/50 py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To provide high-quality, inclusive support services that empower individuals to achieve their goals, enhance their independence, and live their best possible lives within their community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                To be the leading innovator in disability support, fostering a world where accessibility and inclusion are the standard, and every individual is empowered to reach their full potential.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              These principles guide everything we do, from the way we interact with our participants to how we develop our support programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all hover:-translate-y-1"
              >
                <div className="mb-5">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2.5">{value.title}</h4>
                <p className="text-zinc-400 text-[13px] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Methodology (Step-by-Step) */}
      <Section className="bg-zinc-900/40 border-y border-white/5 py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">How We Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Journey With Us</h3>
            <p className="text-zinc-500 text-base">
              We follow a rigorous, person-centered methodology to ensure your support is as unique as you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            {METHODOLOGY.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-500">
                  {step.icon}
                </div>
                <div className="text-[10px] font-bold text-zinc-600 mb-1.5 uppercase tracking-tighter">{step.step}</div>
                <h4 className="text-lg font-bold mb-2.5">{step.title}</h4>
                <p className="text-zinc-500 text-[13px] leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Holistic Care Section (Image Right) */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
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
              <h2 className="text-blue-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Broad Support</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">A Holistic Approach to Well-being</h3>
              <p className="text-zinc-500 text-base leading-relaxed mb-6">
                Our services extend beyond basic care. We look at the "whole person"—their social life, their health, their skills, and their happiness.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Personalized Allied Health Coordination",
                  "Social & Community Participation",
                  "Daily Living Skills Development",
                  "Complex Nursing Care Support"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-400 text-[15px] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Quality & Safety grid */}
      <Section className="bg-zinc-900/50 py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Committed to Quality & Safety</h2>
            <p className="text-zinc-500 text-sm">How we maintain the highest standards of care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "NDIS Compliance", desc: "Strict adherence to the NDIS Quality and Safeguards Commission standards.", icon: <Scale className="w-7 h-7 text-emerald-500" /> },
              { title: "Rigorous Vetting", desc: "All staff undergo extensive police checks and Working with Children checks.", icon: <Lock className="w-7 h-7 text-blue-500" /> },
              { title: "Ongoing Training", desc: "Continuous professional development for all our support workers and nurses.", icon: <Rocket className="w-7 h-7 text-rose-500" /> }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="mb-5">{item.icon}</div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-zinc-500 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Impact (Image Left) */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-rose-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Our Impact</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">Real Progress, <br /> Real Lives</h3>
              <p className="text-zinc-500 text-base leading-relaxed mb-8">
                Success is measured by the smiles on our participants' faces and the goals checked off their lists. Whether it's learning a new skill or becoming more active in the community, every victory is celebrated.
              </p>

              <div className="bg-white/5 border border-white/10 p-7 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="w-12 h-12 text-white" />
                </div>
                <p className="text-zinc-300 italic text-[15px] mb-6 leading-relaxed relative z-10">
                  "Revira Care has completely transformed how I approach my daily goals. I feel empowered and truly supported for the first time."
                </p>
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/80 to-blue-500/80 p-px">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold">SJ</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Sarah J.</div>
                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Participant</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
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
      <Section className="bg-zinc-900/30 py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Common Questions</h2>
              <p className="text-zinc-500 text-sm">Everything you need to know about getting started.</p>
            </div>

            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 md:p-8">
              {FAQS.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Section */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Star className="w-8 h-8 text-amber-400" />, title: "Quality First", desc: "Never compromising on the safety and standard of our care." },
              { icon: <Users className="w-8 h-8 text-indigo-400" />, title: "Inclusive Community", desc: "Fostering an environment where everyone belongs." },
              { icon: <Globe className="w-8 h-8 text-emerald-400" />, title: "Local Presence", desc: "Deeply connected to the communities we serve." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-5 p-3 rounded-2xl bg-zinc-900 border border-white/5">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                <p className="text-zinc-500 text-[13px] leading-relaxed max-w-[240px]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-emerald-600/20 via-blue-600/10 to-zinc-900 border border-white/10 p-12 md:p-20 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-300">New Chapter</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                We&apos;re ready to listen, plan, and support you. Your journey towards more independence starts with a single conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-white text-zinc-950 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-all hover:scale-105 shadow-xl shadow-emerald-500/5"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full" />
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
