describe('ToDo E2E test', () => {
  it("have visit", () => {
    cy.visit("/")
  })

  it('should have elements', () => {
    cy.get('input[placeholder= "Add to do"]').should("have.value", "")
    cy.get('button').contains(/Add to do/i)
  });

  it('should add todo', () => {
    cy.get('input[placeholder= "Add to do"]').type("My test To Do")
      .should("have.value", "My test To Do")

    cy.get('button').contains(/Add to do/i).click()

    cy.get('input[placeholder= "Add to do"]').type("My new test To Do")
      .should("have.value", "My new test To Do")

    cy.get('button').contains(/Add to do/i).click()
  });

  it('should done todo', () => {
    cy.get("div").contains("My test To Do").click()
    cy.get("div").contains("My test To Do").click()

    cy.get("div").contains("My new test To Do").click()
  });

  it('should filtred todo', () => {
    cy.get("button").contains(/completed/i).click()
    cy.get("button").contains(/uncompleted/i).click()
    cy.get("button").contains(/all tasks/i).click()
  });

  it('delete all todo', () => {
    cy.get("button").contains(/delete all/i).click()
  });

  it('delete one todo', () => {
    cy.get('input[placeholder= "Add to do"]').type("My test To Do")
      .should("have.value", "My test To Do")

    cy.get('button').contains(/Add to do/i).click()
    cy.get("div").contains("My test To Do").click()

    cy.get('span[role=img]').click()
  });
})
