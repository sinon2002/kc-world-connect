import { Reveal } from "./Reveal";

const stats = [
  {
    number: "10 000+",
    label: "студентов",
    text: "Успешно поступили и обучаются за рубежом с нашей поддержкой и полным сопровождением.",
  },
  {
    number: "90+",
    label: "направлений",
    text: "Широкий выбор стран, университетов и языковых программ по всему земному шару.",
  },
  {
    number: "35+ лет",
    label: "опыта на рынке",
    text: "Многолетняя история, сильная экспертиза и репутационное доверие клиентов в Кыргызстане.",
  },
];

export function TrustStats() {
  return (
    <section id="trust-stats" className="section-pad bg-background">
      <div className="shell">
       <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-[#0078C3] px-6 py-12 sm:px-10 md:px-14 md:py-16">
          {/* декоративные кольца на фоне */}
          <div
            aria-hidden="true"
           className="pointer-events-none absolute -top-24 right-16 size-[340px] rounded-full border-[40px] border-white/15"
          />
          <div
            aria-hidden="true"
           className="pointer-events-none absolute -bottom-10 -right-24 h-28 w-[520px] rotate-[-15deg] rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          <div className="relative z-10">
           <h2 className="max-w-3xl text-lg font-extrabold uppercase leading-snug tracking-tight text-white sm:text-2xl">
              Учёба за границей. Получите образование в лучших университетах мира
            </h2>
           <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/75">
              Нам доверяют абитуриенты и университеты по всему миру
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="flex min-h-[230px] flex-col rounded-[1.75rem] bg-card p-7 shadow-soft"
                >
                  <div className="font-display text-3xl font-extrabold text-primary">{s.number}</div>
                  <div className="mt-2 text-sm font-bold text-ink">{s.label}</div>
                  <p className="mt-auto pt-6 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
              ))}

              {/* акцентная карточка с наклоном */}
              <Reveal
                delay={0.32}
                className="flex min-h-[230px] rotate-[3deg] flex-col rounded-[1.75rem] bg-gradient-to-br from-[#2CE08A] to-[#19B368] p-7 shadow-gold"
              >
                <div className="font-display text-2xl font-extrabold leading-tight text-white">Высокий шанс</div>
                <div className="mt-2 text-sm font-bold text-white">на зачисление</div>
                <p className="mt-auto pt-6 text-xs leading-relaxed text-white/90">
                  Мы пошагово ведём по системе, снижая риск отказа до минимума.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
