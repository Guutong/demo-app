import { Given, When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
const url = 'http://localhost:4200/todos';

Given('I open todo list page', () => {
  cy.visit(url)
});

Then('I can see add button and todo item {string}', (text) => {
  cy.get('.btn-primary').should('be.visible');
  cy.get('.container > .pt-2 > :nth-child(2)').should('contain', text);
});

When('I click add', () => {
  cy.get('#buttonAddTodo').click();
});

And('I can see todo form', () => {
  cy.get('#formAddTodo').should('be.visible');
});

And('I input title {string}', (value) => {
  cy.get('#title').type(value);
});

And('I input detail {string}', (value) => {
  cy.get('#detail').type(value);
});

And('I input category {string}', (value) => {
  cy.get('#category').type(value);
});

And('I click ok', () => {
  cy.get('#buttonOK').click();
});

Then('I can see todo second item {string}', (text) => {
  cy.get(':nth-child(3) > :nth-child(2)').should('contain', text);
});

Then('I ok button should disabled', () => {
  cy.get('#buttonOK').should('be.disabled');
});

Then('I can not see todo item "Develop Todo Page"', () => {
  cy.get('#buttonOK').should('be.disabled');
});
