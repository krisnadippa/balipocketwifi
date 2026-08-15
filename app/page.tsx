"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import CoverageModal from "./components/CoverageModal";
import ReviewsModal from "./components/ReviewsModal";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlanInfo, setSelectedPlanInfo] = useState({
    name: "Explorer",
    price: "Rp455k",
  });
  const [isCoverageOpen, setIsCoverageOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  // Preloader State Hooks
  const [isLoading, setIsLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [heroActive, setHeroActive] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Buttery-smooth scroll initialization (Lenis)
  useEffect(() => {
    // Disable browser default scroll restoration
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo-like curve
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true }); // Reset scroll to top instantly

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // 1. Fade in text shortly after loading starts
    const timer1 = setTimeout(() => {
      setTextVisible(true);
    }, 150);

    // 2. Fade out text
    const timer2 = setTimeout(() => {
      setTextVisible(false);
    }, 1300);

    // 3. Slide up white curtain and trigger hero card zoom-in
    const timer3 = setTimeout(() => {
      setCurtainActive(true);
      setHeroActive(true);
    }, 1750);

    // 4. Remove loader element from DOM
    const timer4 = setTimeout(() => {
      setIsLoading(false);
    }, 2750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    if (isLoading) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Button Anim only (texts are static/revealed by curtain)
    gsap.fromTo(
      "#hero button",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
      }
    );

    // 2. Feature Section ScrollTrigger
    // Left Column
    gsap.fromTo(
      "#features > div > div:nth-child(1)",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Middle Column (Carousel)
    gsap.fromTo(
      "#features > div > div:nth-child(2)",
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Right Column
    gsap.fromTo(
      "#features > div > div:nth-child(3)",
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // 3. Pricing Section ScrollTrigger
    // Header
    gsap.fromTo(
      "#plans > div:nth-child(1)",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#plans",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Pricing Cards
    gsap.fromTo(
      "#plans > div:nth-child(2) > div",
      { opacity: 0, y: 50, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#plans > div:nth-child(2)",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // 4. FAQ Section ScrollTrigger
    // Header
    gsap.fromTo(
      "#faq > div:nth-child(1)",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#faq",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Accordion Items
    gsap.fromTo(
      "#faq > div:nth-child(2) > div",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#faq > div:nth-child(2)",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // 5. Contact Section ScrollTrigger
    // Header
    gsap.fromTo(
      "#contact > div:nth-child(1)",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Columns
    gsap.fromTo(
      "#contact > div:nth-child(2) > div",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contact > div:nth-child(2)",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  // Global Smooth Scroll Hook for perfect offsets using Lenis
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href) as HTMLElement | null;
        if (targetElement) {
          e.preventDefault();
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetElement, {
              offset: -84,
              duration: 1.2,
            });
          } else {
            // Fallback if lenis is not active yet
            const navbarHeight = 84;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  const handleOpenBooking = (planName = "Explorer", price = "Rp455k") => {
    setSelectedPlanInfo({ name: planName, price });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#A3E635] selection:text-black">
      {/* Opening curtain preloader */}
      {isLoading && (
        <>
          {/* Brand Logo - Glides up and scales to merge into the navbar logo */}
          <div
            className={`fixed z-[110] pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              curtainActive
                ? "top-4 left-4 sm:left-6 md:left-1/2 -translate-y-0 translate-x-0 md:-translate-x-1/2 h-10 w-24 sm:h-12 sm:w-28 opacity-100"
                : textVisible
                ? "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-20 w-44 sm:h-24 sm:w-52 opacity-100"
                : "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-20 w-44 sm:h-24 sm:w-52 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/balipocketlogo.png"
                alt="Bali Pocket WiFi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Single Curtain Panel (slides upwards) */}
          <div
            className={`fixed inset-0 bg-white z-[100] transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              curtainActive ? "-translate-y-full" : "translate-y-0"
            }`}
          />
        </>
      )}

      {/* Sticky Top Header / Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCoverage={() => setIsCoverageOpen(true)}
        isPageRevealed={heroActive}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section with Palm Canopy Background */}
        <HeroSection onRentClick={() => handleOpenBooking("Explorer", "Rp455k")} isActive={heroActive} />

        {/* 3-Column Benefit & Feature Section */}
        <FeatureSection
          onBookClick={() => handleOpenBooking("Explorer", "Rp455k")}
          onReviewsClick={() => setIsReviewsOpen(true)}
        />

        {/* 4-Card Pricing Plans Section with Explorer dark highlight */}
        <PricingSection
          onSelectPlan={(name, price) => handleOpenBooking(name, price)}
        />

        {/* Interactive FAQ Section */}
        <FaqSection />

        {/* 2-Column Contact Us Section */}
        <ContactSection />
      </main>

      {/* Luxury Dark Footer */}
      <Footer onOpenCoverage={() => setIsCoverageOpen(true)} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPlanName={selectedPlanInfo.name}
        selectedPlanPrice={selectedPlanInfo.price}
      />

      <CoverageModal
        isOpen={isCoverageOpen}
        onClose={() => setIsCoverageOpen(false)}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />
    </div>
  );
}
