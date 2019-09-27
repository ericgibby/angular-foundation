# Angular Foundation

A basic Angular component library created with [Angular CLI](https://github.com/angular/angular-cli).

Please note, this project is an excercise in creating an angular component library. _It is not full-featured_ (or very featured at all).
If you're looking for a real component library built on Zurb Foundation, check out [ngx-foundation](https://www.ngxfoundation.com/).

## Repo structure

This repo consists of an Angular CLI workspace with two projects:

1. `angular-foundation`: This is the component library. Code and assets from this project will be included in the npm package.
2. `angular-foundation-demo`: This is a demo application, which can be used while developing new components for the library.

## Getting started

This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 8, which requires Node v10.16 or newer.

Node Version Manager (nvm) is recommended over simply installing Node, since it allows you to easily switch between
versions of Node without having to uninstall previous versions.

**Installing NVM on Windows**

Download and run installer from https://github.com/coreybutler/nvm-windows/releases.

Run the following commands in the command prompt:

```cmd
nvm install 10.16.3
nvm use 10.16.3
```

**Installing NVM on Mac OSX**

Run the following commands in the terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 10.16.3
nvm use 10.16.3
```

See https://github.com/creationix/nvm for more information on NVM.

## Dependencies

Run `npm install` to install all project dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

By default, generated code is added to the `angular-foundation` project. To generate code in the demo application, include the `--project=angular-foundation-demo` parameter.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Packaging

Run `npm run package` to create a tarball for publishing to GitHub Package Manager.

## Running unit tests

Run `npm test` to execute the unit tests in the `angular-foundation` project via [Karma](https://karma-runner.github.io).

Run `npm run test:demo` to execute the unit tests in the `angular-foundation-demo` project.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
