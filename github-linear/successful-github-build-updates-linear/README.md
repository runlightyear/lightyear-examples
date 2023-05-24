# Successful GitHub Build Updates Linear

This example listens for GitHub workflow runs and if it detects a successful one on the `main` branch, it will update the state of all of the Linear issues referenced in your commit messages.

An example commit message

```text
ENG-102 Fixed: Linear stories updated even if build fails
```

To configure, make sure to update the following constants at the top of `src/index.ts`

```typescript
const OWNER = "<owner>";
const REPO = "<repo>";
const IDENTIFIER_REGEX = /ENG-[0-9]+/g; // <-- must be a global regex (ends with /g)
const STATE_NAME = "Done";
```

Important note: the first time this integration is run, it will not detect any commits because it has no previous value for `lastSuccessfulCommitId`. After the first run, it will update the `lastSuccessfulCommitId` variable and subsequent calls should work as expected.

To run, install the packages

```shell
npm install
```

Then get your Lightyear credentials

```shell
npx lightyear login
```

When ready, run the dev server

```shell
npm run dev
```
