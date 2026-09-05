# pi-rename-session

A [Pi](https://pi.dev) extension that provides a `set_session_name` tool for renaming the current session.

## Install

```bash
# from npm
pi install npm:pi-rename-session

# or from git
pi install git:github.com/bradennss/pi-rename-session

# try it for a single run without installing
pi -e npm:pi-rename-session
```

## Usage

The model renames the session by calling the `set_session_name` tool with a short, descriptive title. The tool description tells the model how to phrase the title, so the name it sends is used as is.

## Requirements

- Node.js >= 20.

## Development

```bash
pnpm install
pnpm run check
```

## Contributing

Every change that affects the published package needs a [changeset](https://github.com/changesets/changesets):

```bash
pnpm changeset
```
