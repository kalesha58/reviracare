"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";
import { ALL_BLOG_POSTS, type IBlogPost } from "@/data/blogs.data";
import { cn } from "@/lib/utils";

const LATEST_POSTS = ALL_BLOG_POSTS.slice(0, 4);

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.06 + i * 0.08 },
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
      className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl hover:border-purple-400/30 dark:hover:border-purple-400/20 transition-all duration-300 h-full"
    >
      <Link href={post.href} className="flex flex-col h-full">
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted rounded-t-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              {post.readTimeMinutes} min read
              <span className="text-border">·</span>
              {post.date}
            </span>
          </div>
          <h3 className="card-title text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight leading-snug line-clamp-2 mb-3">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5">
            {post.excerpt}
          </p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-bold text-sm group/btn">
              Read Article
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function LatestNewsSection(): React.ReactElement {
  return (
    <Section className="bg-background text-foreground border-t border-border overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={CONTAINER_VARIANTS}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14"
        >
          <motion.span
            variants={ITEM_VARIANTS}
            custom={0}
            className="section-label text-purple-600 dark:text-purple-400 uppercase block mb-3"
          >
            Latest News
          </motion.span>
          <motion.h2
            variants={ITEM_VARIANTS}
            custom={1}
            className="section-title text-foreground leading-tight"
          >
            Read Our Blogs And News
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={CONTAINER_VARIANTS}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {LATEST_POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
