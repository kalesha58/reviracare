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
            className={cn("w-full bg-[#3b0764] dark:bg-[#1e0a2d] py-6 sm:py-8 border-y border-white/5", className)}
        >
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-px)] flex flex-col sm:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-center sm:text-left leading-tight">
                    {title}
                </h2>
                <div className="relative w-[110px] h-[50px] sm:w-[130px] sm:h-[60px] shrink-0 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/10">
                    <Image
                        src="/images/hero/National_Disability_Insurance_Scheme_logo.svg.png"
                        alt="NDIS Logo"
                        fill
                        className="object-contain p-1"
                    />
                </div>
            </div>
        </motion.div>
    );
}
