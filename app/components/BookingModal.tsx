"use client";

import { useState } from "react";
import { X, Check, Calendar, MapPin, Smartphone, Shield, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
  selectedPlanPrice?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPlanName = "Explorer",
  selectedPlanPrice = "Rp455k",
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(selectedPlanName);
  const [pickupLocation, setPickupLocation] = useState("airport");
  const [hotelAddress, setHotelAddress] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [startDate, setStartDate] = useState("2026-08-20");
  const [endDate, setEndDate] = useState("2026-08-27");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-neutral-950">
              Booking Reserved!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              We have received your reservation for the <strong>{plan}</strong>{" "}
              plan. A confirmation voucher & airport pickup instructions have been
              sent to <strong>{email || "your email"}</strong> and WhatsApp.
            </p>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left text-xs space-y-1.5 mt-4">
              <div className="flex justify-between">
                <span className="text-neutral-500">Pickup Location:</span>
                <span className="font-semibold text-neutral-900 capitalize">
                  {pickupLocation === "airport"
                    ? "Ngurah Rai Airport (DPS) Terminal"
                    : `Hotel: ${hotelAddress || "Bali Resort"}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Rental Period:</span>
                <span className="font-semibold text-neutral-900">
                  {startDate} to {endDate}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Support Hotline:</span>
                <span className="font-semibold text-neutral-900">
                  +62 823-4243-1717
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-full bg-neutral-950 text-white text-sm font-bold hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ECFCCB] text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                Instant Reservation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950">
                Rent Bali Pocket WiFi
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Zero deposit required with valid passport. Free airport terminal
                handover.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Plan Picker */}
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  SELECTED PLAN
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Starter", "Explorer", "Nomad", "Flex"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlan(p)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        plan === p
                          ? "bg-[#0B0F17] text-white border-neutral-900 shadow-xs"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    START DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:border-neutral-950 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    RETURN DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:border-neutral-950 outline-none"
                  />
                </div>
              </div>

              {/* Pickup Location Toggle */}
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  PICKUP METHOD
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPickupLocation("airport")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      pickupLocation === "airport"
                        ? "bg-[#A3E635] text-neutral-950 border-[#8CD321] font-bold shadow-xs"
                        : "bg-neutral-50 text-neutral-600 border-neutral-200"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Bali Airport (DPS)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickupLocation("hotel")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      pickupLocation === "hotel"
                        ? "bg-[#A3E635] text-neutral-950 border-[#8CD321] font-bold shadow-xs"
                        : "bg-neutral-50 text-neutral-600 border-neutral-200"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hotel Delivery</span>
                  </button>
                </div>

                {pickupLocation === "airport" ? (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      placeholder="Arrival Flight No. (e.g. GA402 / QZ504) - Optional"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950"
                    />
                  </div>
                ) : (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Hotel / Villa Name & Area (e.g. Canggu, Seminyak, Ubud)"
                      value={hotelAddress}
                      onChange={(e) => setHotelAddress(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950"
                    />
                  </div>
                )}
              </div>

              {/* Guest Details */}
              <div className="space-y-2.5 pt-1">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name (as per Passport)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm outline-none focus:border-neutral-950"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm outline-none focus:border-neutral-950"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number (with country code)"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm outline-none focus:border-neutral-950"
                  />
                </div>
              </div>

              {/* Summary note */}
              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Pay upon device receipt:</span>
                <span className="font-bold text-neutral-950">Cash, Card, QRIS, or PayPal</span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#A3E635] hover:bg-[#8CD321] text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  Confirm & Reserve Pocket WiFi
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
