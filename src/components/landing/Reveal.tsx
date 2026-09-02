import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const onDark = tone === "dark";
  return (
    <Reveal
      className={
        (align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl") + " space-y-4"
      }
    >
      {eyebrow ? (
        <span
          className={
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.16em] uppercase " +
            (onDark ? "bg-gold/15 text-gold" : "bg-navy/8 text-blue")
          }
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={
          "text-3xl leading-tight md:text-4xl lg:text-[2.75rem] " +
          (onDark ? "text-on-navy" : "text-ink")
        }
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={"text-base md:text-lg " + (onDark ? "text-on-navy-muted" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
