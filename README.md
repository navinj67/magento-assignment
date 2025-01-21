# Playwright (TS binding) + Cucumber (BDD)

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environments 
3. Downloadable report

## Sample report
test-results\cucumber-report.html


## Project structure

- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports
1. Default Cucumber report
2. [Logs](https://www.npmjs.com/package/winston)
3. Screenshots of failure
4. Test videos of failure
5. Trace of failure

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change  
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@cart or @add"
```

### Folder structure
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> One file to do all the magic
9. `package.json` -> Contains all the dependencies
10. `src\helper\util` -> Read test data & logger
