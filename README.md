# Impierce UI Component Library

## Local development

```bash
npm install
npm run storybook
```

> Go to http://localhost:6006 to see a live preview of the components!

## Build

```bash
npm run build-storybook
npx http-server storybook-static
```

> Go to http://localhost:8081 and explore the final components!

## Release

> The release is currently **not** automated or generated.

1. Adjust the version in `package.json`
2. Go to **GitHub > Releases > Draft a new release**
3. Create the next tag (according to the version)
4. Set the release title to the same name
5. Publish
6. A GitHub workflow will be triggered that tests, builds and publishes the version

## Use a released version

```bash
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
# GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
# Note: Read private packages, Expiration: 90 days, Scopes: read:packages

touch ~/.npmrc

//npm.pkg.github.com/:_authToken=ghp_...
```
