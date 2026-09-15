import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Faq() {
  const [faq] = useContentSection("faq");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream section-pad">
      <svg
        aria-hidden="true"
        viewBox="0 0 120 260"
                               className="pointer-events-none absolute top-[60%] left-55 h-[300px] w-auto -translate-y-1/2 -rotate-6 text-primary/25 sm:h-[380px]"
      >
        <text x="0" y="200" fontSize="260" fontWeight="300" fill="none" stroke="currentColor" strokeWidth="2">
          !
        </text>
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 220 260"
                       className="pointer-events-none absolute top-[40%] -right-8 hidden h-[320px] w-auto -translate-y-1/2 rotate-6 text-primary/25 sm:block sm:h-[400px]"
      >
        <text x="0" y="200" fontSize="260" fontWeight="300" fill="none" stroke="currentColor" strokeWidth="2">
          ?
        </text>
      </svg>

      <div className="shell relative">
        <SectionHeading eyebrow="FAQ" title="Отвечаем на частые вопросы" />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={item.id}
                delay={Math.min(i, 6) * 0.04}
                className="overflow-hidden rounded-2xl bg-card shadow-soft"
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex-1 font-display text-base font-bold text-ink">{item.q}</span>
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
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {item.a}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
