"use client";

import { X, Star, CheckCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reviews = [
  {
    name: "Sarah J.",
    role: "Digital Nomad & Designer",
    rating: 5,
    date: "August 2026",
    quote:
      "Absolute lifesaver! Picked it up at the airport and had fast internet throughout my entire 3-week trip. Saved me so much hassle trying to find cafes with decent WiFi for remote work.",
    avatar: "/images/sarah-avatar.jpg",
    location: "Canggu & Ubud",
  },
  {
    name: "Liam & Chloe M.",
    role: "Couples Vacation from Sydney",
    rating: 5,
    date: "July 2026",
    quote:
      "We connected both our iPhones and an iPad the whole time. Google Maps and Grab worked flawlessly even in remote Uluwatu cliffs. Battery lasted all day from 8 AM to 11 PM.",
    avatar: "/images/sarah-avatar.jpg",
    location: "Uluwatu & Seminyak",
  },
  {
    name: "Marcus K.",
    role: "Software Engineer from Berlin",
    rating: 5,
    date: "June 2026",
    quote:
      "I was running Zoom video calls and pushing code from a bamboo villa in Sidemen. Speed was consistently 60-90 Mbps. Customer support on WhatsApp answered in under 2 minutes!",
    avatar: "/images/sarah-avatar.jpg",
    location: "Sidemen & Sanur",
  },
];

export default function ReviewsModal({ isOpen, onClose }: ReviewsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-amber-400 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-neutral-900 ml-1">
              4.9 / 5.0 (5000+ Reviews)
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950">
            Traveler Testimonials
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Real feedback from tourists, digital nomads, and creators traveling in Bali.
          </p>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-neutral-200/90 bg-neutral-50/50 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-neutral-500">{rev.role}</p>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-400">{rev.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                &ldquo;{rev.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60 text-[11px] text-neutral-500">
                <span>📍 Stayed in {rev.location}</span>
                <span className="text-[#65A30D] font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Verified Rental
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-neutral-950 text-white font-bold text-sm hover:bg-neutral-800 transition-all cursor-pointer"
          >
            Close Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
