import Image from "next/image";
import { PROJECTS } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#6b3540]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#d4a0a8] mb-2">Selected work</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl text-white"
            >
              Key Projects
            </h2>
          </div>
          <p className="text-[#c49aa0] text-sm max-w-xs">
            A selection of design and development projects built during school and internships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="rounded-2xl overflow-hidden flex flex-col group"
              style={{ backgroundColor: p.color }}
            >
              <div className="h-44 relative overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ backgroundColor: p.color, opacity: 0.5 }}
                />
                <span
                  style={{ fontFamily: "var(--font-display)", color: p.accent, fontSize: "4rem", lineHeight: 1 }}
                  className="absolute inset-0 flex items-center justify-center select-none opacity-30 group-hover:opacity-0 transition-opacity duration-300"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: p.accent + "20", color: p.accent, backdropFilter: "blur(4px)" }}
                >
                  ↗
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: p.accent + "18", color: p.accent }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-xs" style={{ color: p.accent + "99" }}>{p.year}</span>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", color: p.accent }} className="text-2xl">
                  {p.name}
                </h3>

                <p className="text-sm leading-relaxed flex-1" style={{ color: p.accent + "cc" }}>
                  {p.desc}
                </p>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
