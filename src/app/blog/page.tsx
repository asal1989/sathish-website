import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Electrical Safety Tips | Sree Isai Electrical Contractor",
  description:
    "Expert electrical safety tips, energy-saving guides, and industry insights from Sree Isai Electrical Contractor, Tirunelveli, Tamil Nadu.",
};

const posts = [
  {
    id: 1,
    title: "Top 10 Electrical Safety Tips Every Home Owner Must Know",
    slug: "electrical-safety-tips-home",
    excerpt:
      "Electrical accidents cause thousands of house fires yearly in India. Learn the essential safety practices to protect your family and property from electrical hazards.",
    category: "Safety",
    date: "2024-11-20",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tags: ["Safety", "Home", "Tips"],
  },
  {
    id: 2,
    title: "Benefits of Solar Energy for Factories in Tamil Nadu",
    slug: "solar-benefits-factories-tamil-nadu",
    excerpt:
      "How Tamil Nadu manufacturers are cutting electricity costs by 60–80% with rooftop solar systems and how MNRE subsidies make it more affordable.",
    category: "Solar",
    date: "2024-11-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    tags: ["Solar", "Industrial", "Energy"],
  },
  {
    id: 3,
    title: "How to Choose the Right Electrical Contractor for Your Project",
    slug: "choose-right-electrical-contractor",
    excerpt:
      "Key factors to evaluate before hiring an electrical contractor — licensing, experience, safety record, material quality, and pricing transparency.",
    category: "Tips",
    date: "2024-10-28",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    tags: ["Tips", "Hiring", "Quality"],
  },
  {
    id: 4,
    title: "Understanding TNEB Tariff Structure and How to Reduce Your Bill",
    slug: "tneb-tariff-reduce-electricity-bill",
    excerpt:
      "A comprehensive guide to TNEB electricity tariff slabs for domestic and commercial consumers and practical steps to reduce your monthly bill.",
    category: "Energy",
    date: "2024-10-15",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    tags: ["TNEB", "Energy", "Savings"],
  },
  {
    id: 5,
    title: "Why Industrial Plants Need Preventive Electrical Maintenance",
    slug: "industrial-preventive-electrical-maintenance",
    excerpt:
      "Unplanned downtime costs Indian industries crores every year. Here's why a preventive electrical maintenance contract is essential for manufacturing plants.",
    category: "Industrial",
    date: "2024-09-30",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    tags: ["Industrial", "Maintenance", "Uptime"],
  },
  {
    id: 6,
    title: "CCTV System Guide: IP vs Analog Cameras Explained",
    slug: "cctv-ip-vs-analog-cameras",
    excerpt:
      "Confused about choosing between IP and analog CCTV systems? This guide explains the differences, costs, and best use cases for homes and businesses.",
    category: "CCTV",
    date: "2024-09-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
    tags: ["CCTV", "Security", "Technology"],
  },
];

const categories = ["All", "Safety", "Solar", "Tips", "Energy", "Industrial", "CCTV"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Knowledge Hub
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Electrical Safety Tips & Insights
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Expert articles on electrical safety, energy saving, and best
              practices from our team of licensed electricians.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-b border-gray-100 py-4 px-4 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-colors border border-blue-100"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Posts */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Featured */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <article className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 group flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    ⭐ Featured • {posts[0].category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-blue-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-500 mb-5 leading-relaxed">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(posts[0].date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime} read
                    </span>
                  </div>
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors self-start"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs mb-3">
                      <span className="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-blue-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
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
          </div>
        </section>
      </main>

      {/* Back home */}
      <div className="bg-white py-8 text-center border-t border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
