/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import AplitoolsPage from "../pages/aplitools.js"
const aplitoolsPage = new AplitoolsPage()

Given("I am in Aplitools Demo", () => {
    cy.visit("https://demo.applitools.com/");
})

When(/^I login with username (.*) and password (.*)$/, (username, password) => {
    aplitoolsPage.getUsernameField().type(username)
    aplitoolsPage.getPasswordField().type(password)
    aplitoolsPage.getLoginButton().click()
})

Then("I should be redirected to homepage", ()=> {
    cy.url().should('eq', 'https://demo.applitools.com/app.html')
    aplitoolsPage.getBalances().should('be.visible')
})

Then(/^I expect to see login form (.*)$/, (validation) => {
    switch (validation) {
        case 'form logo': aplitoolsPage.getLogo().should('be.visible')
            break;
        case 'form header': aplitoolsPage.getHeader().should('be.visible')
            aplitoolsPage.getHeader().should('have.text', 'Login Form')
            break;
        case 'form fields': aplitoolsPage.username().should('be.visible')
            aplitoolsPage.password().should('be.visible')
            break;
        case 'form sign-in button': aplitoolsPage.getLoginButton().should('be.visible')
            break;
        case 'form remember me checkbox': aplitoolsPage.getRememberMeCheckbox().should('be.visible')
            break;
        case 'form social media buttons': aplitoolsPage.getSocialMediaButton('twitter').should('be.visible')
            aplitoolsPage.getSocialMediaButton('facebook').should('be.visible')
            aplitoolsPage.getSocialMediaButton('linkedin').should('be.visible')
            break;
        default:
            break;
    }

})