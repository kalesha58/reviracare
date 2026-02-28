"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Sparkles, ArrowDown } from "lucide-react";

export function BlogHero() {
    return (
        <Section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-24">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/blogs/blog-hero-abstract.png"
                    alt="Abstract Knowledge"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 dark:from-background dark:via-background/90 dark:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Premium Blog Resource</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                            Insights & <br />
                            <span className="text-primary italic">Knowledge</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                            A curated collection of research, advocacy, and community stories
                            designed to empower and inform the disability support network.
                            Our commitment to quality ensures you get the most relevant insights every time.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="flex items-center gap-2 text-sm font-medium text-foreground/60"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                                            <Image
                                                src={`/images/blogs/life-skills-workshop-v2.png`}
                                                alt="Author"
                                                width={32}
                                                height={32}
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span>Trusted by 500+ readers</span>
                            </motion.div>

                            <div className="h-4 w-px bg-border hidden sm:block" />

                            <div className="flex items-center gap-2 text-sm font-semibold text-primary group cursor-default">
                                <span>Expertly Curated</span>
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
                <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
            </motion.div>
        </Section>
    );
}
