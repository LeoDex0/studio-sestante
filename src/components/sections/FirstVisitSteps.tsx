"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VISIT_STEPS } from "@/lib/data";
import { ICONS } from "@/lib/icon-map";

gsap.registerPlugin(ScrollTrigger);

export default function FirstVisitSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>(".visit-step");

      gsap.set(steps, { opacity: 0, y: 28 });

      steps.forEach((step, i) => {
        gsap.to(step, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: step,
            start: "top 88%",
          },
        });
      });

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-line lg:block">
        <div
          ref={lineRef}
          className="h-full origin-left bg-teal"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {VISIT_STEPS.map((step) => {
          const Icon = ICONS[step.icon as keyof typeof ICONS];
          return (
            <div key={step.number} className="visit-step relative">
              <div className="relative z-10 mb-5 grid h-[76px] w-[76px] place-items-center rounded-2xl border border-line bg-white shadow-sm">
                {Icon && <Icon className="h-7 w-7 text-teal" />}
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-teal text-[11px] font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
