"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does pickup and return at Bali Airport (DPS) work?",
    answer:
      "Our concierge team waits for you in the international arrivals hall directly after customs clearance holding a signboard with your name. For departure return, you can simply hand the device back to our airport staff at the departure terminal before check-in or leave it at your hotel reception.",
  },
  {
    question: "Can I connect multiple smartphones and laptops at the same time?",
    answer:
      "Yes! Each pocket WiFi device supports up to 5 simultaneous devices (smartphones, tablets, MacBooks, Windows laptops, and e-readers) with secure WPA3 encryption and zero slowdown.",
  },
  {
    question: "How long does the battery last on a single charge?",
    answer:
      "The latest generation battery provides 12 to 15 hours of continuous active use. The Explorer, Nomad, and Starter plans include a USB Type-C fast charger cable, and our Explorer plan includes a free backup Powerbank.",
  },
  {
    question: "Is data truly unlimited across Bali?",
    answer:
      "Yes, we provide unlimited high-speed 4G/LTE data with no hidden throttling under standard fair use. Stream HD videos, navigate with Google Maps, join Zoom meetings, and post to Instagram & TikTok seamlessly.",
  },
  {
    question: "Do you offer hotel delivery if I don't want airport pickup?",
    answer:
      "Absolutely. We provide same-day courier delivery directly to your hotel, villa, or Airbnb anywhere in Canggu, Seminyak, Kuta, Legian, Sanur, Ubud, Nusa Dua, or Uluwatu.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
          Got Questions? We&apos;re Here.
        </h2>
        <p className="mt-3 text-sm text-neutral-600">
          Everything you need to know about renting a portable WiFi in Bali.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-neutral-50/80 border-neutral-300 shadow-xs"
                  : "bg-white border-neutral-200/80 hover:border-neutral-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-sans font-bold text-sm sm:text-base text-neutral-950">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#A3E635] text-neutral-950"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
