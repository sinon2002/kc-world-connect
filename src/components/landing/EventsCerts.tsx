import { useState } from "react";
import { CalendarDays, Check, ChevronDown, ShieldCheck, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";
import fallbackEventsPhoto from "@/assets/events/students-library.jpg";

export function Events() {
  const [events] = useContentSection("events");
  const photo = events.photo ?? fallbackEventsPhoto;

  return (
       <section id="events" className="section-pad relative overflow-hidden">
      <BookOpen aria-hidden="true" strokeWidth={1} className="pointer-events-none absolute -top-6 right-[-70px] size-[360px] rotate-[-10deg] text-primary/10 md:size-[440px]" />
      <div className="shell relative z-10">
        <Reveal className="overflow-hidden rounded-4xl bg-card shadow-soft md:flex">
          <div className="h-64 md:h-auto md:w-[42%] md:flex-shrink-0">
            <img
              src={photo}
              alt="Студенты готовятся к поступлению за рубежом"
              width={720}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:w-[58%] md:p-14">
            <span className="inline-flex items-center gap-2 rounded bg-secondary px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-primary uppercase">
              {events.badge}
            </span>
            <h2
              className="mt-5 text-2xl leading-snug text-ink md:text-3xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {events.heading}
            </h2>
            <p className="mt-4 border-l-2 border-primary pl-3 text-xs font-bold tracking-[0.1em] text-primary uppercase">
              {events.highlight}
            </p>
            <ul className="mt-5 space-y-2.5">
              {events.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              {events.buttonText}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certificates() {
  const [certs] = useContentSection("certs");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="certs" className="bg-background pb-20 md:pb-28">
      <div className="shell">
        <SectionHeading eyebrow="Сертификаты" title=" Аккредитация агентства" />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {certs.items.map((c, i) => {
            const isOpen = open === i;
            
            // Проверка, является ли файл PDF-документом
            const isPdf = typeof c.image === "string" && c.image.toLowerCase().includes(".pdf");

            return (
              <Reveal key={c.id} delay={i * 0.06} className="overflow-hidden rounded-2xl bg-card shadow-soft">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`cert-panel-${i}`}
                    id={`cert-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <ShieldCheck className="size-5 flex-shrink-0 text-teal" aria-hidden="true" />
                    <span className="flex-1 font-display text-base font-bold text-ink">{c.title}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={
                        "size-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 " +
                        (isOpen ? "rotate-180" : "")
                      }
                    />
                  </button>
                </h3>
                
                <div
                  id={`cert-panel-${i}`}
                  role="region"
                  aria-labelledby={`cert-btn-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 flex flex-col md:flex-row md:items-start gap-6"
                >
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                  
                  {c.image && (
                    <div className="w-full md:w-1/3 h-80 flex-shrink-0 md:order-last overflow-hidden rounded-xl border border-border bg-secondary/30">
                      {isPdf ? (
                        /* Если это PDF — встраиваем интерактивное превью через iframe */
                        <iframe
                          src={`${c.image}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full border-none pointer-events-none"
                          title={c.title}
                        />
                      ) : (
                        /* Если обычная картинка (JPG/PNG) */
                        <img
                          src={c.image}
                          alt={c.title}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  ); 
}
