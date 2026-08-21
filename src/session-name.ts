export const MAX_SESSION_NAME_LENGTH = 60;

function stripEdges(value: string): string {
  return value
    .replace(/^[\s"'`([{<]+/u, "")
    .replace(/[\s"'`)\]}>.,;:!?-]+$/u, "");
}

/** Clean a raw string into a single-line, length-bounded session name. */
export function normalizeName(
  raw: string,
  maxLength: number = MAX_SESSION_NAME_LENGTH,
): string {
  const collapsed = raw
    .replace(/[\p{Cc}\p{Cf}]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
  if (collapsed.length <= maxLength) return stripEdges(collapsed);

  const truncated = collapsed.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const clipped = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
  return stripEdges(clipped);
}
