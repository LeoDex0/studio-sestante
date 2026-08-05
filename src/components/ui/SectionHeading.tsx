import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-balance text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
