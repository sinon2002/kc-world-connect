import { ArrowDownRight, ArrowRight, Building2, GraduationCap, MapPin, Plane } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroGirl from "@/assets/hero-student-girl.png";
import { useContentSection } from "@/lib/content";

export function Hero() {
  const [hero] = useContentSection("hero");
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 48]);
  const reveal = (delay: number) => reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const } };
  const appear = (delay: number) => reduce ? {} : { initial: { opacity: 0, scale: 0.88 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="route-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-border/70" aria-hidden="true" />
      <div className="shell relative grid min-h-[740px] items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="hero-copy-intro relative z-20 pt-8 lg:pr-4 lg:pt-0">
          <motion.div {...reveal(1.05)} className="flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" />{hero.eyebrow}</motion.div>
          <h1 className="mt-6 max-w-3xl text-[2.75rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.45rem]">{hero.titleLine} <span className="text-primary">{hero.titleHighlight}</span></h1>
          <motion.div {...reveal(1.2)} className="mt-6 inline-flex border-l-2 border-accent bg-secondary px-4 py-3 text-sm font-bold uppercase text-ink">{hero.badgeLine1}<br />{hero.badgeLine2}</motion.div>
          <motion.p {...reveal(1.3)} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{hero.paragraph}</motion.p>
          <motion.div {...reveal(1.4)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">{hero.ctaPrimary} <ArrowRight className="size-4" /></a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-4 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-1 hover:bg-secondary">{hero.ctaSecondary} <ArrowDownRight className="size-4" /></a>
          </motion.div>
        </div>

        <motion.div style={{ y: photoY }} className="relative mx-auto h-[500px] w-full max-w-[590px] sm:h-[620px] lg:ml-auto lg:h-[690px]">
          <div className="hero-girl-intro absolute inset-x-[8%] bottom-0 z-20 mx-auto h-[92%] sm:inset-x-[15%] lg:inset-x-[12%]">
            <img src={heroGirl} alt="Студентка, готовая к учёбе за рубежом" width={1024} height={1536} fetchPriority="high" className="h-full w-full object-contain object-bottom drop-shadow-[0_26px_30px_color-mix(in_oklab,var(--brand)_18%,transparent)]" />
          </div>

          <motion.div {...appear(1.65)} className="absolute top-[7%] right-[2%] z-30 text-primary sm:right-[5%]" aria-hidden="true">
            <Plane className="hero-plane size-20 fill-secondary stroke-[1.4] sm:size-28" />
          </motion.div>

          <motion.div {...appear(1.92)} className="absolute top-[40%] right-0 z-30 flex items-center gap-2.5 rounded-md bg-background/95 px-4 py-3 shadow-soft backdrop-blur-sm">
            <Building2 className="size-5 text-primary" /><span className="text-base font-bold text-ink">{hero.cityTo}</span>
          </motion.div>
          <motion.div {...appear(2.02)} className="absolute bottom-[26%] left-0 z-30 flex items-center gap-2.5 rounded-md bg-primary px-4 py-3 text-primary-foreground shadow-soft">
            <MapPin className="size-5" /><span className="text-base font-bold">{hero.cityFrom}</span>
          </motion.div>
          <motion.div {...appear(2.12)} className="absolute right-[3%] bottom-[10%] z-30 flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground shadow-gold">
            <GraduationCap className="size-4" /><span className="text-xs font-bold">{hero.dreamBadge}</span>
          </motion.div>

          <motion.svg {...(reduce ? {} : { initial: { opacity: 0, pathLength: 0 }, animate: { opacity: 1, pathLength: 1 }, transition: { duration: 1.1, delay: 1.7 } })} aria-hidden="true" viewBox="0 0 500 420" className="absolute inset-x-0 top-[14%] z-10 h-[72%] w-full overflow-visible text-primary">
            <motion.path d="M22 328 C 118 226, 136 88, 286 112 C 394 128, 421 62, 480 34" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
            <circle cx="22" cy="328" r="6" fill="var(--brand)" />
            <circle cx="480" cy="34" r="7" fill="var(--orange)" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
