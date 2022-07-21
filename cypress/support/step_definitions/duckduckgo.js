/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com")
})

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  )
})