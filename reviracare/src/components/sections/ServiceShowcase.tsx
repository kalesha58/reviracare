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
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "social",
        title: "Social And Community Participation",
        description: "Helping individuals engage in social and recreational activities to foster connections and enhance confidence. From outings to group hobbies, we support active and fulfilling participation.",
        image: "/images/services/social-participation.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "group",
        title: "Group Activities And Community Programs",
        description: "Organizing interactive group activities and programs that promote skill-building, social bonding, and recreational enjoyment. These activities are tailored to meet diverse interests and abilities.",
        image: "/images/services/group-activities.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "sil",
        title: "Supported Independent Living (SIL)",
        description: "Offering tailored support for individuals to live independently in shared or individual housing. Our services ensure a safe environment while fostering independence and personal growth.",
        image: "/images/services/sil.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "skills",
        title: "Development Of Daily Living And Life Skills",
        description: "Providing training and support to help individuals develop essential life skills like cooking, budgeting, and personal care. These programs are designed to promote autonomy and confidence.",
        image: "/images/services/life-skills.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "sda",
        title: "Specialised Disability Accommodation (SDA)",
        description: "Delivering accessible and comfortable housing solutions for individuals with significant disability support needs. Our accommodations prioritize safety, functionality, and independence.",
        image: "/images/services/sda.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "coordination",
        title: "Coordination Of Supports",
        description: "Assisting participants in managing their NDIS plans by connecting them with services that align with their goals. Our coordinators simplify the process to ensure effective use of resources.",
        image: "/images/services/group-activities.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "short-term-accommodation",
        title: "Short/Medium Term Accommodation",
        description: "Offering temporary housing solutions for individuals needing respite or transitional care. Our accommodations are designed to provide comfort, support, and opportunities for skill development.",
        image: "/images/services/sil.png",
        color: "from-purple-500/20 to-purple-500/0",
        accent: "text-purple-400",
    },
    {
        id: "housing-tenancy",
        title: "Housing And Tenancy",
        description: "Providing assistance with finding, securing, and maintaining appropriate housing. Our team helps individuals understand their tenancy rights and responsibilities while ensuring a stable living environment.",
        image: "/images/services/sda.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "nursing-care",
        title: "Nursing Care",
        description: "Delivering professional nursing services to address medical and health needs, including wound care, medication management, and monitoring chronic conditions. We provide compassionate and skilled care tailored to individual requirements.",
        image: "/images/services/in-home-support.png",
        color: "from-purple-500/20 to-purple-500/0",
        accent: "text-purple-400",
    },
    {
        id: "assist-travel-transport",
        title: "Assist Travel/Transport",
        description: "True freedom starts with a worry-free journey. At ReviraCare, we offer reliable and safe travel support, carefully tailored to your unique schedule and needs. We're here to build your confidence, helping you reach medical appointments, enjoy social outings.",
        image: "/images/services/social-participation.png",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
];

export function ServiceShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <Section className="bg-background dark:bg-zinc-950 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-label text-primary uppercase tracking-[0.3em] block mb-4"
                    >
                        Explore Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-title text-foreground max-w-2xl leading-[1.1]"
                    >
                        Our Support Services As A <span className="text-primary italic">Leading NDIS Provider</span>
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
                                    {/* Neutral dark gradient for text contrast */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t",
                                        "from-black/95 via-black/50 to-transparent",
                                        "dark:from-black dark:via-black/70 dark:to-transparent"
                                    )} />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className={cn(
                                        "transition-all duration-500",
                                        isHovered ? "translate-y-0 opacity-100" : "translate-y-4"
                                    )}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500",
                                                isHovered && "rotate-90 scale-110"
                                            )}>
                                                <Plus className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold text-white transition-all duration-500 drop-shadow-md",
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
                                                    <p className="text-zinc-200 dark:text-zinc-300 text-sm leading-relaxed mb-6 max-w-md drop-shadow-sm">
                                                        {service.description}
                                                    </p>
                                                    <Link
                                                        href={`/services/${service.id}`}
                                                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm hover:gap-4 transition-all drop-shadow-sm"
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
                                    <span className="text-[10px] font-bold text-white/40 dark:text-white/20 tracking-widest uppercase">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Showcase: 2-column grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                            <Link
                                href={`/services/${service.id}`}
                                className="group block relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] shadow-sm active:scale-[0.98] transition-transform"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-active:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                                    <h3 className="text-[13px] sm:text-sm font-bold text-white leading-tight line-clamp-3 drop-shadow-sm">
                                        {service.title}
                                    </h3>
                                    <span className="mt-2 inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
                                        Learn more <ArrowRight className="w-3 h-3 opacity-80" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
