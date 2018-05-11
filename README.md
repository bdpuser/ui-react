# ui-react Monorepo

> ui-react is a library of react components

## About this monorepo

### Contents / Structure

Packages/Libraries vs Apps/Apis

This repository is formated to have mostly packages or libraries but of course we also have applications or apis. Applications and apis should always have `private: true` set in their package.json. This prevents them from being published when `yarn publish` is run.

### Available Commands

## To run a build

`yarn bootstrap`

## To publish a new version

`yarn publish`
