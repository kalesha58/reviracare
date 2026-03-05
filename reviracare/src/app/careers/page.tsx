"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Heart, ShieldCheck, Award,
  ArrowRight, FileText, Lock, Rocket,
  Download, Upload, X, Check, Mail, Phone,
  User, Home, MessageSquare, ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useState, useRef } from "react";

const CLEARANCES = [
  {
    title: "NDIS Worker Check",
    image: "/images/careers/NDISworkercheck.jpeg",
    cost: "$105",
    location: "Service NSW",
    description: "Essential clearance for all NDIS support workers.",
    href: "https://www.service.nsw.gov.au/transaction/ndiswc-apply"
  },
  {
    title: "Working with Children",
    image: "/images/careers/Working with Children Check.png",
    cost: "$105",
    location: "Service NSW",
    description: "Required for supporting participants under 18.",
    href: "https://www.service.nsw.gov.au/transaction/apply-for-a-working-with-children-check"
  },
];


const ONLINE_COURSES = [
  {
    title: "COVID-19 Infection Control",
    provider: "Sentrient",
    status: "Free",
    image: "/images/careers/COVID-19 Infection Control and Prevention.png",
    href: "https://www.sentrient.com.au/covid-19-coronavirus-courses"
  },
  {
    title: "NDIS Worker Orientation",
    provider: "NDIS",
    status: "Free",
    image: "/images/careers/NDIS Worker Orientation Module.png",
    href: "https://training.ndiscommission.gov.au/"
  },
  {
    title: "NDIS New Worker Induction",
    provider: "NDIS",
    status: "Free",
    image: "/images/careers/NDIS New Worker Induction Module.gif",
    href: "https://training.ndiscommission.gov.au/"
  }
];

const REQUIRED_DOCS = [
  "NDIS Worker Screening Check",
  "Working with Children Check",
  "COVID-19 Infection Control Certificate",
  "NDIS Worker Orientation Module",
  "NDIS New Worker Induction Module",
  "ID x3 (License, Passport, Medicare, etc.)",
  "COVID-19 Vaccination (Optional)"
];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function CareersPage() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (files.length + newFiles.length > 10) {
        alert("Maximum 10 files allowed");
        return;
      }
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/hero.png"
            alt="Join Revira Care"
            fill
            className="object-cover dark:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-zinc-50/10 dark:from-black/80 dark:via-black/40 dark:to-zinc-950/20" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Join Our Care Team
            </div>
            <div className="overflow-visible py-1">
              <h1 className="hero-title font-extrabold tracking-tight leading-[1.1] mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] break-words text-white">
                {(() => {
                  const title = "Make a Meaningful Difference";
                  const words = title.split(" ");
                  return (
                    <>
                      {words.map((word, i) => (
                        <span
                          key={`careers-hero-${i}-${word}`}
                          className={i % 2 === 1 ? "hero-word-accent" : "hero-word-solid"}
                        >
                          {word}
                          {i < words.length - 1 ? " " : ""}
                        </span>
                      ))}
                    </>
                  );
                })()}
              </h1>
            </div>
            <p className="subtitle text-white/95 leading-relaxed max-w-2xl mb-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] text-lg">
              Joining Revira Care Australia offers an exciting opportunity to empower individuals with disabilities and foster a more inclusive community.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Philosophy & Cert IV Info */}
      <Section className="py-16 md:py-20 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-label text-purple-brand dark:text-purple-200 uppercase tracking-[0.3em] mb-4">The Revira Standard</h2>
              <h3 className="section-title mb-6 text-zinc-900 dark:text-white leading-tight">Focusing on Passion, <br />Not Just Qualifications</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                While holding a <strong>Certificate IV in Disability</strong> is advantageous, it is not a prerequisite for this role. We welcome candidates from diverse backgrounds who are passionate about supporting and empowering others.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Empathy & Reliability", icon: <Heart className="w-5 h-5 text-purple-brand dark:text-purple-200" /> },
                  { title: "Strong Commitment", icon: <Award className="w-5 h-5 text-secondary" /> },
                  { title: "Inclusive Environment", icon: <UsersIcon className="w-5 h-5 text-purple-brand dark:text-purple-200" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border bg-muted shadow-2xl relative">
                <Image
                  src="/images/careers/team.png"
                  alt="Supportive Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-purple-brand p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <Rocket className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white font-bold mb-2">Build Your Career</h4>
                <p className="text-green-50/80 text-xs leading-relaxed">
                  We provide a supportive environment where every team member can thrive and achieve their personal goals.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Pre-Employment Grid */}
      <Section id="how-to-apply" className="bg-zinc-100 dark:bg-zinc-900/50 py-16 md:py-20 border-y border-zinc-200 dark:border-white/5">
        <Container>
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-10">
            <h2 className="text-purple-brand dark:text-purple-200 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Mandatory Steps</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] text-center mb-6">
              Pre-Employment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-brand via-purple-500 to-secondary dark:from-purple-brand dark:to-purple-200">
                Requirements
              </span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed text-center max-w-2xl">
              To ensure the highest standards of care and compliance with the NDIS Commission, all candidates must complete these prior to starting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {CLEARANCES.map((clearance, i) => (
              <motion.a
                key={i}
                href={clearance.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all block hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 p-2 rounded-full bg-zinc-50 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-4 h-4 text-purple-brand dark:text-purple-200" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 relative rounded-2xl overflow-hidden group-hover:scale-105 transition-transform bg-white border border-zinc-100 dark:border-white/5 p-3 flex items-center justify-center shadow-md">
                    <Image
                      src={clearance.image}
                      alt={clearance.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{clearance.title}</h4>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 leading-relaxed">{clearance.description}</p>
                <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{clearance.location}</div>
                  <div className="text-sm font-black text-purple-brand dark:text-purple-200">{clearance.cost}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Online Training
                </div>
                <div className="mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Required NDIS Courses</h4>
                </div>
                <div className="space-y-4 mb-8">
                  {ONLINE_COURSES.map((course, i) => (
                    <a
                      key={i}
                      href={course.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-border group hover:border-purple-brand/30 transition-all cursor-pointer hover:bg-white dark:hover:bg-zinc-800"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-xl overflow-hidden flex-shrink-0 bg-white shadow-md border border-zinc-100 p-2">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-zinc-900 dark:text-white">{course.title}</div>
                        <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">{course.provider} Provided</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-purple-brand transition-colors" />
                      <div className="text-[10px] font-black uppercase text-purple-brand dark:text-purple-200 ml-2">{course.status}</div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/careers/clearances.png"
                  alt="Onboarding Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Application Form Section */}
      <Section className="py-16 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-zinc-900 dark:bg-zinc-900/80 rounded-[3rem] overflow-hidden shadow-3xl text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Info Column */}
                <div className="lg:col-span-5 p-10 md:p-14 bg-secondary flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h3>
                    <p className="text-white/80 leading-relaxed mb-10">
                      If you have your clearances and certificates ready, please complete the form. We recommend using a computer for the best experience.
                    </p>

                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                          <Download className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Employee Info Form</div>
                          <p className="text-sm text-white/60 mb-3">Download, fill, and save as PDF.</p>
                          <a
                            href="https://revoltcare.com.au/wp-content/uploads/2025/04/Revolt-Care-Australia-employee-Information-Form-1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-white text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors inline-block"
                          >
                            Download Form
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold mb-2 text-sm uppercase tracking-widest text-white/50">Required Checklist</div>
                          <ul className="space-y-2">
                            {REQUIRED_DOCS.slice(0, 5).map(doc => (
                              <li key={doc} className="text-xs flex items-center gap-2">
                                <Check className="w-3 h-3 text-purple-brand dark:text-purple-200" /> {doc}
                              </li>
                            ))}
                            <li className="text-[10px] text-white/40 mt-2">+ 3 Identifications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-sm text-white/70 italic">
                      "Join a dynamic team where your passion meets purpose."
                    </p>
                  </div>
                </div>

                {/* Right Form Column */}
                <div className="lg:col-span-7 p-10 md:p-14 bg-white dark:bg-zinc-900">
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-10">Application Details</h4>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-purple-brand focus:ring-1 focus:ring-purple-brand outline-none transition-all text-zinc-900 dark:text-white"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input
                            type="tel"
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-purple-brand focus:ring-1 focus:ring-purple-brand outline-none transition-all text-zinc-900 dark:text-white"
                            placeholder="+61 400 000 000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input
                          type="email"
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Residential Address</label>
                      <div className="relative">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input
                          type="text"
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-white"
                          placeholder="123 Care Street, NSW"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Cover Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-400" />
                        <textarea
                          rows={4}
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-white resize-none"
                          placeholder="Tell us why you're passionate about disability support..."
                        />
                      </div>
                    </div>

                    {/* File Upload Area */}
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Document Uploads (Max 10 files, PDF preferred)</label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-zinc-200 dark:border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-purple-brand/50 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all group"
                      >
                        <input
                          type="file"
                          hidden
                          ref={fileInputRef}
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                        <div className="w-12 h-12 bg-purple-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-purple-brand dark:text-purple-200" />
                        </div>
                        <p className="text-sm font-bold mb-1">Click to upload or drag & drop</p>
                        <p className="text-[10px] text-zinc-500 font-medium">NDIS Checks, WWCC, ID (Max 10MB per file)</p>
                      </div>

                      {/* File List */}
                      <AnimatePresence>
                        {files.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 mt-4"
                          >
                            {files.map((file, i) => (
                              <motion.div
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-white/5 rounded-xl border border-border"
                              >
                                <div className="flex items-center gap-3">
                                  <FileText className="w-4 h-4 text-purple-brand dark:text-purple-200" />
                                  <span className="text-xs font-bold truncate max-w-[200px] text-zinc-900 dark:text-zinc-200">{file.name}</span>
                                  <span className="text-[10px] text-zinc-400">{(file.size / (1024 * 1024)).toFixed(2)}MB</span>
                                </div>
                                <button
                                  onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                                  className="text-zinc-400 hover:text-rose-500 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="button"
                      className="w-full py-4 bg-purple-brand text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-xl shadow-purple-brand/10 active:scale-[0.98]"
                    >
                      Submit Application
                    </button>
                    <p className="text-[10px] text-center text-zinc-500 font-medium px-10">
                      By submitting, you agree to Revira Care's recruitment privacy policy and confirm that all uploaded documents are authentic.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust & Compliance Footer */}
      <Section className="py-10 mt-8 mb-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { text: "NDIS Registered", icon: ShieldCheck },
              { text: "Fully Compliant", icon: Lock },
              { text: "Quality Care", icon: Award },
              { text: "Person Centered", icon: Heart },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-950 hover:shadow-xl hover:shadow-purple-brand/10 dark:hover:shadow-purple-brand/10 hover:border-purple-brand/30 dark:hover:border-purple-brand/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-brand/10 dark:bg-purple-brand/20 flex items-center justify-center text-purple-brand dark:text-purple-200 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-purple-brand/15 dark:group-hover:bg-purple-brand/30 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
