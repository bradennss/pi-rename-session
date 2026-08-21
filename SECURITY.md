# Security Policy

## Scope and behavior

`pi-rename-session` is a Pi extension. Like all Pi extensions it runs with your full user permissions. This extension:

- Sets the session display name through Pi's `setSessionName` API when the model calls the `set_session_name` tool.
- Has no network calls, no telemetry, and no credential access. Its only runtime dependency is `typebox` for tool parameter schemas.

## Reporting a vulnerability

Please report suspected vulnerabilities privately via a [GitHub security advisory](https://github.com/bradennss/pi-rename-session/security/advisories/new). You will receive an acknowledgement within a few days.
