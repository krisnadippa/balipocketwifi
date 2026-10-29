"use client";

import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onRentClick: () => void;
  isActive: boolean;
}

export default function HeroSection({ onRentClick, isActive }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full">
      {/* Hero Card Container with opening transition */}
      <div className={`relative w-full rounded-3xl sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col items-center justify-between text-center p-6 sm:p-10 md:p-14 shadow-xl border border-neutral-900/10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"
      }`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herowf.png"
            alt="Bali Pocket WiFi Rental - Sewa WiFi Pocket Bali Airport DPS"
            fill
            priority
            className="object-cover object-center brightness-[0.88] contrast-[1.05]"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
          {/* Subtle vignette gradient for optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60"></div>
        </div>

        {/* Top Spacer to maintain flex layout balance */}
        <div className="h-6 sm:h-8"></div>

        {/* Center Main Headline & CTA */}
        <div className="relative z-10 my-auto py-6 sm:py-8 max-w-4xl flex flex-col items-center">
          {/* Kicker sub-headline */}
          <div className="text-white/90 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
            #1 SEWA WIFI POCKET BALI — UNLIMITED 4G/LTE &amp; GRATIS ANTAR BANDARA DPS
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[76px] text-white tracking-tight leading-[1.08] drop-shadow-md">
            Sewa WiFi Pocket Bali &amp;<br className="hidden sm:inline" />
            {" "}WiFi Rental Bali
          </h1>

          <p className="mt-4 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-white/90 font-medium leading-relaxed drop-shadow px-2">
            Layanan sewa pocket WiFi Bali &amp; rental Bali pocket WiFi terbaik. Internet kuota Unlimited 4G/LTE tanpa FUP, bebas antre IMEI, connect 5–8 gadget, &amp; gratis antar hotel/villa di Canggu, Seminyak, Ubud, &amp; Bandara Ngurah Rai.
          </p>

          {/* Ghost Button in the middle */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRentClick}
              style={{ opacity: 0 }}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/80 bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-neutral-950 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            >
              <span>Sewa Sekarang / Rent Now</span>
            </button>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="relative z-10 pb-2 sm:pb-4 flex items-center justify-center gap-2 text-white">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            5000+
          </span>
          <span className="text-xs sm:text-sm font-medium text-white/50">
            happy travelers
          </span>
        </div>
      </div>
    </section>
  );
}
