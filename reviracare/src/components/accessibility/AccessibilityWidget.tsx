"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Accessibility,
    Eye,
    EyeOff,
    RotateCcw,
    X,
    Type,
    ArrowUpDown,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Contrast,
    Droplets,
    ImageOff,
    Link,
    Check,
} from "lucide-react";
import { useAccessibility } from "./AccessibilityContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const AccessibilityWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const {
        fontSizeLevel,
        setFontSizeLevel,
        lineHeightLevel,
        setLineHeightLevel,
        textAlign,
        setTextAlign,
        readableFont,
        setReadableFont,
        contrastLevel,
        setContrastLevel,
        grayscale,
        setGrayscale,
        hideImages,
        setHideImages,
        highlightLinks,
        setHighlightLinks,
        reset,
    } = useAccessibility();

    const fontSizeScales = [1, 1.05, 1.15, 1.25, 1.35];
    const currentScale = fontSizeScales[fontSizeLevel] || 1;

    if (!isVisible && !isOpen) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-6 right-6 z-[9999] p-3 bg-secondary text-white rounded-full shadow-2xl hover:scale-110 transition-transform acc-widget-toggle"
                aria-label="Show accessibility options"
            >
                <Accessibility className="w-6 h-6 acc-icon" />
            </button>
        );
    }

    return (
        <>
            {/* Floating Toggle Icon */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ scale: 1 / currentScale }}
                    onClick={() => setIsOpen(true)}
                    className="fixed top-24 right-6 z-[9999] p-3 bg-[#4CAF50] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white acc-widget-toggle"
                    aria-label="Open accessibility menu"
                >
                    <Accessibility className="w-7 h-7 acc-icon" />
                </motion.button>
            )}

            {/* Modal - No Overlay for real-time background interaction */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        style={{
                            scale: 1 / currentScale,
                            originX: 1,
                            originY: 0,
                            width: `${100 * currentScale}%`,
                            height: `${100 * currentScale}%`,
                            maxWidth: `${480 * currentScale}px`
                        }}
                        className="fixed top-0 right-0 z-[99999] bg-white dark:bg-zinc-900 shadow-2xl flex flex-col overflow-hidden pointer-events-auto acc-widget-panel"
                    >
                        {/* Header */}
                        <div className="relative overflow-hidden shrink-0">
                            <div className="bg-[#4CAF50] p-6 pt-10 pb-12 flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Accessibility className="w-6 h-6 acc-icon" />
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                        title="Hide widget"
                                    >
                                        <EyeOff className="w-5 h-5 acc-icon" />
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                        title="Reset all"
                                    >
                                        <RotateCcw className="w-5 h-5 acc-icon" />
                                    </button>
                                    <div className="w-px h-6 bg-white/30 mx-1" />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                        title="Close"
                                    >
                                        <X className="w-6 h-6 acc-icon" />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -bottom-1 left-0 right-0 h-10 bg-white dark:bg-zinc-900 rounded-t-[3rem]" />
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                            {/* Text Settings */}
                            <div>
                                <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Text</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <AccessibilityCard
                                        icon={<Type className="w-6 h-6" />}
                                        label="Bigger text"
                                        active={fontSizeLevel > 0}
                                        stages={4}
                                        currentStage={fontSizeLevel}
                                        onClick={() => setFontSizeLevel((fontSizeLevel + 1) % 5)}
                                    />
                                    <AccessibilityCard
                                        icon={<ArrowUpDown className="w-6 h-6" />}
                                        label="Line height"
                                        active={lineHeightLevel > 0}
                                        stages={3}
                                        currentStage={lineHeightLevel}
                                        onClick={() => setLineHeightLevel((lineHeightLevel + 1) % 4)}
                                    />
                                    <AccessibilityCard
                                        icon={textAlign === "left" ? <AlignLeft className="w-6 h-6" /> : textAlign === "center" ? <AlignCenter className="w-6 h-6" /> : <AlignRight className="w-6 h-6" />}
                                        label="Text align"
                                        active={textAlign !== "left"}
                                        onClick={() => {
                                            const next: Record<string, "left" | "center" | "right"> = { left: "center", center: "right", right: "left" };
                                            setTextAlign(next[textAlign]);
                                        }}
                                    />
                                    <AccessibilityCard
                                        icon={<span className="text-xl font-bold font-sans">Aa</span>}
                                        label="Readable font"
                                        active={readableFont}
                                        onClick={() => setReadableFont(!readableFont)}
                                    />
                                </div>
                            </div>

                            {/* Visual Settings */}
                            <div>
                                <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Visual</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <AccessibilityCard
                                        icon={<Contrast className="w-6 h-6" />}
                                        label="Contrast"
                                        active={contrastLevel > 0}
                                        stages={3}
                                        currentStage={contrastLevel}
                                        onClick={() => setContrastLevel((contrastLevel + 1) % 4)}
                                    />
                                    <AccessibilityCard
                                        icon={<Droplets className="w-6 h-6" />}
                                        label="Grayscale"
                                        active={grayscale}
                                        onClick={() => setGrayscale(!grayscale)}
                                    />
                                    <AccessibilityCard
                                        icon={<ImageOff className="w-6 h-6" />}
                                        label="Hide images"
                                        active={hideImages}
                                        onClick={() => setHideImages(!hideImages)}
                                    />
                                    <AccessibilityCard
                                        icon={<Link className="w-6 h-6" />}
                                        label="Highlight links"
                                        active={highlightLinks}
                                        onClick={() => setHighlightLinks(!highlightLinks)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="relative shrink-0">
                            <div className="absolute -top-10 left-0 right-0 h-10 bg-white dark:bg-zinc-900 rounded-b-[3rem]" />
                            <div className="bg-[#4CAF50] py-4 px-6 text-white text-center">
                                <div className="h-4" /> {/* Compact footer spacer */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

interface AccessibilityCardProps {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onClick: () => void;
    stages?: number;
    currentStage?: number;
}

const AccessibilityCard: React.FC<AccessibilityCardProps> = ({
    icon,
    label,
    active,
    onClick,
    stages,
    currentStage = 0
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group flex flex-col items-center justify-center gap-2 p-4 rounded-[1.5rem] transition-all duration-300 border-2 text-center h-[130px] w-full",
                active
                    ? "bg-white dark:bg-zinc-800 border-zinc-900 dark:border-white shadow-md scale-[1.02]"
                    : "bg-zinc-100 dark:bg-zinc-800 border-transparent text-zinc-600 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700"
            )}
        >
            <div className="flex items-center w-full gap-3 px-1">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    active ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-white dark:bg-zinc-700 shadow-sm"
                )}>
                    {icon}
                </div>
                <div className="flex flex-col items-start overflow-hidden w-full">
                    <span className={cn(
                        "text-xs sm:text-sm font-bold leading-tight truncate w-full text-left transition-colors",
                        active ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
                    )}>
                        {label}
                    </span>
                    {stages && (
                        <div className="flex gap-1 mt-1.5 w-full">
                            {Array.from({ length: stages }).map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-1.5 flex-1 rounded-full transition-all duration-300",
                                        i < currentStage
                                            ? "bg-zinc-900 dark:bg-white"
                                            : "bg-zinc-300 dark:bg-zinc-600"
                                    )}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
};
