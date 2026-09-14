import { ArrowDownRight, Plane } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { title: "Диагностика", text: "Бесплатная консультация: оцениваем цели, бюджет и академический бэкграунд." },
  { title: "Подбор вуза и программы", text: "Формируем список из 3–5 учебных заведений с реальными шансами на поступление." },
  { title: "Подготовка к тестам", text: "Помогаем выбрать курсы и график подготовки к IELTS, TOEFL, SAT." },
  { title: "Документы и эссе", text: "Мотивационные письма, резюме, рекомендации — вычитываем и доводим до уровня вуза." },
  { title: "Виза", text: "Готовим полный пакет документов и тренируем собеседование в посольстве." },
  { title: "Сопровождение после зачисления", text: "Жильё, страховка, перелёт и адаптация на месте — остаёмся с вами." },
];

export function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-background">
      <Plane
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -top-12 right-[-60px] size-[380px] rotate-[35deg] text-primary/10 md:size-[440px]"
      />
      <div className="shell relative z-10">
        <SectionHeading eyebrow="Маршрут поступления" title="Учёба за границей. Получите образование в лучших университетах мира" subtitle="Шесть понятных шагов — вы всегда знаете, что происходит сейчас и что будет дальше." align="left" />
        <ol className="relative mt-16 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full text-primary/25 lg:block" preserveAspectRatio="none"><path d="M40 100 C 220 0, 310 180, 470 80 S 720 0, 920 100 S 1110 180, 1260 65" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" className="route-dash" /></svg>
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.09} className={`${index % 2 === 1 ? "lg:translate-y-16" : ""} relative min-h-56 rounded-md border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift`}>
              <div className="flex items-start justify-between"><span className="font-display text-4xl font-bold text-primary">0{index + 1}</span><ArrowDownRight className="size-5 text-accent" /></div>
              <h3 className="mt-8 text-xl text-ink">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
