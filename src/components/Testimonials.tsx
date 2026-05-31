"use client";

import { useInView } from "../hooks/useInView";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Home Owner",
    location: "Tirunelveli",
    rating: 5,
    review:
      "Excellent service! The team wired our entire 3BHK villa in just 5 days. Very professional, clean work, and they explained every step. Highly recommended for house wiring.",
    project: "House Wiring",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Shanmugam",
    role: "Factory Manager",
    location: "Rathapuram",
    rating: 5,
    review:
      "We hired Sree Isai for our entire industrial plant electrical works. They completed the HT/LT installation on schedule despite tight deadlines. Zero safety incidents.",
    project: "Industrial Electrical",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Venkatesh Rajan",
    role: "Business Owner",
    location: "Nanguneri",
    rating: 5,
    review:
      "Our 50 kWp solar installation was done perfectly. The team guided us through MNRE subsidy application too. Our electricity bill has reduced by 80%!",
    project: "Solar Installation",
    avatar: "VR",
  },
  {
    id: 4,
    name: "Meena Devi",
    role: "Hotel Owner",
    location: "Palayamkottai",
    rating: 5,
    review:
      "The CCTV installation at our hotel is superb. Remote monitoring works flawlessly. Sree Isai team was responsive and professional throughout.",
    project: "CCTV Installation",
    avatar: "MD",
  },
  {
    id: 5,
    name: "Karthikeyan S",
    role: "IT Manager",
    location: "Tirunelveli",
    rating: 5,
    review:
      "For our 50,000 sqft IT park, Sree Isai handled all electrical works including LT panels, UPS, and structured cabling. On-time, on-budget delivery.",
    project: "Commercial Electrical",
    avatar: "KS",
  },
  {
    id: 6,
    name: "Aarthi Murugan",
    role: "Apartment Resident",
    location: "Ambasamudram",
    rating: 5,
    review:
      "AMC service is exceptional. They respond within 1-2 hours for any electrical issue. Very trustworthy technicians. Peace of mind guaranteed.",
    project: "Maintenance AMC",
    avatar: "AM",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Testimonials • வாடிக்கையாளர் கருத்துகள்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-semibold">4.9/5</span>
            <span className="text-gray-400 text-sm">based on 200+ reviews</span>
          </div>
        </div>

        {/* Featured testimonial */}
        <div
          className={`mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-blue-700/40" />
            <div className="relative">
              <StarRating rating={testimonials[active].rating} />
              <p className="text-lg text-blue-100 mt-4 leading-relaxed italic">
                &ldquo;{testimonials[active].review}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-extrabold text-lg">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonials[active].name}</p>
                  <p className="text-blue-300 text-sm">
                    {testimonials[active].role} • {testimonials[active].location}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="bg-yellow-400/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonials[active].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selector dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all ${
                  active === i ? "w-8 h-3 bg-blue-800" : "w-3 h-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${active === i ? "border-blue-300 shadow-md bg-blue-50" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setActive(i)}
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={t.rating} />
                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  {t.project}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-blue-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
