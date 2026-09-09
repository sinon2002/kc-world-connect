import { ArrowDownRight, ArrowRight, MapPin, Play } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroStudents from "@/assets/hero-students.jpg";
import studentPortrait from "@/assets/student-portrait.jpg";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 48]);
  const anim = (delay: number) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="route-grid pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="shell relative grid min-h-[690px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <motion.div {...anim(0)} className="flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" />Часть бренда Kyrgyz Concept</motion.div>
          <motion.h1 {...anim(0.08)} className="mt-7 max-w-3xl text-[2.8rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.6rem]">Учёба за рубежом. <span className="text-primary">Время выйти в мир.</span></motion.h1>
          <motion.p {...anim(0.16)} className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Kyrgyz Concept — ваш надёжный проводник в мировые вузы. Более 30 лет опыта, 90+ направлений по всему миру и полное персональное сопровождение: от первой консультации до успешного зачисления и отъезда.</motion.p>
          <motion.div {...anim(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">Получить бесплатную консультацию <ArrowRight className="size-4" /></a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-4 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-1 hover:bg-secondary">Узнать шансы <ArrowDownRight className="size-4" /></a>
          </motion.div>
          <motion.a {...anim(0.32)} href="#stories" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"><span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground"><Play className="ml-0.5 size-4 fill-current" /></span>Видео-приветствие от команды KC EDU</motion.a>
        </div>

        <motion.div style={{ y: photoY }} className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[610px]">
          <motion.figure {...(reduce ? {} : { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.18 } })} className="absolute top-0 right-0 h-[82%] w-[78%] overflow-hidden rounded-md shadow-lift">
            <img src={heroStudents} alt="Студенты на международном университетском кампусе" width={1024} height={1280} fetchPriority="high" className="h-full w-full object-cover" />
          </motion.figure>
          <figure className="absolute bottom-1 left-0 h-[43%] w-[45%] overflow-hidden rounded-md border-[8px] border-background shadow-lift">
            <img src={studentPortrait} alt="Студентка зарубежного университета" width={896} height={1152} className="h-full w-full object-cover" />
          </figure>
          <div className="absolute top-[16%] left-0 rounded-md bg-primary p-4 text-primary-foreground shadow-lift sm:p-5"><p className="font-display text-2xl font-bold">25+</p><p className="mt-1 text-[10px] font-bold uppercase">стран обучения</p></div>
          <div className="absolute right-[-2%] bottom-[9%] max-w-[190px] rounded-md bg-background p-4 shadow-lift"><MapPin className="size-5 text-accent" /><p className="mt-2 text-xs font-bold text-ink">Ваш маршрут — от Бишкека до кампуса мечты</p></div>
          <svg aria-hidden="true" viewBox="0 0 260 130" className="absolute right-[8%] bottom-[8%] h-32 w-64 overflow-visible text-primary"><path d="M4 112 C 60 5, 145 148, 252 18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 8" className="route-dash" /><circle cx="4" cy="112" r="5" fill="currentColor" /><circle cx="252" cy="18" r="7" fill="var(--orange)" /></svg>
        </motion.div>
      </div>
    </section>
  );
}