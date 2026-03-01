"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import type { ITestimonialItem, ITestimonialsSectionProps } from "./TestimonialsSection.interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";

const STARS_COUNT = 5;
const DEFAULT_REVIEW_COUNT = 20;
const DEFAULT_SUMMARY_LABEL = "EXCELLENT";

function GoogleLogo(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      aria-label="Google"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }): React.ReactElement {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${STARS_COUNT} stars`}>
      {Array.from({ length: STARS_COUNT }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "w-5 h-5 shrink-0",
            i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200 dark:text-zinc-600"
          )}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
}: {
  item: ITestimonialItem;
}): React.ReactElement {
  return (
    <article
      className="flex flex-col h-full rounded-2xl border border-border/50 bg-background/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-xl hover:border-purple-brand/30 transition-all duration-300 min-h-[240px] group"
      aria-label={`Review by ${item.reviewerName}`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          {item.hasProfileImage && item.profileImageSrc ? (
            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-purple-brand/20 dark:ring-purple-brand/40">
              <Image
                src={item.profileImageSrc}
                alt=""
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm ring-2 ring-purple-brand/20 dark:ring-purple-brand/40",
                item.avatarColorClass || "bg-purple-brand"
              )}
              aria-hidden
            >
              {item.avatarLetter}
            </div>
          )}
          <div className="min-w-0">
            <p className="card-title text-foreground truncate group-hover:text-purple-brand dark:group-hover:text-purple-200 transition-colors">
              {item.reviewerName}
            </p>
            <p className="caption text-muted-foreground">{item.timeAgo}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <GoogleLogo />
        </div>
      </div>
      <div className="mb-3">
        <StarRating rating={item.rating} />
      </div>
                <p className="body text-foreground/80 flex-1 line-clamp-4 leading-relaxed italic">
        "{item.snippet}"
      </p>
      <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-purple-brand dark:text-purple-200 shrink-0" aria-label="Verified" />
          <span className="caption tracking-wider text-muted-foreground uppercase">Verified Review</span>
        </div>
        {item.readMoreHref && (
          <a
            href={item.readMoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="caption text-purple-brand dark:text-purple-200 hover:text-purple-brand/90 dark:hover:text-purple-200/90 font-bold transition-colors"
          >
            Read more
          </a>
        )}
      </div>
    </article>
  );
}

const TESTIMONIALS_DATA: ITestimonialItem[] = [
  {
    id: "1",
    reviewerName: "Sandeep kaur",
    avatarLetter: "S",
    avatarColorClass: "bg-purple-brand",
    timeAgo: "1 year ago",
    rating: 5,
    snippet:
      "Revira Care provided excellent support for our family. The team was professional, caring, and always went the extra mile. Highly recommend their services.",
    readMoreHref: "#",
  },
  {
    id: "2",
    reviewerName: "Anum Khalil",
    avatarLetter: "A",
    avatarColorClass: "bg-purple-brand",
    timeAgo: "1 year ago",
    rating: 5,
    snippet:
      "Very responsive and person-centred care. They really listen and tailor support to what you need. Grateful for the support we receive.",
    readMoreHref: "#",
  },
  {
    id: "3",
    reviewerName: "Neha Shah",
    avatarLetter: "N",
    avatarColorClass: "bg-purple-brand",
    timeAgo: "2 years ago",
    rating: 5,
    snippet:
      "Outstanding NDIS provider. Clear communication, reliable staff, and a genuine commitment to helping participants achieve their goals.",
    readMoreHref: "#",
  },
];

export function TestimonialsSection({
  totalReviews = DEFAULT_REVIEW_COUNT,
  summaryLabel = DEFAULT_SUMMARY_LABEL,
  testimonials = TESTIMONIALS_DATA,
}: ITestimonialsSectionProps): React.ReactElement {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const canGoPrev = index > 0;
  const canGoNext = index < total - 1;
  const cardsPerViewLg = 3;
  const maxIndexLg = Math.max(0, total - cardsPerViewLg);
  const showAllThreeOnLg = total <= 3;
  const visibleSlice = showAllThreeOnLg
    ? testimonials
    : testimonials.slice(index, index + cardsPerViewLg);
  const canGoPrevLg = !showAllThreeOnLg && index > 0;
  const canGoNextLg = !showAllThreeOnLg && index < maxIndexLg;

  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const goPrevLg = useCallback(() => setIndex((i) => Math.max(0, i - cardsPerViewLg)), []);
  const goNextLg = useCallback(() => setIndex((i) => Math.min(maxIndexLg, i + cardsPerViewLg)), [maxIndexLg]);

  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = (): void => setIsLg(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const showArrowsOnDesktop = !showAllThreeOnLg;
  const prevDisabled = isLg ? !canGoPrevLg : !canGoPrev;
  const nextDisabled = isLg ? !canGoNextLg : !canGoNext;
  const handlePrev = (): void => {
    if (isLg && showArrowsOnDesktop) goPrevLg();
    else goPrev();
  };
  const handleNext = (): void => {
    if (isLg && showArrowsOnDesktop) goNextLg();
    else goNext();
  };

  return (
    <Section
      className="bg-purple-50/50 dark:bg-purple-950/10 text-foreground border-t border-purple-200/50 dark:border-purple-900/20 overflow-hidden relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-200/10 dark:bg-green-900/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Summary rating */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-brand/10 dark:bg-purple-brand/20 text-purple-brand dark:text-purple-200 section-label uppercase tracking-widest mb-4">
              Testimonials
            </div>
            <h2 id="testimonials-heading" className="section-title text-foreground mb-4 !text-4xl lg:!text-5xl tracking-tight">
              {summaryLabel}
            </h2>
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <StarRating rating={STARS_COUNT} />
                <p className="body-sm font-medium text-purple-brand/70 dark:text-purple-200/70 mt-2">
                  Based on {totalReviews} Genuine Google Reviews
                </p>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-background/80 border border-border/50 shadow-sm" aria-hidden>
                <GoogleLogo />
                <div className="h-4 w-[1px] bg-border" />
                <span className="body-sm font-bold text-foreground">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Right: Carousel — mobile single card, desktop 3 cards */}
          <div className="lg:col-span-8 relative">
            <div className="flex items-stretch gap-3 sm:gap-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={prevDisabled}
                aria-label="Previous review"
                className={cn(
                  "shrink-0 w-12 h-12 rounded-full border border-purple-brand/30 dark:border-purple-brand/40 bg-background dark:bg-zinc-900 flex items-center justify-center transition-all shadow-sm",
                  prevDisabled
                    ? "opacity-30 cursor-not-allowed text-muted-foreground"
                    : "hover:bg-purple-brand/10 dark:hover:bg-purple-brand/20 hover:border-purple-brand text-purple-brand dark:text-purple-200 hover:scale-105 active:scale-95"
                )}
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
              </button>

              <div className="flex-1 min-w-0 overflow-hidden">
                {/* Mobile: single card with transition */}
                <div className="lg:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <TestimonialCard item={testimonials[index]} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Desktop: 3 cards in a row */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-4">
                  {visibleSlice.map((item) => (
                    <TestimonialCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={nextDisabled}
                aria-label="Next review"
                className={cn(
                  "shrink-0 w-12 h-12 rounded-full border border-purple-brand/30 dark:border-purple-brand/40 bg-background dark:bg-zinc-900 flex items-center justify-center transition-all shadow-sm",
                  nextDisabled
                    ? "opacity-30 cursor-not-allowed text-muted-foreground"
                    : "hover:bg-purple-brand/10 dark:hover:bg-purple-brand/20 hover:border-purple-brand text-purple-brand dark:text-purple-200 hover:scale-105 active:scale-95"
                )}
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Dots: mobile only when multiple cards */}
            {total > 1 && (
              <div className="flex justify-center gap-1.5 mt-4 lg:hidden" aria-hidden>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={cn(
                      "h-1.5 transition-all duration-300 rounded-full",
                      i === index
                        ? "w-8 bg-purple-brand dark:bg-purple-200 shadow-[0_0_8px_var(--color-purple-brand)]"
                        : "w-1.5 bg-purple-brand/30 dark:bg-purple-brand/50"
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
