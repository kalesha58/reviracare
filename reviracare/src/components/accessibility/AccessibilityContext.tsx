"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AccessibilityState {
    fontSizeLevel: number; // 0, 1, 2, 3, 4
    lineHeightLevel: number; // 0, 1, 2, 3
    textAlign: "left" | "center" | "right";
    readableFont: boolean;
    contrastLevel: number; // 0, 1, 2, 3
    grayscale: boolean;
    hideImages: boolean;
    highlightLinks: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
    setFontSizeLevel: (level: number) => void;
    setLineHeightLevel: (level: number) => void;
    setTextAlign: (align: "left" | "center" | "right") => void;
    setReadableFont: (readable: boolean) => void;
    setContrastLevel: (level: number) => void;
    setGrayscale: (grayscale: boolean) => void;
    setHideImages: (hide: boolean) => void;
    setHighlightLinks: (highlight: boolean) => void;
    reset: () => void;
}

const initialState: AccessibilityState = {
    fontSizeLevel: 0,
    lineHeightLevel: 0,
    textAlign: "left",
    readableFont: false,
    contrastLevel: 0,
    grayscale: false,
    hideImages: false,
    highlightLinks: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<AccessibilityState>(initialState);

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem("accessibility_settings_v4");
        if (saved) {
            try {
                setState(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse accessibility settings", e);
            }
        }
    }, []);

    // Save to local storage and apply classes
    useEffect(() => {
        localStorage.setItem("accessibility_settings_v4", JSON.stringify(state));

        const root = document.documentElement;

        // Scale factor for font size
        const scales = [1, 1.05, 1.15, 1.25, 1.35];
        root.style.setProperty("--acc-scale", scales[state.fontSizeLevel].toString());

        // Applying global classes to root
        const levels = {
            font: state.fontSizeLevel,
            line: state.lineHeightLevel,
            contrast: state.contrastLevel
        };

        // Clean up old classes
        const classesToRemove = [];
        for (let i = 1; i <= 4; i++) classesToRemove.push(`acc-font-l${i}`);
        for (let i = 1; i <= 3; i++) classesToRemove.push(`acc-line-l${i}`, `acc-contrast-l${i}`);
        root.classList.remove(...classesToRemove, "acc-align-center", "acc-align-right", "acc-readable-font", "acc-grayscale", "acc-hide-images", "acc-highlight-links");

        // Add new classes
        if (state.fontSizeLevel > 0) root.classList.add(`acc-font-l${state.fontSizeLevel}`);
        if (state.lineHeightLevel > 0) root.classList.add(`acc-line-l${state.lineHeightLevel}`);
        if (state.contrastLevel > 0) root.classList.add(`acc-contrast-l${state.contrastLevel}`);
        if (state.textAlign === "center") root.classList.add("acc-align-center");
        if (state.textAlign === "right") root.classList.add("acc-align-right");
        if (state.readableFont) root.classList.add("acc-readable-font");
        if (state.grayscale) root.classList.add("acc-grayscale");
        if (state.hideImages) root.classList.add("acc-hide-images");
        if (state.highlightLinks) root.classList.add("acc-highlight-links");

    }, [state]);

    const setFontSizeLevel = (fontSizeLevel: number) => setState((s) => ({ ...s, fontSizeLevel }));
    const setLineHeightLevel = (lineHeightLevel: number) => setState((s) => ({ ...s, lineHeightLevel }));
    const setTextAlign = (textAlign: "left" | "center" | "right") => setState((s) => ({ ...s, textAlign }));
    const setReadableFont = (readableFont: boolean) => setState((s) => ({ ...s, readableFont }));
    const setContrastLevel = (contrastLevel: number) => setState((s) => ({ ...s, contrastLevel }));
    const setGrayscale = (grayscale: boolean) => setState((s) => ({ ...s, grayscale }));
    const setHideImages = (hideImages: boolean) => setState((s) => ({ ...s, hideImages }));
    const setHighlightLinks = (highlightLinks: boolean) => setState((s) => ({ ...s, highlightLinks }));
    const reset = () => setState(initialState);

    return (
        <AccessibilityContext.Provider
            value={{
                ...state,
                setFontSizeLevel,
                setLineHeightLevel,
                setTextAlign,
                setReadableFont,
                setContrastLevel,
                setGrayscale,
                setHideImages,
                setHighlightLinks,
                reset,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error("useAccessibility must be used within an AccessibilityProvider");
    }
    return context;
};
