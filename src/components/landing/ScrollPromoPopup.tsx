import { useEffect, useState } from "react";
import { X, MapPin } from "lucide-react";
import { useContentSection } from "@/lib/content";
import guyPhoto from "@/assets/contact/kc-guy.png";

const WHATSAPP_NUMBER = "996553900885";
const INSTAGRAM_URL = "https://www.instagram.com/education_kyrgyzconcept/";

export function ScrollPromoPopup() {
  const [popup] = useContentSection("promoPopup");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!popup.enabled) return;
    if (sessionStorage.getItem("kc-promo-shown")) return;

    function onScroll() {
      const trigger = document.documentElement.scrollHeight * 0.25;
      if (window.scrollY > trigger) {
        setVisible(true);
        sessionStorage.setItem("kc-promo-shown", "1");
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [popup.enabled]);

  // Плавное включение анимации при появлении
  useEffect(() => {
    if (visible && !dismissed) {
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    }
  }, [visible, dismissed]);

  // Плавное закрытие поп-апа
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setDismissed(true), 300); // 300мс = длительность transition duration-300
  };

  if (!popup.enabled || !visible || dismissed) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(popup.title)}`;

  return (
    <div role="dialog" aria-modal="true" aria-label={popup.title} onClick={handleClose} className={`fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`relative grid w-full max-w-2xl grid-cols-1 overflow-hidden rounded-[24px] bg-white shadow-2xl transition-all duration-300 sm:grid-cols-[1.15fr_1fr] ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        <button type="button" onClick={handleClose} aria-label="Закрыть" className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-secondary">
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10">
          <p className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">{popup.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{popup.description}</p>
          {popup.address && (
            <a href={`https://2gis.kg/bishkek/search/${encodeURIComponent(popup.address)}`} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/50">
              <MapPin className="size-4 flex-shrink-0 text-rose-500" aria-hidden="true" />
              {popup.address}
            </a>
          )}
          <div className="mt-6 flex items-center gap-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#20ba56]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.9 1.2-.5 0-1.2-.1-3.2-1s-3.4-3-3.5-3.2c-.6-.9-1-1.9-.9-2.8 0-.8.5-1.4.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.1.7 1.4.8.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .2 0 .8-.3 1.1Z" />
              </svg>
              {popup.buttonText}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram Kyrgyz Concept" className="inline-flex size-11 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-[1.05]" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" }}>
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2.2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.2-1.2.6-1.7 1.1S3 5 2.8 5.6c-.3.6-.4 1.4-.5 2.4-.1 1-.1 1.4-.1 4.1s0 3 .1 4.1c0 1 .2 1.8.5 2.4.2.7.6 1.2 1.1 1.7s1 .8 1.7 1.1c.6.3 1.4.4 2.4.5 1 0 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.7-1.1s.8-1 1.1-1.7c.3-.6.4-1.4.5-2.4 0-1 .1-1.4-.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.2-.7-.6-1.2-1.1-1.7s-1-.8-1.7-1.1c-.6-.3-1.4-.5-2.4-.5-.1-.1-1.4-.1-4.1-.1Zm0 5.1a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.1-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-first flex h-64 items-center justify-center p-3 sm:order-none sm:h-auto sm:py-4 sm:pr-4">
          <div className={`h-full w-full overflow-hidden rounded-2xl ${popup.image ? "" : "flex items-center justify-center bg-secondary/40 p-4"}`}>
           <img src={popup.image ?? guyPhoto} alt="" className={`h-full w-full object-[center_42%] ${popup.image ? "object-cover" : "object-contain"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
