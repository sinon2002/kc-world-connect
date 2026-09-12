const partners = [
  "University of Toronto",
  "TU Berlin",
  "Sapienza University",
  "Nanyang Poly",
  "UCL",
  "Bilkent University",
  "Monash",
  "Sungkyunkwan",
];

export function Partners() {
  // дублируем список, чтобы лента была бесшовной
  const track = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="overflow-hidden py-20"
      style={{
        backgroundColor: "#f9fbfe",
        backgroundImage: "radial-gradient(#edf2f9 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="shell text-center">
        <h2
          className="text-3xl font-bold uppercase tracking-wide text-ink md:text-4xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Университеты-партнёры
        </h2>

        <div className="mt-6 mb-14 flex items-center justify-center gap-4">
          <span className="relative h-1.5 w-1.5 rounded-full bg-primary">
            <span className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-primary/30" />
          </span>
          <p className="rounded bg-secondary px-5 py-2 text-xs font-bold uppercase tracking-wide text-primary">
            Широкая партнёрская сеть учебных заведений Kyrgyz Concept по всему миру
          </p>
          <span className="relative h-1.5 w-1.5 rounded-full bg-primary">
            <span className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-primary/30" />
          </span>
        </div>
      </div>

      {/* лента карточек, едет бесконечно вправо->влево */}
      <div className="relative w-full">
        <div className="partner-track flex w-max gap-6">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="w-[230px] flex-shrink-0 rounded-2xl border border-border/70 bg-card p-3 shadow-soft"
            >
              <div className="flex h-[150px] items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-muted text-xs font-semibold text-muted-foreground">
                {name}
              </div>
              <div className="pt-3 pb-1 text-center text-sm font-bold text-ink">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
