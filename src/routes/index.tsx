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

      {/* =========================================================
          СЛОЙ 1 — ОСНОВНОЙ САЙТ
      ========================================================= */}

      <div
        className="
          relative
          z-10
          rounded-b-[60px]
          bg-background

          sm:rounded-b-[100px]
        "
      >
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

          {/* Якорь консультации */}
          <div
            id="consult"
            className="h-px w-full"
          />
        </main>
      </div>


      {/* =========================================================
          СЛОЙ 2 — CONTACT + FOOTER

          MOBILE:
          обычный поток страницы.
          Никакого sticky, чтобы весь Contact был виден.

          DESKTOP:
          sticky-эффект сохраняется.
      ========================================================= */}

      <div
        className="
          relative
          z-0

          lg:sticky
          lg:bottom-0
          lg:max-h-[calc(100vh-5.25rem)]
          lg:overflow-y-auto
        "
      >
        <Contact />

        <Footer />
      </div>


      {/* =========================================================
          ПЛАВАЮЩИЙ WHATSAPP
      ========================================================= */}

      <WhatsAppWidget />

      {/* =========================================================
          POPUP
      ========================================================= */}

      <ScrollPromoPopup />
    </div>
  );
}
