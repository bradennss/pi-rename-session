import { expect, test } from "vitest";
import { MAX_SESSION_NAME_LENGTH, normalizeName } from "../src/session-name.ts";

test("normalizeName collapses whitespace and trims edge punctuation", () => {
  expect(normalizeName("  Fix   the\tauth  bug!  ")).toBe("Fix the auth bug");
});

test("normalizeName strips control characters", () => {
  expect(normalizeName("hello\u0000\u0007world")).toBe("hello world");
});

test("normalizeName truncates at a word boundary within the limit", () => {
  const long = "Refactor the authentication module and split it into layers";
  const result = normalizeName(long, 20);
  expect(result.length).toBeLessThanOrEqual(20);
  expect(result).toBe("Refactor the");
});

test("normalizeName hard-clips a single long token", () => {
  expect(normalizeName("supercalifragilisticexpialidocious", 10)).toBe(
    "supercalif",
  );
});

test("normalizeName returns an empty string for blank input", () => {
  expect(normalizeName("   \n\t  ")).toBe("");
});

test("normalizeName bounds long names to the default limit", () => {
  const result = normalizeName("word ".repeat(50));
  expect(result.length).toBeLessThanOrEqual(MAX_SESSION_NAME_LENGTH);
});
