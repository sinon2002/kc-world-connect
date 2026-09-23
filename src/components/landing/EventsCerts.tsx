import { useEffect, useRef, useState } from "react";
import { CalendarDays, Check, ChevronDown, ShieldCheck, BookOpen, Loader2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useContentSection } from "@/lib/content";
import fallbackEventsPhoto from "@/assets/events/students-library.jpg";

/**
 * Рендерит первую страницу PDF-файла как картинку (canvas) прямо в браузере.
 * Работает одинаково на компьютере и на телефоне — без "скачать" / "открыть".
 */
function PdfThumbnail({ url, alt }: { url: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

        const pdf = await pdfjsLib.getDocument(url).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("no canvas context");

        await page.render({ canvasContext: context, viewport }).promise;
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (status === "error") {
    return (
      <span className="flex h-full w-full items-center justify-center text-center text-xs text-muted-foreground px-3">
        Не удалось показать превью файла.
      </span>
    );
  }

  return (
    <>
      {status === "loading" && (
        <span className="flex h-full w-full items-center justify-center">
          <Loader2 className="size-5 animate-spin text-muted-foreground" aria-hidden="true" />
        </span>
      )}
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={alt}
        className={"h-full w-full object-contain " + (status === "ready" ? "" : "hidden")}
      />
    </>
  );
}

export function Events() {
  const [events] = useContentSection("events");
  const photo = events.photo ?? fallbackEventsPhoto;

  return (
    <section id="events" className="section-pad relative overflow-hidden">
      <BookOpen aria-hidden="true" strokeWidth={1} className="pointer-events-none absolute -top-6 right-[-70px] size-[360px] rotate-[-10deg] text-primary/10 md:size-[440px]" />
      <div className="shell relative z-10">
        <Reveal className="overflow-hidden rounded-4xl bg-card shadow-soft p-6 md:p-0 md:flex items-center">
          
          {/* ОБЩИЙ КОНТЕЙНЕР ДЛЯ МОБИЛОК: изменили items-start на items-center для выравнивания по центру */}
    <div className="flex flex-col-reverse items-center justify-center gap-1 md:block md:w-[35%] md:flex-shrink-0 md:p-6 scale-125 origin-center sm:scale-100">





            
            {/* БЛОК С ФОТО: увеличили ширину на мобилках до 55% (было w-[45%]), чтобы сделать фото побольше */}
          <div className="h-64 w-[78%] flex-shrink-0 flex items-center justify-center md:h-auto md:w-full">


              <img
                src={photo}
                alt="Студенты готовятся к поступлению за рубежом"
                width={720}
                height={900}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* ПЛАШКА МЕРОПРИЯТИЯ ДЛЯ МОБИЛОК: убрали большой отступ pt-8, заменили на небольшой pt-2 */}
            <div className="flex-1 pt-2 md:hidden">
              <span className="flex whitespace-normal text-center items-center justify-center gap-2 rounded-md bg-secondary px-3 py-2 text-xs sm:text-sm font-bold tracking-[0.11em] text-primary uppercase">

                {events.badge}
              </span>
            </div>

          </div>

          {/* ТЕКСТОВЫЙ БЛОК И ОСНОВНОЙ КОНТЕНТ */}
          <div className="mt-6 md:mt-0 md:w-[65%] md:p-14">
            {/* ПЛАШКА МЕРОПРИЯТИЯ ДЛЯ ПК: на мобилках скрыта (hidden md:inline-flex) */}
            <span className="hidden md:inline-flex items-center gap-2 rounded bg-secondary px-4 py-2 text-sm font-bold tracking-[0.16em] text-primary uppercase">
              {events.badge}
            </span>
            
            <h2 className="font-display mt-5 text-2xl leading-snug text-ink md:text-3xl">
              {events.heading}
            </h2>
            <p className="mt-4 border-l-2 border-primary pl-3 text-xs font-bold tracking-[0.1em] text-primary uppercase">
              {events.highlight}
            </p>
            <ul className="mt-5 space-y-2.5">
              {events.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <a
           
  href="https://www.instagram.com/education_kyrgyzconcept/"
  target="_blank"
  rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              {events.buttonText}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certificates() {
  const [certs] = useContentSection("certs");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="certs" className="bg-background pb-20 md:pb-28">
      <div className="shell">
        <SectionHeading eyebrow="Сертификаты" title=" Аккредитация агентства" />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {certs.items.map((c, i) => {
            const isOpen = open === i;
            
            // Проверка, является ли файл PDF-документом
            const isPdf = typeof c.image === "string" && c.image.toLowerCase().includes(".pdf");

            // Корректно формируем абсолютную ссылку на файл для Vercel
            const fileUrl = isPdf && typeof c.image === "string"
              ? c.image.startsWith("http")
                ? c.image
                : `${typeof window !== "undefined" ? window.location.origin : ""}${c.image}`
              : "";

            return (
              <Reveal key={c.id} delay={i * 0.06} className="overflow-hidden rounded-2xl bg-card shadow-soft">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`cert-panel-${i}`}
                    id={`cert-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <ShieldCheck className="size-5 flex-shrink-0 text-teal" aria-hidden="true" />
                    <span className="flex-1 font-display text-base font-bold text-ink">{c.title}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={
                        "size-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 " +
                        (isOpen ? "rotate-180" : "")
                      }
                    />
                  </button>
                </h3>
                
                <div
                  id={`cert-panel-${i}`}
                  role="region"
                  aria-labelledby={`cert-btn-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 flex flex-col md:flex-row md:items-start gap-6"
                >
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                  
                  {c.image && (
                    <div className="w-full md:w-1/4 flex-shrink-0 md:order-last flex flex-col gap-2">
                      <div className="h-64 overflow-hidden rounded-xl border border-border bg-secondary/30">
                        {isPdf ? (
                          <PdfThumbnail url={fileUrl} alt={c.title} />
                        ) : (
                          /* JPG / PNG — обычная картинка */
                          <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const el = e.currentTarget;
                              el.onerror = null;
                              el.style.display = "none";
                              const parent = el.parentElement;
                              if (parent && !parent.querySelector("[data-fallback]")) {
                                const span = document.createElement("span");
                                span.dataset.fallback = "true";
                                span.className = "flex h-full w-full items-center justify-center text-center text-xs text-muted-foreground px-3";
                                span.textContent = "Файл не загрузился. Загрузите его заново в админ-панели.";
                                parent.appendChild(span);
                              }
                            }}
                          />
                        )}
                      </div>
                      {isPdf && (
                        <a
                          href={fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-center text-xs font-semibold text-primary hover:underline"
                        >
                          Открыть PDF-документ целиком
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  ); 
}
