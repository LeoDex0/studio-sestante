import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesHighlight from "@/components/sections/ServicesHighlight";
import SmileDiagram from "@/components/sections/SmileDiagram";
import FirstVisitSteps from "@/components/sections/FirstVisitSteps";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesHighlight />

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Scopri i tuoi servizi"
            title="Passa il mouse sul sorriso, scopri la cura giusta"
            description="Un modo diverso di raccontare i nostri trattamenti: seleziona un molare, un incisivo, un dente disallineato o la gengiva."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <SmileDiagram />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Prima visita"
          title="Cosa aspettarsi al tuo primo appuntamento"
          description="Sappiamo che il primo appuntamento può creare qualche apprensione: ecco, passo dopo passo, cosa succede davvero."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16">
          <FirstVisitSteps />
        </div>
      </section>

      <CTASection />
    </>
  );
}
