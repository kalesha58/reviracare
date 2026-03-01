"use client";

import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { IChatSupportProps, IChatMessage } from "./ChatSupport.interfaces";

const DUMMY_BOT_REPLY =
  "Thanks for your message. Our support team will get back to you soon. For immediate help, you can call us on 1800 REVIRA.";

const MOBILE_BREAKPOINT = 640;

function useVisualViewportHeight(open: boolean): { height: number; top: number } | null {
  const [state, setState] = useState<{ height: number; top: number } | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const vv = window.visualViewport;

    const update = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setState(null);
        return;
      }
      setState({ height: vv.height, top: vv.offsetTop });
    };

    if (open) {
      update();
      vv.addEventListener("resize", update);
      vv.addEventListener("scroll", update);
    } else {
      setState(null);
    }
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [open]);

  return open && typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT ? state : null;
}

export function ChatSupport({ welcomeMessage }: IChatSupportProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);
  const viewport = useVisualViewportHeight(open);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0 && welcomeMessage) {
      setMessages([
        {
          id: "welcome",
          role: "bot",
          content: welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [open, welcomeMessage, messages.length]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sendMessage = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: IChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage: IChatMessage = {
        id: `bot-${Date.now()}`,
        role: "bot",
        content: DUMMY_BOT_REPLY,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  }, [input]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  if (!mounted) return <></>;

  const modal = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-900/50 dark:bg-zinc-950/70 backdrop-blur-sm z-[2000]"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "fixed z-[2001] flex flex-col rounded-t-2xl sm:rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800",
              "bg-[var(--background)] text-[var(--foreground)]",
              "left-0 right-0 sm:left-auto sm:right-6 sm:w-[380px] sm:h-[520px] sm:max-h-[calc(100vh-5rem)]",
              "max-sm:bottom-0 max-sm:top-[var(--chat-top,0)] max-sm:h-[var(--chat-height,85vh)]"
            )}
            style={
              viewport
                ? {
                    ["--chat-height" as string]: `${viewport.height}px`,
                    ["--chat-top" as string]: `${viewport.top}px`,
                    top: viewport.top,
                    height: viewport.height,
                    bottom: "auto",
                  }
                : undefined
            }
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Support chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between shrink-0 px-4 py-3 border-b border-[var(--border)] bg-[var(--muted)]/50 dark:bg-zinc-900/50 rounded-t-2xl sm:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-[var(--foreground)]">Support</h2>
                  <p className="text-xs text-[var(--muted-foreground)]">We typically reply quickly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.length === 0 && (
                <p className="text-sm text-[var(--muted-foreground)] text-center py-8">
                  Ask your question below. Our team will respond soon.
                </p>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                      msg.role === "user"
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] rounded-br-md"
                        : "bg-[var(--muted)] text-[var(--foreground)] rounded-bl-md border border-[var(--border)]"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="shrink-0 p-4 pt-2 border-t border-[var(--border)]">
              <div className="flex gap-2 items-end">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  rows={1}
                  className={cn(
                    "flex-1 min-h-[44px] max-h-28 resize-none rounded-xl px-4 py-3 text-sm",
                    "bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]",
                    "placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  )}
                  aria-label="Message input"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={cn(
                    "shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors",
                    "bg-[var(--primary)] text-[var(--primary-foreground)]",
                    "hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  )}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {createPortal(modal, document.body)}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            className={cn(
              "fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
              "bg-[var(--primary)] text-[var(--primary-foreground)]",
              "hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            )}
            aria-label="Open support chat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
