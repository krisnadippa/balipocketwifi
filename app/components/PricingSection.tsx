"use client";

import { useState } from "react";
import { Check, Zap, Sparkles } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

type Currency = "IDR" | "USD" | "AUD" | "EUR";

interface PlanItem {
  id: string;
  name: string;
  tag: string;
  duration: string;
  price: Record<Currency, string>;
  subtext: string;
  isRecommended?: boolean;
  features: string[];
  buttonText: string;
}

const plans: PlanItem[] = [
  {
    id: "starter",
    tag: "STARTER PLAN",
    name: "Starter",
    duration: "3 Days",
    price: {
      IDR: "Rp235k",
      USD: "$15",
      AUD: "$23",
      EUR: "€14",
    },
    subtext: "Perfect for short trips",
    features: ["Unlimited 4G Data", "5 Devices Support", "Airport Pickup"],
    buttonText: "Select Plan",
  },
  {
    id: "explorer",
    tag: "EXPLORER PLAN",
    name: "Explorer",
    duration: "7 Days",
    price: {
      IDR: "Rp455k",
      USD: "$29",
      AUD: "$44",
      EUR: "€27",
    },
    subtext: "Most popular choice",
    isRecommended: true,
    features: [
      "Unlimited 4G Data",
      "5 Devices Support",
      "Free Powerbank Rental",
    ],
    buttonText: "Book Now",
  },
  {
    id: "nomad",
    tag: "NOMAD PLAN",
    name: "Nomad",
    duration: "30 Days",
    price: {
      IDR: "Rp1.6m",
      USD: "$99",
      AUD: "$155",
      EUR: "€94",
    },
    subtext: "Best value for long stays",
    features: ["Unlimited 4G Data", "Priority Support", "Hotel Delivery"],
    buttonText: "Select Plan",
  },
  {
    id: "flex",
    tag: "FLEX PLAN",
    name: "Flex",
    duration: "Daily",
    price: {
      IDR: "Rp60k /day",
      USD: "$3.9 /day",
      AUD: "$5.9 /day",
      EUR: "€3.6 /day",
    },
    subtext: "Extend your stay easily",
    features: ["Same High Speed", "No Contract", "Instant Activation"],
    buttonText: "Contact Us",
  },
];

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [currency, setCurrency] = useState<Currency>("IDR");

  return (
    <section id="plans" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
          Pricing Plans
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600">
          Choose the best plan for your Bali adventure
        </p>

        {/* Currency Switcher */}
        <div className="mt-6 inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold">
          {(["IDR", "USD", "AUD", "EUR"] as Currency[]).map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                currency === cur
                  ? "bg-white text-neutral-950 shadow-xs font-bold"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Horizontal Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
        {plans.map((plan) => {
          const isDark = plan.isRecommended;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? "bg-[#0B0F17] text-white shadow-2xl ring-1 ring-neutral-800 lg:-translate-y-2"
                  : "bg-white text-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-neutral-300"
              }`}
            >
              {/* Recommended Badge on Explorer Plan */}
              {isDark && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#A3E635] text-neutral-950 text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-left">
                  <p
                    className={`text-[11px] font-bold tracking-widest uppercase ${
                      isDark ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {plan.tag}
                  </p>
                  <h3
                    className={`mt-1 font-sans text-xl sm:text-2xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    {plan.duration}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-neutral-200/30">
                  <div
                    className={`font-sans text-3xl sm:text-4xl font-extrabold tracking-tight ${
                      isDark ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    {plan.price[currency]}
                  </div>
                  <p
                    className={`mt-1 text-xs ${
                      isDark ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {plan.subtext}
                  </p>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <Check
                        className={`w-4 h-4 shrink-0 stroke-[2.5] ${
                          isDark ? "text-[#A3E635]" : "text-[#84CC16]"
                        }`}
                      />
                      <span
                        className={
                          isDark ? "text-neutral-200" : "text-neutral-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                {isDark ? (
                  <button
                    onClick={() =>
                      onSelectPlan(plan.name, plan.price[currency])
                    }
                    className="w-full py-3 px-5 rounded-full bg-[#A3E635] hover:bg-[#8ED422] text-neutral-950 font-bold text-sm text-center shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    {plan.buttonText}
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      onSelectPlan(plan.name, plan.price[currency])
                    }
                    className="w-full py-3 px-5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-800/80 font-semibold text-sm text-center transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-100/50 active:scale-[0.98] cursor-pointer"
                  >
                    {plan.buttonText}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
