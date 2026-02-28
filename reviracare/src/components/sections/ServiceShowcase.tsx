"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "in-home",
        title: "In-Home And Community Support",
        description: "Personalized care delivered in your home to support daily activities like hygiene, meal preparation, and housekeeping. Our team ensures comfort, safety, and independence for individuals with disabilities.",
        image: "/images/services/in-home-support.png",
        color: "from-emerald-500/20 to-emerald-500/0",
        accent: "text-emerald-400",
    },
    {
        id: "social",
        title: "Social And Community Participation",
        description: "Helping individuals engage in social and recreational activities to foster connections and enhance confidence. From outings to group hobbies, we support active and fulfilling participation.",
        image: "/images/services/social-participation.png",
        color: "from-blue-500/20 to-blue-500/0",
        accent: "text-blue-400",
    },
    {
        id: "group",
        title: "Group Activities And Community Programs",
        description: "Organizing interactive group activities and programs that promote skill-building, social bonding, and recreational enjoyment. These activities are tailored to meet diverse interests and abilities.",
        image: "/images/services/group-activities.png",
        color: "from-purple-500/20 to-purple-500/0",
        accent: "text-purple-400",
    },
    {
        id: "sil",
        title: "Supported Independent Living (SIL)",
        description: "Offering tailored support for individuals to live independently in shared or individual housing. Our services ensure a safe environment while fostering independence and personal growth.",
        image: "/images/services/sil.png",
        color: "from-amber-500/20 to-amber-500/0",
        accent: "text-amber-400",
    },
    {
        id: "skills",
        title: "Development Of Daily Living And Life Skills",
        description: "Providing training and support to help individuals develop essential life skills like cooking, budgeting, and personal care. These programs are designed to promote autonomy and confidence.",
        image: "/images/services/life-skills.png",
        color: "from-rose-500/20 to-rose-500/0",
        accent: "text-rose-400",
    },
    {
        id: "sda",
        title: "Specialised Disability Accommodation (SDA)",
        description: "Delivering accessible and comfortable housing solutions for individuals with significant disability support needs. Our accommodations prioritize safety, functionality, and independence.",
        image: "/images/services/sda.png",
        color: "from-cyan-500/20 to-cyan-500/0",
        accent: "text-cyan-400",
    },
];

export function ServiceShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <Section className="bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-600 dark:text-emerald-500 font-bold uppercase text-xs tracking-[0.3em] block mb-4"
                    >
                        Explore Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white max-w-2xl leading-[1.1]"
                    >
                        Our Support Services As A <span className="text-zinc-500 italic">Leading NDIS Provider</span>
                    </motion.h2>
                </div>

                {/* Desktop Showcase: Horizontal Expanding Slices */}
                <div className="hidden lg:flex h-[600px] gap-2 items-stretch">
                    {SERVICES.map((service, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <motion.div
                                key={service.id}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={cn(
                                    "relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out group rounded-3xl",
                                    isHovered ? "flex-[4]" : "flex-1"
                                )}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={cn(
                                            "object-cover transition-transform duration-700 group-hover:scale-105",
                                            isHovered ? "opacity-60 dark:opacity-40" : "opacity-90 dark:opacity-20 group-hover:opacity-100"
                                        )}
                                    />
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t via-transparent dark:via-zinc-950/40",
                                        isHovered ? "from-transparent dark:from-zinc-950" : "from-transparent dark:from-zinc-950"
                                    )} />
                                    <div className={cn("absolute inset-0 bg-gradient-to-r", service.color)} />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className={cn(
                                        "transition-all duration-500",
                                        isHovered ? "translate-y-0 opacity-100" : "translate-y-4"
                                    )}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl bg-zinc-900/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center border border-zinc-900/10 dark:border-white/20 transition-transform duration-500",
                                                isHovered && "rotate-90 scale-110"
                                            )}>
                                                <Plus className={cn("w-5 h-5", service.accent)} />
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold text-zinc-900 dark:text-white transition-all duration-500",
                                                !isHovered && "whitespace-nowrap origin-left -rotate-90 absolute -top-32 left-1/2 -translate-x-1/2 group-hover:rotate-0 group-hover:translate-y-4"
                                            )}>
                                                {service.title}
                                            </h3>
                                        </div>

                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6 max-w-md">
                                                        {service.description}
                                                    </p>
                                                    <Link
                                                        href={`/services/${service.id}`}
                                                        className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm hover:gap-4 transition-all"
                                                    >
                                                        Learn More <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Index Number */}
                                <div className="absolute top-8 left-8">
                                    <span className="text-[10px] font-bold text-zinc-900/20 dark:text-white/20 tracking-widest uppercase">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Showcase: Interactive Accordion */}
                <div className="flex lg:hidden flex-col gap-4">
                    {SERVICES.map((service, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => setHoveredIndex(isHovered ? null : index)}
                                className={cn(
                                    "relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/5 transition-all duration-500",
                                    isHovered ? "h-[350px]" : "h-20"
                                )}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={cn(
                                        "object-cover transition-all duration-500",
                                        isHovered ? "opacity-60 dark:opacity-30" : "opacity-100 dark:opacity-10"
                                    )}
                                />
                                <div className="absolute inset-0 bg-transparent dark:bg-zinc-950/40" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white pr-8">
                                            {service.title}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: isHovered ? 45 : 0 }}
                                            className="shrink-0 w-8 h-8 rounded-full bg-zinc-900/5 dark:bg-white/10 flex items-center justify-center border border-zinc-900/10 dark:border-white/10"
                                        >
                                            <Plus className="w-4 h-4 text-zinc-900 dark:text-white" />
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="mt-6"
                                            >
                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                                                    {service.description}
                                                </p>
                                                <Link
                                                    href={`/services/${service.id}`}
                                                    className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm"
                                                >
                                                    Learn More <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
