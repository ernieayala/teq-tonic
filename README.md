# Teq-Tonic Tools

## Table of Contents

1. [Using This Package In A Project](#using-this-package-in-a-project)
2. [Folder Structure](#folder-structure)
3. [SASS Docs](https://ernieayala.github.io/teq-tonic/)


## Using This Package In A Project

This project is configured for easy use during development and as a package when included in your project.

```sass
@import 'teq-tonic/_utils.scss';
```

You can also access the basic root styles by simply specifying:

```sass
@import 'teq-tonic/_root.scss';
```

## Folder Structure

* [`docs`](./docs) - Sass function, mixin, and variable documentation.
* [`src`](./src) - Source files being developed. This folder is excluded when installed as a package to reduce confusion.
