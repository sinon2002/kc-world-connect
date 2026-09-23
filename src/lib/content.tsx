import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { supabase, supabaseEnabled } from "./supabase";
import bilkentPhoto from "@/assets/partners/bilkent.jpg";
import uclPhoto from "@/assets/partners/ucl.jpg";
import tuBerlinPhoto from "@/assets/partners/tu-berlin.jpg";

/* ---------------------------------- Типы ---------------------------------- */

export interface HeroContent {
  eyebrow: string;
  titleLine: string;
  titleHighlight: string;
  badgeLine1: string;
  badgeLine2: string;
  paragraph: string;
  ctaPrimary: string;
  ctaSecondary: string;
  videoLabel: string;
  cityFrom: string;
  cityTo: string;
  dreamBadge: string;
  photo: string | undefined;
}

export interface PartnerItem {
  id: string;
  name: string;
  image: string | undefined;
}
export interface PartnersContent {
  heading: string;
  subheading: string;
  items: PartnerItem[];
}

export interface EventsContent {
  badge: string;
  heading: string;
  highlight: string;
  points: string[];
  buttonText: string;
  photo: string | undefined;
}

export interface StoryItem {
  id: string;
  name: string;
  place: string;
  quote: string;
  photo: string | undefined;
  video: string | undefined;
  videoCover: string | undefined;
}
export interface StoriesContent {
  heading: string;
  items: StoryItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  includes: string[];
  priceUsd: string;
  priceKgs: string;
}
export interface ServiceTab {
  id: string;
  label: string;
  services: ServiceItem[];
}
export interface ServicesContent {
  heading: string;
  tabs: ServiceTab[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string | undefined;
}
export interface TeamContent {
  heading: string;
  items: TeamMember[];
}

export interface CertItem {
  id: string;
  title: string;
  text: string;
  image: string | undefined;
}
export interface CertsContent {
  items: CertItem[];
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}
export interface FaqContent {
  items: FaqItem[];
}

export interface ContactContent {
  heading: string;
  paragraph: string;
  countries: string[];
}

export interface FooterContent {
  text: string;
}

export interface ProcessStepItem {
  id: string;
  title: string;
  text: string;
}
export interface ProcessContent {
  eyebrow: string;
  heading: string;
  subtitle: string;
  steps: ProcessStepItem[];
}

export interface TrustCardItem {
  id: string;
  title: string;
  text: string;
}
export interface TrustContent {
  badge: string;
  heading: string;
  paragraph: string;
  cards: TrustCardItem[];
}

export interface TrustStatItem {
  id: string;
  number: string;
  label: string;
  text: string;
}
export interface TrustStatsContent {
  heading: string;
  subheading: string;
  items: TrustStatItem[];
  highlightTitle: string;
  highlightSubtitle: string;
  highlightText: string;
}

export interface PromoPopupContent {
  enabled: boolean;
  title: string;
  description: string;
  address: string;
  buttonText: string;
  image: string | undefined;
}

export interface AllContent {
  hero: HeroContent;
  trustStats: TrustStatsContent;
  trust: TrustContent;
  process: ProcessContent;
  partners: PartnersContent;
  events: EventsContent;
  stories: StoriesContent;
  services: ServicesContent;
  team: TeamContent;
  certs: CertsContent;
  faq: FaqContent;
  contact: ContactContent;
  footer: FooterContent;
  promoPopup: PromoPopupContent;
}

/* -------------------------------- Дефолты --------------------------------- */
/* Это то, что уже есть на сайте сейчас. Пока админка не сохранила свои
   значения в базу — показываются именно эти. */

export const defaultContent: AllContent = {
  hero: {
    eyebrow: "Kyrgyz Concept Education Abroad",
    titleLine: "Учёба за рубежом.",
    titleHighlight: "Время выйти в мир.",
    badgeLine1: "Для поступления в вуз",
    badgeLine2: "и жизни за рубежом",
    paragraph:
      "Kyrgyz Concept — ваш надёжный проводник в мировые вузы. Более 30 лет опыта, 90+ направлений по всему миру и полное персональное сопровождение: от первой консультации до успешного зачисления и отъезда.",
    ctaPrimary: "Получить бесплатную консультацию",
    ctaSecondary: "Узнать шансы",
    videoLabel: "Видео-приветствие от команды KC EDU",
    cityFrom: "Бишкек",
    cityTo: "Лондон",
    dreamBadge: "Кампус мечты",
    photo: undefined,
  },
  trustStats: {
    heading: "Учёба за границей. Получите образование в лучших университетах мира",
    subheading: "Нам доверяют абитуриенты и университеты по всему миру",
    items: [
      { id: "ts1", number: "10 000+", label: "студентов", text: "Успешно поступили и обучаются за рубежом с нашей поддержкой и полным сопровождением." },
      { id: "ts2", number: "90+", label: "направлений", text: "Широкий выбор стран, университетов и языковых программ по всему земному шару." },
      { id: "ts3", number: "35+ лет", label: "опыта на рынке", text: "Многолетняя история, сильная экспертиза и репутационное доверие клиентов в Кыргызстане." },
    ],
    highlightTitle: "Высокий шанс",
    highlightSubtitle: "на зачисление",
    highlightText: "Мы пошагово ведём по системе, снижая риск отказа до минимума.",
  },
  trust: {
    badge: "О нас",
    heading: "Kyrgyz Concept Образование за рубежом",
    paragraph: "Часть бренда Kyrgyz Concept с историей на рынке образовательного консалтинга Кыргызстана",
    cards: [
      { id: "tr1", title: "Узнаваемый бренд", text: "Многолетняя история и репутационное доверие клиентов в Кыргызстане" },
      { id: "tr2", title: "Широкий портфель", text: "Бакалавриат, магистратура, школьные программы, летние/зимние курсы, визовый консалтинг — более 15 стран" },
      { id: "tr3", title: "Сформированная база", text: "Готовая база клиентов и сеть консультантов с опытом сопровождения студентов" },
      { id: "tr4", title: "Экспертиза в поступлении", text: "Сильнейшая компетенция — визовый консалтинг и приёмная кампания, по оценке отраслевого аудита" },
    ],
  },
  process: {
    eyebrow: "Маршрут поступления",
    heading: "Учёба за границей. Получите образование в лучших университетах мира",
    subtitle: "Шесть понятных шагов — вы всегда знаете, что происходит сейчас и что будет дальше.",
    steps: [
      { id: "pr1", title: "Диагностика", text: "Бесплатная консультация: оцениваем цели, бюджет и академический бэкграунд." },
      { id: "pr2", title: "Подбор вуза и программы", text: "Формируем список из 3–5 учебных заведений с реальными шансами на поступление." },
      { id: "pr3", title: "Подготовка к тестам", text: "Помогаем выбрать курсы и график подготовки к IELTS, TOEFL, SAT." },
      { id: "pr4", title: "Документы и эссе", text: "Мотивационные письма, резюме, рекомендации — вычитываем и доводим до уровня вуза." },
      { id: "pr5", title: "Виза", text: "Готовим полный пакет документов и тренируем собеседование в посольстве." },
      { id: "pr6", title: "Сопровождение после зачисления", text: "Жильё, страховка, перелёт и адаптация на месте — остаёмся с вами." },
    ],
  },
  partners: {
    heading: "Университеты-партнёры",
    subheading: "Широкая партнёрская сеть учебных заведений Kyrgyz Concept по всему миру",
    items: [
      { id: "p1", name: "University of Toronto", image: undefined },
      { id: "p2", name: "TU Berlin", image: tuBerlinPhoto },
      { id: "p3", name: "Sapienza University", image: undefined },
      { id: "p4", name: "Nanyang Poly", image: undefined },
      { id: "p5", name: "UCL", image: uclPhoto },
      { id: "p6", name: "Bilkent University", image: bilkentPhoto },
      { id: "p7", name: "Monash", image: undefined },
      { id: "p8", name: "Sungkyunkwan", image: undefined },
    ],
  },
  events: {
    badge: "Мероприятия",
    heading:
      "Регулярно проводим встречи с лидерами мнений, представителями университетов и студентами",
    highlight: "Которые уже учатся за рубежом",
    points: [
      "Прямой диалог с приёмными комиссиями",
      "Честные отзывы об учёбе и быте из первых уст",
    ],
    buttonText: "Смотреть ближайшие мероприятия",
    photo: undefined,
  },
  stories: {
    heading: "Их поступление — не случайность, а результат подготовки",
    items: [
      {
        id: "s1",
        name: "Айсулуу М.",
        place: "Канада · University of Toronto · Computer Science",
        quote:
          "Мне казалось, что топовые вузы — не про меня. Консультант разложил всё по шагам, и я получила offer с частичной стипендией.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
      {
        id: "s2",
        name: "Тимур А.",
        place: "Германия · TU Berlin · Mechanical Engineering",
        quote:
          "Самое сложное было с документами и Uni-Assist. KC вели меня буквально за руку, ни один дедлайн не пропущен.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
      {
        id: "s3",
        name: "Алина К.",
        place: "Италия · Sapienza · Design",
        quote: "Помогли собрать портфолио и мотивационное письмо. Виза — с первого раза.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
      {
        id: "s4",
        name: "Бекзат Ы.",
        place: "Южная Корея · SKKU · Business",
        quote: "Подобрали программу под мой бюджет и нашли общежитие ещё до отъезда.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
      {
        id: "s5",
        name: "Мадина С.",
        place: "Великобритания · UCL · Foundation",
        quote: "Начали за год: подготовка к IELTS, потом заявка. Итог — 7.0 и место на foundation.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
      {
        id: "s6",
        name: "Эрнис Т.",
        place: "Турция · Bilkent · Architecture",
        quote: "Прошёл на грант. Без сопровождения я бы просто не разобрался в требованиях.",
        photo: undefined,
        video: undefined,
        videoCover: undefined,
      },
    ],
  },
  services: {
    heading: "Консультационные пакеты для успешного поступления в учебные заведения",
    tabs: [
      {
        id: "uni",
        label: "Университеты и школы",
        services: [
          {
            id: "uni-1",
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
            id: "uni-2",
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
            id: "lang-1",
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
            id: "lang-2",
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
            id: "camps-1",
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
            id: "camps-2",
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
    ],
  },
  team: {
    heading: "Консультанты, которые ведут вас от идеи до зачисления",
    items: [
      {
        id: "t1",
        name: "Айгерим Осмонова",
        role: "Руководитель KC Education Abroad",
        bio: "12 лет в образовательном консалтинге, более 900 успешных зачислений в вузы Европы и Северной Америки.",
        photo: undefined,
      },
      {
        id: "t2",
        name: "Нурбек Жумалиев",
        role: "Консультант: Европа и Германия",
        bio: "Специалист по Uni-Assist, Studienkolleg и немецким Fachhochschule. Сам учился в Берлине.",
        photo: undefined,
      },
      {
        id: "t3",
        name: "Дилара Абдыкадырова",
        role: "Консультант: языковые курсы и лагеря",
        bio: "Подбирает языковые школы в 15 странах, курирует групповые каникулярные программы.",
        photo: undefined,
      },
      {
        id: "t4",
        name: "Артур Тен",
        role: "Визовый специалист",
        bio: "Готовит студентов к интервью в посольствах США, Великобритании и Шенгена.",
        photo: undefined,
      },
    ],
  },
  certs: {
    items: [
      {
        id: "c1",
        title: "British Council certified agency",
        text: "Сертифицированное агентство British Council: работаем по стандартам британских образовательных институций и аккредитованных языковых школ UK.",
        image: undefined,
      },
      {
        id: "c2",
        title: "ICEF certified agents",
        text: "Наши консультанты прошли обучение ICEF Agency Training Course — международный стандарт качества образовательного консалтинга.",
        image: undefined,
      },
      {
        id: "c3",
        title: "US Education certified agents",
        text: "Сертификация по программам обучения в США: работа с колледжами, университетами и требованиями F-1 визы.",
        image: undefined,
      },
    ],
  },
  faq: {
    items: [
      { id: "f1", q: "Вы гарантируете поступление?", a: "Гарантировать зачисление не может ни одно честное агентство — решение принимает приёмная комиссия. Мы гарантируем корректный подбор программ, где ваш профиль соответствует требованиям, и безошибочную подачу документов. На практике это даёт очень высокий процент офферов." },
      { id: "f2", q: "Есть ли гарантия получения визы?", a: "Визу выдаёт консульство, поэтому гарантии дать нельзя. Мы готовим полный пакет документов, проверяем финансовое подтверждение и проводим репетицию собеседования — это заметно снижает риск отказа." },
      { id: "f3", q: "Сколько стоят ваши услуги?", a: "Сопровождение по партнёрским вузам и школам — от 400 USD. По непартнёрским учебным заведениям стоимость рассчитывается по запросу. Точная сумма определяется на бесплатной консультации." },
      { id: "f4", q: "Возможен ли возврат средств?", a: "Условия возврата фиксируются в договоре: если мы не выполнили оговорённый объём работ, средства возвращаются согласно договору. Оплаченные третьим сторонам сборы (вузы, визовые центры, экзамены) не возвращаются." },
      { id: "f5", q: "В какие страны вы отправляете студентов?", a: "Более 25 стран: США, Канада, Великобритания, Германия, Италия, Испания, Чехия, Польша, Турция, ОАЭ, Южная Корея, Китай, Малайзия, Япония, Австралия и другие направления." },
      { id: "f6", q: "Какие баллы IELTS или TOEFL нужны?", a: "Для бакалавриата обычно IELTS 6.0–6.5, для магистратуры 6.5–7.0, TOEFL iBT 79–100. Есть программы с внутренним тестом или языковым курсом перед основной программой — их подбираем, если балла пока нет." },
      { id: "f7", q: "Сколько времени занимает весь процесс?", a: "В среднем 6–12 месяцев: подбор и подготовка документов — 1–3 месяца, рассмотрение заявки вузом — 4–12 недель, виза — 3–8 недель. Оптимально начинать за год до старта учёбы." },
      { id: "f8", q: "Что входит в сопровождение?", a: "Диагностика, подбор программ, работа над эссе и резюме, сбор и перевод документов, подача заявок, переписка с вузом, визовая подготовка, а также помощь с жильём, страховкой и адаптацией после зачисления." },
      { id: "f9", q: "Можно ли поступить со средним баллом?", a: "Да. Существуют pathway- и foundation-программы, колледжи с последующим переводом в университет, а также вузы с более гибкими требованиями. Мы подбираем реалистичный маршрут под ваш аттестат." },
      { id: "f10", q: "Помогаете ли со стипендиями и грантами?", a: "Да. Проверяем университетские стипендии, скидки за академические успехи и государственные гранты, помогаем с мотивационными письмами для конкурса. Полное покрытие встречается редко, частичное — регулярно." },
      { id: "f11", q: "С какого возраста лучше начинать?", a: "Со 8–9 класса можно планировать языковые лагеря и школы за рубежом. Для бакалавриата подготовку стоит начать в 10–11 классе, чтобы успеть подтянуть язык и собрать сильный профиль." },
      { id: "f12", q: "Как проходит первая консультация?", a: "Это бесплатная встреча в офисе или онлайн на 40–60 минут: обсуждаем цели, бюджет, оценки и язык, показываем реалистичные варианты стран и программ, составляем предварительный план и сроки." },
    ],
  },
  contact: {
    heading: "Записаться на бесплатную консультацию",
    paragraph:
      "Обсудим ваши цели, бюджет и академический бэкграунд, подберём реальные варианты вузов и составим план поступления. Консультация ни к чему не обязывает.",
    countries: [
      "Великобритания",
      "США",
      "Канада",
      "Германия",
      "Турция",
      "Китай",
      "ОАЭ",
      "Малайзия",
      "Южная Корея",
      "Ещё не определился(ась)",
    ],
  },
  footer: {
    text: "© {year} KC Education Abroad — часть бренда Kyrgyz Concept",
  },
  promoPopup: {
    enabled: true,
    title: "Получите бесплатную консультацию",
    description: "Расскажем, какой вуз и страна подойдут именно вам — бесплатно и без обязательств.",
    address: "Ждем вас по адресу: Тыныстанова, 231",
    buttonText: "Записаться",
    image: undefined,
  },
};

/* --------------------------- Провайдер / хуки ----------------------------- */

type Ctx = {
  content: AllContent;
  loading: boolean;
  save: <K extends keyof AllContent>(key: K, value: AllContent[K]) => Promise<void>;
};

const ContentContext = createContext<Ctx | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<AllContent>(defaultContent);
  const [loading, setLoading] = useState(supabaseEnabled);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from("site_content").select("key,value");
      if (!cancelled && !error && data) {
        setContent((prev) => {
          const next = { ...prev };
          for (const row of data as { key: string; value: unknown }[]) {
            if (row.key in next) {
              // @ts-expect-error -- ключи гарантированы схемой site_content
              next[row.key] = row.value;
            }
          }
          return next;
        });
      }
      if (!cancelled) setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const save = useMemo(
    () =>
      async <K extends keyof AllContent>(key: K, value: AllContent[K]) => {
        setContent((prev) => ({ ...prev, [key]: value }));
        if (!supabase) return;
        const { error } = await supabase
          .from("site_content")
          .upsert({ key, value, updated_at: new Date().toISOString() });
        if (error) throw error;
      },
    []
  );

  return <ContentContext.Provider value={{ content, loading, save }}>{children}</ContentContext.Provider>;
}

/** Читает и позволяет сохранить один раздел контента */
export function useContentSection<K extends keyof AllContent>(
  key: K
): [AllContent[K], (value: AllContent[K]) => Promise<void>] {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContentSection должен вызываться внутри <ContentProvider>");
  const value = ctx.content[key];
  const setValue = (v: AllContent[K]) => ctx.save(key, v);
  return [value, setValue];
}

export function useContentLoading(): boolean {
  const ctx = useContext(ContentContext);
  return ctx ? ctx.loading : false;
}

export function newId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
