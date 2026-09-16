import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

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

export function Trust() {
  return (
    <section id="about" className="section-pad relative overflow-hidden" style={{ backgroundColor: "#0078c3" }}>
      <GraduationCap
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -top-12 right-[-50px] size-[420px] rotate-[18deg] text-white/10 md:size-[480px]"
      />

      <div className="shell relative z-10">
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
        </div>

        {/* Изменено: grid-cols-2 заставляет сетку всегда быть в две колонки, gap уменьшен на мобильных */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-5">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              {/* Изменено: p-4 на мобильных вместо p-7, скругление rounded-2xl аккуратнее на смартфонах */}
              className="rounded-2xl bg-card p-4 md:p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Изменено: gap уменьшен на мобильных */}
                <div className="flex items-center gap-2 md:gap-4">
                  {/* Изменено: размер кружка уменьшен до size-7 на мобильных, текст text-xs */}
                  <span className="grid size-7 md:size-10 shrink-0 place-items-center rounded-full bg-gold font-display text-xs md:text-sm font-extrabold text-navy">
                    {i + 1}
                  </span>
                  {/* Изменено: размер заголовка text-xs на мобильных с плотным межстрочным интервалом */}
                  <h3 className="text-xs md:text-xl font-semibold md:font-normal text-ink leading-tight">{c.title}</h3>
                </div>
                {/* Изменено:mt-2 и text-[11px] на мобильных, чтобы текст не сжимался и легко читался */}
                <p className="mt-2 md:mt-4 text-[11px] sm:text-xs md:text-sm leading-snug md:leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
