"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NDISBrandingBarProps {
    title: string;
    className?: string;
}

export function NDISBrandingBar({ title, className }: NDISBrandingBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn("w-full bg-purple-brand dark:bg-zinc-900 py-6 sm:py-8 border-y border-white/10 dark:border-border", className)}
        >
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-px)] flex flex-col sm:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-zinc-100 tracking-tight text-center sm:text-left leading-tight">
                    {title}
                </h2>
                <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
                    <div className="relative w-[140px] h-[55px] sm:w-[180px] sm:h-[70px] bg-white p-2 sm:p-3 rounded-xl shadow-lg border border-purple-brand/10">
                        <Image
                            src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
                            alt="NDIS Logo"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        NO: 4053379341
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
