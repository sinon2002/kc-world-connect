import { useState } from "react";
import { createPortal } from "react-dom";
import { GraduationCap, Quote, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const stories = [
  {
    name: "Айсулуу М.",
    place: "Канада · University of Toronto · Computer Science",
    quote:
      "Мне казалось, что топовые вузы — не про меня. Консультант разложил всё по шагам, и я получила offer с частичной стипендией.",
    // Положи файл видео в public/videos/ и укажи путь сюда, например:
    video: "/videos/aisuluu.mp4",
    poster: "/videos/aisuluu-poster.jpg",
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

function StoryMedia({ video, poster, name }: { video?: string; poster?: string; name: string }) {
  const [open, setOpen] = useState(false);

  // Пока нет видео — оставляем прежнюю заглушку с иконкой
  if (!video) {
    return (
      <div className="grid aspect-video place-items-center rounded-2xl bg-on-navy/8">
        <GraduationCap className="size-10 text-gold/70" aria-hidden="true" />
        <span className="sr-only">Видео студента (скоро)</span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-on-navy/8"
        aria-label={`Смотреть видео: ${name}`}
      >
        <video src={video} poster={poster} muted playsInline preload="metadata" className="h-full w-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center bg-navy/35 transition-colors duration-200 group-hover:bg-navy/45">
          <span className="grid size-14 place-items-center rounded-full bg-gold text-navy shadow-lift transition-transform duration-200 group-hover:scale-110">
            <Play className="ml-0.5 size-6 fill-current" />
          </span>
        </span>
      </button>

      {/* Увеличенное окно с видео (лайтбокс) — рендерим в document.body,
          чтобы position:fixed не ломался анимацией родителя */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Закрыть видео"
                >
                  <X className="size-5" />
                </button>
                <video src={video} poster={poster} controls autoPlay playsInline className="w-full rounded-2xl shadow-2xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}

export function Stories() {
  return (
    <section id="stories" className="bg-navy section-pad">
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
              <StoryMedia video={s.video} poster={s.poster} name={s.name} />
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
