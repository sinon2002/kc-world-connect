import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/kc-logo.png";

const links = [
  { href: "#process", label: "Как мы работаем" },
  { href: "#stories", label: "Истории" },
  { href: "#services", label: "Услуги" },
  { href: "#team", label: "Команда" },
  { href: "#events", label: "Мероприятия" },
  { href: "#certs", label: "Сертификаты" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${solid || open ? "border-border bg-background/95 shadow-soft backdrop-blur-xl" : "border-transparent bg-background/75 backdrop-blur-sm"}`}>
      <div className="shell flex h-[76px] items-center justify-between">
        <a href="#hero" className="flex items-center gap-3" aria-label="KC Education Abroad — на главную">
        <img src={logo} alt="Kyrgyz Concept" width={132} height={64} className="h-12 w-auto" />
          <span className="hidden border-l border-border pl-3 text-[10px] font-bold uppercase text-muted-foreground sm:block">Education<br />Abroad</span>
        </a>
        <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {links.map((link) => <a key={link.href} href={link.href} className="border-b border-transparent py-2 text-[13px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#consult" className="hidden items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground sm:inline-flex">Консультация <ArrowUpRight className="size-4" /></a>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} className="grid size-10 place-items-center rounded-md border border-border bg-background text-foreground lg:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-background px-5 pb-6 lg:hidden">
        <nav aria-label="Мобильная навигация" className="flex flex-col">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-border py-3.5 text-base font-semibold text-foreground">{link.label}</a>)}
          <a href="#consult" onClick={() => setOpen(false)} className="mt-5 rounded-md bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground">Консультация</a>
        </nav>
      </div>
    </header>
  );
}
