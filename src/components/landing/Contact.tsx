import { useState } from "react";
import { Reveal } from "./Reveal";
import guyPhoto from "@/assets/contact/kc-guy.png";
import { useContentSection } from "@/lib/content";

export function Contact() {
  const [contact] = useContentSection("contact");
  const countries = contact.countries;

  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "",
  });

  // ==========================================
  // НОМЕР WHATSAPP МЕНЕДЖЕРА
  // Формат: код страны + номер, без + и пробелов
  // Например: 996555123456
  // ==========================================
  const whatsappNumber = "996999490039";

  const valid =
    form.name.trim().length > 1 &&
    form.phone.trim().length > 5;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!valid) return;

    // Формируем сообщение для WhatsApp
    const message = `Новая заявка с сайта

Имя: ${form.name.trim()}
Телефон: ${form.phone.trim()}
Интересующая страна: ${
      form.country ? form.country : "Не выбрана"
    }`;

    // Кодируем сообщение для URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Открываем WhatsApp
    window.open(whatsappUrl, "_blank");

    // Показываем экран "Спасибо"
    setSent(true);
  };

  return (
    <section id="consult" className="relative overflow-hidden rounded-t-[56px] section-pad text-white sm:rounded-t-[100px]" style={{ background: "#0078c3" }}>
      {/* Сетка */}
      <div aria-hidden="true" className="route-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* Линия маршрута */}
      <svg aria-hidden="true" viewBox="0 0 1400 520" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full text-white/35 lg:block">
        <path d="M20 70 C 300 40, 480 230, 740 270 S 1140 400, 1330 460" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <circle cx="20" cy="70" r="6" fill="var(--gold)" />
        <circle cx="1330" cy="460" r="7" fill="var(--gold)" />
      </svg>

<div className="shell relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_320px_1fr] lg:gap-4"> {/* Левая часть */} <Reveal> <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl"> {contact.heading} </h2> <p className="mt-4 max-w-xl text-white/75"> {contact.paragraph} </p> <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/85"> <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" /> Ответим в течение 30 минут в рабочее время </p> {/* Соцсети */} {/* Соцсети */}<div className="mt-6 flex gap-3"> {/* WhatsApp */} <a href={` https://wa.me/996999490039`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition-colors hover:bg-white/20" > <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true" > <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.9 1.2-.5 0-1.2-.1-3.2-1s-3.4-3-3.5-3.2c-.6-.9-1-1.9-.9-2.8 0-.8.5-1.4.8-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.1.7 1.4.8.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5 0 .2 0 .8-.3 1.1Z" /> </svg> </a> {/* Instagram */} <a href="https://www.instagram.com/education_kyrgyzconcept/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Kyrgyz Concept" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 transition-colors hover:bg-white/20" > <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true" > <path d="M12 2.2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.7.2-1.2.6-1.7 1.1S3 5 2.8 5.6c-.3.6-.4 1.4-.5 2.4-.1 1-.1 1.4-.1 4.1s0 3 .1 4.1c0 1 .2 1.8.5 2.4.2.7.6 1.2 1.1 1.7s1 .8 1.7 1.1c.6.3 1.4.4 2.4.5 1 0 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.7-1.1s.8-1 1.1-1.7c.3-.6.4-1.4.5-2.4 0-1 .1-1.4-.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.2-.7-.6-1.2-1.1-1.7s-1-.8-1.7-1.1c-.6-.3-1.4-.5-2.4-.5-.1-.1-1.4-.1-4.1-.1Zm0 5.1a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.1-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /> </svg> </a></div> </Reveal> {/* Фото */} <Reveal delay={0.08} className="order-first justify-self-center lg:order-none" > <img src={guyPhoto} alt="Студент Kyrgyz Concept приглашает записаться на консультацию" width={895} height={1200} className="h-[320px] w-auto drop-shadow-2xl sm:h-[400px] lg:h-[480px]" /> </Reveal> {/* Форма */} <Reveal delay={0.15}> <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8"> {sent ? ( <div role="status" className="py-10 text-center" > <p className="font-display text-xl font-bold text-ink"> Спасибо, {form.name.trim()}! </p> <p className="mt-3 text-muted-foreground"> Ваша заявка открыта в WhatsApp. <br /> Осталось только нажать кнопку отправки сообщения. </p> <button type="button" onClick={() => { setSent(false); setForm({ name: "", phone: "", country: "", }); }} className="mt-6 text-sm font-semibold text-blue underline" > Отправить ещё одну заявку </button> </div> ) : ( <form className="space-y-5" noValidate onSubmit={handleSubmit} > {/* Имя */} <div> <label htmlFor="kc-name" className="block text-sm font-semibold text-ink" > Имя </label> <input id="kc-name" name="name" required autoComplete="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value, })) } className="mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20" placeholder="Айсулуу" /> </div> {/* Телефон */} <div> <label htmlFor="kc-phone" className="block text-sm font-semibold text-ink" > Телефон / WhatsApp </label> <input id="kc-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value, })) } className="mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20" placeholder="+996 700 000 000" /> </div> {/* Страна */} <div> <label htmlFor="kc-country" className="block text-sm font-semibold text-ink" > Интересующая страна </label> <select id="kc-country" name="country" value={form.country} onChange={(e) => setForm((f) => ({ ...f, country: e.target.value, })) } className="mt-2 w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20" > <option value=""> Выберите страну </option> {countries.map((c) => ( <option key={c} value={c}> {c} </option> ))} </select> </div> {/* Кнопка */} <button type="submit" disabled={!valid} className="w-full rounded-2xl bg-gold px-6 py-4 font-display text-base font-bold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50" > Отправить заявку </button> <p className="text-xs text-muted-foreground"> Нажимая кнопку, вы соглашаетесь на обработку персональных данных. </p> </form> )} </div> </Reveal> </div> </section> );}

export function Footer() {
  const [footer] = useContentSection("footer");

  const text = footer.text.replace(
    "{year}",
    String(new Date().getFullYear())
  );

  return (
    <footer className="-mt-1 pb-8 pt-4 text-white" style={{ background: "#0078c3" }}>
      <div className="shell">
        <p aria-hidden="true" className="select-none text-center font-display text-[15vw] leading-none tracking-tight text-white/10 sm:text-[9vw]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
          Kyrgyz Concept
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row">
          <p>{text}</p>
          <p className="text-white/50">Демонстрационный проект лендинга</p>
        </div>
      </div>
    </footer>
  );
}
