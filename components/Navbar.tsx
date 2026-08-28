"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#d6cfc6] bg-[#f8f3ec]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-[#2c2620] font-extrabold text-lg tracking-tight hover:text-[#7a9470] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Gabrielle Madarang
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-[#5a5248] hover:text-[#2c2620] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm font-bold px-5 py-2 rounded-full border-2 border-[#7a9470] text-[#7a9470] hover:bg-[#7a9470] hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#2c2620] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#2c2620] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#2c2620] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#d6cfc6] px-8 py-4 flex flex-col gap-4 bg-[#f8f3ec]">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-[#5a5248] hover:text-[#2c2620]"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold px-5 py-2 rounded-full border-2 border-[#7a9470] text-[#7a9470] text-center hover:bg-[#7a9470] hover:text-white transition-all duration-200">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
