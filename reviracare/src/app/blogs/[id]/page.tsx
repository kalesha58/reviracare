"use client";

import { useState, use, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
    ArrowLeft,
    Clock,
    Calendar,
    Rocket,
    BookOpen,
    Lightbulb,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle,
    Menu,
    ChevronRight,
    ArrowUpRight,
    Hash
} from "lucide-react";
import { ALL_BLOG_POSTS } from "@/data/blogs.data";

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [isKidsMode, setIsKidsMode] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isHierarchyOpen, setIsHierarchyOpen] = useState(false);

    const post = ALL_BLOG_POSTS.find((p) => p.id === id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [post, isKidsMode]);

    if (!post) {
        notFound();
    }

    const socialLinks = [
        { icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
        { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
        { icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
        { icon: MessageCircle, label: "WhatsApp", color: "hover:text-[#25D366]" },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isKidsMode ? "bg-[#FFFDF0]" : "bg-background"}`}>
            {/* Navigation & Toggle Header */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <Container>
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/blogs"
                                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Back to Blogs</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-6">
                            <button
                                onClick={() => setIsKidsMode(!isKidsMode)}
                                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border-2 transition-all duration-500 overflow-hidden group ${isKidsMode
                                    ? "bg-yellow-400/10 border-yellow-400 text-yellow-600 dark:text-yellow-400"
                                    : "bg-secondary/5 border-secondary/20 text-secondary"
                                    }`}
                            >
                                <motion.div
                                    animate={{ rotate: isKidsMode ? 360 : 0 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {isKidsMode ? <Rocket className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                                </motion.div>
                                <span className="text-xs sm:text-sm font-bold tracking-tight">
                                    {isKidsMode ? "Junior Mode" : "Kids Mode"}
                                </span>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <AnimatePresence mode="wait">
                {!isKidsMode ? (
                    <motion.div
                        key="adult-mode"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative"
                    >
                        {/* Professional Hierarchy Sidebar - Floating Desktop Right */}
                        <aside className="fixed right-8 top-32 w-64 hidden xl:block">
                            <div className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Article Hierarchy</h4>
                                <nav className="space-y-1">
                                    {post.sections.map((section, idx) => {
                                        const sectionId = `section-${idx}`;
                                        return (
                                            <a
                                                key={sectionId}
                                                href={`#${sectionId}`}
                                                className={`group flex items-center gap-3 py-2 text-sm font-medium transition-all ${activeSection === sectionId
                                                    ? "text-secondary translate-x-1"
                                                    : "text-muted-foreground hover:text-foreground"
                                                    }`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeSection === sectionId ? "bg-secondary scale-125" : "bg-border group-hover:bg-muted-foreground"
                                                    }`} />
                                                {section.title}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </aside>

                        {/* Professional Content */}
                        <Section className="pt-12 sm:pt-20">
                            <Container>
                                <div className="max-w-3xl mx-auto">
                                    <header className="mb-12">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-4 text-muted-foreground text-xs font-medium">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTimeMinutes} min read
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </span>
                                            </div>
                                        </div>

                                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight mb-8">
                                            {post.title}
                                        </h1>

                                        <div className="flex items-center justify-between py-6 border-y border-border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full overflow-hidden border border-border relative">
                                                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-foreground leading-none mb-1">{post.author.name}</p>
                                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{post.author.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">Share</span>
                                                {socialLinks.map((link) => (
                                                    <button key={link.label} className={`p-2 rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 ${link.color} hover:border-current hover:scale-110`}>
                                                        <link.icon className="w-3.5 h-3.5" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </header>

                                    {/* Main Article Sections */}
                                    <div className="space-y-16">
                                        {post.sections.map((section, idx) => (
                                            <section key={idx} id={`section-${idx}`} className="scroll-mt-32">
                                                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-4">
                                                    <span className="text-secondary/20 font-black text-4xl leading-none">0{idx + 1}</span>
                                                    {section.title}
                                                </h2>
                                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                                    <p className="text-lg text-foreground/80 leading-relaxed">
                                                        {section.content}
                                                    </p>
                                                </div>
                                                {section.image && (
                                                    <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border border-border">
                                                        <Image
                                                            src={section.image}
                                                            alt={section.imageAlt || section.title}
                                                            width={1200}
                                                            height={600}
                                                            className="w-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </section>
                                        ))}
                                    </div>

                                    {/* Enhanced CTA */}
                                    <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-zinc-900 text-white relative overflow-hidden group">
                                        <div className="relative z-10 max-w-lg">
                                            <h3 className="text-3xl font-bold mb-4">Let's build your accessible future together</h3>
                                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                                Every project begins with a conversation. Speak with our experts to learn how we can make your home safer and more comfortable.
                                            </p>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20"
                                            >
                                                Start Your Project
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none group-hover:from-secondary/30 transition-all duration-500" />
                                    </div>
                                </div>
                            </Container>
                        </Section>
                    </motion.div>
                ) : (
                    <motion.div
                        key="kids-mode"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-[#FFFDF0] dark:bg-zinc-950 pb-20"
                    >
                        {/* Kids Mode Layout - Playful & Structured */}
                        <Section className="pt-12">
                            <Container>
                                <div className="max-w-2xl mx-auto">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="flex justify-center mb-10"
                                    >
                                        <div className="px-6 py-2 rounded-full bg-yellow-400 text-yellow-900 text-sm font-black uppercase tracking-widest shadow-large flex items-center gap-2">
                                            <Rocket className="w-4 h-4" />
                                            Junior Explorer Adventure
                                        </div>
                                    </motion.div>

                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.1] mb-12 text-center text-pretty">
                                        {post.kidsVersion.title}
                                    </h1>

                                    <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-yellow-400 mb-16 group">
                                        <Image src={post.image} alt="Fun adventure" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>

                                    <div className="space-y-12">
                                        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-[3rem] shadow-xl border-2 border-yellow-100 flex gap-6 items-start relative overflow-hidden">
                                            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center shrink-0">
                                                <Share2 className="w-6 h-6 text-yellow-900" />
                                            </div>
                                            <div className="relative z-10">
                                                <p className="text-xl sm:text-2xl font-bold text-foreground leading-relaxed">
                                                    {post.kidsVersion.content}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-8 sm:p-10 rounded-[3rem] bg-secondary text-white border-2 border-secondary/20 relative group hover:rotate-1 transition-transform">
                                            <div className="flex gap-6 items-center mb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                                                    <Lightbulb className="w-6 h-6" />
                                                </div>
                                                <h4 className="font-black text-2xl uppercase tracking-tight">Super Fun Fact!</h4>
                                            </div>
                                            <p className="text-xl font-medium text-white/90">
                                                {post.kidsVersion.funFact}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-16 text-center">
                                        <button
                                            onClick={() => setIsKidsMode(false)}
                                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
                                        >
                                            <Menu className="w-5 h-5" />
                                            Back to Grown-up Version
                                        </button>
                                    </div>
                                </div>
                            </Container>
                        </Section>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-2 w-full bg-gradient-to-r from-secondary via-yellow-400 to-secondary/50" />
        </div>
    );
}
