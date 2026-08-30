import Image from "next/image";

type HeroProps = {
  user: {
    name: string | null;
    email: string;
    role: string;
  } | null;
};

export default function Hero({ user }: HeroProps) {
  const fullName = user?.name ?? "Portfolio";
  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ") || "";

  return (
    <section id="about" className="w-full bg-[#7a9470]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-sm font-semibold tracking-widest uppercase text-white/70">
              Portfolio 2026
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white"
          >
            {firstName}
            {lastName ? (
              <>
                <br />
                <span className="italic">{lastName}</span>
              </>
            ) : null}
          </h1>

          <p className="text-[#d4e6cf] text-lg leading-relaxed max-w-md">
            4th Year BSIT Student specializing in{" "}
            <span className="text-white font-bold">UI/UX Design</span> and{" "}
            <span className="text-white font-bold">Graphic Design</span> — crafting
            digital experiences that are both beautiful and functional.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#5c7254] font-extrabold text-sm hover:bg-[#f0e4e6] hover:text-[#7e3f4a] transition-all duration-200 shadow-sm"
            >
              View Projects <span>→</span>
            </a>
            <a
              href="#contact"
              className="text-sm font-bold text-white/80 underline underline-offset-4 decoration-white/40 hover:text-white hover:decoration-white transition-all duration-150"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] translate-x-4 translate-y-4 bg-[#5c7254]" />
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden flex items-end bg-[#9ab090]">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white"
                    style={{
                      width: `${60 + i * 30}px`,
                      height: `${60 + i * 30}px`,
                      top: `${10 + i * 8}px`,
                      left: `${20 - i * 5}px`,
                    }}
                  />
                ))}
              </div>

              <Image
                src="/gabrielle.png"
                alt={fullName}
                fill
                className="object-cover object-top"
              />

              <div className="relative w-full px-6 py-4 backdrop-blur-[8px] bg-[rgba(92,114,84,0.5)]">
                <p className="text-white/60 text-xs font-semibold tracking-widest uppercase">Interested?</p>
                <p className="text-white font-bold text-sm mt-0.5">Scroll for more!</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#f0e4e6] text-[#7e3f4a] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm border border-[#e0c9cc]">
              UI/UX · Graphic Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
