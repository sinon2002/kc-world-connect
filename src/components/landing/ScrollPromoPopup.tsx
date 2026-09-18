import { useEffect, useState } from "react";
import { X } from "lucide-react";
import guyPhoto from "@/assets/contact/kc-guy.png";

const WHATSAPP_NUMBER = "996999490039";
const WHATSAPP_MESSAGE = "Здравствуйте! Хочу получить бесплатную консультацию.";
const INSTAGRAM_URL = "https://www.instagram.com/education_kyrgyzconcept/";

export function ScrollPromoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [animate, setAnimate] = useState(false);

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

  // Логика плавного включения анимации при появлении
  useEffect(() => {
    if (visible && !dismissed) {
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    }
  }, [visible, dismissed]);

  // Функция для плавного закрытия поп-апа
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setDismissed(true);
    }, 300); // 300мс соответствует длительности transition duration-300
  };

  if (!visible || dismissed) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Бесплатная консультация"
      onClick={handleClose}
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Главное окно поп-апа (Горизонтальный стиль, точный размер и закругления по фото-примерам) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex w-full max-w-[680px] flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl transition-all duration-300 md:flex-row ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-30 grid size-8 place-items-center rounded-full bg-secondary text-ink/70 transition-colors hover:bg-secondary/70 hover:text-ink"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        {/* Левая сторона: Картинка парня на серой подложке (как на фото 2) */}
        <div className="relative flex items-center justify-center bg-secondary/40 p-6 md:w-[38%] md:p-8 flex-shrink-0">
          <img
            src={guyPhoto}
            alt="Консультант"
            className="h-44 w-auto drop-shadow-xl md:h-52 object-contain"
          />
        </div>

        {/* Правая сторона: Контент поп-апа */}
        <div className="flex flex-1 flex-col justify-center p-6 text-center md:p-9 md:text-left">
          <p 
            className="font-display text-xl font-black leading-tight text-ink md:text-2xl tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Получите бесплатную консультацию
          </p>
          
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium">
            Расскажем, какой вуз и страна подойдут именно вам — бесплатно и без обязательств.
          </p>

          {/* Плашка с адресом из фото-примера */}
          <p className="mt-2 text-[11px] font-bold text-primary tracking-wide uppercase">
            📍 Ждем вас по адресу: Тыныстанова, 231
          </p>

          {/* Блок кнопок */}
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#20ba56]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.9 1.2-.5 0-1.2-.1-3.2-1s-3.4-3-3.5-3.2c-.6-.9-1-1.9-.9-2.8 0-.8.5-1.4.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.1.7 1.4.8.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .2 0 .8-.3 1.1Z" />
              </svg>
              Записаться
            </a>
            
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kyrgyz Concept"
              className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-ink transition-all hover:scale-[1.02] hover:bg-secondary/70"
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
