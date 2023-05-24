# On Webhook Update Linear State

This example creates a webhook that can be called with a `commitId` parameter. 

You can trigger this from any CI tool after a successful deploy to trigger updates to any of the Linear issues referenced in your commit messages. 

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

To call the webhook from your CI tool, `curl` the url for the webhook (you can find this in your Lightyear Dashboard) and append the id of the commit that triggered the run using a query parameter `?commitId=<commitId>`. For example: 

```shell
curl https://app.runlightyear.com/api/v1/endpoints/<slug>?commitId=<commitId>
```

Important note: the first time this integration is run, it will not detect any commits because it has no previous value for `lastSuccessfulCommitId`. After the first run, it will update the `lastSuccessfulCommitId` variable and subsequent calls should work as expected.

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
