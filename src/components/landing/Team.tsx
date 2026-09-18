import { User, Heart } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Team() {
  const [team] = useContentSection("team");

  return (
    <section id="team" className="bg-background section-pad relative overflow-hidden">
      <Heart
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -top-10 left-[-80px] size-[360px] rotate-[-12deg] text-primary/10 md:size-[420px]"
      />

      <div className="shell relative z-10">
        <SectionHeading eyebrow="Команда" title={team.heading} />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {team.items.map((m, i) => (
            <Reveal
              key={m.id}
              delay={i * 0.07}
              className="rounded-2xl bg-card p-3 md:p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col items-center justify-between text-center"
            >
              <div className="w-full flex flex-col items-center text-center">
                <div className="w-full max-w-[240px] grid aspect-[4/5] place-items-center overflow-hidden rounded-xl md:rounded-2xl bg-secondary mx-auto">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                  ) : (
                    <>
                      <User className="size-6 md:size-10 text-navy/30" aria-hidden="true" />
                      <span className="sr-only">Фото консультанта (плейсхолдер)</span>
                    </>
                  )}
                </div>
                
                <h3 className="mt-4 text-xs md:text-lg font-bold md:font-normal text-ink leading-tight max-w-[200px] text-center mx-auto">
                  {m.name}
                </h3>
                
                <p className="mt-1.5 text-[10px] md:text-xs font-bold tracking-wide text-blue uppercase leading-tight max-w-[200px] text-center mx-auto">
                  {m.role}
                </p>
                
                <p className="mt-3 text-[11px] sm:text-xs md:text-sm leading-snug md:leading-relaxed text-muted-foreground max-w-[240px] text-center mx-auto">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
