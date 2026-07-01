import en from "./en";
import es from "./es";
import de from "./de";
import type { Locale, Dictionary } from "@/lib/i18n";

// Static map for synchronous, client-side access (all three dictionaries are
// small and shipped together so language switching needs no server round-trip).
export const dictionaries: Record<Locale, Dictionary> = { en, es, de };
