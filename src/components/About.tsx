"use client";

import { useInView } from "../hooks/useInView";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

const milestones = [
  { year: "2009", event: "Founded in Tirunelveli, Tamil Nadu" },
  { year: "2013", event: "Expanded to industrial projects" },
  { year: "2017", event: "ISO certification obtained" },
  { year: "2020", event: "Solar & CCTV division launched" },
  { year: "2024", event: "500+ projects completed" },
];

const certifications = [
  "Licensed Electrical Contractor — Tamil Nadu CEIG",
  "ISO 9001:2015 Quality Management",
  "Bureau of Indian Standards (BIS) Certified",
  "TNEB Approved Contractor",
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            About Us • எங்களைப் பற்றி
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            Trusted Electrical Partner
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            For over 15 years, Sree Isai Electrical Contractor has been
            delivering superior electrical solutions across Tamil Nadu with
            safety, precision, and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — image & highlights */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                  alt="Electricians at work"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 stat-card text-white rounded-2xl p-6 shadow-xl text-center">
                <div className="text-5xl font-extrabold text-yellow-400">15+</div>
                <div className="text-sm font-medium mt-1">Years of Excellence</div>
              </div>
              {/* Zap badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg rotate-6">
                <Zap className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-blue-50">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Certifications & Approvals
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — text & timeline */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Powering Tamil Nadu Since 2009
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sree Isai Electrical Contractor is a premier electrical contracting
              firm based in Tirunelveli, Tamil Nadu. We serve residential, commercial,
              and industrial clients across the region with comprehensive
              electrical solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of 50+ certified electricians and engineers brings deep
              expertise in modern electrical systems, safety standards, and
              innovative technologies including solar energy and smart automation.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, title: "50+ Engineers", desc: "Skilled & certified team" },
                { icon: Award, title: "ISO Certified", desc: "Quality assured services" },
                { icon: CheckCircle, title: "Safety First", desc: "Zero-incident record" },
                { icon: Zap, title: "Modern Tech", desc: "Latest equipment used" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <Icon className="w-6 h-6 text-blue-700 mb-2" />
                  <div className="font-bold text-blue-900 text-sm">{title}</div>
                  <div className="text-gray-500 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h4 className="font-bold text-blue-900 mb-4">Our Journey</h4>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-4 pl-10 relative">
                    <div className="absolute left-0 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold ring-4 ring-blue-100">
                      ⚡
                    </div>
                    <div>
                      <span className="text-yellow-600 font-bold text-sm">{m.year}</span>
                      <p className="text-gray-600 text-sm">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
