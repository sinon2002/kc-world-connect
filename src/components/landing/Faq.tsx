import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Faq() {
  const [faq] = useContentSection("faq");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream section-pad">
      <div className="shell">
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
