"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare, CheckCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
          GET IN TOUCH
        </span>
        <h2 className="mt-2 font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
          CONTACT US
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-6">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-[#84CC16]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-sans text-2xl font-bold text-neutral-950">
                Message Received!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md">
                Thank you for reaching out, {formData.firstName || "traveler"}. Our
                Bali concierge team will reply via WhatsApp or email within 15
                minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Names row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5"
                  >
                    FIRST NAME
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 text-sm outline-none transition-all placeholder:text-neutral-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5"
                  >
                    LAST NAME
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 text-sm outline-none transition-all placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 text-sm outline-none transition-all placeholder:text-neutral-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5"
                >
                  PHONE NUMBER
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+62 812-3456-7890"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 text-sm outline-none transition-all placeholder:text-neutral-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Leave us a message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 text-sm outline-none transition-all placeholder:text-neutral-400 resize-none"
                ></textarea>
              </div>

              {/* Checkbox agreement */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  checked={formData.agreed}
                  onChange={(e) =>
                    setFormData({ ...formData, agreed: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-xs text-neutral-500 cursor-pointer"
                >
                  You agree to our friendly privacy policy.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-neutral-950 text-xs sm:text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{loading ? "Sending..." : "SEND MESSAGE"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Palm Banner + 2 Info Cards */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {/* Google Maps Embed */}
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-neutral-200/80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9047874808143!2d115.18044238008828!3d-8.795015467342418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c71888bd5788975%3A0xfcb0f6d4a2fe8715!2sInfinity%20Go%20-%20Bali%20Indonesia%20Tour%20%26%20Travel!5e0!3m2!1sid!2sid!4v1786802800580!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infinity Go - Bali Indonesia Tour & Travel Map"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* 2 Contact Cards Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Call Us Card */}
            <a
              href="tel:+6282342431717"
              className="rounded-2xl border border-neutral-200/80 p-5 bg-white shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3 group-hover:bg-[#A3E635] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  CALL TO US
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  +62 823-4243-1717
                </p>
              </div>
            </a>

            {/* Chat to Support Card */}
            <a
              href="mailto:wifibalipocket@gmail.com"
              className="rounded-2xl border border-neutral-200/80 p-5 bg-white shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3 group-hover:bg-[#A3E635] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  CHAT TO SUPPORT
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors truncate">
                  wifibalipocket@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
