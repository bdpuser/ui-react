# React @ SPS

> Components, tools, and example applications to help use React at SPS.

[![SPS Commerce](https://img.shields.io/badge/sps-commerce-0097cc.svg?style=flat-square&colorA=62686b)](https://www.spscommerce.com) [![ui-react](https://drone.bdp-core.com/api/badges/SPSCommerce/ui-react/status.svg)](https://drone.bdp-core.com/SPSCommerce/ui-react) 

## Mono Repo Contents

> Tip: This repo is a mono repo. A mono repo is a single git repository that contains multiple npm packages and applications.

Here are some of the projects [being developed in this mono repo](MONOREPO.md):

### Create a new SPS React app

![Version](https://sps-badges.now.sh/@spscommerce/ui-react-scripts)

`packages/ui-react-scripts` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/packages/ui-react-scripts)) is a fork of react-scripts that can be used with `create-react-app` to generate a new application. This application will be ready to run inside Commerce Platform including React Router integration. The one line to create a new app is `npx create-react-app my-new-react-project --scripts-version @spscommerce/ui-react-scripts` after which you will have a functioning application.

### View an example application featuring all SPS components

`applications/ui-react-kitchensink` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/applications/ui-react-kitchensink)) is an application built that attempts to show usage of all of the components in `ui-react`.

### Contribute to our SPS components

![Version](https://sps-badges.now.sh/@spscommerce/ui-react)

`packages/ui-react` ([source code](https://github.com/SPSCommerce/ui-react/tree/master/packages/ui-react)) is the core library containing the source code for our **React components**. Each component is styled using the SPS Pattern Library while functionality is provided by React itself.

## Getting started

1.  Install Node 8+ and NPM 5+
1.  Ensure you have access to and have configured our [private jFrog Artifactory npm registry](https://atlassian.spscommerce.com/wiki/display/STM/Getting+started+with+private+NPM+packages+in+jFrog+Artifactory).
1.  Fork and clone the repo
1.  Change directory into the project: `cd ui-react`
1.  Install lerna cli tools globally: `yarn global add lerna@^2`
1.  Bootstrap the project `yarn`

