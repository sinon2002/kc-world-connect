const WHATSAPP_NUMBER = "996553900885";
const WHATSAPP_MESSAGE = "Здравствуйте! Хочу узнать подробнее об учёбе за рубежом.";

export function WhatsAppWidget() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Написать нам в WhatsApp" className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lift transition-transform duration-200 hover:scale-110 sm:bottom-7 sm:right-7">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-white" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.9 1.2-.5 0-1.2-.1-3.2-1s-3.4-3-3.5-3.2c-.6-.9-1-1.9-.9-2.8 0-.8.5-1.4.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.1.7 1.4.8.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .2 0 .8-.3 1.1Z" />
      </svg>
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white shadow-soft group-hover:block">
        Написать в WhatsApp
      </span>
    </a>
  );
}
