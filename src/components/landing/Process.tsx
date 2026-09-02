import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    title: "Диагностика",
    text: "Бесплатная консультация: оцениваем цели, бюджет и академический бэкграунд.",
  },
  {
    title: "Подбор вуза и программы",
    text: "Формируем список из 3–5 учебных заведений с реальными шансами на поступление.",
  },
  {
    title: "Подготовка к тестам",
    text: "Помогаем выбрать курсы и график подготовки к IELTS, TOEFL, SAT.",
  },
  {
    title: "Документы и эссе",
    text: "Мотивационные письма, резюме, рекомендации — вычитываем и доводим до уровня вуза.",
  },
  {
    title: "Виза",
    text: "Готовим полный пакет документов и тренируем собеседование в посольстве.",
  },
  {
    title: "Сопровождение после зачисления",
    text: "Жильё, страховка, перелёт и адаптация на месте — остаёмся с вами.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background section-pad">
      <div className="shell">
        <SectionHeading
          eyebrow="Процесс"
          title="Учёба за границей. Получите образование в лучших университетах мира"
          subtitle="Шесть понятных шагов — вы всегда знаете, что происходит сейчас и что будет дальше."
        />

        <ol className="relative mt-14 space-y-6 md:space-y-8">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-6 hidden border-l-2 border-dashed border-blue/30 md:block"
          />
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.06}
              className="relative flex gap-5 rounded-3xl bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift md:ml-0 md:pl-8"
            >
              <span className="grid size-12 flex-shrink-0 place-items-center rounded-2xl bg-navy font-display text-lg font-extrabold text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg text-ink md:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
