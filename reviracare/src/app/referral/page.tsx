"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Upload, User, FileText, Target, CreditCard, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
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
  primaryDisabilityDetail: "",
  ndisPlanNumber: "",
  planStartDate: "",
  planEndDate: "",
  servicesRequired: "",
  desiredOutcomes: "",
  preferredDelivery: [],
  preferredAppointmentTime: "",
  fundingManaged: "",
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
  { value: "", label: "Please Choose An Option" },
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
  "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-shadow";
const labelBase = "block body-sm font-semibold text-[var(--foreground)] mb-2";

function FormSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
        <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
          {icon}
        </div>
        <h2 className="subsection-title text-[var(--foreground)]">{title}</h2>
      </div>
      <div className="space-y-5">{children}</div>
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
      <main className="min-h-screen bg-[var(--muted)]/30 dark:bg-zinc-950 pt-24 pb-32">
        <Container className="py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center rounded-3xl border border-[var(--border)] bg-[var(--background)] p-10 shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-[var(--primary)]" />
            </div>
            <h1 className="section-title text-[var(--foreground)] mb-3">Referral Submitted</h1>
            <p className="text-[var(--muted-foreground)]">
              Thank you. We have received your referral and will be in touch shortly.
            </p>
          </motion.div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--muted)]/30 dark:bg-zinc-950 text-[var(--foreground)] pb-32">
      <section className="relative h-[40vh] min-h-[280px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ndis/referral.png"
            alt="Referral"
            fill
            className="object-cover dark:opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--muted)]/30 dark:to-zinc-950" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white section-label uppercase tracking-wider mb-4">
              NDIS Referral
            </span>
            <h1 className="hero-title text-white tracking-tight">
              Connect With Our Crew
            </h1>
            <p className="text-zinc-200 mt-2 max-w-xl">
              Complete the form below and we&apos;ll get back to you as soon as we can.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section className="pt-10">
        <Container className="max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <FormSection title="About You" icon={<User className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>
                  Please select what describes you best? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {REFERRER_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors",
                        form.referrerRole === opt.value
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)] hover:border-[var(--primary)]/50"
                      )}
                    >
                      <input
                        type="radio"
                        name="referrerRole"
                        value={opt.value}
                        checked={form.referrerRole === opt.value}
                        onChange={() => update("referrerRole", opt.value)}
                        className="w-4 h-4 text-[var(--primary)]"
                      />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Participant Details" icon={<User className="w-5 h-5" />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.participantFirstName}
                    onChange={(e) => update("participantFirstName", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.participantLastName}
                    onChange={(e) => update("participantLastName", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>Participant Age <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Participant Age"
                    value={form.participantAge}
                    onChange={(e) => update("participantAge", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Participant Date of Birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={form.participantDob}
                    onChange={(e) => update("participantDob", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>Participant Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="Participant Email"
                    value={form.participantEmail}
                    onChange={(e) => update("participantEmail", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Participant Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    placeholder="Participant Phone Number"
                    value={form.participantPhone}
                    onChange={(e) => update("participantPhone", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelBase}>Participant Address <span className="text-red-500">*</span></label>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={form.addressStreet}
                    onChange={(e) => update("addressStreet", e.target.value)}
                    className={inputBase}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    value={form.addressLine2}
                    onChange={(e) => update("addressLine2", e.target.value)}
                    className={inputBase}
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
                      <option value="">Please Choose An Option</option>
                      {STATE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className={labelBase}>Gender <span className="text-red-500">*</span></label>
                <div className="space-y-2">
                  {GENDER_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-4 py-2.5 cursor-pointer transition-colors",
                        form.gender === opt.value
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={opt.value}
                        checked={form.gender === opt.value}
                        onChange={() => update("gender", opt.value)}
                        className="w-4 h-4 text-[var(--primary)]"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelBase}>
                  Do You/ Does the participant Identify as Aboriginal or Torres Strait Islander? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {ABORIGINAL_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm transition-colors",
                        form.aboriginalTorresStrait === opt.value
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="radio"
                        name="aboriginalTorresStrait"
                        value={opt.value}
                        checked={form.aboriginalTorresStrait === opt.value}
                        onChange={() => update("aboriginalTorresStrait", opt.value)}
                        className="w-4 h-4 text-[var(--primary)]"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelBase}>Living Arrangements <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {LIVING_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors",
                        form.livingArrangements === opt.value
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="radio"
                        name="livingArrangements"
                        value={opt.value}
                        checked={form.livingArrangements === opt.value}
                        onChange={() => update("livingArrangements", opt.value)}
                        className="w-4 h-4 text-[var(--primary)]"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelBase}>Do you require an interpreter? <span className="text-red-500">*</span></label>
                <div className="flex gap-4">
                  <label className={cn("flex items-center gap-2 cursor-pointer", form.requireInterpreter === "yes" && "text-[var(--primary)]")}>
                    <input
                      type="radio"
                      name="requireInterpreter"
                      value="yes"
                      checked={form.requireInterpreter === "yes"}
                      onChange={() => update("requireInterpreter", "yes")}
                      className="w-4 h-4 text-[var(--primary)]"
                    />
                    Yes
                  </label>
                  <label className={cn("flex items-center gap-2 cursor-pointer", form.requireInterpreter === "no" && "text-[var(--primary)]")}>
                    <input
                      type="radio"
                      name="requireInterpreter"
                      value="no"
                      checked={form.requireInterpreter === "no"}
                      onChange={() => update("requireInterpreter", "no")}
                      className="w-4 h-4 text-[var(--primary)]"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className={labelBase}>Please indicate the Translator/interpreter or the communication aids required</label>
                <input
                  type="text"
                  placeholder="Please indicate the Translator/interpreter or the communication aids required"
                  value={form.interpreterDetails}
                  onChange={(e) => update("interpreterDetails", e.target.value)}
                  className={inputBase}
                />
              </div>
            </FormSection>

            <FormSection title="Who Is The Primary Contact For The First Appointment?" icon={<User className="w-5 h-5" />}>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Is the primary contact for the first appointment the same as the referrer entered on page 1?
              </p>
              <div className="flex gap-6">
                <label className={cn("flex items-center gap-2 cursor-pointer", form.primaryContactSameAsReferrer === "yes" && "text-[var(--primary)]")}>
                  <input
                    type="radio"
                    name="primaryContactSameAsReferrer"
                    value="yes"
                    checked={form.primaryContactSameAsReferrer === "yes"}
                    onChange={() => update("primaryContactSameAsReferrer", "yes")}
                    className="w-4 h-4 text-[var(--primary)]"
                  />
                  Yes
                </label>
                <label className={cn("flex items-center gap-2 cursor-pointer", form.primaryContactSameAsReferrer === "no" && "text-[var(--primary)]")}>
                  <input
                    type="radio"
                    name="primaryContactSameAsReferrer"
                    value="no"
                    checked={form.primaryContactSameAsReferrer === "no"}
                    onChange={() => update("primaryContactSameAsReferrer", "no")}
                    className="w-4 h-4 text-[var(--primary)]"
                  />
                  No
                </label>
              </div>
            </FormSection>

            <FormSection title="Primary Disability / Health Background" icon={<AlertTriangle className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>
                  Please provide detail of the primary disability. <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Please provide detail of the primary disability."
                  value={form.primaryDisabilityDetail}
                  onChange={(e) => update("primaryDisabilityDetail", e.target.value)}
                  className={cn(inputBase, "min-h-[120px] resize-y")}
                  required
                />
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  You can drag the bottom-right corner of the text field to make it bigger.
                </p>
              </div>
            </FormSection>

            <FormSection title="NDIS Details" icon={<FileText className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>NDIS Plan Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="NDIS Number"
                  value={form.ndisPlanNumber}
                  onChange={(e) => update("ndisPlanNumber", e.target.value)}
                  className={inputBase}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>Plan Start Date <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={form.planStartDate}
                    onChange={(e) => update("planStartDate", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className={labelBase}>Plan End Date <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={form.planEndDate}
                    onChange={(e) => update("planEndDate", e.target.value)}
                    className={inputBase}
                    required
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Services & Goals" icon={<Target className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>Please Select Services Required <span className="text-red-500">*</span></label>
                <select
                  value={form.servicesRequired}
                  onChange={(e) => update("servicesRequired", e.target.value)}
                  className={inputBase}
                  required
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value || "placeholder"} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelBase}>Desired Outcomes/Goals <span className="text-red-500">*</span></label>
                <textarea
                  placeholder="Desired Outcomes/Goals"
                  value={form.desiredOutcomes}
                  onChange={(e) => update("desiredOutcomes", e.target.value)}
                  className={cn(inputBase, "min-h-[100px] resize-y")}
                  required
                />
              </div>
              <div>
                <label className={labelBase}>Please upload your NDIS Plan here and associated documents</label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleFileDrop}
                  className={cn(
                    "rounded-xl border-2 border-dashed p-8 text-center transition-colors",
                    dragActive ? "border-[var(--primary)] bg-[var(--primary)]/5" : "border-[var(--border)]"
                  )}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="referral-files"
                  />
                  <label htmlFor="referral-files" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="w-10 h-10 text-[var(--muted-foreground)]" />
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      Drag & Drop Files Here
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)]">You can upload up to 5 files.</span>
                  </label>
                </div>
                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <li key={i} className="flex items-center justify-between text-sm py-2 border-b border-[var(--border)] last:border-0">
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <label className={labelBase}>Preferred Delivery Of Services</label>
                <div className="flex flex-wrap gap-2">
                  {DELIVERY_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm transition-colors",
                        form.preferredDelivery.includes(opt.value)
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={form.preferredDelivery.includes(opt.value)}
                        onChange={() => toggleDelivery(opt.value)}
                        className="w-4 h-4 rounded text-[var(--primary)]"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelBase}>Preferred Appointment Time, day of the week and time?</label>
                <input
                  type="text"
                  placeholder="Preferred Appointment Time, day of the week and time?"
                  value={form.preferredAppointmentTime}
                  onChange={(e) => update("preferredAppointmentTime", e.target.value)}
                  className={inputBase}
                />
              </div>
            </FormSection>

            <FormSection title="Billing" icon={<CreditCard className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>How is the plan funding managed? <span className="text-red-500">*</span></label>
                <div className="space-y-2">
                  {FUNDING_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors",
                        form.fundingManaged === opt.value
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="radio"
                        name="fundingManaged"
                        value={opt.value}
                        checked={form.fundingManaged === opt.value}
                        onChange={() => update("fundingManaged", opt.value)}
                        className="w-4 h-4 text-[var(--primary)]"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </FormSection>

            <FormSection title="Behaviours" icon={<AlertTriangle className="w-5 h-5" />}>
              <div>
                <label className={labelBase}>Participant Behaviours <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {BEHAVIOUR_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm transition-colors",
                        form.behaviours.includes(opt.value)
                          ? "border-[var(--primary)] bg-[var(--primary)]/10"
                          : "border-[var(--border)]"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={form.behaviours.includes(opt.value)}
                        onChange={() => toggleBehaviour(opt.value)}
                        className="w-4 h-4 rounded text-[var(--primary)]"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelBase}>Other behaviours and risks that we need to be aware of?</label>
                <textarea
                  placeholder="Other behaviours and risks that we need to be aware of?"
                  value={form.otherBehavioursRisks}
                  onChange={(e) => update("otherBehavioursRisks", e.target.value)}
                  className={cn(inputBase, "min-h-[80px] resize-y")}
                />
              </div>
            </FormSection>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8 shadow-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.acknowledgement}
                  onChange={(e) => update("acknowledgement", e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[var(--primary)]"
                  required
                />
                <span className="text-sm text-[var(--foreground)]">
                  Please acknowledge that you believe the information entered on this form is, to the best of your awareness, truthful and accurate.
                </span>
              </label>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-xl font-bold text-[var(--primary-foreground)] bg-[var(--primary)]",
                    "hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  {status === "submitting" ? "Submitting…" : "Submit Now"}
                </button>
              </div>
            </div>
          </form>
        </Container>
      </Section>
    </main>
  );
}
