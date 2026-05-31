"use client";

import { MapPin, Navigation } from "lucide-react";

const areas = [
  { name: "Hosur", desc: "All zones — Bagalur Road, SIPCOT, Mathigiri, Old Hosur" },
  { name: "Krishnagiri", desc: "City & taluk areas" },
  { name: "Bagalur", desc: "Industrial & residential" },
  { name: "Shoolagiri", desc: "Town & nearby villages" },
  { name: "Berigai", desc: "Industrial parks & homes" },
  { name: "Thally", desc: "Hill stations & residences" },
  { name: "Denkanikottai", desc: "Town & surroundings" },
  { name: "Kelamangalam", desc: "Town & farms" },
  { name: "Anchetty", desc: "Hill & rural areas" },
];

const hosurLocalities = [
  "SIPCOT Industrial Area",
  "Bagalur Road",
  "Mathigiri",
  "Old Hosur",
  "Sipcot Phase 1 & 2",
  "Zuzuvadi",
  "Onnalvadi",
  "Kelavarapalli",
  "Bypass Road",
  "RTO Office Area",
  "Bus Stand Area",
  "Periya Karadigatta",
  "Mookandapalli",
  "Maruthi Nagar",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Navigation className="w-4 h-4" />
            <span>Areas We Serve</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Serving <span className="gradient-text">Hosur & Beyond</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Local electrical contractors with deep knowledge of Hosur and
            Krishnagiri district. Same-day response across our service areas.
          </p>
        </div>

        {/* Regional grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-0.5">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hosur localities highlight */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 sm:p-10 text-white">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">All Hosur Localities Covered</h3>
              <p className="text-blue-200 text-sm">
                Free site visits within Hosur city limits
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {hosurLocalities.map((locality) => (
              <div
                key={locality}
                className="flex items-center gap-2 text-sm text-blue-50 hover:text-yellow-400 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                <span>{locality}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-blue-200 text-sm italic">
            Don&apos;t see your area?{" "}
            <a
              href="tel:+919688216635"
              className="text-yellow-400 underline font-semibold"
            >
              Call us
            </a>{" "}
            — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
