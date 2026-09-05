---
"pi-rename-session": patch
---

Stop stripping trailing brackets and punctuation from session names. A title like "Fix login bug (retry path)" now keeps its closing parenthesis instead of losing it. The tool trusts the model's title and only strips control characters and collapses whitespace, with a hard 60 character cap enforced by the schema. Formatting rules now live in the tool description.
