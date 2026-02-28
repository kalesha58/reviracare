"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Home, Info, Heart, BookOpen, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";

export function Header(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 border-b",
        mobileOpen ? "z-[1000]" : "z-[100]",
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative w-40 h-14 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              fill
              className="object-contain dark:brightness-0 dark:invert"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const hasChildren = "children" in link;
            const isActive = pathname === link.href || (hasChildren && link.children?.some(c => c.href === pathname));

            if (hasChildren) {
              return <NavDropdown key={link.label} link={link} isActive={isActive} />;
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors relative",
                  isActive
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-50/5 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 group shadow-lg shadow-zinc-900/10"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </Container>

      {/* Mobile Menu - portaled so it sits above all page content */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[9999] flex flex-col pt-24 px-6 md:hidden bg-white dark:bg-zinc-950"
                style={{ backgroundColor: "var(--background)" }}
                aria-modal="true"
                role="dialog"
                aria-label="Main menu"
              >
                <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
                  <ThemeToggle />
                  <button
                    className="p-2 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar py-10">
                  <div className="flex flex-col gap-2">
                    {NAV_LINKS.map((link, idx) => (
                      <MobileNavItem
                        key={link.label}
                        link={link}
                        idx={idx}
                        pathname={pathname}
                        setMobileOpen={setMobileOpen}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-8 pb-10 space-y-6"
                >
                  <div className="space-y-4">
                    <a href="tel:0424911145" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-medium">0424 911 145</span>
                    </a>
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-sm leading-relaxed">
                        Suite 2, Level 1, 10-14 Market Lane,<br />Rouse Hill, NSW, 2155
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full py-4 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-xl shadow-zinc-900/10 active:scale-[0.98] transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}

const ICON_MAP = {
  Home: Home,
  "About Us": Info,
  NDIS: Heart,
  Blogs: BookOpen,
  Careers: Briefcase,
  Contact: Mail,
} as const;

function MobileNavItem({
  link,
  idx,
  pathname,
  setMobileOpen,
}: {
  link: (typeof NAV_LINKS)[number];
  idx: number;
  pathname: string;
  setMobileOpen: (open: boolean) => void;
}) {
  const hasChildren = "children" in link;
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive =
    pathname === link.href ||
    (hasChildren && link.children?.some((c) => c.href === pathname));

  const Icon = ICON_MAP[link.label as keyof typeof ICON_MAP] || Info;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + idx * 0.05 }}
      className="w-full"
    >
      {hasChildren ? (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300",
              isExpanded
                ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                isExpanded ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold">{link.label}</span>
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-1 pl-14 pr-4 py-2">
                  {link.children?.map((child: { label: string; href: string }) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "py-3 px-4 rounded-xl text-lg transition-colors flex items-center justify-between group",
                        pathname === child.href
                          ? "bg-zinc-900/5 dark:bg-zinc-50/5 text-zinc-900 dark:text-zinc-50 font-medium"
                          : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                      )}
                    >
                      {child.label}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
            isActive
              ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50"
              : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
          )}
        >
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            isActive ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800"
          )}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold">{link.label}</span>
        </Link>
      )}
    </motion.div>
  );
}

function NavDropdown({ link, isActive }: { link: (typeof NAV_LINKS)[number] & { children: any }, isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1.5",
          isActive
            ? "text-zinc-900 dark:text-zinc-50"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        )}
      >
        {link.label}
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 pt-2 w-56"
          >
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden p-1.5 ring-1 ring-zinc-900/5">
              {link.children?.map((child: { label: string; href: string }) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-lg transition-colors",
                    pathname === child.href
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
