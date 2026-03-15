"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    alt: "IoT Workshop 2026",
    event: "IoT Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80",
    alt: "Circuit Design Competition",
    event: "Circuit Design Challenge",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Tech Talk Session",
    event: "Tech Talks",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    alt: "Hackathon Team Working",
    event: "Smart Campus Hackathon",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    alt: "Team Collaboration",
    event: "Team Meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    alt: "Workshop Session",
    event: "PCB Design Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    alt: "Lab Work",
    event: "Embedded Systems Bootcamp",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=600&q=80",
    alt: "Electronics Lab",
    event: "Open Lab Day",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    alt: "Award Ceremony",
    event: "Annual Awards Night",
  },
]

export default function GalleryPage() {
  const [selected, setSelected] = React.useState<number | null>(null)

  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Photo{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Snapshots from our events, workshops, and community moments. Every
            picture tells a story of learning and collaboration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/5 cursor-pointer break-inside-avoid hover:border-indigo-500/30 transition-colors"
              onClick={() => setSelected(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {image.alt}
                  </p>
                  <p className="text-indigo-400 text-xs">{image.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close lightbox"
          >
            <XIcon className="w-5 h-5" />
          </button>
          <img
            src={galleryImages[selected].src.replace("w=600", "w=1200")}
            alt={galleryImages[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 text-center">
            <p className="text-white font-semibold">
              {galleryImages[selected].alt}
            </p>
            <p className="text-indigo-400 text-sm">
              {galleryImages[selected].event}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
