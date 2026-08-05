import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { ICONS } from "@/lib/icon-map";
import { Reveal, RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesHighlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Servizi"
          title="Ogni cura, dalla prevenzione ai trattamenti più complessi"
          description="Dalla routine di igiene alla riabilitazione implantare: un solo studio per prenderti cura del tuo sorriso in ogni fase."
        />
        <Reveal delay={0.1}>
          <Link
            href="/servizi"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-deep transition-colors hover:text-teal"
          >
            Tutti i servizi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon as keyof typeof ICONS];
          return (
            <StaggerItem key={service.id}>
              <Link
                href={`/servizi#${service.id}`}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_45px_-24px_rgba(16,34,47,0.35)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-tint text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-deep opacity-0 transition-opacity group-hover:opacity-100">
                  Scopri di più
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </RevealStagger>
    </section>
  );
}
