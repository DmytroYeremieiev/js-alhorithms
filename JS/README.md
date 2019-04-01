The project is a playground for a `TypeScript` language, unit tests and some  algorithms to solve.

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
  "test": "mocha --require ts-node/register"
},
```

Note, the `--require ts-node/register` is the important bit here. It registers TypeScript as an compiler. Notice we didn't specified the files to watch. This customisatio is left for other tools(vs code tasks) and scripts which will be passing file pattern as an extention, delimited by `--`: `npm run test -- './tests/**/*.ts'` 

Note, we can easily invoke npm scripts from others npm scripts with `npm run <script_name>`,but in order to  pass some custom arguments, the special option has to be used `--`. "*The special option `--` is used by `getopt` to delimit the end of the options. npm will pass all the arguments after the -- directly to your script"*. Basically, running `npm run build -- --watch` will be the same as running `tsc --pretty --watch`.

Also, we need to configure watching for a changes and re-run: 

```
"scripts": {
  "build": "tsc --pretty",
  "watch": "npm run build -- --watch",
  "test": "mocha --require ts-node/register",
  "watch:test": "npm run test -- --watch-extensions ts --watch"
},
```

Note, we can easily invoke npm scripts from others npm scripts with `npm run <script_name>`, but in order to  pass some custom arguments, the special option has to be used `--`. "*The special option `--` is used by `getopt` to delimit the end of the options. npm will pass all the arguments after the -- directly to your script"*. Basically, running `npm run build -- --watch` will be the same as running `tsc --pretty --watch`.


`npm run watch & npm run test ...` will be invoked independetly in parallel due to `&` delimiter. As in the oposite to `<first> && <second>` - then scripts would be invoked sequentielly, there the second script wouldn't get invoked until the first finishes it's execution.  


#### Now, lets add debugging configuration to `launch.json`:

Next conf obj pre-launches  `build` task from `tasks.json` file `"preLaunchTask": "build"`, which compiles typescript files to `/build` directory. Later, when debug start debugger will perform a look-up for running file's sourcemaps and origins. 
More faster approch will be to run incremental build&run in background, instead of pre-launching... 
```
    {
      "type": "node",
      "request": "launch",
      "name": "Launch current file",
      "program": "${file}",
      "preLaunchTask": "build",
      "outFiles": [
        "${workspaceFolder}/build/src/**/*.js"
      ]
    }
```
Next conf does the same, but instead of relying on pre-compiled file's source, it uses `ts-node` lib, which compiles typesript on a fly. Since, we're running only one file it benefit us in performance, compared to pre-launching `build` task in config above.   
```
    {
      "type": "node",
      "request": "launch",
      "name": "Launch current file w/ ts-node",
      "protocol": "inspector",
      "args": ["${relativeFile}"],
      // "cwd": "${workspaceRoot}",
      "runtimeArgs": ["-r", "ts-node/register"],
      "internalConsoleOptions": "openOnSessionStart"
    },
```
Next, invoking mocha directly for all test files or for the single active one:
```
    {
      "type": "node",
      "request": "launch",
      "name": "Mocha all files",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
          "--require", "ts-node/register",
          "-u", "tdd",
          "--timeout", "999999",
          "--colors", "--recursive",
          "${workspaceFolder}/tests/**/*.ts"
      ],
      "internalConsoleOptions": "openOnSessionStart"
    },
```
```
    {
      "type": "node",
      "request": "launch",
      "name": "Mocha current file",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
          "--require", "ts-node/register",
          "-u", "tdd",
          "--timeout", "999999",
          "--colors", "--recursive",
          "${file}"
      ],
      "internalConsoleOptions": "openOnSessionStart"
    }
```

#### In order to run tests through tasks interface in Visual Studio Code, a next configuration has to be added to `tasks.json`:

Building using vscode typescript compiler: 

```
"tasks": [
    {
      "type": "typescript",
      "label": "build",
      "tsconfig": "tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "label": "watch",
      "option": "watch",
      "group": "build",
      "problemMatcher": [
        "$tsc-watch"
      ]
    }
    ...
```
Running tests by invoking mocha directly:
```
    ...
    // running watch&build tests for active file
    {
      "type": "process",
      "label": "Mocha watch ${file}",
      "command": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "--require",
        "ts-node/register",
        // "-u",
        // "tdd",
        // "--timeout",
        // "999999",
        "--colors",
        "--recursive",
        "${file}",
        "--watch-extensions",
        "ts",
        "--watch",
      ]
    },
    {
      "type": "process",
      "label": "Mocha Run tests",
      "command": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "--require",
        "ts-node/register",
        "-u",
        "tdd",
        "--timeout",
        "999999",
        "--colors",
        "--recursive",
        "${workspaceFolder}/tests/**/*.ts"
      ]
    }
    ...
```
Running npm scripts and passing an active file path through `--` delimiter: 
```
    ...
    {
      "label": "npm run tests ${file}",
      "command": "npm",
      "args": [
        "run", "test",
        "--", "${file}"
      ]
    },
    {
      "label": "npm watch tests ${file}",
      "command": "npm",
      "args": [
        "run", "watch:test",
        "--", "${file}"
      ]
    }
  ]
```