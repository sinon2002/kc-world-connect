import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: "36+", label: "лет на рынке образовательных услуг" },
  { value: "25+", label: "стран и направлений обучения" },
  { value: "№1", label: "по широте партнёрской сети вузов в КР" },
  { value: "10 000+", label: "студентов поступили с сопровождением KC" },
];

const partners = [
  "University of Toronto",
  "TU Berlin",
  "Sapienza",
  "Nanyang Poly",
  "UCL",
  "Bilkent",
  "Monash",
  "Sungkyunkwan",
];

export function Trust() {
  return (
    <section className="bg-navy-2 section-pad">
      <div className="shell">
        <SectionHeading
          tone="dark"
          eyebrow="Доверие"
          title="Нам доверяют абитуриенты и университеты по всему миру"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 0.08}
              className="rounded-3xl border border-on-navy/12 bg-navy/60 p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-4xl font-extrabold text-gold md:text-5xl">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-on-navy-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="text-center text-xs font-bold tracking-[0.18em] text-on-navy-muted uppercase">
            Университеты-партнёры
          </p>
          <ul className="mt-6 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
            {partners.map((p) => (
              <li
                key={p}
                className="grid h-20 min-w-[11rem] flex-shrink-0 place-items-center rounded-2xl border border-on-navy/12 bg-on-navy/6 px-5 text-center text-sm font-semibold text-on-navy-muted"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
