import { useState } from "react";
import { BadgeCheck, Building2, Languages, Sun } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

type Service = {
  icon: typeof Building2;
  title: string;
  includes: string[];
  priceUsd: string;
  priceKgs: string;
};

const tabs: { id: string; label: string; services: Service[] }[] = [
  {
    id: "uni",
    label: "Университеты и школы",
    services: [
      {
        icon: Building2,
        title: "Партнёрские университеты и школы",
        includes: [
          "Подбор 3–5 программ с реальными шансами",
          "Полная подготовка пакета документов",
          "Эссе, резюме, рекомендательные письма",
          "Подача заявок и переписка с вузом",
          "Визовое сопровождение и подготовка к интервью",
        ],
        priceUsd: "от 400 USD",
        priceKgs: "в сомах — уточняется",
      },
      {
        icon: BadgeCheck,
        title: "Непартнёрские университеты",
        includes: [
          "Индивидуальный подбор вуза вне партнёрской сети",
          "Проверка требований и дедлайнов",
          "Ведение заявки под ключ",
          "Поддержка до зачисления и отъезда",
        ],
        priceUsd: "по запросу",
        priceKgs: "в сомах — уточняется",
      },
    ],
  },
  {
    id: "lang",
    label: "Языковые курсы",
    services: [
      {
        icon: Languages,
        title: "Языковые курсы за рубежом",
        includes: [
          "Подбор школы и интенсивности курса",
          "Бронирование обучения и проживания",
          "Оформление документов и страховки",
          "Визовая поддержка",
        ],
        priceUsd: "от 400 USD",
        priceKgs: "в сомах — уточняется",
      },
      {
        icon: BadgeCheck,
        title: "Подготовка к IELTS / TOEFL / SAT",
        includes: [
          "Диагностика текущего уровня",
          "План подготовки под целевой балл",
          "Подбор курсов и регистрация на экзамен",
        ],
        priceUsd: "по запросу",
        priceKgs: "в сомах — уточняется",
      },
    ],
  },
  {
    id: "camps",
    label: "Каникулярные лагеря",
    services: [
      {
        icon: Sun,
        title: "Летние и зимние лагеря",
        includes: [
          "Подбор лагеря по возрасту и интересам",
          "Язык + экскурсии и активности",
          "Трансферы, страховка, сопровождение группы",
          "Полное информирование родителей",
        ],
        priceUsd: "от 400 USD",
        priceKgs: "в сомах — уточняется",
      },
      {
        icon: BadgeCheck,
        title: "Индивидуальные программы для школьников",
        includes: [
          "Программы Junior 8–17 лет",
          "Проживание в резиденции или семье",
          "Персональный менеджер на весь период",
        ],
        priceUsd: "по запросу",
        priceKgs: "в сомах — уточняется",
      },
    ],
  },
];

export function Services() {
  const defaultTab = tabs[0]!;
  const [active, setActive] = useState(defaultTab.id);
  const current = tabs.find((t) => t.id === active) ?? defaultTab;

  return (
    <section id="services" className="bg-background section-pad">
      <div className="shell">
        <SectionHeading
          eyebrow="Услуги и стоимость"
          title="Консультационные пакеты для успешного поступления в учебные заведения"
        />

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
                (active === t.id
                  ? "bg-navy text-on-navy"
                  : "text-muted-foreground hover:text-ink")
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
              key={s.title}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-navy">
                <s.icon className="size-7 text-gold" aria-hidden="true" />
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
              <div className="mt-6 rounded-2xl bg-gold px-5 py-4">
                <p className="font-display text-xl font-extrabold text-navy">{s.priceUsd}</p>
                <p className="mt-0.5 text-xs font-semibold text-navy/70">{s.priceKgs}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Точная стоимость определяется на консультации — она зависит от страны, программы и объёма
          сопровождения.
        </p>
      </div>
    </section>
  );
}
