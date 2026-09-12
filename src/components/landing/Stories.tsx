import { GraduationCap, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const stories = [
  {
    name: "Айсулуу М.",
    place: "Канада · University of Toronto · Computer Science",
    quote:
      "Мне казалось, что топовые вузы — не про меня. Консультант разложил всё по шагам, и я получила offer с частичной стипендией.",
  },
  {
    name: "Тимур А.",
    place: "Германия · TU Berlin · Mechanical Engineering",
    quote:
      "Самое сложное было с документами и Uni-Assist. KC вели меня буквально за руку, ни один дедлайн не пропущен.",
  },
  {
    name: "Алина К.",
    place: "Италия · Sapienza · Design",
    quote: "Помогли собрать портфолио и мотивационное письмо. Виза — с первого раза.",
  },
  {
    name: "Бекзат Ы.",
    place: "Южная Корея · SKKU · Business",
    quote: "Подобрали программу под мой бюджет и нашли общежитие ещё до отъезда.",
  },
  {
    name: "Мадина С.",
    place: "Великобритания · UCL · Foundation",
    quote: "Начали за год: подготовка к IELTS, потом заявка. Итог — 7.0 и место на foundation.",
  },
  {
    name: "Эрнис Т.",
    place: "Турция · Bilkent · Architecture",
    quote: "Прошёл на грант. Без сопровождения я бы просто не разобрался в требованиях.",
  },
];

export function Stories() {
  return (
   <section id="stories" className="section-pad" style={{ backgroundColor: "#0078c3" }}>
      <div className="shell">
        <SectionHeading
          tone="dark"
          eyebrow="Истории студентов"
          title="Их поступление — не случайность, а результат подготовки"
        />

        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={(i % 3) * 0.08}
              className="min-w-[85%] snap-center rounded-3xl border border-on-navy/12 bg-navy-2/70 p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-w-0"
            >
              <div className="grid aspect-video place-items-center rounded-2xl bg-on-navy/8">
                <GraduationCap className="size-10 text-gold/70" aria-hidden="true" />
                <span className="sr-only">Фото студента (плейсхолдер)</span>
              </div>
              <h3 className="mt-5 text-lg text-on-navy">{s.name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-gold">{s.place}</p>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-on-navy-muted">
                <Quote className="size-4 flex-shrink-0 text-teal" aria-hidden="true" />
                {s.quote}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
