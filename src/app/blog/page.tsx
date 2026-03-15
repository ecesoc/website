import { CalendarIcon, UserIcon, ArrowRightIcon, TagIcon } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Getting Started with FPGA Development",
    excerpt:
      "A beginner-friendly guide to setting up your first FPGA project using Vivado and VHDL. From configuring the toolchain to blinking your first LED.",
    date: "March 10, 2026",
    author: "Rohan Mehta",
    category: "Tutorial",
    readTime: "8 min read",
  },
  {
    title: "ECE Society Wins National Hackathon",
    excerpt:
      "Our team of four secured first place at the National Electronics Hackathon 2026, building an AI-powered fault detection system for power grids.",
    date: "March 5, 2026",
    author: "Priya Patel",
    category: "News",
    readTime: "4 min read",
  },
  {
    title: "Understanding 5G NR Physical Layer",
    excerpt:
      "Deep dive into the 5G New Radio physical layer — OFDM numerologies, beam management, and massive MIMO explained for ECE students.",
    date: "February 28, 2026",
    author: "Aarav Sharma",
    category: "Article",
    readTime: "12 min read",
  },
  {
    title: "Workshop Recap: PCB Design with KiCad",
    excerpt:
      "Highlights from our January workshop where 85 students learned schematic capture, PCB layout, and design rule checks using KiCad 8.",
    date: "February 10, 2026",
    author: "Sneha Reddy",
    category: "Recap",
    readTime: "5 min read",
  },
  {
    title: "Embedded Rust: The Future of Firmware?",
    excerpt:
      "Exploring why Rust is gaining traction in the embedded world — memory safety, zero-cost abstractions, and the growing ecosystem for MCUs.",
    date: "January 25, 2026",
    author: "Karthik Iyer",
    category: "Article",
    readTime: "10 min read",
  },
  {
    title: "New Lab Equipment: What's Arrived",
    excerpt:
      "Exciting update — the ECE lab just received new oscilloscopes, logic analyzers, and a batch of STM32 development boards. Here's what you can do with them.",
    date: "January 15, 2026",
    author: "Ananya Gupta",
    category: "Announcement",
    readTime: "3 min read",
  },
]

const categoryColors: Record<string, string> = {
  Tutorial: "bg-green-500/10 text-green-400 border-green-500/20",
  News: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Article: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Recap: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Announcement: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
}

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              News
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Articles, tutorials, event recaps, and announcements from the ECE
            Society community.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group relative flex flex-col p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] transition-all duration-300"
            >
              {/* Category */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    categoryColors[post.category] || categoryColors.Article
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <UserIcon className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Read More */}
              <button className="mt-4 inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium w-fit">
                Read Article
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
