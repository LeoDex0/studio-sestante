import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { Reveal, RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import { ICONS } from "@/lib/icon-map";
import { CLINIC_IMAGES, VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lo Studio",
  description:
    "Filosofia, struttura e team dello Studio Dentistico Sestante a Rimini: un ambiente pensato per mettere a proprio agio ogni paziente.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Lo studio"
        title="Uno studio pensato attorno a chi lo vive"
        description="Ambienti curati, strumentazione aggiornata e un approccio che mette al centro l'ascolto: ecco come lavoriamo, ogni giorno."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-deep">
              La nostra filosofia
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              La cura funziona meglio quando il paziente capisce cosa succede.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>
                Molte persone rimandano la visita dal dentista per ansia o per
                paura dell&apos;ignoto. Il nostro approccio parte da qui:
                prima di qualsiasi trattamento, ci prendiamo il tempo di
                ascoltare, spiegare e rispondere alle domande, così ogni
                decisione è presa con consapevolezza e senza fretta.
              </p>
              <p>
                Non proponiamo mai un trattamento senza prima aver chiarito
                perché serve, quali alternative esistono e quali sono i tempi
                realistici. Per questo ogni piano di cura viene consegnato per
                iscritto, con un preventivo trasparente e senza impegno.
              </p>
              <p>
                Investiamo in formazione continua e in strumentazione
                diagnostica aggiornata, perché una cura di qualità comincia da
                una valutazione accurata.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {CLINIC_IMAGES.slice(0, 2).map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-mist"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="La struttura"
            title="Ambienti pensati per la cura e per il tuo comfort"
            description="Sale operative luminose, strumentazione digitale e spazi curati nei minimi dettagli: la struttura è pensata per rendere ogni visita il più serena possibile."
          />
          <RevealStagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CLINIC_IMAGES.map((img) => (
              <StaggerItem key={img.src}>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 22vw, 45vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-tint text-teal-deep">
              <Users2 className="h-6 w-6" />
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal-deep">
              Il nostro team
            </p>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Un team che lavora insieme, per te
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Il nostro team è composto da professionisti odontoiatri e
              assistenti alla poltrona che seguono insieme ogni fase del tuo
              percorso di cura: dall&apos;accoglienza in reception, alla
              visita clinica, fino ai controlli di routine. Lavoriamo con un
              metodo condiviso, così da garantirti la stessa attenzione e la
              stessa qualità di comunicazione ad ogni appuntamento, con
              chiunque tu abbia il tuo appuntamento.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Crediamo che la fiducia si costruisca visita dopo visita: per
              questo teniamo aggiornate le competenze cliniche del team con
              formazione continua sulle tecniche e sui materiali più recenti.
            </p>
            <Link
              href="/prenota"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Prenota una prima visita
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Come lavoriamo"
            title="I principi che guidano ogni visita"
            align="center"
            className="mx-auto"
          />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = ICONS[value.icon as keyof typeof ICONS];
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-3xl border border-line bg-white p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-tint text-teal-deep">
                      {Icon && <Icon className="h-5 w-5" />}
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
