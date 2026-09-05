# pi-rename-session

## 1.1.0

### Minor Changes

- [#3](https://github.com/bradennss/pi-rename-session/pull/3) [`6e82ccd`](https://github.com/bradennss/pi-rename-session/commit/6e82ccd081180d8cbd9b0ba12898f9e9ea1a0864) Thanks [@bradennss](https://github.com/bradennss)! - Add a custom tool call display for `set_session_name`. The call row reads `set session name to "{name}"`, and the result row stays empty.

### Patch Changes

- [#2](https://github.com/bradennss/pi-rename-session/pull/2) [`8f2685c`](https://github.com/bradennss/pi-rename-session/commit/8f2685c1eb8600e12254d813e7b83836ca66e32c) Thanks [@bradennss](https://github.com/bradennss)! - Stop stripping trailing brackets and punctuation from session names. A title like "Fix login bug (retry path)" now keeps its closing parenthesis instead of losing it. The tool trusts the model's title and only strips control characters and collapses whitespace, with a hard 60 character cap enforced by the schema. Formatting rules now live in the tool description.

## 1.0.0

### Major Changes

- [`47ee397`](https://github.com/bradennss/pi-rename-session/commit/47ee397b08342b39e11ba997ed5ce511a639359e) Thanks [@bradennss](https://github.com/bradennss)! - First stable release.
