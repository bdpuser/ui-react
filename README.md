# React @ SPS

> Components, tools, and example applications to help use React at SPS.

## Mono Repo Contents

> Tip: This repo is a mono repo. A mono repo is a single git repository that contains multiple npm packages and applications.

Here are some of the projects [being developed in this mono repo](MONOREPO.md):

### Create a new SPS React app

`packages/ui-react-scripts` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/packages/ui-react-scripts)) is a fork of react-scripts that can be used with `create-react-app` to generate a new application. This application will be ready to run inside Commerce Platform including React Router integration. The one line to create a new app is `npx create-react-app my-new-react-project --scripts-version @spscommerce/ui-react-scripts` after which you will have a functioning application.

### View an example application featuring all SPS components

`applications/ui-react-kitchensink` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/applications/ui-react-kitchensink)) is an application built that attempts to show usage of all of the components in `ui-react`.

### Contribute to our SPS components

`packages/ui-react` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/packages/ui-react)) is the core library containing the source code for our **React components**. Each component is styled using the SPS Pattern Library while functionality is provided by React itself.

## Getting started

1.  Install Node 8+ and NPM 5+
1.  Ensure you have access to and have configured our [private jFrog Artifactory npm registry](https://atlassian.spscommerce.com/wiki/display/STM/Getting+started+with+private+NPM+packages+in+jFrog+Artifactory).
1.  Fork and clone the repo
1.  Change directory into the project: `cd ui-react`
1.  Install lerna cli tools globally: `yarn global add lerna@^2`
1.  Bootstrap the project `yarn`

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
npx create-react-app my-new-react-project --scripts-version @spscommerce/ui-react-scripts
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
