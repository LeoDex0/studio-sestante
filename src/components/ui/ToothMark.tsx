import { cn } from "@/lib/utils";

/**
 * Small restrained tooth glyph used as the brand mark. Deliberately simple
 * (a single rounded-crown silhouette) so it reads as a clinical mark rather
 * than a cartoon icon.
 */
export default function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M16 4c-2.4 0-3.7 1.1-5 1.1-1.9 0-3.6-1.1-5.7-1.1C3.1 4 1.5 6.6 1.9 10c.5 4.4 2.1 8 3.4 11.6.9 2.5 1.7 5.4 3.6 5.4 2.1 0 2-3.9 2.7-6.6.5-1.9 1.1-3.3 2.4-3.3s1.9 1.4 2.4 3.3c.7 2.7.6 6.6 2.7 6.6 1.9 0 2.7-2.9 3.6-5.4 1.3-3.6 2.9-7.2 3.4-11.6.4-3.4-1.2-6-3.4-6-2.1 0-3.8 1.1-5.7 1.1-1.3 0-2.6-1.1-5-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
