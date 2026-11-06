"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Banknote,
  Maximize2,
  X,
  FileText,
} from "lucide-react";

interface AirportMeetingSectionProps {
  onOpenTerms?: () => void;
  onOpenBooking?: () => void;
}

export default function AirportMeetingSection({
  onOpenTerms,
  onOpenBooking,
}: AirportMeetingSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [pickupLang, setPickupLang] = useState<"en" | "cn">("en");

  return (
    <section
      id="meeting-point"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFCCB] text-neutral-900 text-xs font-bold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#65A30D]" />
          <span>Titik Temu &amp; Pengembalian Bandara</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight leading-tight">
          Ngurah Rai Airport (DPS) <br className="hidden sm:inline" />
          Meeting &amp; Return Points
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
          Pengambilan WiFi super mudah saat tiba di Bali, dan pengembalian instan
          dengan <strong>pengembalian deposit 100% tunai saat departure</strong>.
        </p>
      </div>

      {/* Important Deposit Alert Ribbon */}
      <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-lime-50 border border-amber-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
            <Banknote className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-900 text-sm sm:text-base">
                Deposit Jaminan / Security Deposit: USD 50 atau IDR 500.000
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-200/70 text-amber-900 text-[10px] font-extrabold uppercase tracking-wide">
                Cash Only
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Uang deposit diserahkan secara <strong>Cash (Tunai)</strong> saat pengambilan unit, dan akan{" "}
              <strong>dikembalikan utuh (100% cash refund)</strong> saat departure setelah semua kelengkapan diperiksa.
            </p>
          </div>
        </div>

        {onOpenTerms && (
          <button
            onClick={onOpenTerms}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold shrink-0 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>Baca T&amp;C Lengkap</span>
          </button>
        )}
      </div>

      {/* 2-Column Grid: Pickup (Circle K) vs Return (FRESH) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Card 1: Pickup Point - Circle K */}
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-lg overflow-hidden flex flex-col hover:border-neutral-300 transition-all">
          {/* Card Top Banner */}
          <div className="p-6 pb-4 bg-gradient-to-br from-red-500/5 via-neutral-50 to-white border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                K
              </span>
              <div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                  1. TITIK PENGAMBILAN (PICKUP)
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-950">
                  Circle K (Arrival Area)
                </h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-bold">
              Area Kedatangan
            </span>
          </div>

          {/* Photo Preview with Zoom Trigger */}
          <div className="relative aspect-[16/10] w-full bg-neutral-900 group overflow-hidden">
            <Image
              src={
                pickupLang === "cn"
                  ? "/images/meeting-point-circlek-cn.jpg"
                  : "/images/meeting-point-circlek.jpg"
              }
              alt="Circle K Meeting Point at Bali Ngurah Rai Airport"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Language Toggle & Zoom Icon */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <div className="bg-black/60 backdrop-blur-md rounded-full p-1 flex items-center text-[10px] font-semibold text-white">
                <button
                  onClick={() => setPickupLang("en")}
                  className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                    pickupLang === "en" ? "bg-white text-neutral-900 font-bold" : "text-neutral-300"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setPickupLang("cn")}
                  className={`px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ${
                    pickupLang === "cn" ? "bg-white text-neutral-900 font-bold" : "text-neutral-300"
                  }`}
                >
                  中文
                </button>
              </div>

              <button
                onClick={() =>
                  setSelectedPhoto(
                    pickupLang === "cn"
                      ? "/images/meeting-point-circlek-cn.jpg"
                      : "/images/meeting-point-circlek.jpg"
                  )
                }
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
                title="Lihat Foto Layar Penuh"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                📍 Ngurah Rai Airport • Arrival Area
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Klarifikasi Bagasi &amp; Kabari Staf
                  </strong>
                  Setelah mengambil bagasi dan melewati pos bea cukai (customs), silakan hubungi tim kami via WhatsApp bahwa Anda sedang berjalan keluar.
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Jalan Sekitar 50 Meter ke Luar
                  </strong>
                  Karena area luar pintu keluar sangat ramai penjemput &amp; driver yang memegang papan nama, harap berjalan sekitar <strong>50 meter lebih jauh ke luar</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Temui Staf Kami di Circle K
                  </strong>
                  Anda akan melihat minimarket <strong>Circle K</strong> dengan logo merah jelas. Ini adalah titik temu resmi kami agar proses serah terima dan tes koneksi WiFi berlangsung nyaman &amp; cepat.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Deposit USD 50 / IDR 500k (Cash)
              </span>
              <span className="font-semibold text-neutral-900">Serah Terima &amp; Tes Unit</span>
            </div>
          </div>
        </div>

        {/* Card 2: Return Point - FRESH Juice & Healthy Foods */}
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-lg overflow-hidden flex flex-col hover:border-neutral-300 transition-all">
          {/* Card Top Banner */}
          <div className="p-6 pb-4 bg-gradient-to-br from-lime-500/5 via-neutral-50 to-white border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#84CC16] text-neutral-950 font-extrabold text-sm flex items-center justify-center shadow-xs">
                F
              </span>
              <div>
                <span className="text-[11px] font-bold text-[#65A30D] uppercase tracking-wider block">
                  2. TITIK PENGEMBALIAN (RETURN)
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-950">
                  FRESH Juice &amp; Healthy Foods
                </h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-lime-100 text-lime-900 text-[11px] font-bold">
              Area Keberangkatan (Departure)
            </span>
          </div>

          {/* Photo Preview with Zoom Trigger */}
          <div className="relative aspect-[16/10] w-full bg-neutral-900 group overflow-hidden">
            <Image
              src="/images/return-point-fresh.jpg"
              alt="FRESH Juice & Healthy Foods Pocket WiFi Return at Bali Ngurah Rai Airport"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-3 right-3">
              <button
                onClick={() => setSelectedPhoto("/images/return-point-fresh.jpg")}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer"
                title="Lihat Foto Layar Penuh"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                📍 Sebelum Pintu Masuk Departure Gate
              </span>
            </div>
          </div>

          {/* Steps */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-lime-100 text-[#4D7C0F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Update Jam Tiba di Bandara
                  </strong>
                  Harap mengabari kami perkiraan jam tiba Anda di terminal keberangkatan Bandara Ngurah Rai melalui WhatsApp.
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-lime-100 text-[#4D7C0F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Staf Menunggu di Area FRESH
                  </strong>
                  Staf kami akan bersiap menunggu di depan stand <strong>FRESH Juice &amp; Healthy Foods</strong>, tepatnya <strong>sebelum Anda masuk ke departure gate</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-lime-100 text-[#4D7C0F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs sm:text-sm text-neutral-700">
                  <strong className="text-neutral-950 font-semibold block">
                    Deposit 100% Dikembalikan Tunai (Cash)
                  </strong>
                  Uang jaminan <strong>USD 50 atau IDR 500.000</strong> langsung kami kembalikan utuh di tempat saat kelengkapan unit dikembalikan lengkap:
                  <div className="mt-2 grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" /> Router Modem
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" /> Kabel Charger
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" /> Kepala Adaptor
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65A30D]" /> Tas Pouch WiFi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Deposit Tunai Langsung Kembali
              </span>
              <span className="font-semibold text-neutral-900">Pengembalian Cepat ~2 Menit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Zooming Airport Guide Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 sm:p-4 bg-neutral-900 flex items-center justify-between text-white border-b border-neutral-800">
              <span className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A3E635]" />
                Foto Panduan Titik Temu Bandara Ngurah Rai (DPS)
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
              <Image
                src={selectedPhoto}
                alt="Enlarged meeting point guide"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

