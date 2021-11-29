# What is Cypress?
 #### Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
# How to install Cypress?
>npm install                                         
npm install cypress --save-dev
#### To run specific spec file headless: 
> npx cypress run --spec cypress/integration/Examples/SpecFileName.js
#### To run BDD tests using tags and in a headed browser:
> npx cypress-tags run -e TAGS="@tagName" --headed --browser browserName
#### To run tests with mochawesome reports:
> npx cypress run --spec filePath --reporter mochawesome
# How can use Cypress with Cucumber?
 By following this link https://www.npmjs.com/package/cypress-cucumber-preprocessor, you can install and use Cucumber with Cypress. And for its reports reader use this https://github.com/wswebcreation/multiple-cucumber-html-reporter.
# What are the Test types provided by Cypress?
#### End-to-end
#### Component
#### API
##### For more inforamtion visit: https://docs.cypress.io/




