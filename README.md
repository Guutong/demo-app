# LearnTddTodos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Scenario 1
As a Guutong, I want to see todo list page
```
Given I open todo list page
Then I can see add button and todo item
```

### Scenario 2
As a Guutong, I want to add todo item
```
Given I open todo list page
When I click add
And I can see todo form
And I input title "Develop Todo Page"
And I input detail "Develop Todo Page, adjust style follow screen in fixma"
And I input category "develop"
And I click ok
Then I can see todo item "Develop Todo Page"
```

### Scenario 3
As a Guutong, I can not click ok
```
Given I open todo list page
When I click add
And I can see todo form
And I input title "Develop Todo Page"
Then I can not click add
```
