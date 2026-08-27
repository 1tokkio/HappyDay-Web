import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { About } from "@/components/about";
import { ServiceCategories } from "@/components/service-categories";
import { Gallery } from "@/components/gallery";
import { ProcessSteps } from "@/components/process-steps";
import { QuoteSection } from "@/components/quote-form";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <ServiceCategories />
        <Gallery />
        <ProcessSteps />
        <QuoteSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
