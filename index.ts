/**
 * pi-rename-session provides a `set_session_name` tool the model can
 * call to rename the current session.
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import {
  cleanSessionName,
  MAX_SESSION_NAME_LENGTH,
} from "./src/session-name.ts";

export default function sessionName(pi: ExtensionAPI): void {
  pi.registerTool({
    name: "set_session_name",
    label: "Set Session Name",
    description:
      "Set the current session's display name. Pass the exact title you want shown, " +
      `written as a short plain phrase of at most ${String(MAX_SESSION_NAME_LENGTH)} characters. ` +
      "Keep it to a single line. Do not wrap it in quotes or brackets, and do not add " +
      "trailing punctuation. Only include a closing bracket when it pairs with an opening " +
      'one that belongs in the title, like "Fix login bug (retry path)".',
    promptSnippet:
      "Rename the current session with a short, plain title. No surrounding quotes or brackets and no trailing punctuation.",
    parameters: Type.Object({
      name: Type.String({
        description:
          "The exact title to display, as a short plain phrase on a single line.",
        minLength: 1,
        maxLength: MAX_SESSION_NAME_LENGTH,
      }),
    }),
    execute: async (_toolCallId, params) => {
      const name = cleanSessionName(params.name);
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
