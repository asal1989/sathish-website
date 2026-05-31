"use client";

import { useEffect, useState } from "react";
import { Zap, Shield, Clock, Star, Phone, FileText } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Completed", icon: "🏗️" },
  { value: "15+", label: "Years Experience", icon: "⚡" },
  { value: "200+", label: "Happy Clients", icon: "😊" },
  { value: "24/7", label: "Support Available", icon: "🕐" },
];

const highlights = [
  { icon: Shield, text: "Licensed & Certified" },
  { icon: Clock, text: "On-Time Delivery" },
  { icon: Star, text: "Quality Guaranteed" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Electric grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.3) 49px, rgba(255,255,255,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.3) 49px, rgba(255,255,255,0.3) 50px)`,
        }}
      />

      {/* Floating electric icons */}
      <div className="absolute top-20 right-20 opacity-20 animate-float hidden lg:block">
        <Zap className="w-20 h-20 text-yellow-300 fill-yellow-300" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <Zap className="w-12 h-12 text-yellow-300 fill-yellow-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-zap" />
            <span className="text-yellow-300 text-sm font-semibold tracking-wide">
              #1 Electrical Contractor in Tirunelveli, Tamil Nadu
            </span>
          </div>

          {/* Tamil header */}
          <p
            className={`text-blue-200 text-lg mb-3 font-medium transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            ஸ்ரீ இசை எலக்ட்ரிக்கல் கான்ட்ராக்டர்
          </p>

          {/* Main heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sree Isai{" "}
            <span className="gradient-text block sm:inline">Electrical</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-blue-200">
              Contractor
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-xl sm:text-2xl text-blue-100 font-light mb-8 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Powering Homes, Businesses & Industries with{" "}
            <span className="text-yellow-400 font-semibold">Excellence</span>
          </p>

          {/* Highlights */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Icon className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg"
            >
              <FileText className="w-5 h-5" />
              Get Free Quote
            </button>
            <a
              href="tel:+919688216635"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-4 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-white/50 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
      </div>
    </section>
  );
}
