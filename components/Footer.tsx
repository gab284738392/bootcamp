const SOCIALS = [
  { label: "LinkedIn", url: "https://linkedin.com/in/gabrielle-madarang-3364853a6" },
  { label: "Behance", url: "https://behance.net/gabriellemadarang/" },
  { label: "GitHub", url: "https://github.com/gab284738392/" },
  { label: "Facebook", url: "https://facebook.com/gabrieIIemadarang/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#2c2620]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-2xl text-white">
              Gabrielle Madarang
            </h3>
            <p className="text-sm text-[#9a9188] leading-relaxed">
              4th Year BSIT Student · UI/UX &amp; Graphic Design
              <br />
              Rizal Technological University
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#7a9470] mb-1">Contact</p>
            <a href="mailto:gabmadarang33@gmail.com" className="text-sm text-[#c8c0b4] hover:text-white transition-colors">
              gabmadarang33@gmail.com
            </a>
            <a href="tel:+639455237962" className="text-sm text-[#c8c0b4] hover:text-white transition-colors">
              +63 945 523 7962
            </a>
            <p className="text-sm text-[#9a9188]">Manila, Philippines</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#7a9470] mb-1">Socials</p>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c8c0b4] hover:text-white transition-colors group"
              >
                <span className="w-4 h-px bg-[#c8c0b4] group-hover:bg-white group-hover:w-6 transition-all duration-200" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6b6358]">© 2026 Gabrielle Madarang. All rights reserved.</p>
          <p className="text-xs text-[#6b6358]">{"Let's connect! ✦"}</p>
        </div>
      </div>
    </footer>
  );
}
