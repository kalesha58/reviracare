"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const NDIS_EXPERTISE = [
  "Support Coordination",
  "Supported Independent Living (SIL)",
  "Specialist Disability Accommodation",
  "Community Participation & Care",
  "In-Home Assistance",
] as const;

const IMAGE_SRC = "/images/services/in-home-support.png";

export function NDISProviderSection(): React.ReactElement {
  return (
    <Section className="bg-background text-foreground border-t border-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image: rich, warm editorial treatment */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative order-1"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGE_SRC}
                alt="NDIS support and in-home care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
              {/* Warm, rich overlay for editorial feel */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-amber-950/10"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/5"
                aria-hidden
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 order-2 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              NDIS Provider Australia
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-2xl p-6">
              We are committed to supporting NDIS participants in living a healthy
              lifestyle on their own terms as a reputable NDIS provider in Australia.
              By giving you the most individualized support and assisting you in
              becoming more self-sufficient, we demonstrate our dedication to
              excellence. Our extensive array of support services is specifically
              created to improve participants' well-being and help them achieve
              their health objectives more quickly.
            </p>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Our NDIS Registered Providers Expertise in:
            </h3>
            <ul className="space-y-3 mb-10">
              {NDIS_EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity"
            >
              Connect With Revira Care
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
