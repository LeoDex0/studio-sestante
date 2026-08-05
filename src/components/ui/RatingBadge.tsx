import { Star } from "lucide-react";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function RatingBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm shadow-sm",
        className
      )}
    >
      <span className="flex items-center gap-0.5 text-teal">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5"
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </span>
      <span className="font-semibold text-ink">{SITE.rating}</span>
      <span className="text-ink-soft">
        su Google · {SITE.reviews} recensioni
      </span>
    </div>
  );
}
