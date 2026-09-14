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
        className="pointer-events-none absolute -top-10 left-[-60px] size-[360px] rotate-[-12deg] text-primary/10 md:size-[420px]"
      />

      <div className="shell relative z-10">
        <SectionHeading eyebrow="Команда" title={team.heading} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.items.map((m, i) => (
            <Reveal
              key={m.id}
              delay={i * 0.07}
              className="rounded-3xl bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="grid aspect-4/5 place-items-center overflow-hidden rounded-2xl bg-secondary">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <>
                    <User className="size-10 text-navy/30" aria-hidden="true" />
                    <span className="sr-only">Фото консультанта (плейсхолдер)</span>
                  </>
                )}
              </div>
              <h3 className="mt-5 text-lg text-ink">{m.name}</h3>
              <p className="mt-1 text-xs font-bold tracking-wide text-blue uppercase">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
