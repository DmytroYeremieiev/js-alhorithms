> The project is a nothing but a `TypeScript` playground, there some algorithms got to be solved.
#### Unit testing required package installation:
`$ npm install --save-dev mocha chai`

`mocha` is a testing structure lib, which run/display/watch our tests.

`chai` is a simple, but eloquent assertions libs which provides a full set of assertions functions.

Installing typings packages for Intellisense:

`$ npm install --save-dev @types/chai @types/mocha` 

Mocha can't run typescript by itself, it needs typescript compiler and the package for it's registering, therefore installing both:

`$ npm install --save-dev ts-node typescript`

#### Now, let’s add a script entry into our package.json file so that we can run the tests:

```
"scripts": {
  "test": "mocha --require ts-node/register tests/**/*.ts"
},
```

Note the `--require ts-node/register` is the important bit here. It registers TypeScript as an compiler.

#### In order to enable debugging in the Visual Studio Code, a next configuration has to be added to `launch.json`:
```
  {
    "type": "node",
    "request": "launch",
    "name": "Mocha Tests",
    "program": "${workspaceFolder}/JS/node_modules/mocha/bin/_mocha",
    "args": [
        "--require", "ts-node/register",
        "-u", "tdd",
        "--timeout", "999999",
        "--colors", "--recursive",
        "${workspaceFolder}/JS/tests/**/*.ts"
    ],
    "internalConsoleOptions": "openOnSessionStart"
  }
```