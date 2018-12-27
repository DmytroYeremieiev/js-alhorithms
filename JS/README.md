The project is a nothing but a `TypeScript` playground with some basic algorithms to be solved.
#### Unit testing required package installation:
`$ npm install --save-dev mocha chai`

`mocha` is a testing structure lib, which run/display/watch our tests.

`chai` is a simple, but eloquent assertions libs which provides a full set of assertions functions.

Installing typings packages for Intellisense:

`$ npm install --save-dev @types/chai @types/mocha` 

Mocha can't run typescript by itself, it needs typescript compiler and the package for it's registering, therefore installing both:

`$ npm install --save-dev ts-node typescript`

#### Now, let’s add some npm scripts into our package.json for building and testing: 

```
"scripts": {
  "build": "tsc --pretty",
  "test": "mocha --require ts-node/register \"tests/*.ts\""
},
```

Note, the `--require ts-node/register` is the important bit here. It registers TypeScript as an compiler.

Also, we need to watch for changes and redo the processes: 

```
"scripts": {
  "build": "tsc --pretty",
  "watch": "npm run build -- --watch",
  "test": "mocha --require ts-node/register \"tests/*.ts\"",
  "watch:test": "npm run watch & npm run test -- --watch-extensions ts --watch"
},
```

Note, we can easily invoke npm scripts from others npm scripts with `npm run <script_name>`, but in order to  pass some custom arguments, the special option has to be used `--`. "*The special option `--` is used by `getopt` to delimit the end of the options. npm will pass all the arguments after the -- directly to your script"*. Basically, running `npm run build -- --watch` will be the same as running `tsc --pretty --watch`.


`npm run watch & npm run test ...` will be invoked independetly in parallel due to `&` delimiter. As in the oposite to `<first> && <second>` - then scripts would be invoked sequentielly, there the second script wouldn't get invoked until the first finishes it's execution.  


#### In order to enable unit tests debugging in the Visual Studio Code, a next configuration has to be added to `launch.json`:


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