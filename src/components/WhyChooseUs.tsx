"use client";

import { useInView } from "../hooks/useInView";
import {
  Users,
  Clock,
  Shield,
  Banknote,
  CheckCircle,
  Headphones,
  Award,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    tamil: "அனுபவமிக்க குழு",
    desc: "50+ licensed electricians and engineers with specialized training in residential, commercial, and industrial systems.",
    stat: "50+",
    statLabel: "Certified Engineers",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    tamil: "சரியான நேரத்தில் பணி",
    desc: "We respect your time. Every project is completed within the agreed schedule with daily progress updates.",
    stat: "98%",
    statLabel: "On-Time Rate",
  },
  {
    icon: Shield,
    title: "Quality Materials",
    tamil: "தரமான பொருட்கள்",
    desc: "Only ISI-marked, BIS-certified cables and components from reputed brands like Havells, Legrand, and Schneider.",
    stat: "100%",
    statLabel: "ISI Certified",
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    tamil: "சிறந்த விலை",
    desc: "Transparent, competitive pricing with detailed quotations. No hidden charges. EMI options available for large projects.",
    stat: "Best",
    statLabel: "Price Guarantee",
  },
  {
    icon: CheckCircle,
    title: "Safety Compliance",
    tamil: "பாதுகாப்பு",
    desc: "Strict adherence to IE Rules 1956, NBC norms, and IS standards. Comprehensive risk assessment before every project.",
    stat: "Zero",
    statLabel: "Incident Record",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    tamil: "24/7 ஆதரவு",
    desc: "Round-the-clock emergency support. Our rapid response team reaches your site within 2 hours for critical failures.",
    stat: "2 hr",
    statLabel: "Response Time",
  },
];

const trustBadges = [
  { icon: Award, text: "ISO 9001:2015" },
  { icon: Zap, text: "TNEB Approved" },
  { icon: Shield, text: "CEIG Licensed" },
  { icon: CheckCircle, text: "MNRE Registered" },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us • ஏன் எங்களை தேர்வு செய்யவேண்டும்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white section-title after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-200">
            The Sree Isai Advantage
          </h2>
          <p className="mt-6 text-blue-200 max-w-2xl mx-auto text-lg">
            We don&apos;t just complete projects — we build long-term partnerships
            based on trust, quality, and excellence.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{reason.title}</h3>
                  <p className="text-blue-300 text-xs">{reason.tamil}</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                {reason.desc}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <span className="text-2xl font-extrabold text-yellow-400">
                  {reason.stat}
                </span>
                <span className="text-blue-300 text-sm">{reason.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 glass rounded-full px-6 py-3"
            >
              <Icon className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-4 text-lg">
            Ready to experience the difference?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-lg"
          >
            <Zap className="w-5 h-5 fill-white" />
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
