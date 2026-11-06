"use client";

import { useState } from "react";
import {
  X,
  ShieldCheck,
  Banknote,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Wifi,
  FileText,
} from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const [lang, setLang] = useState<"id" | "en">("id");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ECFCCB] text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider">
                Official Policy
              </span>
              <div className="flex items-center rounded-full bg-neutral-100 p-0.5 text-[10px] font-semibold text-neutral-600">
                <button
                  onClick={() => setLang("id")}
                  className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                    lang === "id" ? "bg-white text-neutral-950 font-bold shadow-xs" : ""
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                    lang === "en" ? "bg-white text-neutral-950 font-bold shadow-xs" : ""
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950">
              {lang === "id"
                ? "Syarat & Ketentuan Sewa (T&C)"
                : "Terms & Conditions (T&C)"}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              {lang === "id"
                ? "Ketentuan deposit, titik temu bandara, dan kebijakan sewa Bali Pocket WiFi"
                : "Deposit policy, airport meeting points, and rental guidelines"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="overflow-y-auto flex-1 py-4 pr-1 space-y-5 text-xs sm:text-sm text-neutral-700">
          {/* 1. Deposit Policy */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm mb-1.5">
              <Banknote className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {lang === "id"
                  ? "1. Uang Deposit Jaminan (Security Deposit)"
                  : "1. Security Deposit"}
              </span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-extrabold uppercase">
                Cash Only
              </span>
            </div>
            {lang === "id" ? (
              <div className="space-y-1.5 text-neutral-700 text-xs sm:text-[13px] leading-relaxed">
                <p>
                  • Penyewa wajib menyerahkan uang jaminan deposit sebesar{" "}
                  <strong>USD 50</strong> atau <strong>IDR 500.000</strong> per unit modem.
                </p>
                <p>
                  • Pembayaran uang deposit <strong>WAJIB BERUPA CASH (TUNAI) ONLY</strong> saat penyerahan unit di titik temu / meeting point.
                </p>
                <p>
                  • <strong>Pengembalian Deposit:</strong> Uang deposit akan dikembalikan secara utuh 100% tunai saat kepulangan (departure) di bandara setelah perangkat dan aksesoris dikembalikan lengkap.
                </p>
              </div>
            ) : (
              <div className="space-y-1.5 text-neutral-700 text-xs sm:text-[13px] leading-relaxed">
                <p>
                  • A refundable security deposit of <strong>USD 50</strong> or <strong>IDR 500,000</strong> per device is required.
                </p>
                <p>
                  • Deposit payment is accepted in <strong>CASH ONLY</strong> upon device handover.
                </p>
                <p>
                  • <strong>Deposit Refund:</strong> 100% of the deposit will be refunded in cash upon your departure at the airport once all items are returned complete.
                </p>
              </div>
            )}
          </div>

          {/* 2. Meeting Points (Circle K & FRESH) */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm">
              <MapPin className="w-4 h-4 text-neutral-800 shrink-0" />
              <span>
                {lang === "id"
                  ? "2. Titik Temu Pengambilan & Pengembalian di Bandara"
                  : "2. Airport Meeting & Return Locations"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 font-bold text-red-600 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span>{lang === "id" ? "Titik Ambil (Pickup)" : "Pickup Point"}</span>
                </div>
                <p className="font-semibold text-neutral-900 text-xs">
                  Circle K (Arrival Area)
                </p>
                <p className="text-neutral-600 mt-1 leading-snug">
                  {lang === "id"
                    ? "Keluar dari area kedatangan (customs), lalu berjalan sekitar 50 meter lebih jauh ke luar melewati kerumunan penjemput. Temui staf kami tepat di depan Circle K."
                    : "After luggage & customs, walk approx. 50 meters further outside past the arrival driver crowd. Meet our staff at the Circle K store."}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 font-bold text-[#65A30D] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  <span>{lang === "id" ? "Titik Pengembalian (Return)" : "Return Point"}</span>
                </div>
                <p className="font-semibold text-neutral-900 text-xs">
                  FRESH Juice &amp; Healthy Foods (Departure)
                </p>
                <p className="text-neutral-600 mt-1 leading-snug">
                  {lang === "id"
                    ? "Berada di terminal keberangkatan, tepat sebelum Anda masuk ke pintu departure gate. Staf kami menunggu di area FRESH untuk serah terima & pengembalian deposit tunai."
                    : "Located in the departure terminal, right before entering the departure gate. Meet our staff at the FRESH counter to return the kit and receive your cash deposit."}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Package Return Completeness */}
          <div className="p-4 rounded-2xl bg-white border border-neutral-200">
            <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === "id"
                  ? "3. Kelengkapan Unit yang Wajib Dikembalikan"
                  : "3. Items Required for Full Deposit Return"}
              </span>
            </div>
            <p className="text-xs text-neutral-600 mb-2">
              {lang === "id"
                ? "Uang deposit USD 50 / IDR 500k dikembalikan 100% penuh apabila seluruh 4 item berikut dikembalikan dalam kondisi baik:"
                : "Your USD 50 / IDR 500k deposit will be refunded in full when all 4 items are returned in good condition:"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-neutral-50 text-center border border-neutral-100">
                <span className="block font-bold text-neutral-900">1. Router</span>
                <span className="text-[10px] text-neutral-500">Pocket WiFi Device</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 text-center border border-neutral-100">
                <span className="block font-bold text-neutral-900">2. Cable</span>
                <span className="text-[10px] text-neutral-500">USB Type-C Cable</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 text-center border border-neutral-100">
                <span className="block font-bold text-neutral-900">3. Adapter</span>
                <span className="text-[10px] text-neutral-500">Power Plug Charger</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-50 text-center border border-neutral-100">
                <span className="block font-bold text-neutral-900">4. Pouch</span>
                <span className="text-[10px] text-neutral-500">Protection Case</span>
              </div>
            </div>
          </div>

          {/* 4. Fair Usage & Care Policy */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-neutral-950 text-sm">
              <Wifi className="w-4 h-4 text-neutral-800 shrink-0" />
              <span>
                {lang === "id"
                  ? "4. Kuota Internet & Kebijakan Pemakaian"
                  : "4. Internet Data & Fair Usage"}
              </span>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              {lang === "id"
                ? "Semua paket sewa menyediakan akses kuota 4G/LTE Unlimited tanpa batas kuota harian untuk penggunaan normal liburan, kerja remote, streaming, dan navigasi. Harap menjaga modem terhindar dari air laut, benturan keras, atau panas ekstrem."
                : "All rental plans feature unlimited high-speed 4G/LTE multi-carrier data for seamless travel, remote work, HD streaming, and navigation. Please keep devices protected from water, sand, and extreme heat."}
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <span className="text-[11px] text-neutral-500">
            {lang === "id"
              ? "Pertanyaan lebih lanjut? Hubungi admin WhatsApp kami."
              : "Questions? Chat with our WhatsApp concierge."}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            {lang === "id" ? "Saya Mengerti" : "Got It"}
          </button>
        </div>
      </div>
    </div>
  );
}

