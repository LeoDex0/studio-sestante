"use server";

import { z } from "zod";
import { SERVICES } from "./data";
import type { FormState } from "./form-state";

const serviceIds = [...SERVICES.map((s) => s.id), "non-so"];

function fieldErrorsFrom(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

const bookingSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome e cognome."),
  phone: z
    .string()
    .min(6, "Inserisci un numero di telefono valido.")
    .max(20, "Numero di telefono troppo lungo."),
  email: z
    .string()
    .optional()
    .refine((v) => !v || z.email().safeParse(v).success, {
      message: "Inserisci un indirizzo email valido.",
    }),
  service: z.string().refine((v) => serviceIds.includes(v), {
    message: "Seleziona il servizio che ti interessa.",
  }),
  message: z
    .string()
    .max(600, "Il messaggio non può superare i 600 caratteri.")
    .optional(),
});

export async function submitBooking(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email") || undefined,
    service: formData.get("service"),
    message: formData.get("message") || undefined,
  };

  const result = bookingSchema.safeParse(raw);

  if (!result.success) {
    return {
      status: "error",
      message: "Controlla i campi evidenziati.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  // Mockup di presentazione: qui non è collegata una vera casella email o un
  // gestionale di studio. In una versione in produzione, questa richiesta
  // validata verrebbe inoltrata direttamente alla segreteria dello studio,
  // che richiamerebbe il paziente per confermare data e ora.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const firstName = result.data.name.trim().split(" ")[0];
  const service = SERVICES.find((s) => s.id === result.data.service);

  return {
    status: "success",
    message: `Grazie, ${firstName}. Abbiamo ricevuto la tua richiesta${
      service ? ` per ${service.title.toLowerCase()}` : ""
    }: la segreteria dello studio ti richiamerà al più presto per confermare data e ora.`,
  };
}
