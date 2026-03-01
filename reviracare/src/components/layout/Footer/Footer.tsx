"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  Phone,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const IMPORTANT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "NDIS", href: "/ndis" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
] as const;

const SERVICE_AREAS = [
  "Sydney",
  "Norwest",
  "NSW",
  "Parramatta",
  "Western Sydney",
  "Victoria",
  "Brisbane",
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Youtube", href: "#", icon: Youtube },
] as const;

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-brand text-white border-t border-white/10">
      <Container>
        {/* Main 3-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14 pt-16 pb-14 lg:pt-20 lg:pb-16">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <BrandLogo
                width={220}
                height={56}
                imageClassName="brightness-0 invert"
              />
            </Link>
            <p className="footer-body text-white/85 leading-relaxed max-w-sm">
              As a reputed{" "}
              <span className="font-bold text-white">NDIS</span> provider across{" "}
              <span className="font-bold text-white">Australia</span>, we are
              focused on helping NDIS participants pursue a healthy life on their
              own terms. We are committed to excellence by providing you with
              the most personalised support and helping you become more
              independent.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div className="space-y-6">
            <h4 className="footer-heading text-white font-bold text-base lg:text-lg normal-case tracking-normal">
              Important Links
            </h4>
            <nav
              className="flex flex-col gap-3"
              aria-label="Important links"
            >
              {IMPORTANT_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-body text-white/85 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-6">
            <h4 className="footer-heading text-white font-bold text-base lg:text-lg normal-case tracking-normal">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="footer-body text-white/85"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* New Horizontal Contact Bar */}
        <div className="mb-14">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:0288606462" className="text-xl md:text-2xl font-black text-white hover:text-primary transition-colors">
                    02 8860 6462
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Location</p>
                  <address className="text-sm md:text-base text-white/90 font-medium not-italic leading-relaxed">
                    Level 5, Nexus Building, 4 Columbia Court, Norwest NSW 2153
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@reviracare.com.au" className="text-sm md:text-base text-white/95 font-semibold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                    info@reviracare.com.au
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest mb-1">Working Hours</p>
                  <div className="text-sm md:text-base text-white/90 font-semibold space-y-0.5">
                    <p>Mon-Fri: 9 AM - 5 PM</p>
                    <p className="text-emerald-400">Service Hours - 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social row - bordered buttons with icon + text */}
        <div className="pt-8 pb-10 border-t border-white/15">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/25 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200 footer-body"
              >
                <Icon className="w-5 h-5 shrink-0" strokeWidth={2} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Acknowledgement and Copyright */}
        <div className="pt-10 pb-12 border-t border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 text-red-400">
                <Heart className="w-5 h-5 fill-current shrink-0" />
                <span className="footer-legal uppercase tracking-wider text-red-400/90">
                  Acknowledgement of Country
                </span>
              </div>
              <p className="footer-body text-white/70 leading-relaxed italic">
                Revira Care acknowledges the traditional owners of the land in
                which we work and pay our respect to their elders, past and
                present.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 md:gap-8">
              <div className="flex flex-wrap gap-6 footer-legal uppercase tracking-wider text-white/60">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms Of Service
                </Link>
              </div>
              <p className="footer-legal uppercase tracking-wider text-white/60">
                © {currentYear} Revira Care. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
