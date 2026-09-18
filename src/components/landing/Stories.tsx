import { useState, useRef } from "react";
import { GraduationCap, Play, Quote, BookMarked, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

function StoryThumb({ src }: { src: string }) {
  return <video src={src} className="h-full w-full object-cover" muted playsInline preload="metadata" />;
}

function VideoModal({ src, name, onClose }: { src: string; name: string; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Видео: ${name}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6 backdrop-blur-sm"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-2xl bg-black shadow-2xl">
        <video src={src} className="h-full w-full object-cover" controls autoPlay playsInline />
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть видео"
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function Stories() {
  const [stories] = useContentSection("stories");
  const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);
  
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75; 
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="stories" className="section-pad relative overflow-hidden" style={{ backgroundColor: "#0078c3" }}>
      <BookMarked
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -top-2 right-[-40px] size-[360px] rotate-[12deg] text-white/10 md:size-[420px]"
      />

      <div className="shell relative z-10">
        <SectionHeading tone="dark" eyebrow="Истории студентов" title={stories.heading} />
        
        {/* Обертка для списка и стрелочек, чтобы позиционировать их по бокам */}
        <div className="relative mt-12">
          
          {/* Левая стрелочка — скрыта на компьютерах */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Предыдущий слайд"
            className="absolute left-2 top-[35%] z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all active:scale-95 active:bg-black/50 sm:hidden shadow-lg"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Правая стрелочка — скрыта на компьютерах */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Следующий слайд"
            className="absolute right-2 top-[35%] z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all active:scale-95 active:bg-black/50 sm:hidden shadow-lg"
          >
            <ChevronRight className="size-6" />
          </button>

          <ul 
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
          >
            {stories.items.map((s, i) => (
              <Reveal
                as="li"
                key={s.id}
                delay={(i % 3) * 0.08}
                className="min-w-[72%] max-w-[260px] snap-center rounded-2xl border border-on-navy/12 bg-navy-2/70 p-4 transition-transform duration-300 hover:-translate-y-1 sm:min-w-0 sm:max-w-none"
              >
                <div
                  onClick={() => s.video && setActiveVideo({ src: s.video, name: s.name })}
                  className={`grid place-items-center overflow-hidden rounded-xl bg-on-navy/8 ${s.video ? "aspect-[4/5] cursor-pointer" : "aspect-video"}`}
                >
                  {s.video ? (
                    <div className="relative h-full w-full">
                      <StoryThumb src={s.video} />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/35">
                        <span className="grid size-12 place-items-center rounded-full bg-black/70 shadow-lg transition-transform duration-200 hover:scale-105">
                          <Play className="ml-0.5 size-5 fill-white text-white" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  ) : s.photo ? (
                    <img src={s.photo} alt={s.name} className="h-full w-full object-cover" />
                  ) : (
                    <>
                      <GraduationCap className="size-10 text-gold/70" aria-hidden="true" />
                      <span className="sr-only">Фото студента (плейсхолдер)</span>
                    </>
                  )}
                </div>
                <h3 className="mt-4 text-base text-on-navy">{s.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gold">{s.place}</p>
                <p className="mt-3 flex gap-2 text-sm leading-relaxed text-on-navy-muted">
                  <Quote className="size-4 flex-shrink-0 text-teal" aria-hidden="true" />
                  {s.quote}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {activeVideo && <VideoModal src={activeVideo.src} name={activeVideo.name} onClose={() => setActiveVideo(null)} />}
    </section>
  );
}
