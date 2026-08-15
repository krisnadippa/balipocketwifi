"use client";

import { X, MapPin, Signal, CheckCircle2, Shield, Wifi } from "lucide-react";

interface CoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const regions = [
  {
    name: "Seminyak & Canggu",
    type: "Popular Hotspot & Beach Clubs",
    speed: "Up to 150 Mbps (4G/LTE+)",
    signal: "5/5 Full Signal",
    reliability: "100%",
  },
  {
    name: "Ubud & Tegallalang",
    type: "Cultural Hub, Rice Terraces & Cafes",
    speed: "Up to 120 Mbps (4G/LTE)",
    signal: "5/5 Full Signal",
    reliability: "99%",
  },
  {
    name: "Uluwatu & Jimbaran",
    type: "Cliffs, Surf Spots & Resorts",
    speed: "Up to 100 Mbps (4G/LTE)",
    signal: "5/5 Full Signal",
    reliability: "98%",
  },
  {
    name: "Nusa Penida & Lembongan",
    type: "Island Day Trips & Snorkeling",
    speed: "Up to 80 Mbps (4G/LTE)",
    signal: "4/5 Strong Signal",
    reliability: "95%",
  },
  {
    name: "Sanur & Nusa Dua",
    type: "Resorts, Harbor & Family Beaches",
    speed: "Up to 140 Mbps (4G/LTE)",
    signal: "5/5 Full Signal",
    reliability: "100%",
  },
  {
    name: "Kintamani & Mount Batur",
    type: "Sunrise Trekking & Lakeside Cafes",
    speed: "Up to 85 Mbps (4G/LTE)",
    signal: "4/5 Strong Signal",
    reliability: "94%",
  },
  {
    name: "Amed & Lovina (North/East)",
    type: "Diving & Dolphin Watching",
    speed: "Up to 75 Mbps (4G/LTE)",
    signal: "4/5 Good Signal",
    reliability: "92%",
  },
];

export default function CoverageModal({ isOpen, onClose }: CoverageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635]"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              Telkomsel & XL Axiata 4G/LTE Multi-Carrier
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950">
            Bali Island-Wide Coverage Map
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Our pocket WiFi devices auto-switch between Indonesia&apos;s tier-1
            networks to guarantee 99.4% connectivity wherever you roam.
          </p>
        </div>

        {/* Region List */}
        <div className="space-y-3">
          {regions.map((reg, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-neutral-200/80 bg-neutral-50/70 hover:bg-white hover:border-neutral-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-sm font-bold text-neutral-900">
                    {reg.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 mt-0.5 ml-6">
                  {reg.type}
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pl-6 sm:pl-0 text-xs">
                <div className="flex items-center gap-1.5 text-neutral-700">
                  <Wifi className="w-3.5 h-3.5 text-[#84CC16]" />
                  <span className="font-medium">{reg.speed}</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[10px]">
                  {reg.reliability}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Airport note */}
        <div className="mt-6 p-4 rounded-2xl bg-neutral-950 text-white flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#A3E635] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-white block">
              Direct Airport Terminal Pickup (DPS)
            </span>
            <span className="text-neutral-400">
              Meet our airport team right after the customs exit hall at Ngurah
              Rai International Airport. We test your WiFi device together before
              you leave.
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#A3E635] hover:bg-[#8CD321] text-neutral-950 font-bold text-sm transition-all cursor-pointer"
          >
            Close & View Plans
          </button>
        </div>
      </div>
    </div>
  );
}
