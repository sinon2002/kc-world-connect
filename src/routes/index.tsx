import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStats } from "@/components/landing/TrustStats";
import { Trust } from "@/components/landing/Trust";
import { Partners } from "@/components/landing/Partners";
import { Process } from "@/components/landing/Process";
import { Stories } from "@/components/landing/Stories";
import { Services } from "@/components/landing/Services";
import { Team } from "@/components/landing/Team";
import { Events, Certificates } from "@/components/landing/EventsCerts";
import { Faq } from "@/components/landing/Faq";
import { Contact, Footer } from "@/components/landing/Contact";
import { WhatsAppWidget } from "@/components/landing/WhatsAppWidget";
import { ScrollPromoPopup } from "@/components/landing/ScrollPromoPopup";

const title = "KC Education Abroad — учёба за рубежом с Kyrgyz Concept";
const description =
  "Поступление в зарубежные вузы, школы и на языковые курсы: подбор программы, документы, тесты, виза и сопровождение. 36+ лет опыта, 25+ стран.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/*
        СЛОЙ 1: весь обычный контент сайта.
        relative + z-10 — чтобы он лежал ПОВЕРХ подвала.
        rounded-b + сплошной bg-background — скруглённый вырез внизу,
        через который "выглядывает" подвал, когда до него доскроллили.
      */}
      <div className="relative z-10 rounded-b-[60px] bg-background sm:rounded-b-[100px]">
        <main>
          <Hero />
          <TrustStats />
          <Trust />
          <Partners />
          <Process />
          <Stories />
          <Services />
          <Team />
          <Events />
          <Certificates />
          <Faq />
          
          {/* 
            ИСПРАВЛЕНО: Добавлен невидимый триггер-якорь в самый конец первого слоя.
            Когда кнопка «Консультация» будет скроллить сюда, страница прокрутится до упора 
            вниз, и "шторка" с формой связи полностью откроется.
          */}
          <div id="consult" className="h-px w-full" />
        </main>
      </div>

      {/*
        СЛОЙ 2: подвал (форма связи + футер).
        sticky bottom-0 — "прилипает" ко дну экрана и стоит на месте,
        пока верхний слой не проскроллится и не откроет его снизу вверх.
      */}
      <div className="sticky bottom-0 z-0">
        {/* Из самого компонента Contact внутри contact.tsx теперь можно убрать id="consult", так как маркер перенесен сюда */}
        <Contact />
        <Footer />
      </div>

      <WhatsAppWidget />
      <ScrollPromoPopup />
    </div>
  );
}
