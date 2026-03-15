import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react"

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "President",
    department: "ECE, Final Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Aarav",
    linkedin: "#",
    github: "#",
    email: "aarav@ecesoc.edu",
  },
  {
    name: "Priya Patel",
    role: "Vice President",
    department: "ECE, Final Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
    linkedin: "#",
    github: "#",
    email: "priya@ecesoc.edu",
  },
  {
    name: "Rohan Mehta",
    role: "Technical Lead",
    department: "ECE, Third Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Rohan",
    linkedin: "#",
    github: "#",
    email: "rohan@ecesoc.edu",
  },
  {
    name: "Sneha Reddy",
    role: "Events Coordinator",
    department: "ECE, Third Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Sneha",
    linkedin: "#",
    github: "#",
    email: "sneha@ecesoc.edu",
  },
  {
    name: "Vikram Singh",
    role: "Design Head",
    department: "ECE, Second Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Vikram",
    linkedin: "#",
    github: "#",
    email: "vikram@ecesoc.edu",
  },
  {
    name: "Ananya Gupta",
    role: "Content Lead",
    department: "ECE, Second Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Ananya",
    linkedin: "#",
    github: "#",
    email: "ananya@ecesoc.edu",
  },
  {
    name: "Karthik Iyer",
    role: "Outreach Lead",
    department: "ECE, Third Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Karthik",
    linkedin: "#",
    github: "#",
    email: "karthik@ecesoc.edu",
  },
  {
    name: "Meera Nair",
    role: "Treasurer",
    department: "ECE, Final Year",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Meera",
    linkedin: "#",
    github: "#",
    email: "meera@ecesoc.edu",
  },
]

export default function TeamPage() {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the passionate individuals who drive ECE Society forward. Our
            committee brings together diverse skills and a shared love for
            electronics and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.03] transition-all duration-300 text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/20 overflow-hidden group-hover:border-indigo-500/40 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-indigo-400 text-sm font-medium mt-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs mt-1">{member.department}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={member.github}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <MailIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
