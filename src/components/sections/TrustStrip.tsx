import { TRUST_POINTS } from "@/lib/data";
import { ICONS } from "@/lib/icon-map";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-white">
      <RevealStagger className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-3 lg:px-10">
        {TRUST_POINTS.map((point) => {
          const Icon = ICONS[point.icon as keyof typeof ICONS];
          return (
            <StaggerItem key={point.title} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-tint text-teal-deep">
                {Icon && <Icon className="h-5 w-5" />}
              </span>
              <div>
                <p className="font-display text-base font-semibold tracking-tight text-ink">
                  {point.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </RevealStagger>
    </section>
  );
}
