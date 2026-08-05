import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/lib/data";
import { ICONS } from "@/lib/icon-map";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function ServiceDetail({
  service,
  reversed = false,
}: {
  service: Service;
  reversed?: boolean;
}) {
  const Icon = ICONS[service.icon as keyof typeof ICONS];

  return (
    <section
      id={service.id}
      className="scroll-mt-28 border-b border-line py-16 last:border-b-0 sm:py-20"
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-10",
          reversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="rounded-[2rem] bg-mist p-10 sm:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal-deep shadow-sm">
              {Icon && <Icon className="h-6 w-6" />}
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal-deep">
              {service.shortTitle}
            </p>
            <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {service.title}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-lg leading-relaxed text-ink-soft">
            {service.description}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-tint text-teal-deep">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Prenota una prima visita
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal/40"
            >
              Richiedi un preventivo gratuito
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
