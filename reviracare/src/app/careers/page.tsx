"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Heart, ShieldCheck, Zap, Award, CheckCircle2,
  ArrowRight, FileText, GraduationCap, Scale,
  Lock, Rocket, HelpCircle, Download, Upload,
  X, Check, AlertCircle, Info, Mail, Phone,
  User, Home, MessageSquare
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const CLEARANCES = [
  {
    title: "NDIS Worker Check",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    cost: "$105",
    location: "Service NSW",
    description: "Essential clearance for all NDIS support workers."
  },
  {
    title: "Working with Children",
    icon: <UsersIcon className="w-8 h-8 text-blue-500" />,
    cost: "$105",
    location: "Service NSW",
    description: "Required for supporting participants under 18."
  },
  {
    title: "First Aid & CPR",
    icon: <Zap className="w-8 h-8 text-rose-500" />,
    cost: "Variable",
    location: "Your choice",
    description: "Must include the CPR module for compliance."
  }
];

const ONLINE_COURSES = [
  { title: "COVID-19 Infection Control", provider: "NDIS", status: "Free" },
  { title: "NDIS Worker Orientation", provider: "NDIS", status: "Free" },
  { title: "NDIS New Worker Induction", provider: "NDIS", status: "Free" }
];

const REQUIRED_DOCS = [
  "NDIS Worker Screening Check",
  "Working with Children Check",
  "COVID-19 Infection Control Certificate",
  "NDIS Worker Orientation Module",
  "NDIS New Worker Induction Module",
  "First Aid and CPR Certificate",
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
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pb-32">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/hero.png"
            alt="Join Revira Care"
            fill
            className="object-cover dark:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 section-label font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Join Our Care Team
            </div>
            <h1 className="hero-title font-extrabold mb-6 tracking-tight leading-[1.05] text-white">
              Make a <br />
              <span className="text-emerald-400">
                Meaningful Difference
              </span>
            </h1>
            <p className="subtitle text-zinc-300 font-medium leading-relaxed max-w-xl mb-10">
              Joining Revira Care Australia offers an exciting opportunity to empower individuals with disabilities and foster a more inclusive community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#how-to-apply" className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl shadow-emerald-500/20 group">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-zinc-800" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white/90">50+ Support Workers</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Philosophy & Cert IV Info */}
      <Section className="py-24 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-label text-primary uppercase tracking-[0.3em] mb-4">The Revira Standard</h2>
              <h3 className="section-title mb-6 text-zinc-900 dark:text-white leading-tight">Focusing on Passion, <br />Not Just Qualifications</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                While holding a <strong>Certificate IV in Disability</strong> is advantageous, it is not a prerequisite for this role. We welcome candidates from diverse backgrounds who are passionate about supporting and empowering others.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Empathy & Reliability", icon: <Heart className="w-5 h-5 text-rose-500" /> },
                  { title: "Strong Commitment", icon: <Award className="w-5 h-5 text-amber-500" /> },
                  { title: "Inclusive Environment", icon: <UsersIcon className="w-5 h-5 text-blue-500" /> }
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
              <div className="absolute -bottom-10 -right-10 bg-emerald-500 dark:bg-emerald-600 p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <Rocket className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white font-bold mb-2">Build Your Career</h4>
                <p className="text-emerald-50/80 text-xs leading-relaxed">
                  We provide a supportive environment where every team member can thrive and achieve their personal goals.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Pre-Employment Grid */}
      <Section id="how-to-apply" className="bg-zinc-100 dark:bg-zinc-900/50 py-24 border-y border-zinc-200 dark:border-white/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">Mandatory Steps</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-5 text-zinc-900 dark:text-white">Pre-Employment Requirements</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              To ensure the highest standards of care and compliance with the NDIS Commission, all candidates must complete these prior to starting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {CLEARANCES.map((clearance, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{clearance.icon}</div>
                <h4 className="text-xl font-bold mb-3">{clearance.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 leading-relaxed">{clearance.description}</p>
                <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{clearance.location}</div>
                  <div className="text-sm font-black text-primary">{clearance.cost}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Online Training
                </div>
                <h4 className="text-2xl font-bold mb-6">Required NDIS Courses</h4>
                <div className="space-y-4 mb-8">
                  {ONLINE_COURSES.map((course, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-border group hover:border-emerald-500/30 transition-all">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold">{course.title}</div>
                        <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">{course.provider} Provided</div>
                      </div>
                      <div className="text-[10px] font-black uppercase text-emerald-500">{course.status}</div>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/10 flex gap-4">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                    These courses must be completed online for free and your certificates uploaded to the application below.
                  </p>
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
      <Section className="py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-zinc-900 dark:bg-zinc-900/80 rounded-[3rem] overflow-hidden shadow-3xl text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Info Column */}
                <div className="lg:col-span-5 p-10 md:p-14 bg-emerald-700 flex flex-col justify-between">
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
                          <button className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-white text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors">
                            Download Form
                          </button>
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
                                <Check className="w-3 h-3 text-emerald-400" /> {doc}
                              </li>
                            ))}
                            <li className="text-[10px] text-white/40 mt-2">+ 3 Identifications & First Aid</li>
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
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-white"
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
                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl px-12 py-3 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-zinc-900 dark:text-white"
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
                        className="border-2 border-dashed border-zinc-200 dark:border-white/10 rounded-2xl p-8 text-center cursor-pointer hover:border-emerald-500/50 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all group"
                      >
                        <input
                          type="file"
                          hidden
                          ref={fileInputRef}
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-emerald-500" />
                        </div>
                        <p className="text-sm font-bold mb-1">Click to upload or drag & drop</p>
                        <p className="text-[10px] text-zinc-500 font-medium">NDIS Checks, WWCC, First Aid, CPR, ID (Max 10MB per file)</p>
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
                                  <FileText className="w-4 h-4 text-emerald-500" />
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
                      className="w-full py-4 bg-zinc-900 dark:bg-emerald-500 text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/10 active:scale-[0.98]"
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
      <Container className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
          {[
            { text: "NDIS Registered", icon: <ShieldCheck className="w-4 h-4" /> },
            { text: "Fully Compliant", icon: <Lock className="w-4 h-4" /> },
            { text: "Quality Care", icon: <Award className="w-4 h-4" /> },
            { text: "Person Centered", icon: <Heart className="w-4 h-4" /> }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-zinc-400">{item.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
