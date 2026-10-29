"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqsId: FaqItem[] = [
  {
    question: "Bagaimana cara sewa wifi pocket di Bali dan ambil di Bandara Ngurah Rai (DPS)?",
    answer:
      "Pemesanan dilakukan online terlebih dahulu. Saat Anda mendarat di Bandara Internasional atau Domestik Ngurah Rai Bali (DPS), staf concierge kami akan menunggu langsung di gate kedatangan sambil membawa papan nama dengan nama Anda setelah keluar dari pemeriksaan bea cukai. Untuk pengembalian, Anda cukup menyerahkan kembali ke staf kami di terminal keberangkatan sebelum check-in, atau menitipkannya di resepsionis hotel/villa Anda.",
  },
  {
    question: "Berapa harga sewa wifi bali per hari?",
    answer:
      "Tarif sewa WiFi Pocket Bali mulai dari Rp 60.000/hari untuk paket Flex harian, Rp 235.000 untuk 3 hari (Starter), Rp 455.000 untuk 7 hari (Explorer - Terlaris & Bonus Powerbank), dan Rp 1.600.000 untuk 30 hari (Nomad). Semua paket sudah termasuk kuota 4G/LTE unlimited tanpa batas kecepatan dan kabel charger.",
  },
  {
    question: "Apakah kuota sewa pocket wifi bali benar-benar unlimited tanpa FUP?",
    answer:
      "Ya, kami menyediakan koneksi internet 4G/LTE unlimited tanpa batas kuota harian (tanpa penurunan kecepatan/throttling) dengan dukungan jaringan multi-carrier Telkomsel & XL Axiata terluas di Bali. Sangat lancar untuk Google Maps, media sosial, streaming HD, hingga Zoom meeting.",
  },
  {
    question: "Berapa banyak perangkat yang bisa terhubung ke 1 modem pocket wifi?",
    answer:
      "Satu perangkat modem pocket WiFi Bali dapat terhubung hingga 5 sampai 8 perangkat sekaligus (iPhone, Android smartphone, iPad/tablet, MacBook, maupun laptop Windows) secara bersamaan dengan enkripsi WPA3 yang aman.",
  },
  {
    question: "Apakah bisa diantar langsung ke villa atau hotel di Canggu, Seminyak, atau Ubud?",
    answer:
      "Tentu saja! Kami melayani pengantaran kurir langsung di hari yang sama ke hotel, villa, resort, maupun Airbnb di seluruh area Canggu, Seminyak, Kuta, Legian, Sanur, Ubud, Nusa Dua, Jimbaran, dan Uluwatu.",
  },
  {
    question: "Kenapa lebih menguntungkan sewa wifi pocket bali dibanding beli SIM card lokal?",
    answer:
      "Sewa WiFi pocket Bali jauh lebih hemat dan praktis karena: (1) Bebas antre registrasi IMEI dan pajak bea cukai di bandara, (2) Satu modem bisa dipakai bareng untuk seluruh rombongan keluarga atau teman, (3) Baterai smartphone Anda tidak cepat panas dan boros seperti saat menggunakan personal hotspot, (4) Sinyal kuat multi-operator.",
  },
];

const faqsEn: FaqItem[] = [
  {
    question: "How does pickup and return at Bali Airport (DPS) work?",
    answer:
      "Our concierge team waits for you in the arrivals hall (international or domestic) directly after customs clearance holding a signboard with your name. For departure return, simply hand the device back to our airport staff at the departure terminal before check-in or leave it at your hotel reception.",
  },
  {
    question: "How much does pocket WiFi rental in Bali cost?",
    answer:
      "Rates start from Rp 60,000/day ($3.9/day) on the Flex plan, Rp 235,000 ($15) for 3 days, Rp 455,000 ($29) for 7 days (Explorer - Most Popular), up to Rp 1,600,000 ($99) for 30 days (Nomad), all including unlimited 4G/LTE data.",
  },
  {
    question: "Can I connect multiple smartphones and laptops simultaneously?",
    answer:
      "Yes! Each pocket WiFi device supports up to 5 to 8 simultaneous devices (smartphones, tablets, MacBooks, Windows laptops) with secure WPA3 encryption and zero slowdown.",
  },
  {
    question: "Is data truly unlimited across Bali?",
    answer:
      "Yes, we provide high-speed 4G/LTE unlimited data with zero speed throttling across Canggu, Seminyak, Ubud, Uluwatu, Kuta, Sanur, Nusa Penida, and all popular regions.",
  },
  {
    question: "Do you offer hotel or villa delivery in Bali?",
    answer:
      "Absolutely. We provide direct same-day delivery to your hotel, villa, or Airbnb anywhere across Canggu, Seminyak, Ubud, Kuta, Jimbaran, Sanur, and Uluwatu.",
  },
  {
    question: "Why rent a pocket WiFi instead of buying local SIM cards?",
    answer:
      "Renting a pocket WiFi skips the lengthy airport IMEI registration line and customs paperwork, connects your whole group (up to 8 devices) on one bill, and prevents your smartphone battery from draining rapidly via hotspot tethering.",
  },
];

export default function FaqSection() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = lang === "id" ? faqsId : faqsEn;

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
          FAQ — SEWA WIFI POCKET BALI &amp; WIFI RENTAL BALI
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
          {lang === "id" ? "Pertanyaan Seputar Sewa WiFi Bali" : "Sewa WiFi Bali Pocket FAQ"}
        </h2>
        <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto">
          {lang === "id"
            ? "Informasi lengkap mengenai cara sewa, harga, titik ambil di Bandara Ngurah Rai, dan jangkauan sinyal Bali Pocket WiFi."
            : "Everything you need to know about Bali Pocket WiFi pickup, pricing, and 4G coverage."}
        </p>

        {/* Language Switcher Pill */}
        <div className="mt-6 inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200 shadow-inner">
          <button
            type="button"
            onClick={() => {
              setLang("id");
              setOpenIdx(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              lang === "id"
                ? "bg-white text-neutral-950 shadow-sm"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            🇮🇩 Bahasa Indonesia
          </button>
          <button
            type="button"
            onClick={() => {
              setLang("en");
              setOpenIdx(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              lang === "en"
                ? "bg-white text-neutral-950 shadow-sm"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            🇬🇧 English
          </button>
        </div>
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
