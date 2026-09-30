import { readFile } from "node:fs/promises";
import { expect, test } from "vitest";

interface PackageManifest {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

const manifest = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
) as PackageManifest;

test("declares typebox as a host-provided peer dependency", () => {
  expect(manifest.peerDependencies?.typebox).toBe("*");
  expect(manifest.dependencies?.typebox).toBeUndefined();
});
