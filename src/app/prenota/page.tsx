import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import BookingForm from "@/components/forms/BookingForm";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prenota una Visita",
  description:
    "Prenota una prima visita o richiedi un preventivo gratuito allo Studio Dentistico Sestante, a Rimini. Tel. 0541 682910.",
};

export default function PrenotaPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenota"
        title="Prenota una visita o richiedi un preventivo"
        description="Chiamaci direttamente oppure lascia i tuoi dati: ti richiamiamo noi per trovare insieme il giorno e l'orario più comodi."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-deep">
                Contatti diretti
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                Preferisci chiamarci?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Il modo più rapido per prenotare è una telefonata diretta in
                segreteria.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-teal px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-teal/25 transition-colors hover:bg-teal-deep"
              >
                <Phone className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
            </div>

            <div className="space-y-5 rounded-[2rem] border border-line bg-white p-7">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal-deep">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Indirizzo</p>
                  <p className="text-sm text-ink-soft">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal-deep">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-ink-soft hover:text-ink"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal-deep">
                  <Clock className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Orari</p>
                  <ul className="text-sm text-ink-soft">
                    {SITE.hours.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-line">
              <iframe
                title={`Mappa: ${SITE.address}`}
                src={SITE.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
