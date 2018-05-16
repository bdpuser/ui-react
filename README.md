# ui-react Monorepo

> ui-react is a library of react components

## About this monorepo

### Contents / Structure

This repository is formated to be able to publish multiple interdependent packages with a single command. While we focus on packages there is also a need for example applications or even potentially apis. If you want to add to this repo you should review the tips outlined below to ensure that you have a successful build experience.

#### Packages

##### Do create your package as a subdirectory of `packages/`

This ensures that we know that this is an NPM publishable package and NOT an application or api.

##### Do NOT set `"private": true` in `package.json`

This ensures that your package will be published to NPM when `yarn publish` is executed.

#### Applications

##### Do generate your project in `empty/` first, then copy it to `applications/`

We use lerna with yarn workspaces to manage our monorepo. This has implications for tools that generate code and run `npm install` or `yarn install` on their own. Oftentimes you'll need to generate your project inside the `empty/` folder and then copy it to the place you want it to live. Here is an example using `create-react-app` with our custom version of `react-scripts` to get you a custom template when your app is generated:

```bash
npx create-react-app my-new-react-project --scripts-version @spscommerce/ui-react-scripts@1.1.4-build.1
mv my-new-react-project ../applications/
```

For now this is the best way to generate a new starting point for your application. Eventually we may wrap this command structure in a wrapper command such as `npx create-react-app-sps` which would be a public repo that contains the latest command

##### Do copy your application or api to a subdirectory of `applications/`

This ensures that we know that this is an application or api and NOT an NPM publishable package and not an .

##### Do set `"private": true` in `package.json`

This prevents your application or api from being accidentally published when `yarn publish` is run. Applications and apis should always have `private: true` set in their package.json. It doesn't really make sense to run publish against an application. Instead we would typically deploy an application via some other mechanism (generally at sps this is configured via the bdp).

### Available Commands

## To run a build

`yarn bootstrap`

## To publish a new version

`yarn publish`
