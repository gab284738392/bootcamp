import Chip from "@/components/Chip";
import { SKILLS } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#f8f3ec]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#7a9470] mb-2">What I work with</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl text-[#2c2620]"
            >
              Technical Skills
            </h2>
          </div>
          <p className="text-[#8a8278] text-sm max-w-xs">
            Tools and technologies I use to bring ideas from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-2xl border border-[#d6cfc6] bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl text-[#7a9470]">{group.icon}</span>
                <h3 className="font-extrabold text-[#2c2620] text-base">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
