import { PlayCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GraduateCharacter } from "./GraduateCharacter";

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="hero" className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[32rem] rounded-full bg-blue/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-teal/12 blur-3xl"
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.span
            {...anim(0)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-gold uppercase"
          >
            Часть бренда Kyrgyz Concept
          </motion.span>

          <motion.h1
            {...anim(0.08)}
            className="mt-6 text-4xl leading-[1.08] text-on-navy sm:text-5xl lg:text-[3.4rem]"
          >
            Учёба за рубежом.{" "}
            <span className="text-gold">Время учиться за рубежом.</span>
          </motion.h1>

          <motion.p {...anim(0.16)} className="mt-6 max-w-xl text-base text-on-navy-muted md:text-lg">
            Kyrgyz Concept — ваш надёжный проводник в мировые вузы. Более 30 лет опыта, 90+
            направлений по всему миру и полное персональное сопровождение: от первой консультации до
            успешного зачисления и отъезда.
          </motion.p>

          <motion.div {...anim(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-bold text-navy shadow-gold transition-transform duration-200 hover:-translate-y-1"
            >
              Получить бесплатную консультацию
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-on-navy/30 px-7 py-4 text-sm font-bold text-on-navy transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Узнать свои шансы на поступление
            </a>
          </motion.div>

          <motion.a
            {...anim(0.32)}
            href="#stories"
            className="mt-7 inline-flex items-center gap-2.5 text-sm font-semibold text-on-navy-muted transition-colors hover:text-gold"
          >
            <PlayCircle className="size-6 text-gold" aria-hidden="true" />
            Видео-приветствие от команды KC EDU
          </motion.a>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <GraduateCharacter className="h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}
