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
        image: "/images/services/In-Home-Care-Community-Support.jpg",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "social",
        title: "Social And Community Participation",
        description: "Helping individuals engage in social and recreational activities to foster connections and enhance confidence. From outings to group hobbies, we support active and fulfilling participation.",
        image: "/images/services/save-and-community-participation.jpg",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "group",
        title: "Group Activities And Community Programs",
        description: "Organizing interactive group activities and programs that promote skill-building, social bonding, and recreational enjoyment. These activities are tailored to meet diverse interests and abilities.",
        image: "/images/services/Group-activity-and-community-program.jpg",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "sil",
        title: "Supported Independent Living (SIL)",
        description: "Offering tailored support for individuals to live independently in shared or individual housing. Our services ensure a safe environment while fostering independence and personal growth.",
        image: "/images/services/support-independent.jpg",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "skills",
        title: "Development Of Daily Living And Life Skills",
        description: "Providing training and support to help individuals develop essential life skills like cooking, budgeting, and personal care. These programs are designed to promote autonomy and confidence.",
        image: "/images/services/development-of-daily-living.jpg",
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-400",
    },
    {
        id: "sda",
        title: "Specialised Disability Accommodation (SDA)",
        description: "Delivering accessible and comfortable housing solutions for individuals with significant disability support needs. Our accommodations prioritize safety, functionality, and independence.",
        image: "/images/services/specialised-disability.jpg",
        color: "from-cyan-500/20 to-cyan-500/0",
        accent: "text-cyan-400",
    },
    {
        id: "coordination",
        title: "Coordination Of Supports",
        description: "Assisting participants in managing their NDIS plans by connecting them with services that align with their goals. Our coordinators simplify the process to ensure effective use of resources.",
        image: "/images/services/coordination-support.jpg",
        color: "from-rose-500/20 to-rose-500/0",
        accent: "text-rose-400",
    },
    {
        id: "short-term-accommodation",
        title: "Short/Medium Term Accommodation",
        description: "Offering temporary housing solutions for individuals needing respite or transitional care. Our accommodations are designed to provide comfort, support, and opportunities for skill development.",
        image: "/images/services/short-and-medium-term.avif",
        color: "from-cyan-500/20 to-cyan-500/0",
        accent: "text-cyan-400",
    },
    {
        id: "housing-tenancy",
        title: "Housing And Tenancy",
        description: "Providing assistance with finding, securing, and maintaining appropriate housing. Our team helps individuals understand their tenancy rights and responsibilities while ensuring a stable living environment.",
        image: "/images/services/Housing-and-tenancy.jpg",
        color: "from-rose-500/20 to-rose-500/0",
        accent: "text-rose-400",
    },
    {
        id: "nursing-care",
        title: "Nursing Care",
        description: "Delivering professional nursing services to address medical and health needs, including wound care, medication management, and monitoring chronic conditions. We provide compassionate and skilled care tailored to individual requirements.",
        image: "/images/services/Nursing-care.jpg",
        color: "from-cyan-500/20 to-cyan-500/0",
        accent: "text-cyan-400",
    },
    {
        id: "assist-travel-transport",
        title: "Assist Travel/Transport",
        description: "True freedom starts with a worry-free journey. At Revira Care, we offer reliable and safe travel support, carefully tailored to your unique schedule and needs. We're here to build your confidence, helping you reach medical appointments, enjoy social outings.",
        image: "/images/services/assist-travel-transport.jpg",
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
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-label text-purple-brand dark:text-purple-brand uppercase tracking-[0.2em] block mb-4"
                    >
                        Explore Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-title text-foreground max-w-2xl leading-[1.1]"
                    >
                        Our Support Services As A <span className="text-purple-brand italic">Leading NDIS Provider</span>
                    </motion.h2>
                </div>

                {/* Desktop Showcase: Modern Grid Layout for Accessibility and Rich Look */}
                <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[300px]">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-lg hover:shadow-2xl focus-within:shadow-2xl transition-all duration-500"
                        >
                            <Link href={`/services/${service.id}`} className="relative block h-full outline-none focus-visible:ring-4 focus-visible:ring-purple-brand/50">
                                {/* Background Image with Parallax-like effect */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
                                    />
                                    {/* Gradient Overlays for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-95 group-focus-within:opacity-95" />
                                    <div className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-700 bg-gradient-to-br",
                                        service.color || "from-purple-500/40 to-transparent"
                                    )} />
                                </div>

                                {/* Content Container */}
                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    {/* Service Number & Label */}
                                    <div className="absolute top-8 left-8 flex items-center gap-3">
                                        <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 group-focus-within:w-12 transition-all duration-500" />
                                    </div>

                                    {/* Main Content with Glassmorphism */}
                                    <div className="relative group-hover:translate-y-[-10px] group-focus-within:translate-y-[-10px] transition-transform duration-500">
                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight drop-shadow-md">
                                            {service.title}
                                        </h3>

                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                                            <div className="overflow-hidden">
                                                <p className="text-zinc-200 text-sm leading-relaxed mb-6 line-clamp-2">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                                            <span className="bg-purple-brand px-5 py-2.5 rounded-full flex items-center gap-2 backdrop-blur-md shadow-lg group-hover:gap-4 group-focus-within:gap-4 transition-all duration-300">
                                                Learn More <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interactive Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 rounded-full" />
                            </Link>
                        </motion.div>
                    ))}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pt-12 flex flex-col justify-end min-h-[45%]">
                                    <h3 className="card-title text-white leading-tight line-clamp-3 drop-shadow-sm flex-shrink-0">
                                        {service.title}
                                    </h3>
                                    <span className="mt-2 sm:mt-2.5 flex-shrink-0 inline-flex items-center gap-1.5 text-white font-bold body-sm uppercase tracking-wider">
                                        Learn more <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
