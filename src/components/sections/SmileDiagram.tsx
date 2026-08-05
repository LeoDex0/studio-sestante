"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { SMILE_ZONES, SERVICES } from "@/lib/data";
import { ICONS } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

type ToothDef = {
  id: string;
  zone: string;
  x: number;
  width: number;
  height: number;
  rotate?: number;
};

const COLORS = {
  tooth: "#ffffff",
  toothActive: "#e3f7f3",
  line: "rgba(16, 34, 47, 0.16)",
  teal: "#0f9c93",
  blush: "#f6b8ac",
  coral: "#e98c7c",
};

const TOOTH_TOP = 105;
const GUM = { x: 20, y: 28, width: 780, height: 95, rx: 47 };

const TEETH: ToothDef[] = [
  { id: "t0", zone: "molare", x: 112, width: 86, height: 60 },
  { id: "t1", zone: "molare", x: 204, width: 72, height: 72 },
  { id: "t2", zone: "storto", x: 282, width: 64, height: 80, rotate: -14 },
  { id: "t3", zone: "incisivo", x: 352, width: 58, height: 96 },
  { id: "t4", zone: "incisivo", x: 416, width: 58, height: 102 },
  { id: "t5", zone: "incisivo", x: 480, width: 58, height: 96 },
  { id: "t6", zone: "molare", x: 544, width: 72, height: 72 },
  { id: "t7", zone: "molare", x: 622, width: 86, height: 60 },
];

export default function SmileDiagram() {
  const [active, setActive] = useState<string | null>(null);

  const activeZone = SMILE_ZONES.find((z) => z.id === active) ?? null;
  const activeService = activeZone
    ? SERVICES.find((s) => s.id === activeZone.serviceId) ?? null
    : null;

  function selectZone(zoneId: string) {
    setActive(zoneId);
  }

  function onKeyActivate(e: KeyboardEvent, zoneId: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectZone(zoneId);
    }
  }

  const gumActive = active === "gengiva";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
      {/* Diagram */}
      <div className="relative rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_70px_-32px_rgba(16,34,47,0.35)] sm:p-10">
        <svg
          viewBox="0 0 820 235"
          className="w-full select-none"
          role="group"
          aria-label="Diagramma interattivo del sorriso: seleziona una zona per scoprire il servizio collegato"
        >
          <motion.rect
            x={GUM.x}
            y={GUM.y}
            width={GUM.width}
            height={GUM.height}
            rx={GUM.rx}
            initial={false}
            animate={{
              fill: gumActive ? COLORS.coral : COLORS.blush,
              opacity: active && !gumActive ? 0.6 : 1,
            }}
            stroke={COLORS.line}
            strokeWidth={1.5}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label="Gengiva — Igiene dentale"
            onMouseEnter={() => selectZone("gengiva")}
            onFocus={() => selectZone("gengiva")}
            onClick={() => selectZone("gengiva")}
            onKeyDown={(e) => onKeyActivate(e, "gengiva")}
          />

          {TEETH.map((tooth) => {
            const isActive = active === tooth.zone;
            const zone = SMILE_ZONES.find((z) => z.id === tooth.zone);
            const cx = tooth.x + tooth.width / 2;
            const cy = TOOTH_TOP + tooth.height / 2;
            const transform = tooth.rotate
              ? `rotate(${tooth.rotate} ${cx} ${cy})`
              : undefined;

            return (
              <motion.rect
                key={tooth.id}
                x={tooth.x}
                width={tooth.width}
                height={tooth.height}
                rx={14}
                transform={transform}
                initial={false}
                animate={{
                  y: isActive ? TOOTH_TOP - 10 : TOOTH_TOP,
                  fill: isActive ? COLORS.toothActive : COLORS.tooth,
                  stroke: isActive ? COLORS.teal : COLORS.line,
                  opacity: active && !isActive ? 0.55 : 1,
                }}
                strokeWidth={1.5}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={zone ? `${zone.label} — ${zone.tagline}` : tooth.id}
                onMouseEnter={() => selectZone(tooth.zone)}
                onFocus={() => selectZone(tooth.zone)}
                onClick={() => selectZone(tooth.zone)}
                onKeyDown={(e) => onKeyActivate(e, tooth.zone)}
              />
            );
          })}
        </svg>

        {!active && (
          <p className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs font-medium text-ink-faint">
            <MousePointerClick className="h-3.5 w-3.5" />
            Tocca o passa il mouse su un dente
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SMILE_ZONES.map((zone) => (
            <button
              key={zone.id}
              type="button"
              onMouseEnter={() => selectZone(zone.id)}
              onFocus={() => selectZone(zone.id)}
              onClick={() => selectZone(zone.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                active === zone.id
                  ? "border-teal bg-teal-tint text-teal-deep"
                  : "border-line bg-white text-ink-soft hover:border-teal/40 hover:text-teal-deep"
              )}
            >
              {zone.label}
            </button>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div className="relative min-h-[280px] rounded-[2rem] bg-mist p-8 sm:p-10">
        <AnimatePresence mode="wait">
          {activeZone && activeService ? (
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep shadow-sm">
                {(() => {
                  const Icon = ICONS[activeService.icon as keyof typeof ICONS];
                  return Icon ? <Icon className="h-3.5 w-3.5" /> : null;
                })()}
                {activeZone.label}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                {activeZone.tagline}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {activeZone.description}
              </p>
              <Link
                href={`/servizi#${activeService.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep transition-colors hover:text-teal"
              >
                Scopri {activeService.shortTitle.toLowerCase()}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-deep shadow-sm">
                Sorriso interattivo
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                Ogni dente racconta un servizio
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Passa il mouse (o tocca, da mobile) su un molare, un incisivo,
                un dente disallineato o la gengiva per scoprire il trattamento
                più adatto.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
