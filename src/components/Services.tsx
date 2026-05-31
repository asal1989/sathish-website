"use client";

import { useInView } from "../hooks/useInView";
import {
  Home,
  Building2,
  Factory,
  Wrench,
  Sun,
  Camera,
  Zap,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Wiring",
    tamil: "வீட்டு மின் இணைப்பு",
    desc: "Complete residential electrical wiring — new constructions, renovations, load balancing, and safety upgrades compliant with IE rules.",
    color: "from-blue-500 to-blue-700",
    features: ["New construction wiring", "Renovation rewiring", "Earth leakage protection", "MCB & ELCB installation"],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    tamil: "வணிக மின் வேலைகள்",
    desc: "Expert electrical installations for offices, malls, hotels, and commercial complexes including LT panel design and power distribution.",
    color: "from-indigo-500 to-indigo-700",
    features: ["LT panel installation", "Power distribution", "Emergency lighting", "Energy audit"],
  },
  {
    icon: Factory,
    title: "Industrial Electrical",
    tamil: "தொழிற்சாலை மின்சாரம்",
    desc: "Heavy-duty industrial wiring, HT/LT systems, motor control centers, and automation electrical works for manufacturing plants.",
    color: "from-slate-600 to-slate-800",
    features: ["HT/LT systems", "Motor control centers", "VFD installations", "Industrial automation"],
  },
  {
    icon: Wrench,
    title: "Electrical Maintenance",
    tamil: "மின் பராமரிப்பு",
    desc: "Preventive and corrective electrical maintenance contracts for homes, offices, and industries with 24/7 emergency support.",
    color: "from-orange-500 to-orange-700",
    features: ["Preventive maintenance", "Emergency repairs", "AMC contracts", "Transformer servicing"],
  },
  {
    icon: Sun,
    title: "Solar Installation",
    tamil: "சோலார் நிறுவல்",
    desc: "Grid-tied and off-grid solar photovoltaic systems for homes and businesses. MNRE approved installer with net-metering setup.",
    color: "from-yellow-500 to-amber-600",
    features: ["On-grid solar systems", "Off-grid systems", "Net metering setup", "MNRE subsidy assistance"],
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    tamil: "சி.சி.டி.வி நிறுவல்",
    desc: "Full-spectrum security camera systems — IP cameras, DVR/NVR setup, night vision, remote monitoring, and structured cabling.",
    color: "from-green-600 to-green-800",
    features: ["IP camera systems", "DVR/NVR setup", "Remote monitoring", "Night vision cameras"],
  },
  {
    icon: Zap,
    title: "Generator Setup",
    tamil: "ஜெனரேட்டர் நிறுவல்",
    desc: "Diesel & gas generator installation, synchronization panels, auto changeover switches, and AMF panels for uninterrupted power.",
    color: "from-red-600 to-red-800",
    features: ["DG set installation", "Auto changeover switch", "AMF panels", "Load testing"],
  },
  {
    icon: LayoutDashboard,
    title: "Panel Board Installation",
    tamil: "பேனல் போர்டு நிறுவல்",
    desc: "Design and installation of LT distribution panels, MCC, PCC, APFC panels with proper metering and protection devices.",
    color: "from-purple-600 to-purple-800",
    features: ["LT distribution panels", "MCC/PCC boards", "APFC panels", "Bus duct systems"],
  },
  {
    icon: Lightbulb,
    title: "Street Lighting",
    tamil: "தெரு விளக்கு திட்டம்",
    desc: "LED street lighting projects for municipalities, townships, and highways. Energy-efficient solutions with smart controls.",
    color: "from-teal-500 to-teal-700",
    features: ["LED street lights", "Smart lighting controls", "Municipal projects", "Highway lighting"],
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Services • எங்கள் சேவைகள்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            Complete Electrical Solutions
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            From house wiring to industrial automation — we deliver end-to-end
            electrical services with precision and safety.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 overflow-hidden group transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon header */}
              <div className={`bg-gradient-to-br ${service.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  <p className="text-white/70 text-xs">{service.tamil}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-5 w-full py-2.5 rounded-xl bg-blue-50 hover:bg-blue-800 hover:text-white text-blue-800 font-semibold text-sm transition-all"
                >
                  Get Quote →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
