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

## Use a released version

```bash
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
# GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
# Note: Read private packages, Expiration: 90 days, Scopes: read:packages

touch ~/.npmrc

//npm.pkg.github.com/:_authToken=ghp_...
```
