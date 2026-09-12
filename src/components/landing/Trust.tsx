import { Reveal } from "./Reveal";
import studyIllustration from "@/assets/about-study-illustration.png.asset.json";

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

function StudyingPerson() {
  return (
    <img
      src={studyIllustration.url}
      alt="Иллюстрация студента с ноутбуком и книгами"
      loading="eager"
      className="kc-float w-[100px] md:w-[120px]"
    />
  );
}

export function Trust() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: "#0078c3" }}>
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
      </div>
    </section>
  );
}
