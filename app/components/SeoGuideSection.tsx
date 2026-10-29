"use client";

import { Check, X, Shield, Smartphone, Zap, MapPin, ArrowRight, BatteryCharging, Users, Wifi } from "lucide-react";

interface SeoGuideSectionProps {
  onRentClick: () => void;
  onOpenCoverage: () => void;
}

export default function SeoGuideSection({
  onRentClick,
  onOpenCoverage,
}: SeoGuideSectionProps) {
  const deliveryLocations = [
    { name: "Bandara Ngurah Rai (DPS)", tag: "Free Meet & Greet" },
    { name: "Canggu & Pererenan", tag: "Gratis Antar Hotel/Villa" },
    { name: "Seminyak & Kerobokan", tag: "Gratis Antar Hotel/Villa" },
    { name: "Ubud & Tegallalang", tag: "Gratis Antar Hotel/Villa" },
    { name: "Kuta & Legian", tag: "Gratis Antar Hotel/Villa" },
    { name: "Uluwatu & Jimbaran", tag: "Gratis Antar Hotel/Villa" },
    { name: "Sanur & Denpasar", tag: "Gratis Antar Hotel/Villa" },
    { name: "Nusa Dua & Benoa", tag: "Gratis Antar Hotel/Villa" },
  ];

  return (
    <section id="guide" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-800 uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
          PANDUAN LENGKAP SEWA WIFI BALI
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight leading-tight">
          Kenapa Harus Sewa WiFi Pocket di Bali?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
          Nikmati kemudahan internet tanpa repot antre registrasi IMEI di bea cukai bandara. Solusi hemat untuk liburan keluarga, perjalanan bisnis, dan digital nomad di Pulau Bali.
        </p>
      </div>

      {/* 4 Keunggulan Utama Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Card 1 */}
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 hover:bg-white hover:shadow-lg transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-5 shadow-xs">
              <Shield className="w-6 h-6 text-[#65A30D]" />
            </div>
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 tracking-tight mb-2">
              Bebas Registrasi IMEI
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Tidak perlu mengantre berjam-jam dan membayar pajak IMEI di Bandara Ngurah Rai untuk smartphone Anda. Begitu mendarat, langsung connect!
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
            ✓ 100% Praktis &amp; Legal
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 hover:bg-white hover:shadow-lg transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-5 shadow-xs">
              <Users className="w-6 h-6 text-[#65A30D]" />
            </div>
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 tracking-tight mb-2">
              Connect 5–8 Gadget
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Cukup sewa 1 modem WiFi pocket Bali untuk seluruh rombongan keluarga atau teman. Bisa dipakai bersama di HP, laptop, dan iPad.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
            ✓ Hemat hingga 70% Biaya
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 hover:bg-white hover:shadow-lg transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-5 shadow-xs">
              <BatteryCharging className="w-6 h-6 text-[#65A30D]" />
            </div>
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 tracking-tight mb-2">
              Baterai HP Tetap Awet
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Hindari smartphone cepat panas dan baterai cepat habis akibat tethering hotspot pribadi. Modem MiFi kami tahan 15+ jam seharian.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
            ✓ Termasuk Fast Charger USB-C
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 hover:bg-white hover:shadow-lg transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-5 shadow-xs">
              <MapPin className="w-6 h-6 text-[#65A30D]" />
            </div>
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 tracking-tight mb-2">
              Antar ke Bandara / Hotel
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Tim concierge kami siap menyambut langsung di Gate Kedatangan Bandara DPS atau mengantar langsung ke villa &amp; hotel Anda di Bali.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/60 text-xs font-semibold text-neutral-500">
            ✓ Bebas Ongkir Area Populer
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-xs mb-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            PERBANDINGAN KONEKSI DI BALI
          </span>
          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-neutral-950 mt-1">
            Sewa WiFi Pocket Bali vs SIM Card vs Roaming
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Lihat kenapa menyewa Bali Pocket WiFi adalah pilihan paling efisien dan bebas stres untuk perjalanan Anda.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 text-[11px] uppercase tracking-wider">
                <th className="py-4 px-3 sm:px-4 font-bold">Fitur &amp; Keuntungan</th>
                <th className="py-4 px-3 sm:px-4 font-bold text-neutral-950 bg-lime-50/70 rounded-t-xl">
                  Bali Pocket WiFi (Rekomendasi)
                </th>
                <th className="py-4 px-3 sm:px-4 font-bold">Beli SIM Card Lokal</th>
                <th className="py-4 px-3 sm:px-4 font-bold">Paket Roaming Seluler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-neutral-800">
              <tr>
                <td className="py-4 px-3 sm:px-4 font-semibold">Bebas Antre Registrasi IMEI</td>
                <td className="py-4 px-3 sm:px-4 bg-lime-50/70 font-bold text-emerald-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#84CC16]" /> Ya, Langsung Pakai
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Wajib antre &amp; daftar IMEI</td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Tidak perlu</td>
              </tr>
              <tr>
                <td className="py-4 px-3 sm:px-4 font-semibold">Dukungan Multi-Device</td>
                <td className="py-4 px-3 sm:px-4 bg-lime-50/70 font-bold text-emerald-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#84CC16]" /> Hingga 5-8 Perangkat
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Hanya 1 HP (Hotspot boros baterai)</td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Hanya 1 HP</td>
              </tr>
              <tr>
                <td className="py-4 px-3 sm:px-4 font-semibold">Batas Kuota / FUP</td>
                <td className="py-4 px-3 sm:px-4 bg-lime-50/70 font-bold text-emerald-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#84CC16]" /> Unlimited 4G/LTE Sejati
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Kuota Terbatas (sering habis)</td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Kuota sangat mahal &amp; terbatas</td>
              </tr>
              <tr>
                <td className="py-4 px-3 sm:px-4 font-semibold">Efisiensi Biaya Rombongan</td>
                <td className="py-4 px-3 sm:px-4 bg-lime-50/70 font-bold text-emerald-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#84CC16]" /> Sangat Hemat (1 Modem bareng)
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Beli kartu SIM untuk setiap orang</td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Sangat mahal per hari</td>
              </tr>
              <tr>
                <td className="py-4 px-3 sm:px-4 font-semibold">Layanan Antar Bandara &amp; Hotel</td>
                <td className="py-4 px-3 sm:px-4 bg-lime-50/70 font-bold text-emerald-700 rounded-b-xl">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#84CC16]" /> Gratis Antar-Jemput
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Harus cari konter sendiri</td>
                <td className="py-4 px-3 sm:px-4 text-neutral-500">Otomatis aktif dari SIM asal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Area Layanan Antar & Jangkauan */}
      <div className="rounded-3xl border border-neutral-900 bg-neutral-950 text-white p-6 sm:p-10 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-xs font-semibold text-[#A3E635] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            CAKUPAN PENGANTARAN SEWA WIFI BALI
          </div>
          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white">
            Gratis Antar Jemput di Seluruh Destinasi Wisata Bali
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Layanan sewa WiFi pocket Bali kami melayani pengantaran di hari yang sama untuk mempermudah liburan Anda tanpa repot.
          </p>

          {/* Location Badges Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {deliveryLocations.map((loc, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between"
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {loc.name}
                </span>
                <span className="mt-1 text-[10px] text-[#A3E635] font-medium">
                  {loc.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onRentClick}
              className="px-6 py-3 rounded-full bg-[#A3E635] hover:bg-[#8ED422] text-neutral-950 font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Pesan Sewa WiFi Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCoverage}
              className="px-6 py-3 rounded-full border border-neutral-700 hover:border-white text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Lihat Peta Jangkauan Sinyal
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}
