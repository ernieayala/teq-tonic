# Teq-Tonic Tools

## Table of Contents

1. [Using This Package In A Project](#using-this-package-in-a-project)
2. [Folder Structure](#folder-structure)
3. [SASS Docs](https://ernieayala.github.io/teq-tonic/)


## Using This Package In A Project

Install [`teq-tonic`](https://www.npmjs.com/package/teq-tonic) into your project.

```
npm i teq-tonic
```

Import teq-tonic into your project using [`Eyeglass`](https://github.com/sass-eyeglass/eyeglass). You can view how Eyeglass works by checking out the [`example`](https://github.com/ernieayala/teq-tonic-example) project.

```sass
@import "teq-tonic";
```

Define settings for your project.
View the [`settings`](https://ernieayala.github.io/teq-tonic/#app-setup-mixin-settings) mixin to view what can be customized.

``` sass
@include settings(
  "namespace" (
    "main": ".main",
    "hero": ".hero",
    "nav": ".nav"
  )
  "font-sizes" (
    "xl": 3rem,
    "hero": 2rem
  )
  "font-family" (
    "default": "IBM Plex Sans"
  )
);
```

## Folder Structure

* [`core`](./core) - Source files being developed.
* [`docs`](./docs) - Sass function, mixin, and variable documentation.

## SASS Docs

[`Documentation for the tools.`](https://ernieayala.github.io/teq-tonic/)
