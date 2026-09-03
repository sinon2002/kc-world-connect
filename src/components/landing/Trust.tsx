import { Reveal } from "./Reveal";
import logo from "@/assets/kc_logo_transparent.png.asset.json";

const cards = [
  {
    title: "Узнаваемый бренд",
    text: "Многолетняя история и репутационное доверие клиентов в Кыргызстане",
  },
  {
    title: "Широкий портфель",
    text: "Бакалавриат, магистратура, школьные программы, летние/зимние курсы, визовый консалтинг — более 15 стран",
  },
  {
    title: "Сформированная база",
    text: "Готовая база клиентов и сеть консультантов с опытом сопровождения студентов",
  },
  {
    title: "Экспертиза в поступлении",
    text: "Сильнейшая компетенция — визовый консалтинг и приёмная кампания, по оценке отраслевого аудита",
  },
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

function StudyingPerson() {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Иллюстрация студента с ноутбуком"
      className="kc-float size-[90px] md:size-[110px]"
    >
      {/* laptop / book */}
      <ellipse cx="60" cy="104" rx="34" ry="5" fill="var(--teal)" opacity="0.18" />
      {/* crossed legs */}
      <path
        d="M32 96c6-12 20-16 28-16s22 4 28 16c1 3-1 5-4 5H36c-3 0-5-2-4-5Z"
        fill="var(--navy-2)"
      />
      {/* body */}
      <path d="M60 44c12 0 20 9 20 21v18H40V65c0-12 8-21 20-21Z" fill="var(--teal)" />
      {/* head */}
      <circle cx="60" cy="30" r="13" fill="var(--gold-soft)" />
      <path d="M47 28c0-8 6-13 13-13s13 5 13 13c-4-4-8-5-13-5s-9 1-13 5Z" fill="var(--navy)" />
      {/* arms */}
      <path d="M40 66c-5 6-6 12-4 17l8-3c-1-5 0-9 3-13l-7-1Z" fill="var(--teal)" />
      <path d="M80 66c5 6 6 12 4 17l-8-3c1-5 0-9-3-13l7-1Z" fill="var(--teal)" />
      {/* laptop */}
      <path d="M42 84h36l6 10H36l6-10Z" fill="var(--gold)" />
      <rect x="46" y="70" width="28" height="15" rx="2" fill="var(--cream)" />
    </svg>
  );
}

export function Trust() {
  return (
    <section id="about" className="section-pad bg-navy">
      <div className="shell">
        <div className="flex items-start justify-between gap-6">
          <Reveal className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-gold uppercase">
              О нас
            </span>
            <h2 className="text-3xl leading-tight text-on-navy md:text-4xl lg:text-[2.75rem]">
              Kyrgyz Concept Образование за рубежом
            </h2>
            <p className="text-base text-on-navy-muted md:text-lg">
              Часть бренда Kyrgyz Concept с историей на рынке образовательного консалтинга
              Кыргызстана
            </p>
          </Reveal>
          <div className="hidden shrink-0 sm:block">
            <StudyingPerson />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className="rounded-3xl bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold font-display text-sm font-extrabold text-navy">
                  {i + 1}
                </span>
                <h3 className="text-lg text-ink md:text-xl">{c.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
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
      <img src={logo.url} alt="" hidden />
    </section>
  );
}
