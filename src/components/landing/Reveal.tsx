import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" | "article" };

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  if (reduce) { const Tag = as; return <Tag className={className}>{children}</Tag>; }
  return <MotionTag className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionTag>;
}

export function SectionHeading({ eyebrow, title, subtitle, tone = "light", align = "center" }: { eyebrow?: string; title: string; subtitle?: string; tone?: "light" | "dark"; align?: "center" | "left" }) {
  const dark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"} space-y-5`}>
      {eyebrow ? <div className={`flex items-center gap-3 text-xs font-bold uppercase ${align === "center" ? "justify-center" : ""} ${dark ? "text-on-navy-muted" : "text-primary"}`}><span className={`h-px w-9 ${dark ? "bg-accent" : "bg-primary"}`} />{eyebrow}</div> : null}
      <h2 className={`text-3xl leading-[1.08] md:text-5xl ${dark ? "text-on-navy" : "text-ink"}`}>{title}</h2>
      {subtitle ? <p className={`max-w-2xl text-base leading-relaxed md:text-lg ${align === "center" ? "mx-auto" : ""} ${dark ? "text-on-navy-muted" : "text-muted-foreground"}`}>{subtitle}</p> : null}
    </Reveal>
  );
}