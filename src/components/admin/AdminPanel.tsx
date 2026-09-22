import { useState } from "react";
import {
  LayoutTemplate,
  Building2,
  CalendarDays,
  GraduationCap,
  Wallet,
  Users,
  ShieldCheck,
  HelpCircle,
  PhoneCall,
  MessageCircleHeart,
  BarChart3,
  Award,
  Route,
} from "lucide-react";
import { supabaseEnabled } from "@/lib/supabase";
import { useContentLoading } from "@/lib/content";
import { HeroEditor } from "./sections/HeroEditor";
import { TrustStatsEditor } from "./sections/TrustStatsEditor";
import { TrustEditor } from "./sections/TrustEditor";
import { ProcessEditor } from "./sections/ProcessEditor";
import { PartnersEditor } from "./sections/PartnersEditor";
import { EventsEditor } from "./sections/EventsEditor";
import { StoriesEditor } from "./sections/StoriesEditor";
import { ServicesEditor } from "./sections/ServicesEditor";
import { TeamEditor } from "./sections/TeamEditor";
import { CertsEditor, FaqEditor } from "./sections/CertsFaqEditor";
import { ContactEditor, FooterEditor } from "./sections/ContactEditor";
import { PromoPopupEditor } from "./sections/PromoPopupEditor";

const tabs = [
  { id: "hero", label: "Шапка", icon: LayoutTemplate, Component: HeroEditor },
  { id: "trustStats", label: "Статистика (10 000+ и т.д.)", icon: BarChart3, Component: TrustStatsEditor },
  { id: "trust", label: "О нас (4 карточки)", icon: Award, Component: TrustEditor },
  { id: "process", label: "Маршрут поступления (6 шагов)", icon: Route, Component: ProcessEditor },
  { id: "partners", label: "Университеты", icon: Building2, Component: PartnersEditor },
  { id: "events", label: "Мероприятия", icon: CalendarDays, Component: EventsEditor },
  { id: "stories", label: "Истории студентов", icon: GraduationCap, Component: StoriesEditor },
  { id: "services", label: "Услуги и цены", icon: Wallet, Component: ServicesEditor },
  { id: "team", label: "Команда", icon: Users, Component: TeamEditor },
  { id: "certs", label: "Сертификаты", icon: ShieldCheck, Component: CertsEditor },
  { id: "faq", label: "FAQ", icon: HelpCircle, Component: FaqEditor },
  { id: "contact", label: "Подвал / Заявка", icon: PhoneCall, Component: ContactEditor },
  { id: "promoPopup", label: "Поп-ап консультации", icon: MessageCircleHeart, Component: PromoPopupEditor },
] as const;

export function AdminPanel() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("hero");
  const loading = useContentLoading();
  const Active = tabs.find((t) => t.id === active)!.Component;

  return (
    <div className="min-h-screen bg-secondary/40">
      <header className="border-b border-border/70 bg-white px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-ink">Админ-панель KC Education Abroad</h1>
            {!supabaseEnabled && (
              <p className="mt-0.5 text-xs font-semibold text-amber-600">
                База данных не подключена — изменения не будут видны на сайте (демо-режим)
              </p>
            )}
          </div>
          <a href="/" className="text-sm font-semibold text-primary hover:underline">
            ← Открыть сайт
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-8 lg:flex-row">
        <nav className="flex flex-shrink-0 gap-2 overflow-x-auto lg:w-64 lg:flex-col lg:overflow-visible">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={
                "flex flex-shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors " +
                (active === t.id ? "bg-primary text-primary-foreground" : "bg-white text-ink hover:bg-secondary")
              }
            >
              <t.icon className="size-4 flex-shrink-0" />
              {t.label}
            </button>
          ))}
        </nav>

        <main className="min-w-0 flex-1">
          {loading ? (
            <div className="rounded-2xl border border-border/70 bg-white p-10 text-center text-sm text-muted-foreground">
              Загрузка данных…
            </div>
          ) : (
            <Active />
          )}
        </main>
      </div>
    </div>
  );
}
