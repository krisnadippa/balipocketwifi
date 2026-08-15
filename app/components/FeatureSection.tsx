"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";

interface FeatureSectionProps {
  onBookClick: () => void;
  onReviewsClick: () => void;
}

export default function FeatureSection({
  onBookClick,
  onReviewsClick,
}: FeatureSectionProps) {
  const slides = [
    {
      src: "/images/wifi-mockup.jpg",
      title: "Fast 4G/LTE",
      highlight: "coverage everywhere",
      desc: "Beaches, mountains, cafes and more.",
    },
    {
      src: "/images/ubud-rice-fields.jpg",
      title: "Seamless connection",
      highlight: "in Ubud rice fields",
      desc: "Stay online while exploring lush green terraces.",
    },
    {
      src: "/images/canggu-beach.jpg",
      title: "Ultra-fast speeds",
      highlight: "at Canggu beaches",
      desc: "Share your surf moments instantly from the coast.",
    },
    {
      src: "/images/kintamani-mountain.jpg",
      title: "All-day battery",
      highlight: "for Kintamani treks",
      desc: "Reliable signal for volcano hikes and viewpoints.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
        
        {/* Left Column: Heading & Narrative (5 cols on lg) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div>
            {/* Small Kicker Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                RELIABLE CONNECTION
              </span>
            </div>

            {/* Headline with muted "losing touch" */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-950 leading-[1.15] tracking-tight">
              Travel across <br className="hidden sm:inline" />
              the Island <br className="hidden sm:inline" />
              of the Gods <br className="hidden sm:inline" />
              without{" "}
              <span className="text-neutral-400 font-normal">
                losing touch
              </span>
            </h2>

            {/* Feature Checkmarks */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#84CC16]" />
                </div>
                <span className="text-sm font-semibold text-neutral-800">
                  Unlimited Data
                </span>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#84CC16]" />
                </div>
                <span className="text-sm font-semibold text-neutral-800">
                  Connect up to 5 Devices
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#84CC16]" />
                </div>
                <span className="text-sm font-semibold text-neutral-800">
                  Long Battery Life (15+ Hours)
                </span>
              </div>
            </div>

            {/* Paragraph narrative */}
            <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our pocket WiFi provides seamless coverage from Canggu to Ubud.
              Keep your maps updating, your socials buzzing, and your emails
              syncing without the hassle of changing SIM cards or relying on
              spotty cafe networks.
            </p>
          </div>

          {/* Book Your WiFi Button / CTA */}
          <div className="pt-4">
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 hover:text-emerald-600 group transition-all"
            >
              <span>Book Your WiFi</span>
              <span className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#A3E635] group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4 text-neutral-900" />
              </span>
            </button>
          </div>
        </div>

        {/* Center Column: Phone Mockup Vertical Card with Interactive Slider (4 cols on lg) */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <div className="relative w-full h-[460px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
            
            {/* Slides container */}
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-7 pb-12 sm:pb-14">
                    <div className={`space-y-1.5 transform transition-all duration-700 delay-100 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                      <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                        {slide.title} <br />
                        <span className="text-[#A3E635]">{slide.highlight}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pagination Indicators - Always on top */}
            <div className="absolute bottom-6 sm:bottom-7 left-6 sm:left-7 z-20 flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Right Column: Spec Summary Table + Sarah Testimonial (4 cols on lg) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          {/* Spec Table */}
          <div className="divide-y divide-neutral-200/80 bg-transparent px-1">
            <div className="flex items-center justify-between py-4">
              <span className="text-sm font-medium text-neutral-400">
                Pickup
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-950">
                Bali Airport or Hotel
              </span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-sm font-medium text-neutral-400">
                Price
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-950">
                Starting from $3/day
              </span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-sm font-medium text-neutral-400">
                Devices
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-950">
                Latest 4G Pocket WiFi
              </span>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="rounded-[28px] border border-neutral-200/70 p-6 sm:p-8 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              {/* Avatar Only (No Stars or Verified badges) */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden mb-6 border border-neutral-100">
                <Image
                  src="/images/sarah-avatar.jpg"
                  alt="Sarah J. Digital Nomad in Bali"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                "Absolute lifesaver! Picked it up at the airport and had fast internet throughout my entire 3-week trip. Saved me so much hassle trying to find cafes with decent WiFi for remote work."
              </p>
              <div className="mt-3 text-xs sm:text-sm text-neutral-400">
                — Sarah J., Digital Nomad
              </div>
            </div>

            {/* Read More Reviews link */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center">
              <button
                onClick={onReviewsClick}
                className="group w-full flex items-center justify-between text-sm sm:text-base font-bold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer"
              >
                <span>Read More Reviews</span>
                <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#A3E635] transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-neutral-900" />
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
