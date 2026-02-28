"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Mission & Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-48 h-12">
                <Image
                  src="/images/logo.png"
                  alt={SITE_NAME}
                  fill
                  className="object-contain dark:brightness-0 dark:invert"
                />
              </div>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Our mission is to provide high-quality, person-centred care that empowers individuals with disabilities to lead fulfilling and independent lives.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-xs tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:0288606462" className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <span className="block text-zinc-900 dark:text-white font-bold italic">Call Us Now</span>
                  <span className="text-zinc-500 dark:text-zinc-400">02 8860 6462</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <span className="block text-zinc-900 dark:text-white font-bold italic">Our Address</span>
                  <address className="not-italic text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Level 5, Nexus Building,<br />
                    4 Columbia Court,<br />
                    Norwest NSW 2153 Australia
                  </address>
                  <span className="block mt-2 text-[10px] text-zinc-400 uppercase font-bold">ABN: 38681225785</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-xs tracking-widest">Working Hours</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-zinc-900 dark:text-white italic">Office Hours</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Mon-Fri: 9 AM - 5 PM</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 italic">Service Hours</span>
                </div>
                <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 font-bold">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-xs tracking-widest">Company</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/services" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2">
                Services <ArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2">
                Our Mission <ArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2">
                Contact Us <ArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/referral" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl text-xs font-bold hover:scale-105 transition-all w-fit">
                Send Referral <ArrowRight className="w-3 h-3" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Acknowledgement and Copyright */}
        <div className="pt-10 border-t border-zinc-200 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3 text-red-500">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Acknowledgement of Country</span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
                Revira Care acknowledges the traditional owners of the land in which we work and pay our respect to their elders, past and present.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-end gap-6 md:gap-12">
              <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms Of Service</Link>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                © {currentYear} Revira Care. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
