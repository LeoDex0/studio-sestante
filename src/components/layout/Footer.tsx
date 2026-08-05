import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import ToothMark from "@/components/ui/ToothMark";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <div className="flex items-center gap-2.5 text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-tint text-teal-deep">
              <ToothMark className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              {SITE.fullName}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {SITE.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
            Il nostro studio
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/prenota"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Prenota una visita
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
            Contatti
          </p>
          <ul className="space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-teal" />
              <a href={SITE.phoneHref} className="hover:text-ink">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-teal" />
              <a href={`mailto:${SITE.email}`} className="hover:text-ink">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
            Orari
          </p>
          <ul className="space-y-3 text-sm text-ink-soft">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>
                  {h.day}
                  <br />
                  <span className="text-ink-faint">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti riservati.</p>
          <p>{SITE.address}</p>
        </div>
      </div>
    </footer>
  );
}
