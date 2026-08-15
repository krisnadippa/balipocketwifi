"use client";

import { useState, useEffect } from "react";
import { X, Check, MapPin } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
  selectedPlanPrice?: string;
}

const getTodayDateString = (offsetDays = 0) => {
  const today = new Date();
  if (offsetDays > 0) {
    today.setDate(today.getDate() + offsetDays);
  }
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const planPricing: Record<string, { basePrice: number; baseDays: number; extraDayRate: number }> = {
  Starter: { basePrice: 235000, baseDays: 3, extraDayRate: 60000 },
  Explorer: { basePrice: 455000, baseDays: 7, extraDayRate: 50000 },
  Nomad: { basePrice: 1600000, baseDays: 30, extraDayRate: 45000 },
  Flex: { basePrice: 60000, baseDays: 1, extraDayRate: 60000 },
};

const getDefaultEndDate = (planName: string, startStr: string) => {
  const pricing = planPricing[planName] || planPricing["Flex"];
  const start = new Date(startStr);
  start.setDate(start.getDate() + pricing.baseDays);
  const yyyy = start.getFullYear();
  const mm = String(start.getMonth() + 1).padStart(2, '0');
  const dd = String(start.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getRentalDays = (start: string, end: string) => {
  const sDate = new Date(start);
  const eDate = new Date(end);
  const diffTime = eDate.getTime() - sDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
};

const calculateTotalPrice = (planName: string, days: number) => {
  const pricing = planPricing[planName] || planPricing["Flex"];
  if (days <= pricing.baseDays) {
    return pricing.basePrice;
  }
  const extraDays = days - pricing.baseDays;
  return pricing.basePrice + (extraDays * pricing.extraDayRate);
};

export default function BookingModal({
  isOpen,
  onClose,
  selectedPlanName = "Explorer",
  selectedPlanPrice = "Rp455k",
}: BookingModalProps) {
  const [plan, setPlan] = useState(selectedPlanName);
  const [pickupLocation, setPickupLocation] = useState("airport");
  const [hotelAddress, setHotelAddress] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [startDate, setStartDate] = useState(() => getTodayDateString(0));
  const [endDate, setEndDate] = useState(() => getDefaultEndDate(selectedPlanName, getTodayDateString(0)));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync plan and dates when modal opens or prop changes
  useEffect(() => {
    if (isOpen) {
      setPlan(selectedPlanName);
      const todayStr = getTodayDateString(0);
      setStartDate(todayStr);
      setEndDate(getDefaultEndDate(selectedPlanName, todayStr));
      setIsSuccess(false);
    }
  }, [selectedPlanName, isOpen]);

  if (!isOpen) return null;

  const days = getRentalDays(startDate, endDate);
  const totalPrice = calculateTotalPrice(plan, days);
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const handlePlanChange = (newPlan: string) => {
    setPlan(newPlan);
    setEndDate(getDefaultEndDate(newPlan, startDate));
  };

  const handleStartDateChange = (newStart: string) => {
    setStartDate(newStart);
    // Maintain the same duration when start date shifts
    const currentDuration = getRentalDays(startDate, endDate);
    const start = new Date(newStart);
    start.setDate(start.getDate() + currentDuration);
    const yyyy = start.getFullYear();
    const mm = String(start.getMonth() + 1).padStart(2, '0');
    const dd = String(start.getDate()).padStart(2, '0');
    setEndDate(`${yyyy}-${mm}-${dd}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const adminPhone = "6282342431717";
    const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    const text = `Hi Bali Pocket WiFi! 🌴 I would like to reserve a pocket WiFi:

📋 *Booking Details:*
• *Plan:* ${plan}
• *Rental Period:* ${formattedStartDate} to ${formattedEndDate} (${days} Days)
• *Total Cost:* Rp ${totalPrice.toLocaleString("id-ID")}
• *Pickup Method:* ${pickupLocation === "airport" ? "Bali Airport (DPS)" : "Hotel Delivery"}
${pickupLocation === "airport" 
  ? `• *Flight Number:* ${flightNumber || "-"}` 
  : `• *Hotel Address:* ${hotelAddress}`
}

👤 *Contact Info:*
• *Name:* ${name}
• *Email:* ${email}
• *WhatsApp:* ${whatsapp}

Please confirm my booking. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-neutral-950">
              Booking Reserved!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto px-2">
              We have redirected you to WhatsApp to confirm your reservation. Please send the message to our admin to finalize.
            </p>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left text-xs space-y-1.5 mt-4">
              <div className="flex justify-between gap-4">
                <span className="text-neutral-500">Pickup Location:</span>
                <span className="font-semibold text-neutral-900 text-right capitalize">
                  {pickupLocation === "airport"
                    ? "Ngurah Rai Airport (DPS) Terminal"
                    : `Hotel: ${hotelAddress || "Bali Resort"}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Rental Period:</span>
                <span className="font-semibold text-neutral-900">
                  {startDate} to {endDate} ({days} days)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Total Price:</span>
                <span className="font-bold text-neutral-950">
                  {formattedPrice}
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
            <div className="mb-5 pr-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ECFCCB] text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                Instant Reservation
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-neutral-950 leading-tight">
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
                <label className="block text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  SELECTED PLAN
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Starter", "Explorer", "Nomad", "Flex"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePlanChange(p)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    START DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    min={getTodayDateString(0)}
                    onChange={(e) => handleStartDateChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:border-neutral-950 outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    RETURN DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:border-neutral-950 outline-none bg-white"
                  />
                </div>
              </div>

              {/* Pickup Location Toggle */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  PICKUP METHOD
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPickupLocation("airport")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      pickupLocation === "airport"
                        ? "bg-[#A3E635] text-neutral-950 border-[#8CD321] font-bold shadow-xs"
                        : "bg-neutral-50 text-neutral-600 border-neutral-200"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
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
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Hotel Delivery</span>
                  </button>
                </div>

                {pickupLocation === "airport" ? (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Arrival Flight No. (e.g. GA402 / QZ504) - Optional"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950 bg-white"
                    />
                  </div>
                ) : (
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      placeholder="Hotel / Villa Name & Area (e.g. Canggu, Ubud, Seminyak)"
                      value={hotelAddress}
                      onChange={(e) => setHotelAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950 bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Guest Details */}
              <div className="space-y-2 pt-1">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name (as per Passport)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950 bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950 bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-xs outline-none focus:border-neutral-950 bg-white"
                  />
                </div>
              </div>

              {/* Pricing breakdown estimation */}
              <div className="p-4 bg-[#F7FEE7] rounded-2xl border border-[#D9F99D] space-y-1.5">
                <div className="flex justify-between items-center text-xs text-neutral-600">
                  <span>Rental Duration:</span>
                  <span className="font-semibold text-neutral-950">{days} {days === 1 ? "Day" : "Days"}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-neutral-600">
                  <span>Plan:</span>
                  <span className="font-semibold text-neutral-950">
                    {plan} ({plan === "Flex" ? "Rp 60k/day" : `${planPricing[plan]?.baseDays} Days base rate`})
                  </span>
                </div>
                <div className="h-px bg-neutral-200/50 my-1" />
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-neutral-800">Total Price:</span>
                  <span className="text-sm font-black text-neutral-950">{formattedPrice}</span>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#A3E635] hover:bg-[#8CD321] text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
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
