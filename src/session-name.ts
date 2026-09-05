export const MAX_SESSION_NAME_LENGTH = 60;

/** Collapse a raw string into a single trimmed line without control characters. */
export function cleanSessionName(raw: string): string {
  return raw
    .replace(/[\p{Cc}\p{Cf}]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}
