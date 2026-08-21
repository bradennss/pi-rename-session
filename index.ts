/**
 * pi-rename-session provides a `set_session_name` tool the model can
 * call to rename the current session.
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { MAX_SESSION_NAME_LENGTH, normalizeName } from "./src/session-name.ts";

export default function sessionName(pi: ExtensionAPI): void {
  pi.registerTool({
    name: "set_session_name",
    label: "Set Session Name",
    description:
      "Set the current session's display name. Use a short, descriptive title for the work in this session.",
    promptSnippet: "Rename the current session with a short descriptive title",
    parameters: Type.Object({
      name: Type.String({
        description: "New session name",
        minLength: 1,
        maxLength: MAX_SESSION_NAME_LENGTH * 2,
      }),
    }),
    execute: async (_toolCallId, params) => {
      const name = normalizeName(params.name);
      if (!name) {
        throw new Error("Session name cannot be empty.");
      }

      pi.setSessionName(name);
      return {
        content: [{ type: "text", text: `Session renamed to "${name}".` }],
        details: { name },
      };
    },
  });
}
