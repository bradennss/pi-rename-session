import { expect, test } from "vitest";
import { cleanSessionName } from "../src/session-name.ts";

test("cleanSessionName collapses whitespace and trims edges", () => {
  expect(cleanSessionName("  Fix   the\tauth  bug  ")).toBe("Fix the auth bug");
});

test("cleanSessionName strips control characters", () => {
  expect(cleanSessionName("hello\u0000\u0007world")).toBe("hello world");
});

test("cleanSessionName keeps brackets and punctuation the model chose", () => {
  expect(cleanSessionName("Fix bug (part 2)")).toBe("Fix bug (part 2)");
  expect(cleanSessionName("Update deps [v2]!")).toBe("Update deps [v2]!");
});

test("cleanSessionName returns an empty string for blank input", () => {
  expect(cleanSessionName("   \n\t  ")).toBe("");
});
