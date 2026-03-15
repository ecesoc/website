import Link from "next/link"
import HeroSection from "@/components/HeroSection"
import {
  UsersIcon,
  CalendarIcon,
  TrophyIcon,
  ArrowRightIcon,
  CpuIcon,
  WifiIcon,
  CircuitBoardIcon,
  CodeIcon,
  RocketIcon,
  LightbulbIcon,
} from "lucide-react"

const stats = [
  { icon: UsersIcon, value: "200+", label: "Active Members" },
  { icon: CalendarIcon, value: "50+", label: "Events Hosted" },
  { icon: TrophyIcon, value: "30+", label: "Awards Won" },
  { icon: CodeIcon, value: "15+", label: "Projects Built" },
]

const highlights = [
  {
    icon: CpuIcon,
    title: "Hardware Labs",
    description:
      "Hands-on experience with cutting-edge microcontrollers, FPGAs, and IoT boards in our dedicated lab space.",
  },
  {
    icon: WifiIcon,
    title: "Signal Processing",
    description:
      "Deep dives into DSP, communications, and antenna design through workshops and competitions.",
  },
  {
    icon: CircuitBoardIcon,
    title: "Circuit Design",
    description:
      "From PCB layout to VLSI, members tackle real-world circuit challenges and prototyping.",
  },
  {
    icon: RocketIcon,
    title: "Tech Talks",
    description:
      "Industry leaders and alumni share insights on emerging technologies and career paths.",
  },
  {
    icon: LightbulbIcon,
    title: "Hackathons",
    description:
      "Regular 24-48 hour hackathons blending hardware and software to solve real problems.",
  },
  {
    icon: CodeIcon,
    title: "Embedded Systems",
    description:
      "Build firmware, program robots, and develop IoT solutions with expert guidance.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ======= HERO SECTION ======= */}
      <HeroSection />

      {/* ======= STATS SECTION ======= */}
      <section className="relative py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all">
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= ABOUT SECTION ======= */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ECE Society
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              ECE Society is the official student-run organization for the
              Department of Electronics &amp; Communication Engineering. We
              bring together students passionate about circuits, embedded
              systems, signal processing, communications, and everything in
              between. Through workshops, hackathons, tech talks, and
              collaborative projects, we empower our members to push the
              boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
      </section>

      {/* ======= HIGHLIGHTS SECTION ======= */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From hands-on labs to industry connections, discover what makes ECE
              Society the place to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA SECTION ======= */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Whether you&apos;re a first-year or a final-year student, there&apos;s a
            place for you in ECE Society. Connect, learn, and build with us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 text-lg"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}