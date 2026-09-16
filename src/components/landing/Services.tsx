import { useState } from "react";
import { BadgeCheck, Building2, Languages, Sun, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

const tabIcon: Record<string, typeof Building2> = {
  uni: Building2,
  lang: Languages,
  camps: Sun,
};

export function Services() {
  const [services] = useContentSection("services");
  const tabs = services.tabs;
  
  if (!tabs || tabs.length === 0) return null;

  const defaultTab = tabs[0]!;
  const [active, setActive] = useState(defaultTab.id);

  const current = tabs.find((t) => t.id === active) ?? defaultTab;
  const Icon = tabIcon[current.id] ?? GraduationCap;

  return (
    <section id="services" className="bg-background section-pad">
      <div className="shell">
        <SectionHeading eyebrow="Услуги и стоимость" title={services.heading} />
        
        <div 
          role="tablist" 
          aria-label="Категории услуг" 
          className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 rounded-full bg-secondary p-2"
        >
          {tabs.map((t) => (
            <button 
              key={t.id} 
              role="tab" 
              id={`tab-${t.id}`} 
              aria-selected={active === t.id} 
              aria-controls={`panel-${t.id}`} 
              onClick={() => setActive(t.id)} 
              className={
                "rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 " + 
                (active === t.id ? "bg-navy text-on-navy" : "text-muted-foreground hover:text-ink")
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <div 
          role="tabpanel" 
          id={`panel-${current.id}`} 
          aria-labelledby={`tab-${current.id}`} 
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {current.services.map((s, i) => (
            <Reveal 
              key={s.id} 
              delay={i * 0.08} 
              className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-14 place-items-center rounded-2xl" style={{ backgroundColor: "#0078c3" }}>
                {i === 0 ? <Icon className="size-7 text-gold" aria-hidden="true" /> : <BadgeCheck className="size-7 text-gold" aria-hidden="true" />}
              </span>
              
              <h3 className="mt-5 text-xl text-ink">{s.title}</h3>
              
              <ul className="mt-4 flex-1 space-y-2.5">
                {s.includes.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-muted-foreground">
                    <BadgeCheck className="mt-0.5 size-4 flex-shrink-0 text-teal" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>

              <a
                href="https://whatsapp.com."
                target="_blank"
                rel="noreferrer"
                className="group relative mt-6 block overflow-hidden rounded-2xl bg-gold px-5 py-4 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="font-display text-xl font-extrabold text-navy">{s.priceUsd}</p>
                <p className="mt-0.5 text-xs font-semibold text-navy/70">{s.priceKgs}</p>
                <span aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 translate-x-1 text-xs font-bold text-navy/70 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" >
                  нажми →
                </span>
              </a>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Точная стоимость определяется на консультации — она зависит от страны, программы и объёма сопровождения.
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
