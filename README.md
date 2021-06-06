# semantic-release POC

## What does it contain

1. Base typescript node.js app

2. Github actions config to support trunk based development

3. Commands to build and test the app

4. Github actions configured to execute:

- when PR title is updated
- on push to the repo
- when PR merged to master
- when PR is merged to staging
- when PR is merged to production


TODO: 

1. Add staging and production workflows and change the branches to CHANGMETOSTAGINGWHENREADY
2. Fix regexp for PR title to include JIRA number "regexp": "^(feat|fix|docs|style|refactor|perf|test|chore)((([a-zA-Z0-9 -]+)))?:" and BREAKING CHANGE
3. Current staging and production workflows for nx monorepo must be propended with "release flow" (instead of manually trigger the release from github UI)
4. Needs to merge back from production to trunk [master] (changes for CHANGELOG.md, package.json, package-lock.json)
5. Unify GH_TOKEN in secrets from: "NPM_GITHUB_TOKEN" to "GH_TOKEN"
6. Change semantic release bot to proximie one? create a new one?
7. Add post merge workflow to automatically create a new PR to sync from production to staging and another one when prod->staging merged to create a new staging->master sync PR.
8. Discuss versioning... semantic versioning now.. really most of the releases would be with features, so more semantically correct to bump x.y.z - "y" minor part as oppose of "z" how we are doing for all releases...
9. No limits on minor part really: https://stackoverflow.com/questions/65282816/maximum-number-for-major-minor-patch and https://semver.org/#does-semver-have-a-size-limit-on-the-version-string
10. Basically after this change we would follow:
- https://github.com/BMMRO-tech/BMMRO/issues/24#issuecomment-654222381 <- this approach
11. After implementing feature flags (launch darky/ config cat etc) - shall we investigate continiuous delivery? https://github.com/BMMRO-tech/BMMRO/issues/24#issuecomment-654225497 ?