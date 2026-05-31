"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96882 16635",
    link: "tel:+919688216635",
    sub: "Mon–Sat, 8AM–8PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 96882 16635",
    link: "https://wa.me/919688216635?text=Hello%20Sree%20Isai%20Electrical%2C%20I%20need%20your%20services",
    sub: "Quick response guaranteed",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sreeisaielectrical.com",
    link: "mailto:info@sreeisaielectrical.com",
    sub: "Reply within 4 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Hosur, Tamil Nadu 635109",
    link: "https://maps.google.com/?q=Hosur,Tamil+Nadu",
    sub: "India",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 8AM–8PM",
    link: null,
    sub: "Emergency: 24/7",
  },
];

const services = [
  "House Wiring",
  "Commercial Electrical",
  "Industrial Electrical",
  "Solar Installation",
  "CCTV Installation",
  "Generator Setup",
  "Panel Board",
  "Maintenance AMC",
  "Other",
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in the required fields.");
      return;
    }
    setLoading(true);

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hello Sree Isai Electrical Contractor,\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        `*Email:* ${form.email || "—"}\n` +
        `*Service Required:* ${form.service}\n` +
        `*Details:* ${form.message || "—"}\n\n` +
        `Please contact me to discuss the project.`
    );
    const whatsappUrl = `https://wa.me/919688216635?text=${message}`;

    // Also prepare mailto as fallback
    const mailto = `mailto:info@sreeisaielectrical.com?subject=${encodeURIComponent(
      `Quote Request from ${form.name}`
    )}&body=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp! Your inquiry is ready to send.");

    // Save inquiry locally as backup
    try {
      const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
      inquiries.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("inquiries", JSON.stringify(inquiries));
    } catch {
      /* localStorage unavailable */
    }

    // Fallback email link
    setTimeout(() => {
      toast(
        (t) => (
          <span className="flex flex-col gap-1">
            <span>Prefer email?</span>
            <a
              href={mailto}
              className="underline font-semibold text-yellow-300"
              onClick={() => toast.dismiss(t.id)}
            >
              Click here to email us
            </a>
          </span>
        ),
        { duration: 8000 }
      );
    }, 1500);

    setForm({ name: "", phone: "", email: "", service: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Contact Us • தொடர்பு கொள்ளுங்கள்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            Get In Touch
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to start your electrical project? Contact us for a free
            consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-blue-900 font-semibold">{info.value}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-0.5">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-48 bg-blue-50 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Hosur,Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <MapPin className="w-8 h-8" />
                <span className="font-semibold">View on Google Maps</span>
                <span className="text-sm text-gray-500">Hosur, Tamil Nadu</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919688216635?text=Hello%20Sree%20Isai%20Electrical%2C%20I%20need%20a%20free%20quote"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp for Instant Quote
            </a>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Request Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="form-input w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project requirements..."
                    className="form-input w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-base"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Your message opens in WhatsApp pre-filled — just hit send. We
                  respond within 30 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
