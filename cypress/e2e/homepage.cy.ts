describe("homepage spec", () => {
  it("renders correctly", () => {
    cy.visit("/");

    cy.get("#root > div > div.MuiBox-root.css-1ren7kb > button").should(
      "exist"
    );

    cy.get(
      "#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.css-98ojrv-MuiContainer-root > div > table"
    ).should("exist");
  });

  it("adds product", () => {
    cy.visit("/");

    cy.get('[data-testid="AddIcon"]').click();
    cy.get("#\\:r1\\:").type("test");
    cy.get("#\\:r3\\:").type("123");
    cy.get("#\\:r5\\:").type("test");
    cy.get(
      ".css-ox9j43-MuiGrid-root > .MuiBox-root > .MuiButtonBase-root"
    ).click();
  });

  it("edits product", () => {
    cy.visit("/");

    cy.get('[data-testid="AddIcon"]').click();
    cy.get("#\\:r1\\:").type("test");
    cy.get("#\\:r3\\:").type("123");
    cy.get("#\\:r5\\:").type("test");
    cy.get(
      ".css-ox9j43-MuiGrid-root > .MuiBox-root > .MuiButtonBase-root"
    ).click();
    cy.get('[data-testid="EditIcon"]').click();
    cy.get("#\\:r7\\:").type("test1234");
    cy.get("#\\:rb\\:").type("test1234");
    cy.get("#\\:r9\\:").type("1231234");
    cy.get(
      ".css-ox9j43-MuiGrid-root > .MuiBox-root > .MuiButtonBase-root"
    ).click();
  });

  it("deletes product", () => {
    cy.visit("/");

    cy.get(".MuiButtonBase-root").click();

    cy.get("#\\:r1\\:").type("test");
    cy.get("#\\:r3\\:").type("123");
    cy.get(".MuiBox-root > :nth-child(5)").click();
    cy.get("#\\:r5\\:").clear();
    cy.get("#\\:r5\\:").type("test");
    cy.get(
      ".css-ox9j43-MuiGrid-root > .MuiBox-root > .MuiButtonBase-root"
    ).click();
    cy.get('[data-testid="DeleteIcon"]').click();
    cy.get(".MuiButton-containedError").click();
  });
});
