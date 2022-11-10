describe("homepage spec", () => {
  it("adds product", () => {
    cy.visit("/");

    cy.findByTestId("add-product-button").click();
    cy.findByTestId("product-name-field").type("test");
    cy.findByTestId("product-price-field").type("123");
    cy.findByTestId("product-brand-field").type("Nike");
    cy.findByTestId("product-submit-button").click();
  });

  it("edits product", () => {
    cy.visit("/");

    cy.findByTestId("add-product-button").click();
    cy.findByTestId("product-name-field").type("test");
    cy.findByTestId("product-price-field").type("123");
    cy.findByTestId("product-brand-field").type("Nike");
    cy.findByTestId("product-submit-button").click();

    const editBtn = cy
      .findByTestId("table")
      .last()
      .findByTestId("edit-product-button");

    editBtn.click();
    cy.findByTestId("product-name-field").type("test2");
    cy.findByTestId("product-price-field").type("1234");
    cy.findByTestId("product-brand-field").type("Puma");
    cy.findByTestId("product-submit-button").click();
  });

  it("deletes product", () => {
    cy.visit("/");

    cy.findByTestId("add-product-button").click();
    cy.findByTestId("product-name-field").type("test");
    cy.findByTestId("product-price-field").type("123");
    cy.findByTestId("product-brand-field").type("Nike");
    cy.findByTestId("product-submit-button").click();

    cy.findByTestId("delete-product-button").click();
    cy.findByTestId("confirm-delete-button").click();
  });
});
