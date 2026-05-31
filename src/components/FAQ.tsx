"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve in Tamil Nadu?",
    a: "We serve Hosur, Krishnagiri, Bagalur, Shoolagiri, Berigai, Thally, and surrounding areas across Tamil Nadu and parts of Karnataka. For projects outside these areas, please call us to discuss.",
  },
  {
    q: "Are you a licensed electrical contractor?",
    a: "Yes. Sree Isai Electrical Contractor is a fully licensed electrical contractor in Tamil Nadu with 15+ years of experience. All our electricians are certified, trained, and follow Tamil Nadu Electricity Board (TNEB) safety standards.",
  },
  {
    q: "Do you give free quotations?",
    a: "Yes — site visits and quotations are completely free for residential and commercial projects in Hosur. Just call +91 96882 16635 or send your requirements via WhatsApp and we'll respond within 30 minutes.",
  },
  {
    q: "How long does house wiring take?",
    a: "A standard 2BHK house takes 5-7 days for complete wiring. A 3BHK takes 7-10 days. Industrial and commercial timelines depend on project scale — we provide exact timelines after a free site survey.",
  },
  {
    q: "Do you handle emergency electrical repairs?",
    a: "Yes, we offer 24/7 emergency electrical repair service for our clients in Hosur and surrounding areas. Call +91 96882 16635 anytime for urgent issues like short circuits, power failures, or panel board problems.",
  },
  {
    q: "What's included in solar installation?",
    a: "Our solar packages include site survey, design, government subsidy paperwork, panels, inverter, wiring, MNRE-approved equipment, installation, net-metering setup, and 5-year warranty. Both on-grid and off-grid systems available.",
  },
  {
    q: "Do you provide warranty on your work?",
    a: "Yes. All wiring work comes with a 2-year workmanship warranty. Equipment carries manufacturer warranty (typically 1-25 years depending on item). Solar systems come with a 5-year service warranty and 25-year panel performance warranty.",
  },
  {
    q: "What is your payment structure?",
    a: "We accept cash, UPI, bank transfer, and cheque. For most projects: 30% advance, 50% during work, 20% on completion. Small repairs are billed after completion. GST invoices provided for all commercial projects.",
  },
  {
    q: "Can you upgrade old wiring to copper / modern standards?",
    a: "Absolutely. We specialize in rewiring older homes with modern copper wiring, ELCB/RCCB protection, modular switches, and updated panel boards. This is one of our most-requested services in older Hosur neighborhoods.",
  },
  {
    q: "Do you install EV charging points at home?",
    a: "Yes — we install AC fast chargers (3.3kW, 7.4kW) for home EV charging including dedicated MCB, earthing, and weatherproof installation. Compatible with all major Indian EV brands (Tata, Mahindra, MG, etc.).",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Got Questions? <span className="gradient-text">We&apos;ve Got Answers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Common questions from our customers in Hosur and Tamil Nadu about
            our electrical services, pricing, and process.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500 bg-blue-50/40 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-gray-900 text-base sm:text-lg flex-1">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10">
          <MessageCircle className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-blue-100 mb-6">
            Our team is happy to help — message us on WhatsApp for a quick
            reply.
          </p>
          <a
            href="https://wa.me/919688216635?text=Hello%20Sree%20Isai%20Electrical%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
