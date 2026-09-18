import { useRef, useState } from "react";
import { GraduationCap, Play, Quote, BookMarked } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

function StoryVideo({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function handlePlay() {
    const el = videoRef.current;
    if (!el) return;
    setPlaying(true);
    try {
      await el.play();
    } catch {
      // автоплей может быть заблокирован — плеер всё равно откроется
    }
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        controls={playing}
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Смотреть видео: ${name}`}
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
        >
          <span className="grid size-16 place-items-center rounded-full bg-black/70 shadow-lg transition-transform duration-200 hover:scale-105">
            <Play className="ml-1 size-7 fill-white text-white" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

export function Stories() {
  const [stories] = useContentSection("stories");

  return (
    <section id="stories" className="section-pad relative overflow-hidden" style={{ backgroundColor: "#0078c3" }}>
      <BookMarked
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -top-2 right-[-40px] size-[360px] rotate-[12deg] text-white/10 md:size-[420px]"
      />

      <div className="shell relative z-10">
        <SectionHeading tone="dark" eyebrow="Истории студентов" title={stories.heading} />

        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {stories.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={(i % 3) * 0.08}
              className="min-w-[85%] snap-center rounded-3xl border border-on-navy/12 bg-navy-2/70 p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-w-0"
            >
              <div className={`grid place-items-center overflow-hidden rounded-2xl bg-on-navy/8 ${s.video ? "aspect-[9/16]" : "aspect-video"}`}>
                {s.video ? (
                  <StoryVideo src={s.video} name={s.name} />
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
