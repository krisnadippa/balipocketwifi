"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Wifi, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: (planName?: string) => void;
  onOpenCoverage?: () => void;
  isPageRevealed?: boolean;
}

export default function Navbar({ onOpenBooking, onOpenCoverage, isPageRevealed = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Plans", href: "#plans" },
    { label: "Coverage", href: "#coverage", onClick: onOpenCoverage },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { label: string; href: string; onClick?: () => void }
  ) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[800ms] ${
        isPageRevealed ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-neutral-100"
          : "bg-white/95 backdrop-blur-sm py-4 border-b border-neutral-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Navigation Menu Items with indicator dots */}
          <nav className={`hidden md:flex items-center gap-7 lg:gap-8 flex-1 transition-all duration-[1000ms] ease-out delay-300 ${
            isPageRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="group flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] mr-2 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Center: Brand Logo Image */}
          <div className="flex-1 flex justify-start md:justify-center">
            <Link
              href="#hero"
              className="flex items-center cursor-pointer group"
            >
              <div className={`relative h-10 w-24 sm:h-12 sm:w-28 transition-opacity duration-[800ms] ease-out group-hover:scale-[1.03] ${
                isPageRevealed ? "opacity-100" : "opacity-0"
              }`}>
                <Image
                  src="/images/balipocketlogo.png"
                  alt="Bali Pocket WiFi Logo"
                  fill
                  className="object-contain object-left md:object-center"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right: Pill CTA Button & Mobile Toggle */}
          <div className={`flex-1 flex items-center justify-end gap-3 transition-all duration-[1000ms] ease-out delay-300 ${
            isPageRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 active:scale-95 transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-neutral-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="flex items-center py-2 text-base font-medium text-neutral-800 hover:text-black border-b border-neutral-100"
              >
                <span className="w-2 h-2 rounded-full bg-[#A3E635] mr-3"></span>
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#A3E635] text-neutral-950 font-bold text-center text-sm shadow-sm hover:bg-[#93D725]"
              >
                Rent Pocket WiFi Now
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-neutral-950 text-white font-semibold text-center text-sm shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
