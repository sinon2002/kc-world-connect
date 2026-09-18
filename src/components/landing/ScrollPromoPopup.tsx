import { useEffect, useState } from "react";
import { X } from "lucide-react";
import guyPhoto from "@/assets/contact/kc-guy.png";

const WHATSAPP_NUMBER = "996999490039";
const WHATSAPP_MESSAGE = "Здравствуйте! Хочу получить бесплатную консультацию.";
const INSTAGRAM_URL = "https://www.instagram.com/education_kyrgyzconcept/";

export function ScrollPromoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
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
  }, []);

  if (!visible || dismissed) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Бесплатная консультация"
      onClick={() => setDismissed(true)}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-3xl bg-white px-6 pb-8 pt-14 text-center shadow-2xl sm:max-w-md sm:flex-row sm:gap-6 sm:px-8 sm:text-left"
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Закрыть"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-secondary text-ink transition-colors hover:bg-secondary/70"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <img src={guyPhoto} alt="" aria-hidden="true" className="h-40 w-auto drop-shadow-xl sm:h-48" />

        <div className="mt-2 sm:mt-0">
          <p className="font-display text-xl font-extrabold text-ink sm:text-2xl">
            Получите бесплатную консультацию
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Расскажем, какой вуз и страна подойдут именно вам — бесплатно и без обязательств.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
            
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.9 1.2-.5 0-1.2-.1-3.2-1s-3.4-3-3.5-3.2c-.6-.9-1-1.9-.9-2.8 0-.8.5-1.4.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.1.7 1.4.8.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .2 0 .8-.3 1.1Z" />
              </svg>
              Записаться
            </a>
            
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kyrgyz Concept"
              className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-ink transition-colors hover:bg-secondary/70"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2.2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.2-1.2.6-1.7 1.1S3 5 2.8 5.6c-.3.6-.4 1.4-.5 2.4-.1 1-.1 1.4-.1 4.1s0 3 .1 4.1c0 1 .2 1.8.5 2.4.2.7.6 1.2 1.1 1.7s1 .8 1.7 1.1c.6.3 1.4.4 2.4.5 1 0 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.7-1.1s.8-1 1.1-1.7c.3-.6.4-1.4.5-2.4 0-1 .1-1.4-.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.2-.7-.6-1.2-1.1-1.7s-1-.8-1.7-1.1c-.6-.3-1.4-.5-2.4-.5-.1-.1-1.4-.1-4.1-.1Zm0 5.1a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.1-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
