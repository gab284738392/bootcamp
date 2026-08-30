type ExperienceItem = {
  id: number;
  role: string;
  org: string;
  period: string;
  description: string;
};

type CertificationItem = {
  id: number;
  name: string;
  year: string;
  issuer: string;
};

type ExperienceProps = {
  experiences: ExperienceItem[];
  certifications: CertificationItem[];
};

export default function Experience({ experiences, certifications }: ExperienceProps) {
  return (
    <section id="experience" className="w-full bg-[#ede6db]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-24">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#7a9470] mb-2">Background</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl text-[#2c2620]"
          >
            Experience &<br className="hidden md:block" /> Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#7a9470] mt-1.5 shrink-0" />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-[#c8c0b4] my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-bold text-[#7a9470] tracking-wide mb-0.5">{exp.period}</p>
                  <h3 className="font-extrabold text-[#2c2620] text-base">{exp.role}</h3>
                  <p className="font-semibold text-[#7a9470] text-sm mb-2">{exp.org}</p>
                  <p className="text-sm text-[#6b6358] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#8a8278] mb-6">Courses and Certifications</p>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#d6cfc6] hover:shadow-sm transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg bg-[#e8f0e5] text-[#5c7254]">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-[#2c2620] text-sm leading-snug">{cert.name}</p>
                    <p className="text-xs text-[#8a8278] mt-0.5">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
