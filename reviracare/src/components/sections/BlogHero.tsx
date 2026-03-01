"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Sparkles } from "lucide-react";

export function BlogHero() {
    return (
        <Section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-36 md:pb-20">
            {/* Background image – same pattern as home and about */}
            <div className="absolute inset-0 z-0 bg-white dark:bg-zinc-950 overflow-hidden">
                <Image
                    src="/images/hero/blog-hero.png"
                    alt="Insights and knowledge"
                    fill
                    priority
                    className="object-cover object-center dark:opacity-60"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:from-black/80 dark:via-black/40 dark:to-zinc-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-900/10 to-transparent" aria-hidden />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Premium Blog Resource
                        </div>

                        <div className="overflow-visible py-1">
                            <h1 className="hero-title font-extrabold tracking-tight leading-[1.2] mb-4 sm:mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] break-words">
                                {(() => {
                                    const title = "Insights & Knowledge";
                                    const words = title.split(" ");
                                    return (
                                        <>
                                            {words.map((word, i) => (
                                                <span
                                                    key={`blog-hero-${i}-${word}`}
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

                        <p className="subtitle text-white leading-relaxed mb-8 sm:mb-10 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] min-w-0">
                            A curated collection of research, advocacy, and community stories designed to empower and inform the disability support network. Our commitment to quality ensures you get the most relevant insights every time.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="flex items-center gap-2 text-sm font-medium text-white/90 dark:text-zinc-300"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900/20 bg-zinc-700 overflow-hidden">
                                            <Image
                                                src="/images/blogs/life-skills-workshop-v2.png"
                                                alt=""
                                                width={32}
                                                height={32}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span>Trusted by 500+ readers</span>
                            </motion.div>

                            <div className="h-4 w-px bg-white/30 hidden sm:block" />

                            <div className="flex items-center gap-2 text-sm font-semibold text-white/90 dark:text-zinc-300">
                                <span>Expertly Curated</span>
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 dark:text-zinc-400">Scroll</span>
                </div>
            </motion.div>
        </Section>
    );
}
