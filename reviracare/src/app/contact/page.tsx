"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Phone, Mail, MapPin, Clock,
  Send, MessageSquare, User,
  CheckCircle2, AlertCircle,
  ArrowRight, Heart, Shield
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CONTACT_INFO = [
  {
    title: "Call Us",
    value: "02 8860 6462",
    description: "Available Mon-Fri, 9am - 5pm",
    icon: <Phone className="w-6 h-6 text-primary" />,
    link: "tel:0288606462"
  },
  {
    title: "Email Us",
    value: "info@reviracare.com.au",
    description: "We'll respond within 24 hours",
    icon: <Mail className="w-6 h-6 text-secondary" />,
    link: "mailto:info@reviracare.com.au"
  },
  {
    title: "Our Location",
    value: "Norwest, NSW",
    description: "Level 5, Nexus Building",
    icon: <MapPin className="w-6 h-6 text-primary" />,
    link: "https://www.google.com/maps/search/?api=1&query=Level+5,+Nexus+Norwest,+4+Columbia+Ct,+Norwest+NSW+2153"
  }
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pb-32">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/hero.png"
            alt="Contact Revira Care"
            fill
            className="object-cover dark:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary section-label uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Get In Touch
            </div>
            <h1 className="hero-title mb-6 tracking-tight leading-tight text-white">
              Feel Free To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">Contact Us</span>
            </h1>
            <p className="subtitle text-zinc-200 font-medium leading-relaxed max-w-2xl">
              Revira Care provides comprehensive services tailored to individuals with disabilities, ensuring accessibility, independence, and empowerment. From personalized care plans to community integration support, we focus on enhancing quality of life.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Info Cards */}
      <div className="relative z-20 mt-[-60px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_INFO.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-200 dark:border-white/5 shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-[1.02] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{item.title}</h3>
                <p className="text-xl font-bold mb-1 text-zinc-900 dark:text-white">{item.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </Container>
      </div>

      {/* Map and Form Section */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Map Column */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="section-title text-zinc-900 dark:text-white">Our Head Office</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Visit us at our Norwest location. We're situated in the Nexus Building, centrally located for your convenience.
                </p>
              </div>

              <div className="aspect-video lg:aspect-square xl:aspect-auto xl:h-[500px] rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/5 shadow-2xl relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5521!2d150.969373!3d-33.731041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdf89d3d4b6b6bce!2sServcorp%20-%20Nexus%20Norwest!5e0!3m2!1sen!2sau!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Accessible Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Parking Available</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="bg-white dark:bg-zinc-900 p-8 md:p-14 rounded-[3rem] border border-zinc-200 dark:border-white/5 shadow-3xl shadow-black/5">
                <div className="mb-12">
                  <h3 className="section-title text-zinc-900 dark:text-white mb-4">Send us a message</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Fill out the form below and our team will get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl px-12 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-zinc-900 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                        <input
                          required
                          type="email"
                          placeholder="name@email.com"
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl px-12 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-zinc-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Subject</label>
                    <div className="relative group">
                      <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                      <input
                        required
                        type="text"
                        placeholder="Inquiry about services"
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl px-12 py-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-zinc-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Your Message</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                      <textarea
                        required
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl px-12 py-5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-zinc-900 dark:text-white resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={formStatus === "submitting"}
                      type="submit"
                      className="w-full py-5 bg-zinc-900 dark:bg-primary text-white rounded-[1.5rem] font-bold text-sm lg:text-base hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100 shadow-xl shadow-black/10"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3 text-primary dark:text-primary font-bold text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Message sent successfully! We'll be in touch soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Quote */}
      <Section className="pb-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
              <Heart className="w-8 h-8 text-primary fill-primary/20" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8 italic leading-relaxed">
              "Revira Care provides comprehensive services tailored to individuals with disabilities, ensuring accessibility, independence, and empowerment."
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400">Enhancing Quality of Life</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
