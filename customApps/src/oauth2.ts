import { defineAction, defineOAuth } from "@runlightyear/lightyear";
import { GitHub, GitHubOAuth } from "@runlightyear/github";

defineAuthorizer({
  customApp: "githubApp",
  connector: (props) => {
    return new GitHubOAuth({
      ...props,
      scopes: ["public_repo"],
    });
  },
});

defineAction({
  name: "limitedAppScope",
  title: "Limited App Scope",
  customApps: ["githubApp"],
  variables: ["owner", "repo"],
  run: async ({ auths, variables }) => {
    const github = new GitHub({ auth: auths.githubApp });

    const response = await github.createIssue({
      owner: variables.owner!,
      repo: variables.repo!,
      title: "Test issue",
    });

    console.log("Response data", response.data);
  },
});
