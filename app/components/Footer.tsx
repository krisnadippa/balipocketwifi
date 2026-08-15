"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Send } from "lucide-react";

interface FooterProps {
  onOpenCoverage?: () => void;
}

export default function Footer({ onOpenCoverage }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full px-3 sm:px-5 lg:px-6 pb-4 pt-4 max-w-none">
      {/* Dark Luxury Rounded Container */}
      <div className="bg-[#05080E] text-white rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:py-8 md:px-12 border border-neutral-800 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Main Row: Logo/Description & Newsletter form side-by-side */}
        <div className="pb-6 sm:pb-8 border-b border-neutral-800/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
          <div className="max-w-xl">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white leading-tight">
              Bali Pocket WiFi
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light">
              Empowering international travelers, remote workers, and adventurers
              with ultra-fast 4G/LTE connectivity across Indonesia.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[#A3E635] text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>You&apos;re in! Check your inbox for the 10% coupon code.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center w-full max-w-md bg-neutral-900/90 border border-neutral-700/70 rounded-full p-1.5 focus-within:border-[#A3E635] transition-all"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#A3E635] hover:bg-[#8ED422] text-neutral-950 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom: Horizontal Navigation Links & Social Media Icons */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          {/* Left Navigation Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8 font-medium">
            <button
              onClick={onOpenCoverage}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Coverage Map
            </button>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Right Navigation Links & Social Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 font-medium">
            <a href="#plans" className="hover:text-white transition-colors">
              Plans
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>

            {/* Social Icons (Instagram & Facebook as in mockup) */}
            <div className="flex items-center gap-3 pl-2 sm:pl-4">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-[#A3E635] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-[#A3E635] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 pt-4 border-t border-neutral-900/80 text-center md:text-left text-[11px] text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Bali Pocket WiFi. All rights reserved.</span>
          <span>
            part of{" "}
            <a
              href="https://infinitygotravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#A3E635] transition-colors"
            >
              infinitygotravel.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
