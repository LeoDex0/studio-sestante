"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { submitBooking } from "@/lib/actions";
import { initialFormState } from "@/lib/form-state";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(
    submitBooking,
    initialFormState
  );

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[2rem] bg-mist px-8 py-12 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-teal text-white">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
          Richiesta inviata
        </p>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
          {state.message}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-[2rem] border border-line bg-white p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Nome e cognome *
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Mario Rossi"
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal",
              state.fieldErrors?.name ? "border-coral" : "border-line"
            )}
          />
          {state.fieldErrors?.name && (
            <p className="mt-1.5 text-xs text-coral">{state.fieldErrors.name}</p>
          )}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Telefono *
          </span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="333 1234567"
            className={cn(
              "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal",
              state.fieldErrors?.phone ? "border-coral" : "border-line"
            )}
          />
          {state.fieldErrors?.phone && (
            <p className="mt-1.5 text-xs text-coral">{state.fieldErrors.phone}</p>
          )}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Email (facoltativa)
        </span>
        <input
          type="email"
          name="email"
          placeholder="mario.rossi@email.it"
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal",
            state.fieldErrors?.email ? "border-coral" : "border-line"
          )}
        />
        {state.fieldErrors?.email && (
          <p className="mt-1.5 text-xs text-coral">{state.fieldErrors.email}</p>
        )}
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Servizio di interesse *
        </span>
        <select
          name="service"
          required
          defaultValue=""
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-teal",
            state.fieldErrors?.service ? "border-coral" : "border-line"
          )}
        >
          <option value="" disabled>
            Seleziona un servizio
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="non-so">Non so, vorrei un consiglio</option>
        </select>
        {state.fieldErrors?.service && (
          <p className="mt-1.5 text-xs text-coral">{state.fieldErrors.service}</p>
        )}
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Messaggio (facoltativo)
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Raccontaci brevemente il tuo caso o i giorni in cui preferisci essere richiamato/a…"
          className={cn(
            "w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal",
            state.fieldErrors?.message ? "border-coral" : "border-line"
          )}
        />
        {state.fieldErrors?.message && (
          <p className="mt-1.5 text-xs text-coral">{state.fieldErrors.message}</p>
        )}
      </label>

      {state.status === "error" && !state.fieldErrors && (
        <p className="mt-4 text-sm text-coral">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Invio in corso…
          </>
        ) : (
          "Invia la richiesta"
        )}
      </button>
      <p className="mt-3 text-xs text-ink-faint">
        Ti richiameremo per confermare data e ora dell&apos;appuntamento.
      </p>
    </form>
  );
}
