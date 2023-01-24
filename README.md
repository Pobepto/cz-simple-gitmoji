# cz-simple-gitmoji

This is a simple [commitizen] adapter that will allow you to format your messages using emoji ([gitmoji]).

```sh
? Select the type of change you are committing: (Use arrow keys)
❯ :art:          🎨  Improve structure / format of the code.
  :zap:          ⚡️  Improve performance.
  :fire:         🔥  Remove code or files.
  :bug:          🐛  Fix a bug.
  :ambulance:    🚑️  Critical hotfix.
  :sparkles:     ✨  Introduce new features.
```

## Install

```bash
#npm
npm install -D cz-simple-gitmoji
#yarn
yarn add -D cz-simple-gitmoji
#pnpm
pnpm add -D cz-simple-gitmoji
```

Add this to your `package.json`:

```json
"config": {
  "commitizen": {
    "path": "cz-simple-gitmoji"
  }
}
```

[commitizen]: https://github.com/commitizen/cz-cli
[gitmoji]: https://gitmoji.dev/
