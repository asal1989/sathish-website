"use client";

import { useInView } from "../hooks/useInView";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Top 10 Electrical Safety Tips Every Home Owner Must Know",
    slug: "electrical-safety-tips-home",
    excerpt:
      "Electrical accidents cause thousands of house fires yearly. Learn the essential safety practices to protect your family and property.",
    category: "Safety",
    date: "2024-11-20",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
  },
  {
    id: 2,
    title: "Benefits of Solar Energy for Factories in Tamil Nadu",
    slug: "solar-benefits-factories-tamil-nadu",
    excerpt:
      "How Tamil Nadu manufacturers are cutting electricity costs by 60–80% with rooftop solar systems and MNRE subsidies.",
    category: "Solar",
    date: "2024-11-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
  },
  {
    id: 3,
    title: "How to Choose the Right Electrical Contractor for Your Project",
    slug: "choose-right-electrical-contractor",
    excerpt:
      "Key factors to evaluate before hiring an electrical contractor — licensing, experience, safety record, and pricing transparency.",
    category: "Tips",
    date: "2024-10-28",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80",
  },
];

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Blog & Tips • மின் பாதுகாப்பு குறிப்புகள்
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 section-title">
            Electrical Safety Tips
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Expert insights on electrical safety, energy savings, and best
            practices for your home and business.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <span className="absolute top-3 left-3 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} read
                  </span>
                </div>
                <h3 className="font-bold text-blue-900 text-lg leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-blue-700 font-semibold text-sm hover:text-yellow-600 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-800 hover:text-white text-blue-800 font-semibold px-8 py-3 rounded-full border border-blue-200 hover:border-blue-800 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
