"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-brand text-white border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Mission & Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <BrandLogo
                width={192}
                height={48}
                imageClassName="brightness-0 invert"
              />
            </Link>
            <p className="body-sm text-purple-100/70 leading-relaxed">
              Our mission is to provide high-quality, person-centred care that empowers individuals with disabilities to lead fulfilling and independent lives.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 text-purple-200/50 hover:text-primary transition-colors hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-purple-200/50 hover:text-primary transition-colors hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-purple-200/50 hover:text-primary transition-colors hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="footer-heading text-white uppercase tracking-widest opacity-80">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:0288606462" className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="body-sm">
                  <span className="block text-white font-bold italic">Call Us Now</span>
                  <span className="text-purple-100/70">02 8860 6462</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-purple-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="body-sm">
                  <span className="block text-white font-bold italic">Our Address</span>
                  <address className="not-italic text-purple-100/70 leading-relaxed">
                    Level 5, Nexus Building,<br />
                    4 Columbia Court,<br />
                    Norwest NSW 2153 Australia
                  </address>
                  <span className="block mt-2 caption text-purple-200/40 uppercase">ABN: 38681225785</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h4 className="footer-heading text-white uppercase tracking-widest opacity-80">Working Hours</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-white italic">Office Hours</span>
                </div>
                <p className="body-sm text-purple-100/70">Mon-Fri: 9 AM - 5 PM</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold text-primary italic">Service Hours</span>
                </div>
                <p className="body-sm text-primary font-bold">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="footer-heading text-white uppercase tracking-widest opacity-80">Company</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/services" className="body-sm text-purple-100/70 hover:text-primary transition-colors flex items-center gap-2 group">
                Services <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="body-sm text-purple-100/70 hover:text-primary transition-colors flex items-center gap-2 group">
                Our Mission <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="body-sm text-purple-100/70 hover:text-primary transition-colors flex items-center gap-2 group">
                Contact Us <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Acknowledgement and Copyright */}
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3 text-red-400">
                <Heart className="w-5 h-5 fill-current" />
                <span className="caption uppercase tracking-[0.2em]">Acknowledgement of Country</span>
              </div>
              <p className="body-sm leading-relaxed text-zinc-400 italic">
                Revira Care acknowledges the traditional owners of the land in which we work and pay our respect to their elders, past and present.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-end gap-6 md:gap-12">
              <div className="flex gap-6 caption uppercase tracking-widest text-zinc-500">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms Of Service</Link>
              </div>
              <p className="caption uppercase tracking-widest text-zinc-500">
                © {currentYear} Revira Care. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
