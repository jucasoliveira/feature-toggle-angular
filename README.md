# Angular2Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Feature Toggle

Implemented a feature toggle component which shows if the feature is enable or not

`src/app/featuretoggled/featuretoggled.component.ts`
```typescript
data = {
    feature1: {
      displayed: true,
      text : 'feature 1'
    },
    feature2: {
      displayed: true,
      text : 'feature 2'
    },
    feature3: {
      displayed: false,
      text : 'feature 3'
    }
  };
```

on `src/app/featuretoggled/featuretoggled.component.html` will be shown if the `displayed` it's `true`

```html
<ul>
  <li *ngFor="let key of ngtoggled">
    <div *ngIf="data[key].displayed">
     {{data[key].text}}
    </div>
  </li>
</ul>

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
