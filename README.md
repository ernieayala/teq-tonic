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

Import the core utils file into your project.

```sass
@import './teq-tonic/utils/core';
```

Define settings for your project.
View the [`settings`](https://ernieayala.github.io/teq-tonic/#mixin-settings) mixin to view what can be customized. 

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

* [`docs`](./docs) - Sass function, mixin, and variable documentation.
* [`utils`](./utils) - Source files being developed.

## SASS Docs

[`Documentation for the tools.`](https://ernieayala.github.io/teq-tonic/)
