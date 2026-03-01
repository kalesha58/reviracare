"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight, Home, Info, Heart, BookOpen,
  Briefcase, Mail, Phone, MapPin, Sparkles, ClipboardCheck, Building, FileText
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";

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
          ? "bg-white/90 dark:bg-purple-950/90 backdrop-blur-md border-purple-100 dark:border-purple-900/50 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="transition-transform group-hover:scale-105">
            <BrandLogo
              width={160}
              height={56}
              priority
              imageClassName="dark:brightness-0 dark:invert"
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
                  "nav-link px-4 py-2 rounded-full transition-colors relative",
                  isActive
                    ? "text-primary dark:text-primary font-bold"
                    : "text-slate-900 dark:text-zinc-100 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full -z-10"
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
            className="nav-link px-6 py-2.5 bg-primary text-white rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 group shadow-lg shadow-primary/20 font-bold"
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
                    className="p-2 text-slate-900 dark:text-purple-100 hover:bg-primary/10 rounded-full transition-colors"
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
                  className="mt-auto border-t border-purple-100 dark:border-purple-900/50 pt-8 pb-10 space-y-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
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
                ? "bg-primary/5 dark:bg-primary/10 text-primary font-bold"
                : "text-slate-900 dark:text-zinc-100 hover:bg-primary/5 dark:hover:bg-primary/10"
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                isExpanded ? "bg-primary text-white" : "bg-slate-100 dark:bg-purple-900/50 text-slate-600 dark:text-purple-200"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="nav-link-mobile">{link.label}</span>
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
                        "nav-link-dropdown py-3 px-4 rounded-xl transition-colors flex items-center justify-between group",
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
              ? "bg-primary/5 dark:bg-primary/10 text-primary font-bold"
              : "text-slate-900 dark:text-zinc-100 hover:bg-primary/5 dark:hover:bg-primary/10"
          )}
        >
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            isActive ? "bg-primary text-white" : "bg-slate-100 dark:bg-purple-900/50 text-slate-600 dark:text-purple-200"
          )}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="nav-link-mobile">{link.label}</span>
        </Link>
      )}
    </motion.div>
  );
}


function NavDropdown({ link, isActive }: { link: (typeof NAV_LINKS)[number] & { children: any }, isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const SUB_ICON_MAP: Record<string, any> = {
    BookOpen: BookOpen,
    Sparkles: Sparkles,
    ClipboardCheck: ClipboardCheck,
    Building: Building,
    FileText: FileText,
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "nav-link px-4 py-2 rounded-full transition-colors flex items-center gap-1.5",
          isActive
            ? "text-primary dark:text-primary font-bold bg-primary/5 dark:bg-primary/10"
            : "text-slate-900 dark:text-zinc-100 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10"
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
            className="absolute top-full left-0 pt-2 w-72"
          >
            <div className="bg-white dark:bg-zinc-900 border border-purple-100 dark:border-purple-900/50 rounded-2xl shadow-xl overflow-hidden p-2 ring-1 ring-purple-950/5">
              {link.children?.map((child: any) => {
                const Icon = SUB_ICON_MAP[child.icon] || ArrowRight;
                const isChildActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                      isChildActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-zinc-600 dark:text-purple-200 hover:bg-primary/5 hover:text-primary dark:hover:text-primary"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                      isChildActive ? "bg-primary text-white" : "bg-zinc-100 dark:bg-purple-900/30 text-zinc-500 dark:text-purple-300 group-hover:bg-primary/20 group-hover:text-primary"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{child.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
