import { ArrowDownRight, Plane } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";

export function Process() {
  const [process] = useContentSection("process");

  return (
    <section id="process" className="section-pad relative overflow-hidden bg-background">
<Plane
  aria-hidden="true"
  strokeWidth={1}
  className="pointer-events-none absolute top-42 left-[-60px] size-[380px] text-primary/10 md:size-[440px]"
/>
      <div className="shell relative z-10">
        <SectionHeading eyebrow={process.eyebrow} title={process.heading} subtitle={process.subtitle} align="left" />
        <ol className="relative mt-16 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full text-primary/25 lg:block" preserveAspectRatio="none"><path d="M40 100 C 220 0, 310 180, 470 80 S 720 0, 920 100 S 1110 180, 1260 65" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" className="route-dash" /></svg>
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.id} delay={index * 0.09} className="relative min-h-56 rounded-md border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <div className="flex items-start justify-between"><span className="font-display text-4xl font-bold text-primary">0{index + 1}</span><ArrowDownRight className="size-5 text-accent" /></div>
              <h3 className="mt-8 text-xl text-ink">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
