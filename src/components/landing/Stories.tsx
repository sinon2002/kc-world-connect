import { GraduationCap, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Stories() {
  const [stories] = useContentSection("stories");

  return (
    <section id="stories" className="bg-navy section-pad">
      <div className="shell">
        <SectionHeading tone="dark" eyebrow="Истории студентов" title={stories.heading} />

        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {stories.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={(i % 3) * 0.08}
              className="min-w-[85%] snap-center rounded-3xl border border-on-navy/12 bg-navy-2/70 p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-w-0"
            >
              <div className="grid aspect-video place-items-center overflow-hidden rounded-2xl bg-on-navy/8">
                {s.video ? (
                  <video src={s.video} className="h-full w-full object-cover" controls />
                ) : s.photo ? (
                  <img src={s.photo} alt={s.name} className="h-full w-full object-cover" />
                ) : (
                  <>
                    <GraduationCap className="size-10 text-gold/70" aria-hidden="true" />
                    <span className="sr-only">Фото студента (плейсхолдер)</span>
                  </>
                )}
              </div>
              <h3 className="mt-5 text-lg text-on-navy">{s.name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-gold">{s.place}</p>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-on-navy-muted">
                <Quote className="size-4 flex-shrink-0 text-teal" aria-hidden="true" />
                {s.quote}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
