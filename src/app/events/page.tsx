import { CalendarIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from "lucide-react"

const upcomingEvents = [
  {
    title: "IoT Workshop 2026",
    date: "March 28, 2026",
    time: "10:00 AM – 4:00 PM",
    location: "ECE Lab, Block A",
    description:
      "Hands-on workshop covering ESP32, MQTT protocols, and building a full IoT pipeline from sensor to cloud dashboard.",
    tag: "Workshop",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    title: "Circuit Design Challenge",
    date: "April 5, 2026",
    time: "9:00 AM – 6:00 PM",
    location: "Seminar Hall, Block B",
    description:
      "A competitive event where teams design, simulate, and prototype analog circuits to solve real-world problems.",
    tag: "Competition",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    title: "Tech Talk: 5G & Beyond",
    date: "April 12, 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Auditorium",
    description:
      "Industry expert Dr. Rajan Kumar discusses the future of wireless communications and 6G research directions.",
    tag: "Talk",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
]

const pastEvents = [
  {
    title: "Embedded Systems Bootcamp",
    date: "February 15, 2026",
    attendees: 120,
  },
  {
    title: "PCB Design Workshop",
    date: "January 22, 2026",
    attendees: 85,
  },
  {
    title: "AI in Signal Processing Seminar",
    date: "December 10, 2025",
    attendees: 200,
  },
  {
    title: "Hackathon: Smart Campus",
    date: "November 18, 2025",
    attendees: 150,
  },
  {
    title: "Antenna Design Competition",
    date: "October 5, 2025",
    attendees: 60,
  },
]

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From workshops and hackathons to tech talks and competitions — stay
            updated with everything happening at ECE Society.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${event.tagColor}`}
                  >
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-indigo-400/60" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-indigo-400/60" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-indigo-400/60" />
                    {event.location}
                  </div>
                </div>

                <button className="mt-5 inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Learn More
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-2 h-8 rounded-full bg-gradient-to-b from-gray-500 to-gray-700" />
            Past Events
          </h2>

          <div className="space-y-3">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {event.attendees} attendees
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
