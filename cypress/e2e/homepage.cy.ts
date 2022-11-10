describe("homepage spec", () => {
  it("adds product", () => {
    cy.visit("/");

    cy.get('[data-testid="add-product-button"]').click();
    cy.get('[data-testid="product-name-field"]').type("test");
    cy.get('[data-testid="product-price-field"]').type("123");
    cy.get('[data-testid="product-brand-field"]').type("Nike");
    cy.get('[data-testid="product-submit-button"]').click();
  });

  it("edits product", () => {
    cy.visit("/");

    cy.get('[data-testid="add-product-button"]').click();
    cy.get('[data-testid="product-name-field"]').type("test");
    cy.get('[data-testid="product-price-field"]').type("123");
    cy.get('[data-testid="product-brand-field"]').type("Nike");
    cy.get('[data-testid="product-submit-button"]').click();

    const editBtn = cy
      .get('[data-testid="table"]')
      .last()
      .find('[data-testid="edit-product-button"]');

    editBtn.click();
    cy.get('[data-testid="product-name-field"]').type("test2");
    cy.get('[data-testid="product-price-field"]').type("1234");
    cy.get('[data-testid="product-brand-field"]').type("Puma");
    cy.get('[data-testid="product-submit-button"]').click();
  });

  it("deletes product", () => {
    cy.visit("/");

    cy.get('[data-testid="add-product-button"]').click();
    cy.get('[data-testid="product-name-field"]').type("test");
    cy.get('[data-testid="product-price-field"]').type("123");
    cy.get('[data-testid="product-brand-field"]').type("Nike");
    cy.get('[data-testid="product-submit-button"]').click();

    cy.get('[data-testid="delete-product-button"]').click();
    cy.get('[data-testid="confirm-delete-button"]').click();
  });
});
