import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Domande Frequenti",
  description:
    "Le domande più frequenti sui trattamenti, i costi e le urgenze dello Studio Dentistico Sestante a Rimini.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Domande frequenti"
        title="Le domande che ci fanno più spesso"
        description="Trasparenza prima di tutto: se hai un dubbio che non trovi qui sotto, chiamaci o scrivici, ti rispondiamo volentieri."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <FaqAccordion />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-[2rem] bg-mist px-8 py-10 text-center">
          <p className="font-display text-xl font-semibold tracking-tight text-ink">
            Non hai trovato risposta alla tua domanda?
          </p>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Scrivici tramite il modulo di contatto o chiamaci direttamente:
            siamo felici di risponderti prima ancora che tu venga in studio.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Contattaci
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/40"
            >
              <Phone className="h-4 w-4 text-teal" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
