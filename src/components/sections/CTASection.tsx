import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import ToothMark from "@/components/ui/ToothMark";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-teal/10 blur-2xl"
          />
          <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-bright/15 text-teal-bright">
            <ToothMark className="h-7 w-7" />
          </span>
          <h2 className="relative mx-auto mt-6 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Il primo passo verso un sorriso più sano è una visita.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-balance text-[15px] leading-relaxed text-white/65">
            Prenota una prima visita o richiedi un preventivo gratuito: ti
            ascoltiamo e ti proponiamo il percorso più adatto a te, senza
            impegno.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-colors hover:bg-teal-bright hover:text-ink"
            >
              Prenota una visita
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
