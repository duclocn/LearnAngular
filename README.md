# Angular8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

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

## After load branch

1. Run command to install core_modules folder: npm install @angular/cli
2. Run command to install bootstrap: npm install bootstrap jquery --save

## install Nodejs Server
1. Create a server folder
2. Run command: npm init -y
3. Run command: npm install express --save
4. Run command: npm install body-parser --save
5. Create an "index.js" file in the server folder.
6. Content of index.js file:
    const express = require('express');
    const jsonParser = require('body-parser').json();
    const app = express();

    //GET method here
    app.get('/', (req, res) => res.send('Hello'));

    //POST method here
    app.post('/signin', jsonParser, (req, res) => {
      res.send(req.body.name);

    });

    app.listen(3000, () => console.log('Server is running!'));

7. Testing by Postman app
