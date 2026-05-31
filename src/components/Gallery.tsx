"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Industrial", "Solar"];

const projects = [
  {
    id: 1,
    title: "Luxury Villa — Complete Wiring",
    category: "Residential",
    location: "Hosur",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "3BHK villa full electrical wiring with smart home automation",
  },
  {
    id: 2,
    title: "IT Park — Commercial Installation",
    category: "Commercial",
    location: "Electronic City",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "50,000 sqft IT park — LT panel, UPS, and lighting",
  },
  {
    id: 3,
    title: "Manufacturing Plant — HT/LT",
    category: "Industrial",
    location: "SIPCOT, Hosur",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    desc: "Complete HT/LT electrical works for auto components plant",
  },
  {
    id: 4,
    title: "50 kWp Rooftop Solar",
    category: "Solar",
    location: "Krishnagiri",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    desc: "Grid-tied solar system with net metering for a factory",
  },
  {
    id: 5,
    title: "Apartment Complex — 120 Units",
    category: "Residential",
    location: "Hosur",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    desc: "Full electrical wiring for 120-unit residential complex",
  },
  {
    id: 6,
    title: "Shopping Mall — Electrical",
    category: "Commercial",
    location: "Krishnagiri",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    desc: "Mall electrical — power, lighting, and fire alarm integration",
  },
  {
    id: 7,
    title: "Textile Mill — Motor Control",
    category: "Industrial",
    location: "Denkanikottai",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
    desc: "MCC and VFD installation for textile mill operations",
  },
  {
    id: 8,
    title: "Hospital — 100 kWp Solar",
    category: "Solar",
    location: "Hosur",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    desc: "Solar power system reducing hospital electricity costs by 70%",
  },
  {
    id: 9,
    title: "Hotel — CCTV & Security",
    category: "Commercial",
    location: "Hosur",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
    desc: "128-camera IP CCTV system with central monitoring",
  },
];

type Project = typeof projects[0];

export default function Gallery() {
  const [ref, inView] = useInView();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Work • எங்கள் திட்டங்கள்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            Project Gallery
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our portfolio of 500+ completed electrical projects across
            Tamil Nadu.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat
                  ? "bg-blue-800 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`gallery-item rounded-2xl overflow-hidden shadow-md cursor-pointer group transition-all duration-500 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-all flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-bold text-blue-900 text-sm">{project.title}</h3>
                <p className="text-gray-500 text-xs mt-1">📍 {project.location}</p>
                <p className="text-gray-400 text-xs mt-2 line-clamp-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="p-6">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                {lightbox.category}
              </span>
              <h3 className="text-xl font-bold text-blue-900 mt-2">{lightbox.title}</h3>
              <p className="text-gray-500 text-sm mt-1">📍 {lightbox.location}</p>
              <p className="text-gray-600 mt-3">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
