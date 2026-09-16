export function Events() {
  const [events] = useContentSection("events");
  const photo = events.photo ?? fallbackEventsPhoto;

  return (
    <section id="events" className="section-pad">
      <div className="shell">
        <Reveal className="overflow-hidden rounded-4xl bg-card shadow-soft md:flex">
          <div className="h-64 md:h-auto md:w-[42%] md:flex-shrink-0">
            <img
              src={photo}
              alt="Студенты готовятся к поступлению за рубежом"
              width={720}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 md:w-[58%] md:p-14">
            <span className="inline-flex items-center gap-2 rounded bg-secondary px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-primary uppercase">
              {events.badge}
            </span>

            <h2
              className="mt-5 text-2xl leading-snug text-ink md:text-3xl"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {events.heading}
            </h2>

            <p className="mt-4 border-l-2 border-primary pl-3 text-xs font-bold tracking-[0.1em] text-primary uppercase">
              {events.highlight}
            </p>

            <ul className="mt-5 space-y-2.5">
              {events.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="https://www.instagram.com/education_kyrgyzconcept?stkn=MWlyMWFsN2ZndmExNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <CalendarDays
                className="size-5"
                aria-hidden="true"
              />
              {events.buttonText}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
