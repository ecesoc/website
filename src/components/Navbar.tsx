import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
    { name: "Sponsor Us", href: "/sponsor-us" },
  ];

  return (
    // UPDATED: Added opacity (/80), backdrop-blur-md, and a subtle bottom border
    <nav className="bg-[#0B0F2A]/80 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* --- LEFT SECTION: ECESOC Text Only --- */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-wide uppercase">
            ECESOC
          </Link>
        </div>

        {/* --- CENTER SECTION: Main Navigation Links --- */}
        <div className="hidden lg:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- RIGHT SECTION: Auth Buttons --- */}
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-white hover:text-blue-300 transition-colors text-sm font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold py-2 px-5 rounded-md"
          >
            Sign Up
          </Link>
        </div>
        
      </div>
    </nav>
  );
}