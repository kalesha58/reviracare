"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
    className?: string;
    imageClassName?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    showText?: boolean;
}

export function BrandLogo({
    className,
    imageClassName,
    width = 200,
    height = 60,
    priority = false,
}: BrandLogoProps) {
    return (
        <div className={cn("relative flex items-center gap-2", className)}>
            <div
                className="relative"
                style={{ width: `${width}px`, height: `${height}px` }}
            >
                <Image
                    src="/images/logo.png"
                    alt={SITE_NAME}
                    fill
                    className={cn("object-contain", imageClassName)}
                    priority={priority}
                />
            </div>
        </div>
    );
}
