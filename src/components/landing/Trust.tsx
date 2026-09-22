import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Trust() {
  const [trust] = useContentSection("trust");

  return (
    <section id="about" className="section-pad relative overflow-hidden" style={{ backgroundColor: "#0078c3" }}>
      <GraduationCap aria-hidden="true" strokeWidth={1} className="pointer-events-none absolute -top-12 right-[-50px] size-[420px] rotate-[18deg] text-white/10 md:size-[480px]" />

      <div className="shell relative z-10">
        <div className="flex items-start justify-between gap-6">
          <Reveal className="max-w-5xl space-y-4">
            <span className="inline-flex items-center rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-gold uppercase">
              {trust.badge}
            </span>
            <h2 className="whitespace-pre-line text-3xl leading-tight text-on-navy md:text-4xl lg:text-[2.3rem]">
              {trust.heading}
            </h2>
            <p className="max-w-3xl text-base text-on-navy-muted md:text-lg">
              {trust.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-5">
          {trust.cards.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 0.08}
              className="rounded-2xl bg-card p-4 md:p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="grid size-7 md:size-10 shrink-0 place-items-center rounded-full bg-gold font-display text-xs md:text-sm font-extrabold text-navy">
                    {i + 1}
                  </span>
                  <h3 className="text-xs md:text-xl font-semibold md:font-normal text-ink leading-tight">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-2 md:mt-4 text-[11px] sm:text-xs md:text-sm leading-snug md:leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
