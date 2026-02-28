"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Variants } from "framer-motion";
import { ALL_BLOG_POSTS, type IBlogPost } from "@/data/blogs.data";
import { BlogHero } from "@/components/sections/BlogHero";

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.04 + i * 0.05 },
  }),
};

function BlogCard({
  post,
  index,
}: {
  post: IBlogPost;
  index: number;
}): React.ReactElement {
  return (
    <motion.article
      variants={ITEM_VARIANTS}
      custom={index}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300"
    >
      <Link href={post.href} className="flex flex-col h-full">
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted rounded-t-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              {post.readTimeMinutes} min read
              <span className="text-border">·</span>
              {post.date}
            </span>
          </div>
          <h2 className="font-bold text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug text-base sm:text-lg line-clamp-2 mb-3 flex-1">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group/btn w-fit">
            Read Article
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogsPage(): React.ReactElement {
  return (
    <>
      <BlogHero />

      <Section className="bg-background text-foreground pt-0">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={CONTAINER_VARIANTS}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {ALL_BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
