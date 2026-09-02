import { useState } from "react";
import { CalendarDays, ChevronDown, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const certs = [
  {
    title: "British Council certified agency",
    text: "Сертифицированное агентство British Council: работаем по стандартам британских образовательных институций и аккредитованных языковых школ UK.",
  },
  {
    title: "ICEF certified agents",
    text: "Наши консультанты прошли обучение ICEF Agency Training Course — международный стандарт качества образовательного консалтинга.",
  },
  {
    title: "US Education certified agents",
    text: "Сертификация по программам обучения в США: работа с колледжами, университетами и требованиями F-1 визы.",
  },
];

export function Events() {
  return (
    <section id="events" className="section-pad">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-navy via-navy-2 to-blue p-8 md:p-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-gold uppercase">
              Мероприятия
            </span>
            <h2 className="mt-5 text-2xl leading-snug text-on-navy md:text-4xl">
              Регулярно проводим встречи с лидерами мнений, представителями университетов и
              студентами, которые уже учатся за рубежом
            </h2>
            <a
              href="#consult"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-bold text-navy shadow-gold transition-transform duration-200 hover:-translate-y-1"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Смотреть ближайшие мероприятия
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certificates() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="certs" className="bg-background pb-20 md:pb-28">
      <div className="shell">
        <SectionHeading eyebrow="Сертификаты" title="Аккредитации агентства" />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {certs.map((c, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={c.title} delay={i * 0.06} className="overflow-hidden rounded-2xl bg-card shadow-soft">
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
                  className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {c.text}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
