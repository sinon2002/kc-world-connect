import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#process", label: "Как мы работаем" },
  { href: "#stories", label: "Истории" },
  { href: "#services", label: "Услуги" },
  { href: "#team", label: "Команда" },
  { href: "#events", label: "Мероприятия" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (solid ? "bg-navy/95 shadow-soft backdrop-blur-md" : "bg-transparent")
      }
    >
      <div className="shell flex h-20 items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Kyrgyz Concept"
            width={132}
            height={44}
            className="h-11 w-auto"
          />
          <span className="hidden text-xs font-semibold tracking-wide text-on-navy-muted sm:block">
            Education Abroad
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-9 lg:flex xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent pb-1 text-sm font-medium text-on-navy-muted transition-colors hover:border-gold hover:text-on-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-2">
          <a
            href="#consult"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-gold transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Консультация
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid size-10 place-items-center rounded-xl bg-on-navy/10 text-on-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-on-navy/10 bg-navy px-5 pb-6 lg:hidden"
      >
        <nav aria-label="Мобильная навигация" className="flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-on-navy/10 py-3.5 text-base font-semibold text-on-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#consult"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-gold px-5 py-3 text-center text-sm font-bold text-navy"
          >
            Консультация
          </a>
        </nav>
      </div>
    </header>
  );
}
