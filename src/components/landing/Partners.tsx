import { useContentSection } from "@/lib/content";

export function Partners() {
  const [partners] = useContentSection("partners");
  // дублируем список, чтобы лента была бесшовной
  const track = [...partners.items, ...partners.items];

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
          {partners.heading}
        </h2>

        <div className="mt-6 mb-14 flex items-center justify-center gap-4">
          <span className="relative h-1.5 w-1.5 rounded-full bg-primary">
            <span className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-primary/30" />
          </span>
          <p className="rounded bg-secondary px-5 py-2 text-xs font-bold uppercase tracking-wide text-primary">
            {partners.subheading}
          </p>
          <span className="relative h-1.5 w-1.5 rounded-full bg-primary">
            <span className="absolute left-1/2 top-1.5 h-5 w-px -translate-x-1/2 bg-primary/30" />
          </span>
        </div>
      </div>

      {/* лента карточек, едет бесконечно вправо->влево */}
      <div className="relative w-full">
        <div className="partner-track flex w-max gap-7">
          {track.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="w-[280px] flex-shrink-0 rounded-2xl border border-border/70 bg-card p-3 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="h-[190px] w-full rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-[190px] items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-muted text-xs font-semibold text-muted-foreground">
                  {p.name}
                </div>
              )}
              <div className="pt-3 pb-1 text-center text-sm font-bold text-ink">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
