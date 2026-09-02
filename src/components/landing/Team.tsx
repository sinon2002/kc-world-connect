import { User } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const team = [
  {
    name: "Айгерим Осмонова",
    role: "Руководитель KC Education Abroad",
    bio: "12 лет в образовательном консалтинге, более 900 успешных зачислений в вузы Европы и Северной Америки.",
  },
  {
    name: "Нурбек Жумалиев",
    role: "Консультант: Европа и Германия",
    bio: "Специалист по Uni-Assist, Studienkolleg и немецким Fachhochschule. Сам учился в Берлине.",
  },
  {
    name: "Дилара Абдыкадырова",
    role: "Консультант: языковые курсы и лагеря",
    bio: "Подбирает языковые школы в 15 странах, курирует групповые каникулярные программы.",
  },
  {
    name: "Артур Тен",
    role: "Визовый специалист",
    bio: "Готовит студентов к интервью в посольствах США, Великобритании и Шенгена.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background section-pad">
      <div className="shell">
        <SectionHeading
          eyebrow="Команда"
          title="Консультанты, которые ведут вас от идеи до зачисления"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.07}
              className="rounded-3xl bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="grid aspect-4/5 place-items-center rounded-2xl bg-secondary">
                <User className="size-10 text-navy/30" aria-hidden="true" />
                <span className="sr-only">Фото консультанта (плейсхолдер)</span>
              </div>
              <h3 className="mt-5 text-lg text-ink">{m.name}</h3>
              <p className="mt-1 text-xs font-bold tracking-wide text-blue uppercase">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
