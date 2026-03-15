import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
    { name: "Sponsor Us", href: "/sponsor-us" },
  ];

  return (
    <nav className="bg-[#0B0F2A]/10 backdrop-blur-md text-white p-4 sticky top-4 z-50 border border-gray-800 rounded-xl mx-4 md:mx-10 lg:mx-20 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* --- LEFT SIDE: ECESOC  --- */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wide uppercase">
            <Image
              src="/data/images/logo.jpg"
              alt="ECESOC Logo"
              width={40}
              height={40}
              className="h-9 w-auto"
            />
            ECESOC
          </Link>
        </div>

        {/* --- CENTER : Main Navigation Links --- */}
        <div className="hidden lg:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: INSTA LINKEDIN ETC LINKS */}
        <div className="flex items-center gap-5">
          
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://linkedin.com/company/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}