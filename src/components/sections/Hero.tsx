"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/data";
import RatingBadge from "@/components/ui/RatingBadge";
import ToothMark from "@/components/ui/ToothMark";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-20 h-[26rem] w-[26rem] rounded-full bg-teal-tint blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white blur-2xl"
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 mask-fade-b"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <RatingBadge />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Un sorriso sano, seguito con cura.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-soft"
          >
            {SITE.fullName}: prevenzione, estetica e cure odontoiatriche a
            Rimini, in uno studio pensato per farti sentire a tuo agio ad ogni
            visita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition-colors hover:bg-teal-deep"
            >
              Prenota la tua prima visita
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-teal/40"
            >
              <Phone className="h-4 w-4 text-teal" />
              {SITE.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-white shadow-[0_40px_100px_-40px_rgba(16,34,47,0.35)]" />
          <div className="absolute inset-6 rounded-full border border-dashed border-teal/30" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid h-40 w-40 place-items-center rounded-full bg-teal-tint text-teal-deep sm:h-48 sm:w-48"
          >
            <ToothMark className="h-20 w-20 sm:h-24 sm:w-24" />
          </motion.div>
          <span className="absolute left-6 top-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <span className="absolute bottom-10 right-4 rounded-2xl bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-md">
            Preventivo gratuito
          </span>
        </motion.div>
      </div>
    </section>
  );
}
