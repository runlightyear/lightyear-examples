# On GitHub Push Update Linear State

This example listens for GitHub pushes and will update the state of all of the Linear issues referenced in the commit messages.

An example commit message

```text
ENG-102 Linear stories are updated on push to any branch
```

## To Run

Install the packages

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
