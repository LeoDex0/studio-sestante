"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import ToothMark from "@/components/ui/ToothMark";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu when the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra cascading render pass.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-paper/90 py-3 shadow-[0_1px_0_0_rgba(16,34,47,0.08)] backdrop-blur-md"
            : "bg-paper/60 py-5 backdrop-blur-sm"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ink"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-tint text-teal-deep">
              <ToothMark className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-semibold tracking-tight">
                {SITE.name}
              </span>
              <span className="text-[11px] font-medium tracking-[0.08em] text-ink-soft">
                Studio Dentistico
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-medium transition-colors hover:text-teal-deep",
                    active ? "text-teal-deep" : "text-ink-soft"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-teal-deep lg:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/prenota"
              className="hidden rounded-full bg-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm shadow-teal/20 transition-colors hover:bg-teal-deep sm:inline-block"
            >
              Prenota una visita
            </Link>
            <button
              type="button"
              aria-label="Apri il menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-paper px-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.05 }}
                className="border-b border-line py-4"
              >
                <Link href={link.href} className="font-display text-2xl text-ink">
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + NAV_LINKS.length * 0.05 }}
              className="pt-6"
            >
              <Link
                href="/prenota"
                className="inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white"
              >
                Prenota una visita
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center gap-2 text-base text-ink-soft"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
