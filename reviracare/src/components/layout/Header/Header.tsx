"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Header(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-50 dark:text-zinc-900 group-hover:scale-110 transition-transform">
            R
          </div>
          <span>{SITE_NAME}</span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-zinc-950 flex flex-col pt-20 px-6"
          >
            <button
              className="absolute top-6 right-6 p-2 text-zinc-600 dark:text-zinc-400"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => {
                const hasChildren = "children" in link;
                const isActive = pathname === link.href || (hasChildren && link.children?.some(c => c.href === pathname));

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    {hasChildren ? (
                      <div className="flex flex-col gap-4">
                        <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                          {link.label}
                        </span>
                        <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-zinc-100 dark:border-zinc-800">
                          {link.children?.map(child => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "text-3xl font-semibold transition-colors",
                          isActive
                            ? "text-zinc-900 dark:text-zinc-50"
                            : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full h-16 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 rounded-2xl flex items-center justify-center text-lg font-semibold gap-3"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavDropdown({ link, isActive }: { link: { label: string, href: string, children?: readonly { label: string, href: string }[] }, isActive: boolean }) {
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
              {link.children?.map((child) => (
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
