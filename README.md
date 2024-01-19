[![npm version](https://badge.fury.io/js/sloy-ui.svg)](https://www.npmjs.com/sloy-ui)

React components for ekaterinburgdev projects

## Local server

```
pnpm start
```

## Usage

```
npm i sloy-ui

Add sloy-ui/fonts.css
```

## Publish storybook

```
pnpm run build-storybook

# publish static files
```

## Local linking development

If you want to test this library without tag publishing you can link the package:

```
pnpm run build

pnpm link --global
cd OTHER_PROJECT_WITH_THIS_PACKAGE
pnpm link --global sloy-ui
```
