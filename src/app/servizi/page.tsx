import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Igiene dentale, estetica e sbiancamento, implantologia, ortodonzia e odontoiatria pediatrica: i servizi dello Studio Dentistico Sestante a Rimini.",
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Servizi"
        title="Un percorso di cura pensato su di te"
        description="Non pubblichiamo un listino prezzi fisso: ogni piano di cura è diverso da paziente a paziente. Dopo la visita ricevi sempre un preventivo scritto e senza impegno."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            Prenota una prima visita
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/domande-frequenti"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/40"
          >
            Domande frequenti
          </Link>
        </div>
      </PageHero>

      <div>
        {SERVICES.map((service, i) => (
          <ServiceDetail key={service.id} service={service} reversed={i % 2 === 1} />
        ))}
      </div>

      <CTASection />
    </>
  );
}
