# Build UI-React-Scripts

> Download and build a new version of ui-react-scripts by grabbing the Facebook react-scripts and patching.

This package downloads and builds a new version of ui-react-scripts by grabbing the Facebook react-scripts and attempting to patch them with our sps specific changes. From here the person running this is responsible for manually testing the patch to ensure that applications can still be generated properly.

## Execution

This package is rarely ued. Please beware that it might not work if create-react-app's react-scripts has significantly changed. Don't worry though, the code in index.js can be used as a set of instructions that can be performed manually. The automation makes some assumptions so you should double check that generated applications still function as intended.

```bash
cd packages/build-ui-react-scripts
yarn
node index.js
# Provide the git SHA or branch of react-scripts
# that you want to use as your starting point.
#
# The newly built files will be generated in
# packages/build-ui-react-scripts/new-scripts-build
#
# You must then look in new-scripts-build and if it
# looks ok then you may copy the contents to
# packages/ui-react-scripts
```

Following these steps you must go through and publish the following packages

* babel-plugin-named-asset-import
* babel-preset-react-app
* confusing-browser-globals
* eslint-config-react-app
* react-dev-utils

but you should ensure that you publish them with @spscommerce/ prefixes and update references to them in each package. This allows us to work off a fork ok react-scripts.

## Todo

* Tests to declare the changes we make that create-react-app
