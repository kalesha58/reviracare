"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Upload, User, FileText, Target, CreditCard, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NDISBrandingBar } from "@/components/ui/NDISBrandingBar";
import type {
  IReferralFormState,
  ReferrerRole,
  GenderOption,
  AboriginalTorresStraitOption,
  LivingArrangement,
  FundingManaged,
  DeliveryPreference,
} from "./ReferralForm.interfaces";

const INITIAL_FORM: IReferralFormState = {
  referrerRole: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  participantFirstName: "",
  participantLastName: "",
  participantAge: "",
  participantDob: "",
  participantEmail: "",
  participantPhone: "",
  addressStreet: "",
  addressLine2: "",
  addressSuburb: "",
  addressPostCode: "",
  addressState: "",
  gender: "",
  aboriginalTorresStrait: "",
  livingArrangements: "",
  requireInterpreter: "",
  interpreterDetails: "",
  primaryContactSameAsReferrer: "",
  primaryContactFirstName: "",
  primaryContactLastName: "",
  primaryContactEmail: "",
  primaryContactPhone: "",
  primaryDisabilityDetail: "",
  ndisPlanNumber: "",
  planStartDate: "",
  planEndDate: "",
  servicesRequired: [],
  desiredOutcomes: "",
  preferredDelivery: [],
  preferredAppointmentTime: "",
  fundingManaged: "",
  planManagerName: "",
  planManagerEmail: "",
  planManagerPhone: "",
  billingEmail: "",
  behaviours: [],
  otherBehavioursRisks: "",
  acknowledgement: false,
};

const REFERRER_OPTIONS: { value: ReferrerRole; label: string }[] = [
  { value: "participant", label: "Participant" },
  { value: "parent", label: "Parent" },
  { value: "family", label: "Family Member / Next of Kin" },
  { value: "support-coordinator", label: "Support Coordinator" },
  { value: "lac", label: "Local Area Coordinator" },
  { value: "plan-manager", label: "Plan Manager" },
];

const STATE_OPTIONS = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

const GENDER_OPTIONS: { value: GenderOption; label: string }[] = [
  { value: "female", label: "Female: she - her" },
  { value: "male", label: "Male: he - him" },
  { value: "non-binary", label: "Non-binary: they - them" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
  { value: "other", label: "Other" },
];

const ABORIGINAL_OPTIONS: { value: AboriginalTorresStraitOption; label: string }[] = [
  { value: "no", label: "No" },
  { value: "yes-aboriginal", label: "Yes - Aboriginal" },
  { value: "yes-torres-strait", label: "Yes – Torres Strait Islander" },
  { value: "yes-both", label: "Yes - Aboriginal and Torres Strait Islander" },
  { value: "not-sure", label: "Not Sure" },
];

const LIVING_OPTIONS: { value: LivingArrangement; label: string }[] = [
  { value: "alone", label: "Alone" },
  { value: "family", label: "Family/Partner" },
  { value: "supported", label: "Supported Accommodation" },
  { value: "other", label: "Other" },
];

const SERVICE_OPTIONS = [
  { value: "in-home", label: "In-Home And Community Support" },
  { value: "social", label: "Social And Community Participation" },
  { value: "group", label: "Group Activities And Community Programs" },
  { value: "sil", label: "Supported Independent Living (SIL)" },
  { value: "skills", label: "Development Of Daily Living And Life Skills" },
  { value: "sda", label: "Specialised Disability Accommodation (SDA)" },
];

const DELIVERY_OPTIONS: { value: DeliveryPreference; label: string }[] = [
  { value: "at-home", label: "At Home" },
  { value: "sil", label: "In SIL Accommodation / Group Home" },
  { value: "community", label: "In The Community" },
  { value: "clinic", label: "In Clinic - Not Available In All Locations" },
];

const FUNDING_OPTIONS: { value: FundingManaged; label: string }[] = [
  { value: "ndia", label: "NDIA / Agency Managed" },
  { value: "self", label: "Self Managed" },
  { value: "plan-managed", label: "Plan Managed" },
];

const BEHAVIOUR_OPTIONS = [
  { value: "physical", label: "Physical Aggression" },
  { value: "verbal", label: "Verbal Outburst" },
  { value: "property", label: "Property Damage" },
  { value: "self-injurious", label: "Self Injurious Behaviour" },
  { value: "do-not-know", label: "Do Not Know" },
  { value: "none", label: "None" },
];

const inputBase =
  "w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-brand focus:border-transparent transition-all";
const labelBase = "block text-sm font-bold text-zinc-700 dark:text-zinc-200 mb-2";

/**
 * Helper to handle DD/MM/YYYY auto-formatting
 */
const handleDateInput = (value: string) => {
  const digits = value.replace(/\D/g, "");
  let formatted = digits;
  if (digits.length > 2) formatted = digits.slice(0, 2) + "/" + digits.slice(2);
  if (digits.length > 4) formatted = formatted.slice(0, 5) + "/" + formatted.slice(5, 9);
  return formatted.slice(0, 10);
};

function FormSection({
  title,
  icon,
  children,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex items-center gap-4 border-b border-zinc-200/60 dark:border-white/5 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-brand/5 dark:bg-purple-brand/10 flex items-center justify-center text-purple-brand dark:text-purple-200">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export default function ReferralPage(): React.ReactElement {
  const [form, setForm] = useState<IReferralFormState>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [dragActive, setDragActive] = useState(false);

  const update = useCallback(<K extends keyof IReferralFormState>(key: K, value: IReferralFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleService = useCallback((value: string) => {
    setForm((prev) => ({
      ...prev,
      servicesRequired: prev.servicesRequired.includes(value)
        ? prev.servicesRequired.filter((s) => s !== value)
        : [...prev.servicesRequired, value],
    }));
  }, []);

  const toggleDelivery = useCallback((value: DeliveryPreference) => {
    setForm((prev) => ({
      ...prev,
      preferredDelivery: prev.preferredDelivery.includes(value)
        ? prev.preferredDelivery.filter((d) => d !== value)
        : [...prev.preferredDelivery, value],
    }));
  }, []);

  const toggleBehaviour = useCallback((value: string) => {
    setForm((prev) => ({
      ...prev,
      behaviours: prev.behaviours.includes(value)
        ? prev.behaviours.filter((b) => b !== value)
        : [...prev.behaviours, value],
    }));
  }, []);

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const list = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...list].slice(0, 5));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...list].slice(0, 5));
  }, []);

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1200);
  }, []);

  if (status === "success") {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-32 [--primary:var(--secondary)]">
        <Container className="py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center rounded-3xl border border-purple-brand/20 dark:border-purple-brand/30 bg-white dark:bg-zinc-900 p-10 shadow-lg ring-1 ring-purple-brand/10"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="section-title text-zinc-900 dark:text-white mb-3">Referral Submitted</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Thank you. We have received your referral and will be in touch shortly.
            </p>
          </motion.div>
        </Container>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pb-32 pt-24 md:pt-28">
      {/* Premium Artistic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-brand/5 dark:bg-purple-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-100px] w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <NDISBrandingBar title="Connect With Our Crew" />

      <Section className="relative z-10 pt-10">
        <Container className="max-w-6xl xl:max-w-7xl">
          {/* Main Unified Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-10 md:p-14 lg:p-20"
          >
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="section-label text-purple-brand dark:text-purple-300 uppercase tracking-widest mb-4 inline-block font-black">Referral Form</span>
              <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6">Let's Get Started</h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">Please fill out the details below. Our team is here to support you every step of the way.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Left Column: Administrative Details */}
                <div className="space-y-20">
                  <FormSection title="About You" icon={<User className="w-5 h-5" />}>
                    <div>
                      <label className={labelBase}>
                        What describes you best? <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {REFERRER_OPTIONS.map((opt) => (
                          <label
                            key={opt.value}
                            className={cn(
                              "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300",
                              form.referrerRole === opt.value
                                ? "border-purple-brand bg-purple-brand/5 dark:bg-purple-brand/10 shadow-sm"
                                : "border-zinc-200 dark:border-zinc-800 hover:border-purple-brand/50 dark:bg-zinc-800/50"
                            )}
                          >
                            <input
                              type="radio"
                              name="referrerRole"
                              value={opt.value}
                              checked={form.referrerRole === opt.value}
                              onChange={() => update("referrerRole", opt.value)}
                              className="w-4 h-4 accent-purple-brand"
                            />
                            <span className="text-sm font-bold">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className={labelBase}>First Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          placeholder="e.g. John"
                          value={form.firstName}
                          onChange={(e) => update("firstName", e.target.value)}
                          className={inputBase}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className={labelBase}>Last Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          placeholder="e.g. Smith"
                          value={form.lastName}
                          onChange={(e) => update("lastName", e.target.value)}
                          className={inputBase}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className={labelBase}>Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputBase}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className={labelBase}>Phone <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          placeholder="0400 000 000"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className={inputBase}
                          required
                        />
                      </div>
                    </div>
                  </FormSection>

                  <FormSection title="Primary Contact" icon={<User className="w-5 h-5" />}>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                      Is the primary contact for the first appointment the same as the referrer?
                    </p>
                    <div className="flex gap-8 mb-8">
                      {["yes", "no"].map((val) => (
                        <label key={val} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="primaryContactSameAsReferrer"
                            value={val}
                            checked={form.primaryContactSameAsReferrer === val}
                            onChange={() => update("primaryContactSameAsReferrer", val as any)}
                            className="w-5 h-5 accent-purple-brand"
                          />
                          <span className={cn(
                            "text-sm font-bold uppercase tracking-wider",
                            form.primaryContactSameAsReferrer === val ? "text-purple-brand dark:text-purple-400" : "text-zinc-400"
                          )}>
                            {val}
                          </span>
                        </label>
                      ))}
                    </div>

                    {form.primaryContactSameAsReferrer === "no" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-5 pt-5 border-t border-zinc-100 dark:border-zinc-800"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className={labelBase}>First Name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              placeholder="Contact First Name"
                              value={form.primaryContactFirstName}
                              onChange={(e) => update("primaryContactFirstName", e.target.value)}
                              className={inputBase}
                              required
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className={labelBase}>Last Name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              placeholder="Contact Last Name"
                              value={form.primaryContactLastName}
                              onChange={(e) => update("primaryContactLastName", e.target.value)}
                              className={inputBase}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className={labelBase}>Email <span className="text-red-500">*</span></label>
                            <input
                              type="email"
                              placeholder="contact@email.com"
                              value={form.primaryContactEmail}
                              onChange={(e) => update("primaryContactEmail", e.target.value)}
                              className={inputBase}
                              required
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className={labelBase}>Phone <span className="text-red-500">*</span></label>
                            <input
                              type="tel"
                              placeholder="0400 000 000"
                              value={form.primaryContactPhone}
                              onChange={(e) => update("primaryContactPhone", e.target.value)}
                              className={inputBase}
                              required
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </FormSection>

                  <FormSection title="NDIS Details" icon={<FileText className="w-5 h-5" />}>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <label className={labelBase}>NDIS Plan Number <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          placeholder="e.g. 430 000 000"
                          value={form.ndisPlanNumber}
                          onChange={(e) => update("ndisPlanNumber", e.target.value)}
                          className={inputBase}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className={labelBase}>Plan Start Date (DD/MM/YYYY) <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            value={form.planStartDate}
                            onChange={(e) => update("planStartDate", handleDateInput(e.target.value))}
                            className={inputBase}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelBase}>Plan End Date (DD/MM/YYYY) <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            value={form.planEndDate}
                            onChange={(e) => update("planEndDate", handleDateInput(e.target.value))}
                            className={inputBase}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </FormSection>

                  <FormSection title="Billing & Funding" icon={<CreditCard className="w-5 h-5" />}>
                    <div className="space-y-8">
                      <div>
                        <label className={labelBase}>Managed By <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 gap-3">
                          {FUNDING_OPTIONS.map((opt) => (
                            <label
                              key={opt.value}
                              className={cn(
                                "flex items-center gap-3 rounded-xl border px-5 py-4 cursor-pointer transition-all duration-300",
                                form.fundingManaged === opt.value
                                  ? "border-purple-brand bg-purple-brand/5 dark:bg-purple-brand/10 shadow-sm"
                                  : "border-zinc-200 dark:border-zinc-800 dark:bg-zinc-800/50"
                              )}
                            >
                              <input
                                type="radio"
                                name="fundingManaged"
                                value={opt.value}
                                checked={form.fundingManaged === opt.value}
                                onChange={() => update("fundingManaged", opt.value)}
                                className="w-4 h-4 accent-purple-brand"
                              />
                              <span className="text-sm font-bold">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {form.fundingManaged === "plan-managed" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
                          <h4 className="text-xs font-black uppercase tracking-widest text-purple-brand dark:text-purple-400 mb-2">Plan Manager Details</h4>
                          <div className="space-y-4">
                            <input
                              type="text"
                              placeholder="Plan Management Company Name"
                              value={form.planManagerName}
                              onChange={(e) => update("planManagerName", e.target.value)}
                              className={inputBase}
                              required
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <input
                                type="email"
                                placeholder="Invoices Email"
                                value={form.planManagerEmail}
                                onChange={(e) => update("planManagerEmail", e.target.value)}
                                className={inputBase}
                                required
                              />
                              <input
                                type="tel"
                                placeholder="Phone"
                                value={form.planManagerPhone}
                                onChange={(e) => update("planManagerPhone", e.target.value)}
                                className={inputBase}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {form.fundingManaged === "self" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                          <div className="space-y-1.5">
                            <label className={labelBase}>Invoices Email Address <span className="text-red-500">*</span></label>
                            <input
                              type="email"
                              placeholder="billing@example.com"
                              value={form.billingEmail}
                              onChange={(e) => update("billingEmail", e.target.value)}
                              className={inputBase}
                              required
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </FormSection>
                </div>

                {/* Right Column: Participant Details & Service Plans */}
                <div className="space-y-20">
                  <FormSection title="Participant Details" icon={<User className="w-5 h-5" />}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className={labelBase}>First Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="Participant First Name"
                            value={form.participantFirstName}
                            onChange={(e) => update("participantFirstName", e.target.value)}
                            className={inputBase}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelBase}>Last Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="Participant Last Name"
                            value={form.participantLastName}
                            onChange={(e) => update("participantLastName", e.target.value)}
                            className={inputBase}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className={labelBase}>Age <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="e.g. 25"
                            value={form.participantAge}
                            onChange={(e) => update("participantAge", e.target.value)}
                            className={inputBase}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelBase}>Date of Birth (DD/MM/YYYY) <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            value={form.participantDob}
                            onChange={(e) => update("participantDob", handleDateInput(e.target.value))}
                            className={inputBase}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className={labelBase}>Email <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            placeholder="participant@email.com"
                            value={form.participantEmail}
                            onChange={(e) => update("participantEmail", e.target.value)}
                            className={inputBase}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelBase}>Phone Number <span className="text-red-500">*</span></label>
                          <input
                            type="tel"
                            placeholder="0400 000 000"
                            value={form.participantPhone}
                            onChange={(e) => update("participantPhone", e.target.value)}
                            className={inputBase}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className={labelBase}>Home Address <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          placeholder="Street Address"
                          value={form.addressStreet}
                          onChange={(e) => update("addressStreet", e.target.value)}
                          className={inputBase}
                          required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            placeholder="Suburb"
                            value={form.addressSuburb}
                            onChange={(e) => update("addressSuburb", e.target.value)}
                            className={inputBase}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Post Code"
                            value={form.addressPostCode}
                            onChange={(e) => update("addressPostCode", e.target.value)}
                            className={inputBase}
                            required
                          />
                          <select
                            value={form.addressState}
                            onChange={(e) => update("addressState", e.target.value)}
                            className={inputBase}
                            required
                          >
                            <option value="">State</option>
                            {STATE_OPTIONS.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelBase}>Gender <span className="text-red-500">*</span></label>
                        <div className="flex flex-wrap gap-2">
                          {GENDER_OPTIONS.map((opt) => (
                            <label
                              key={opt.value}
                              className={cn(
                                "flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer text-xs font-bold transition-all duration-300",
                                form.gender === opt.value
                                  ? "border-purple-brand bg-purple-brand/10 text-purple-brand"
                                  : "border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:bg-zinc-800/50"
                              )}
                            >
                              <input
                                type="radio"
                                name="gender"
                                value={opt.value}
                                checked={form.gender === opt.value}
                                onChange={() => update("gender", opt.value)}
                                className="w-4 h-4 accent-purple-brand"
                              />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FormSection>

                  <FormSection title="Disability Details" icon={<AlertTriangle className="w-5 h-5" />}>
                    <textarea
                      placeholder="Please provide details about the primary disability and any secondary diagnosis..."
                      value={form.primaryDisabilityDetail}
                      onChange={(e) => update("primaryDisabilityDetail", e.target.value)}
                      className={cn(inputBase, "min-h-[120px] resize-none")}
                      required
                    />
                  </FormSection>

                  <FormSection title="Services & Goals" icon={<Target className="w-5 h-5" />}>
                    <div className="space-y-8">
                      <div>
                        <label className={labelBase}>Services Required <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-1 gap-2">
                          {SERVICE_OPTIONS.map((opt) => (
                            <label
                              key={opt.value}
                              className={cn(
                                "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-300",
                                form.servicesRequired.includes(opt.value)
                                  ? "border-purple-brand bg-purple-brand/5 dark:bg-purple-brand/10"
                                  : "border-zinc-200 dark:border-zinc-800 dark:bg-zinc-800/50"
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={form.servicesRequired.includes(opt.value)}
                                onChange={() => toggleService(opt.value)}
                                className="w-4 h-4 accent-purple-brand"
                              />
                              <span className="text-sm font-bold">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className={labelBase}>What are you hoping to achieve? <span className="text-red-500">*</span></label>
                        <textarea
                          placeholder="Desired outcomes, goals, and specific support needs..."
                          value={form.desiredOutcomes}
                          onChange={(e) => update("desiredOutcomes", e.target.value)}
                          className={cn(inputBase, "min-h-[100px] resize-none")}
                          required
                        />
                      </div>

                      <div className="space-y-4">
                        <label className={labelBase}>Supporting Documents</label>
                        <div
                          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                          onDragLeave={() => setDragActive(false)}
                          onDrop={handleFileDrop}
                          className={cn(
                            "rounded-3xl border-2 border-dashed p-10 text-center transition-all duration-300",
                            dragActive
                              ? "border-purple-brand bg-purple-brand/5 scale-[1.01]"
                              : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/20"
                          )}
                        >
                          <input type="file" multiple onChange={handleFileChange} className="hidden" id="referral-files" />
                          <label htmlFor="referral-files" className="cursor-pointer flex flex-col items-center gap-4">
                            <Upload className="w-10 h-10 text-purple-brand" />
                            <div className="space-y-1">
                              <span className="text-md font-bold block dark:text-zinc-200">Upload NDIS Plan or Reports</span>
                              <span className="text-sm text-zinc-500">Drag items here or click to browse</span>
                            </div>
                          </label>
                        </div>
                        {files.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {files.map((file, i) => (
                              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-brand/5 dark:bg-purple-brand/20 border border-purple-brand/10 text-xs font-bold text-purple-brand dark:text-purple-300">
                                <span className="truncate max-w-[150px]">{file.name}</span>
                                <button type="button" onClick={() => removeFile(i)} className="hover:text-red-500 transition-colors">×</button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </FormSection>
                </div>
              </div>

              {/* Final Conclusion & Submission */}
              <div className="pt-20 border-t border-zinc-100 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto space-y-16">
                  <FormSection title="Quick Checks" icon={<AlertTriangle className="w-5 h-5" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className={labelBase}>Preference</label>
                        <div className="flex flex-wrap gap-2">
                          {DELIVERY_OPTIONS.map((opt) => (
                            <label key={opt.value} className={cn("flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer text-xs font-bold transition-all", form.preferredDelivery.includes(opt.value) ? "border-purple-brand bg-purple-brand/10 text-purple-brand" : "border-zinc-200 dark:border-zinc-800 text-zinc-500")}>
                              <input type="checkbox" checked={form.preferredDelivery.includes(opt.value)} onChange={() => toggleDelivery(opt.value)} className="w-4 h-4 accent-purple-brand" />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className={labelBase}>Known Behaviours</label>
                        <div className="flex flex-wrap gap-2">
                          {BEHAVIOUR_OPTIONS.map((opt) => (
                            <label key={opt.value} className={cn("flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer text-xs font-bold transition-all", form.behaviours.includes(opt.value) ? "border-purple-brand bg-purple-brand/10 text-purple-brand" : "border-zinc-200 dark:border-zinc-800 text-zinc-500")}>
                              <input type="checkbox" checked={form.behaviours.includes(opt.value)} onChange={() => toggleBehaviour(opt.value)} className="w-4 h-4 accent-purple-brand" />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FormSection>

                  <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-[2rem] p-8 sm:p-12 text-center space-y-10">
                    <label className="flex items-center justify-center gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.acknowledgement}
                        onChange={(e) => update("acknowledgement", e.target.checked)}
                        className="w-6 h-6 rounded-md accent-purple-brand shrink-0"
                        required
                      />
                      <span className="text-md font-bold text-zinc-600 dark:text-zinc-300 text-left leading-relaxed">
                        I acknowledge that the information entered is truthful and accurate to the best of my knowledge.
                      </span>
                    </label>

                    <div className="space-y-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={cn(
                          "w-full sm:w-auto min-w-[320px] px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest text-white bg-purple-brand shadow-2xl shadow-purple-brand/30 transition-all",
                          "hover:scale-[1.02] hover:shadow-purple-brand/40 active:scale-98 disabled:opacity-50"
                        )}
                      >
                        {status === "submitting" ? "Processing..." : "Submit Referral Form"}
                      </button>
                      <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">Our team will review this within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
